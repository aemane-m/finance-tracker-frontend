import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

import { PlannedTransactionsService } from '../../services/planned-transactions.service';
import {
  PlannedTransaction,
  PlannedTransactionRun,
  CreatePlannedTransactionRequest,
  UpdatePlannedTransactionRequest,
} from '../../models/planned-transaction.model';
import { TransactionType, PlannedFrequency, Page, ApiError } from '../../../../core/models/common.model';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Category } from '../../../categories/models/category.model';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { HttpErrorResponse } from '@angular/common/http';

type TabFilter = 'all' | 'EXPENSE' | 'INCOME';

interface PlannedWithRuns extends PlannedTransaction {
  runs: PlannedTransactionRun[];
  runsPage: Page<PlannedTransactionRun> | null;
  loadingRuns: boolean;
  showRuns: boolean;
}

@Component({
  selector: 'app-planned-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './planned-page.html',
  styleUrl: './planned-page.css',
})
export class PlannedPage implements OnInit {
  private plannedService = inject(PlannedTransactionsService);
  private categoriesService = inject(CategoriesService);
  private fb = inject(FormBuilder);

  planned: PlannedWithRuns[] = [];
  categories: Category[] = [];
  loading = true;
  error: string | null = null;
  saving = false;
  toggling: number | null = null;
  running: number | null = null;

  activeTab: TabFilter = 'all';
  showForm = false;
  editingId: number | null = null;

  readonly frequencies: { value: PlannedFrequency; label: string }[] = [
    { value: 'DAILY',   label: 'Quotidien' },
    { value: 'WEEKLY',  label: 'Hebdomadaire' },
    { value: 'MONTHLY', label: 'Mensuel' },
    { value: 'YEARLY',  label: 'Annuel' },
  ];

  form = this.fb.group({
    label:      this.fb.nonNullable.control('', [Validators.required, Validators.maxLength(100)]),
    amount:     this.fb.nonNullable.control(0, [Validators.required, Validators.min(0.01)]),
    type:       this.fb.nonNullable.control('EXPENSE' as TransactionType, [Validators.required]),
    categoryId: [null as number | null, [Validators.required]],
    frequency:  this.fb.nonNullable.control('MONTHLY' as PlannedFrequency, [Validators.required]),
    nextDueDate:this.fb.nonNullable.control('', [Validators.required]),
    autoCreate: this.fb.nonNullable.control(false),
  });

  get label()       { return this.form.controls.label; }
  get amount()      { return this.form.controls.amount; }
  get type()        { return this.form.controls.type; }
  get categoryId()  { return this.form.controls.categoryId; }
  get frequency()   { return this.form.controls.frequency; }
  get nextDueDate() { return this.form.controls.nextDueDate; }

  get filteredPlanned(): PlannedWithRuns[] {
    if (this.activeTab === 'all') return this.planned;
    return this.planned.filter(p => p.type === this.activeTab);
  }

  get upcomingPlanned(): PlannedWithRuns | null {
    if (this.filteredPlanned.length === 0) return null;
    return [...this.filteredPlanned]
      .sort((a, b) => a.nextDueDate.localeCompare(b.nextDueDate))[0] ?? null;
  }

  get totalActiveExpense(): number {
    return this.planned
      .filter(p => p.active && p.type === 'EXPENSE')
      .reduce((s, p) => s + p.amount, 0);
  }

  get activeCount(): number {
    return this.planned.filter(p => p.active).length;
  }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.loading = true;
    this.error = null;

