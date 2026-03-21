import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { catchError, of } from 'rxjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/fr';
import Swal from 'sweetalert2';

import { CalendarService } from '../../services/calendar.service';
import {
  CalendarEvent,
  CalendarDay,
  CreateCalendarEventRequest,
  UpdateCalendarEventRequest,
} from '../../models/calendar.model';
import { PlannedTransactionsService } from '../../../planned-transactions/services/planned-transactions.service';
import { PlannedTransaction } from '../../../planned-transactions/models/planned-transaction.model';
import { PlannedFrequency } from '../../../../core/models/common.model';

dayjs.locale('fr');

const WEEK_DAYS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

type EventKind = 'income' | 'expense' | 'debt' | 'event';
type CalendarFilter = 'all' | EventKind;

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar-page.html',
  styleUrl: './calendar-page.css',
})
export class CalendarPage implements OnInit {
  private calendarService = inject(CalendarService);
  private plannedService  = inject(PlannedTransactionsService);
  private fb = inject(FormBuilder);

  readonly weekDays = WEEK_DAYS;

  currentMonth: Dayjs = dayjs().startOf('month');
  calendarDays: CalendarDay[] = [];
  events: CalendarEvent[] = [];

  // Planned transactions projected onto the current month view
  plannedTransactions: PlannedTransaction[] = [];
  plannedByDate = new Map<string, PlannedTransaction[]>();

  selectedDay: CalendarDay | null = null;
  selectedEvent: CalendarEvent | null = null;
  lastSelectedDateStr: string | null = null;
  activeFilter: CalendarFilter = 'all';
  detailsCollapsed = false;

  loading  = true;
  saving   = false;
  error: string | null = null;

  showForm  = false;
  editingId: number | null = null;

  form = this.fb.group({
    title:     ['', [Validators.required, Validators.maxLength(100)]],
    eventDate: ['', [Validators.required]],
    amount:    [null as number | null],
    color:     ['#0f766e'],
    notes:     ['', [Validators.maxLength(2000)]],
  });

  readonly presetEventColors: string[] = [
    '#0f766e', '#16a34a', '#0284c7', '#7c3aed',
    '#db2777', '#dc2626', '#ea580c', '#ca8a04',
    '#4f46e5', '#0891b2',
  ];

  get title()         { return this.form.controls.title; }
  get eventDate()     { return this.form.controls.eventDate; }
  get amount()        { return this.form.controls.amount; }
  get notes()         { return this.form.controls.notes; }
  get selectedColor() { return this.form.controls.color.value ?? '#0f766e'; }

  private get plannedMonthIncome(): number {
    const first = this.currentMonth.startOf('month');
    const days  = this.currentMonth.daysInMonth();
    let total = 0;
    for (let d = 0; d < days; d++) {
      const dateStr = first.add(d, 'day').format('YYYY-MM-DD');
      for (const p of (this.plannedByDate.get(dateStr) ?? [])) {
        if (p.type === 'INCOME') total += p.amount;
      }
    }
    return total;
  }

  private get plannedMonthExpense(): number {
    const first = this.currentMonth.startOf('month');
    const days  = this.currentMonth.daysInMonth();
    let total = 0;
    for (let d = 0; d < days; d++) {
      const dateStr = first.add(d, 'day').format('YYYY-MM-DD');
      for (const p of (this.plannedByDate.get(dateStr) ?? [])) {
        if (p.type === 'EXPENSE') total += p.amount;
      }
    }
    return total;
  }

  get monthTotalIn(): number {
    return this.events.filter(e => (e.amount ?? 0) > 0).reduce((s, e) => s + (e.amount ?? 0), 0)
      + this.plannedMonthIncome;
  }

  get monthTotalOut(): number {
    return Math.abs(this.events.filter(e => (e.amount ?? 0) < 0).reduce((s, e) => s + (e.amount ?? 0), 0))
      + this.plannedMonthExpense;
  }

  get monthNet(): number { return this.monthTotalIn - this.monthTotalOut; }

  get monthLabel(): string {
    return this.currentMonth.format('MMMM YYYY');
  }

  get monthParam(): string {
    return this.currentMonth.format('YYYY-MM');
  }

  ngOnInit(): void {
    this.loadMonth();
  }

  loadMonth(): void {
    this.loading = true;
    this.error   = null;

    forkJoin({
      events:  this.calendarService.getMonth(this.monthParam),
      planned: this.plannedService.getAll().pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ events, planned }) => {
        this.events = events;
        this.plannedTransactions = planned.filter(p => p.active);
        this.plannedByDate = this.buildPlannedByDate(this.plannedTransactions);
        this.calendarDays = this.buildGrid(events);

        if (this.lastSelectedDateStr) {
          this.selectedDay = this.calendarDays.find(d => d.dateStr === this.lastSelectedDateStr) ?? null;
        } else {
          this.selectedDay = null;
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger le calendrier.';
        this.loading = false;
      },
    });
  }

  // ── Planned transaction recurrence projection ────────────────────────────

  private buildPlannedByDate(planned: PlannedTransaction[]): Map<string, PlannedTransaction[]> {
    const map = new Map<string, PlannedTransaction[]>();
    const firstDay = this.currentMonth.startOf('month');
    const gridStart = firstDay.subtract(firstDay.day(), 'day'); // Sunday of first week

    for (const p of planned) {
      const origin = dayjs(p.nextDueDate);
      for (let i = 0; i < 42; i++) {
        const day = gridStart.add(i, 'day');
        if (this.isPlannedOnDate(p.frequency, day, origin)) {
          const dateStr = day.format('YYYY-MM-DD');
          if (!map.has(dateStr)) map.set(dateStr, []);
          map.get(dateStr)!.push(p);
        }
      }
    }
    return map;
  }

  private isPlannedOnDate(frequency: PlannedFrequency, day: Dayjs, origin: Dayjs): boolean {
    switch (frequency) {
      case 'DAILY':
        return true;
      case 'WEEKLY': {
        // Same weekday as origin, every 7 days
        const diff = Math.abs(day.diff(origin, 'day'));
        return diff % 7 === 0;
      }
      case 'MONTHLY':
        // Same day-of-month as origin, every month
        return day.date() === origin.date();
      case 'YEARLY':
        return day.month() === origin.month() && day.date() === origin.date();
      default:
        return false;
    }
  }

  plannedForDay(dateStr: string): PlannedTransaction[] {
    return this.plannedByDate.get(dateStr) ?? [];
  }

  selectedDayPlanned(): PlannedTransaction[] {
    return this.plannedForDay(this.selectedDay?.dateStr ?? '');
  }

  plannedAmountText(p: PlannedTransaction): string {
    const sign = p.type === 'INCOME' ? '+' : '-';
    return `${sign}${p.amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}`;
  }

  frequencyLabel(f: PlannedFrequency): string {
    switch (f) {
      case 'DAILY':   return 'Quotidien';
      case 'WEEKLY':  return 'Hebdo';
      case 'MONTHLY': return 'Mensuel';
      case 'YEARLY':  return 'Annuel';
    }
  }

  // ── Grid ─────────────────────────────────────────────────────────────────

  private buildGrid(events: CalendarEvent[]): CalendarDay[] {
    const today = dayjs().format('YYYY-MM-DD');
    const firstDay = this.currentMonth.startOf('month');
    const startOffset = firstDay.day();
    const totalCells  = 42;

    const byDate = new Map<string, CalendarEvent[]>();
    for (const e of events) {
      if (!byDate.has(e.eventDate)) byDate.set(e.eventDate, []);
      byDate.get(e.eventDate)!.push(e);
    }

    const cells: CalendarDay[] = [];
    for (let i = 0; i < totalCells; i++) {
      const date = firstDay.subtract(startOffset, 'day').add(i, 'day');
      const dateStr = date.format('YYYY-MM-DD');
      cells.push({
        date: date.toDate(),
        dateStr,
        isCurrentMonth: date.month() === this.currentMonth.month(),
        isToday: dateStr === today,
        events: byDate.get(dateStr) ?? [],
      });
    }
    return cells;
  }

  // ── Navigation ───────────────────────────────────────────────────────────

  prevMonth(): void {
    this.currentMonth = this.currentMonth.subtract(1, 'month');
    this.lastSelectedDateStr = null;
    this.loadMonth();
  }

  nextMonth(): void {
    this.currentMonth = this.currentMonth.add(1, 'month');
    this.lastSelectedDateStr = null;
    this.loadMonth();
  }

  goToday(): void {
    this.currentMonth = dayjs().startOf('month');
    this.lastSelectedDateStr = null;
    this.loadMonth();
  }

  selectDay(day: CalendarDay): void {
    this.selectedDay = day;
    this.lastSelectedDateStr = day.dateStr;
    this.detailsCollapsed = false;
    this.selectedEvent = null;
  }

  // ── Form ─────────────────────────────────────────────────────────────────

  openCreate(day?: CalendarDay): void {
    this.editingId = null;
    this.selectedEvent = null;
    const defaultDate = day?.dateStr ?? this.lastSelectedDateStr ?? dayjs().format('YYYY-MM-DD');
    this.form.reset({
      title: '',
      eventDate: defaultDate,
      amount: null,
      color: '#0f766e',
      notes: '',
    });
    this.showForm = true;
  }

  toggleDetails(): void {
    this.detailsCollapsed = !this.detailsCollapsed;
  }

  openEdit(event: CalendarEvent): void {
    this.editingId = event.id;
    this.selectedEvent = event;
    this.form.setValue({
      title:     event.title,
      eventDate: event.eventDate,
      amount:    event.amount ?? null,
      color:     event.color ?? '#0f766e',
      notes:     event.notes ?? '',
    });
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingId = null;
    this.selectedEvent = null;
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const isEditing = this.editingId !== null;

    const { title, eventDate, amount, color, notes } = this.form.value;

    const obs = this.editingId !== null
      ? this.calendarService.update(this.editingId, {
          title:     title!,
          eventDate: eventDate!,
          amount:    amount ?? null,
          color:     color ?? null,
          notes:     notes ?? null,
        } as UpdateCalendarEventRequest)
      : this.calendarService.create({
          title:     title!,
          eventDate: eventDate!,
          amount:    amount ?? null,
          color:     color ?? null,
          notes:     notes ?? null,
        } as CreateCalendarEventRequest);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeForm();
        this.loadMonth();
        Swal.fire({ icon: 'success', title: isEditing ? 'Événement mis à jour' : 'Événement créé', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer l\'événement.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  async deleteEvent(event: CalendarEvent): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer cet événement ?',
      text: `"${event.title}" sera définitivement supprimé.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.calendarService.delete(event.id).subscribe({
      next: () => {
        if (this.selectedDay) {
          this.selectedDay = {
            ...this.selectedDay,
            events: this.selectedDay.events.filter(e => e.id !== event.id),
          };
        }
        this.loadMonth();
        Swal.fire({ icon: 'success', title: 'Événement supprimé', timer: 1200, showConfirmButton: false });
      },
      error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer l\'événement.', confirmButtonColor: '#0f766e' }),
    });
  }

  // ── Styling helpers ───────────────────────────────────────────────────────

  selectEventColor(color: string): void {
    this.form.controls.color.setValue(color);
  }

  private defaultColorForKind(kind: EventKind): string {
    switch (kind) {
      case 'income':  return '#16a34a';
      case 'expense': return '#dc2626';
      case 'debt':    return '#ca8a04';
      default:        return '#4f46e5';
    }
  }

  eventPillBg(event: CalendarEvent): string {
    return (event.color ?? this.defaultColorForKind(this.getEventKind(event))) + '28';
  }

  eventPillColor(event: CalendarEvent): string {
    return event.color ?? this.defaultColorForKind(this.getEventKind(event));
  }

  eventDotStyle(event: CalendarEvent): string {
    return event.color ?? '#0f766e';
  }

  getEventKind(event: CalendarEvent): EventKind {
    const t = event.title.toLowerCase();
    if (event.amount !== null && event.amount !== undefined) {
      if (event.amount > 0) return 'income';
      if (event.amount < 0) return 'expense';
    }
    if (t.includes('loan') || t.includes('debt') || t.includes('credit') || t.includes('visa')) return 'debt';
    if (t.includes('salary') || t.includes('freelance') || t.includes('income') || t.includes('dividend')) return 'income';
    if (t.includes('rent') || t.includes('bill') || t.includes('expense') || t.includes('internet') || t.includes('electric')) return 'expense';
    return 'event';
  }

  eventPillClass(event: CalendarEvent): string {
    switch (this.getEventKind(event)) {
      case 'income':
        return 'bg-emerald-100 text-emerald-700';
      case 'debt':
        return 'bg-amber-100 text-amber-700';
      case 'event':
        return 'bg-indigo-100 text-indigo-700';
      case 'expense':
      default:
        return 'bg-[#0f766e] text-white';
    }
  }

  setFilter(filter: CalendarFilter): void {
    this.activeFilter = filter;
  }

  isFilterActive(filter: CalendarFilter): boolean {
    return this.activeFilter === filter;
  }

  filteredEvents(events: CalendarEvent[]): CalendarEvent[] {
    if (this.activeFilter === 'all') return events;
    return events.filter((e) => this.getEventKind(e) === this.activeFilter);
  }

  eventIcon(event: CalendarEvent): string {
    switch (this.getEventKind(event)) {
      case 'income':  return 'trending_up';
      case 'debt':    return 'credit_card';
      case 'event':   return 'event';
      case 'expense':
      default:        return 'trending_down';
    }
  }

  amountText(value: number | null | undefined): string {
    if (value === null || value === undefined) return '';
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}`;
  }

  categoryCount(kind: EventKind): number {
    const eventCount = this.events.filter((e) => this.getEventKind(e) === kind).length;
    if (kind !== 'income' && kind !== 'expense') return eventCount;

    const first = this.currentMonth.startOf('month');
    const days  = this.currentMonth.daysInMonth();
    let plannedCount = 0;
    for (let d = 0; d < days; d++) {
      const dateStr = first.add(d, 'day').format('YYYY-MM-DD');
      for (const p of (this.plannedByDate.get(dateStr) ?? [])) {
        if ((kind === 'income' && p.type === 'INCOME') || (kind === 'expense' && p.type === 'EXPENSE')) {
          plannedCount++;
        }
      }
    }
    return eventCount + plannedCount;
  }

  get selectedDayEvents(): CalendarEvent[] {
    return this.filteredEvents(this.selectedDay?.events ?? []);
  }

  get selectedDayScheduledOut(): number {
    return Math.abs((this.selectedDay?.events ?? []).filter((e) => (e.amount ?? 0) < 0).reduce((s, e) => s + (e.amount ?? 0), 0));
  }

  get selectedDayScheduledIn(): number {
    return (this.selectedDay?.events ?? []).filter((e) => (e.amount ?? 0) > 0).reduce((s, e) => s + (e.amount ?? 0), 0);
  }

  trackByDate(_: number, day: CalendarDay): string  { return day.dateStr; }
  trackById(_: number, e: CalendarEvent): number    { return e.id; }
  trackByPId(_: number, p: PlannedTransaction): number { return p.id; }
}