    this.categoriesService.getAll().subscribe({
      next: cats => { this.categories = cats; },
      error: () => {
        Swal.fire({ icon: 'warning', title: 'Catégories indisponibles', text: 'Impossible de charger les catégories.', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      },
    });

    this.plannedService.getAll().subscribe({
      next: items => {
        this.planned = items.map(p => ({
          ...p,
          runs: [],
          runsPage: null,
          loadingRuns: false,
          showRuns: false,
        }));
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les transactions planifiées.';
        this.loading = false;
      },
    });
  }

  toggleRuns(item: PlannedWithRuns): void {
    item.showRuns = !item.showRuns;
    if (item.showRuns && !item.runsPage) {
      this.loadRuns(item, 0);
    }
  }

  loadRuns(item: PlannedWithRuns, page: number): void {
    item.loadingRuns = true;
    this.plannedService.getRuns(item.id, page).subscribe({
      next: result => {
        item.runs = result.content;
        item.runsPage = result;
        item.loadingRuns = false;
      },
      error: () => { item.loadingRuns = false; },
    });
  }

  toggle(item: PlannedWithRuns): void {
    this.toggling = item.id;
    const newActive = !item.active;
    const needsDateUpdate = newActive && dayjs(item.nextDueDate).isBefore(dayjs(), 'day');

    const doToggle = () => {
      this.plannedService.toggle(item.id).subscribe({
        next: toggled => {
          item.active = toggled?.active ?? newActive;
          this.toggling = null;
        },
        error: () => {
          this.toggling = null;
          Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de changer le statut.', confirmButtonColor: '#0f766e' });
        },
      });
    };

    if (needsDateUpdate) {
      const nextDueDate = this.nextOccurrence(item);
      this.plannedService.update(item.id, {
        label:       item.label,
        amount:      item.amount,
        type:        item.type,
        categoryId:  item.categoryId,
        frequency:   item.frequency,
        nextDueDate,
        autoCreate:  item.autoCreate,
      }).subscribe({
        next: updated => {
          item.nextDueDate = updated?.nextDueDate ?? nextDueDate;
          doToggle();
        },
        error: () => {
          this.toggling = null;
          Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de changer le statut.', confirmButtonColor: '#0f766e' });
        },
      });
    } else {
      doToggle();
    }
  }

  private nextOccurrence(item: PlannedTransaction): string {
    const today  = dayjs();
    const origin = dayjs(item.nextDueDate);
    switch (item.frequency) {
      case 'DAILY':   return today.format('YYYY-MM-DD');
      case 'WEEKLY': {
        let d = origin;
        while (d.isBefore(today, 'day')) d = d.add(1, 'week');
        return d.format('YYYY-MM-DD');
      }
      case 'MONTHLY': {
        let d = origin;
        while (d.isBefore(today, 'day')) d = d.add(1, 'month');
        return d.format('YYYY-MM-DD');
      }
      case 'YEARLY': {
        let d = origin;
        while (d.isBefore(today, 'day')) d = d.add(1, 'year');
        return d.format('YYYY-MM-DD');
      }
      default: return today.format('YYYY-MM-DD');
    }
  }

  async runNow(item: PlannedWithRuns): Promise<void> {
    const result = await Swal.fire({
      icon: 'question',
      title: 'Exécuter maintenant ?',
      text: `La transaction "${item.label}" va être créée immédiatement.`,
      showCancelButton: true,
      confirmButtonText: 'Exécuter',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0f766e',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.running = item.id;
    this.plannedService.runNow(item.id).subscribe({
      next: run => {
        this.running = null;
        if (run.status === 'SUCCESS') {
          this.loadAll();
          Swal.fire({ icon: 'success', title: 'Transaction créée', timer: 1500, showConfirmButton: false });
        } else {
          Swal.fire({ icon: 'error', title: 'Échec', text: run.errorMessage ?? 'Erreur lors de l\'exécution.', confirmButtonColor: '#0f766e' });
        }
        if (item.showRuns) this.loadRuns(item, 0);
      },
      error: () => {
        this.running = null;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'exécuter la transaction.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  openCreate(): void {
    this.editingId = null;
    this.form.reset({
      label: '',
      amount: 0,
      type: 'EXPENSE',
      categoryId: null,
      frequency: 'MONTHLY',
      nextDueDate: dayjs().format('YYYY-MM-DD'),
      autoCreate: false,
    });
    this.showForm = true;
  }

  openEdit(item: PlannedTransaction): void {
    this.editingId = item.id;
    this.form.setValue({
      label:       item.label,
      amount:      item.amount,
      type:        item.type,
      categoryId:  item.categoryId,
      frequency:   item.frequency,
      nextDueDate: item.nextDueDate,
      autoCreate:  item.autoCreate,
    });
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingId = null;
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;

    const v = this.form.getRawValue();
    const base = {
      label:       v.label!,
      amount:      v.amount!,
      type:        v.type! as TransactionType,
      categoryId:  Number(v.categoryId),
      frequency:   v.frequency! as PlannedFrequency,
      nextDueDate: v.nextDueDate!,
      autoCreate:  !!v.autoCreate,
    };

    const isEditing = this.editingId !== null;
    const obs = isEditing
      ? this.plannedService.update(this.editingId!, base as UpdatePlannedTransactionRequest)
      : this.plannedService.create(base as CreatePlannedTransactionRequest);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeForm();
        this.loadAll();
        Swal.fire({ icon: 'success', title: isEditing ? 'Transaction mise à jour' : 'Transaction créée', timer: 1500, showConfirmButton: false });
      },
      error: (err: HttpErrorResponse) => {
        this.saving = false;
        const apiError = err.error as Partial<ApiError> | null;
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: apiError?.message || 'Impossible d\'enregistrer.',
          confirmButtonColor: '#0f766e'
        });
      },
    });
  }

  async deletePlanned(item: PlannedTransaction): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer ?',
      text: `"${item.label}" sera définitivement supprimée.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.plannedService.delete(item.id).subscribe({
      next: () => {
        this.loadAll();
        Swal.fire({ icon: 'success', title: 'Supprimée', timer: 1200, showConfirmButton: false });
      },
      error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer.', confirmButtonColor: '#0f766e' }),
    });
  }

  categoryName(id: number): string {
    return this.categories.find(c => c.id === id)?.name ?? '—';
  }

  frequencyLabel(f: PlannedFrequency): string {
    return this.frequencies.find(fr => fr.value === f)?.label ?? f;
  }

  runStatusClass(s: string): string {
    return s === 'SUCCESS' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600';
  }

  formatAmount(n: number): string {
    return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  formatDate(d: string): string {
    return dayjs(d).format('DD/MM/YYYY');
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}
