import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

import { DebtsService } from '../../services/debts.service';
import {
  Debt,
  DebtPayment,
  DebtSummary,
  CreateDebtRequest,
  UpdateDebtRequest,
  RegisterDebtPaymentRequest,
} from '../../models/debt.model';
import { Page } from '../../../../core/models/common.model';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';

type FormPanel = 'create' | 'edit' | 'pay' | 'select' | null;

const DEBT_COLORS = [
  { bar: 'bg-rose-500',   hex: '#f43f5e', light: 'bg-rose-50',   text: 'text-rose-600'   },
  { bar: 'bg-indigo-500', hex: '#6366f1', light: 'bg-indigo-50', text: 'text-indigo-600' },
  { bar: 'bg-amber-500',  hex: '#f59e0b', light: 'bg-amber-50',  text: 'text-amber-600'  },
  { bar: 'bg-violet-500', hex: '#8b5cf6', light: 'bg-violet-50', text: 'text-violet-600' },
  { bar: 'bg-sky-500',    hex: '#0ea5e9', light: 'bg-sky-50',    text: 'text-sky-600'    },
  { bar: 'bg-orange-500', hex: '#f97316', light: 'bg-orange-50', text: 'text-orange-600' },
];

interface DebtWithPayments extends Debt {
  payments: DebtPayment[];
  paymentsPage: Page<DebtPayment> | null;
  loadingPayments: boolean;
  colorIdx: number;
}

@Component({
  selector: 'app-debts-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './debts-page.html',
  styleUrl: './debts-page.css',
})
export class DebtsPage implements OnInit {
  private debtsService = inject(DebtsService);
  private fb = inject(FormBuilder);

  debts: DebtWithPayments[] = [];
  summary: DebtSummary | null = null;

  loading = true;
  error: string | null = null;
  saving = false;

  activePanel: FormPanel = null;
  editingDebt: Debt | null = null;
  payingDebt: Debt | null = null;
  historyDebt: DebtWithPayments | null = null;

  debtForm = this.fb.group({
    creditorName: ['', [Validators.required, Validators.maxLength(100)]],
    totalAmount:   [null as number | null, [Validators.required, Validators.min(0.01)]],
    monthlyPayment:[null as number | null, [Validators.required, Validators.min(0.01)]],
    interestRate:  [null as number | null, [Validators.min(0), Validators.max(100)]],
    startDate:     ['', [Validators.required]],
    dueDate:       [''],
  });

  paymentForm = this.fb.group({
    amount:      [null as number | null, [Validators.required, Validators.min(0.01)]],
    paymentDate: ['', [Validators.required]],
    note:        ['', [Validators.maxLength(300)]],
  });

  get creditorName()  { return this.debtForm.controls.creditorName; }
  get totalAmount()   { return this.debtForm.controls.totalAmount; }
  get monthlyPayment(){ return this.debtForm.controls.monthlyPayment; }
  get interestRate()  { return this.debtForm.controls.interestRate; }
  get startDate()     { return this.debtForm.controls.startDate; }
  get dueDate()       { return this.debtForm.controls.dueDate; }

  get payAmount()     { return this.paymentForm.controls.amount; }
  get payDate()       { return this.paymentForm.controls.paymentDate; }
  get payNote()       { return this.paymentForm.controls.note; }
  get isDebtFormOpen(): boolean {
    return this.activePanel === 'create' || this.activePanel === 'edit';
  }
  get isPaymentFormOpen(): boolean {
    return this.activePanel === 'pay' && !!this.payingDebt;
  }
  get isSelectPanelOpen(): boolean {
    return this.activePanel === 'select';
  }

  get activeDebts(): DebtWithPayments[] {
    return this.debts.filter((d) => d.status === 'ACTIVE');
  }

  get paidDebtsCount(): number {
    return this.summary?.paidDebtsCount ?? this.debts.filter(d => d.status === 'PAID').length;
  }

  get totalRemainingAmount(): number {
    return this.summary?.totalRemainingAmount ?? this.activeDebts.reduce((s, d) => s + d.remainingAmount, 0);
  }

  get totalMonthlyPayment(): number {
    return this.summary?.totalMonthlyPayment ?? this.activeDebts.reduce((s, d) => s + d.monthlyPayment, 0);
  }

  get nextMajorDueDate(): string | null {
    const withDue = this.activeDebts
      .filter((d) => !!d.dueDate)
      .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime());
    return withDue[0]?.dueDate ?? null;
  }

  get nextMajorDueCreditor(): string | null {
    const nextDate = this.nextMajorDueDate;
    if (!nextDate) return null;
    return this.activeDebts.find((d) => d.dueDate === nextDate)?.creditorName ?? null;
  }

  ngOnInit(): void {
    this.loadAll();
  }

  retryLoad(): void {
    this.loadAll();
  }

  private loadAll(): void {
    this.loading = true;
    this.error = null;

    this.debtsService.getSummary().subscribe({
      next: summary => { this.summary = summary; },
      error: () => {
        Swal.fire({ icon: 'warning', title: 'Résumé indisponible', text: 'Impossible de charger le résumé des dettes.', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      },
    });

    this.debtsService.getAll().subscribe({
      next: debts => {
        this.debts = debts.map((d, i) => ({
          ...d,
          payments: [],
          paymentsPage: null,
          loadingPayments: false,
          colorIdx: i % DEBT_COLORS.length,
        }));
        this.loading = false;
        this.debts.forEach(d => this.loadPayments(d, 0));
      },
      error: () => {
        this.error = 'Impossible de charger les dettes.';
        this.loading = false;
      },
    });
  }

  loadPayments(debt: DebtWithPayments, page: number): void {
    debt.loadingPayments = true;
    this.debtsService.getPayments(debt.id, page).subscribe({
      next: result => {
        debt.payments = result.content;
        debt.paymentsPage = result;
        debt.loadingPayments = false;
      },
      error: () => { debt.loadingPayments = false; },
    });
  }

  onPaymentPageChange(debt: DebtWithPayments, page: number): void {
    this.loadPayments(debt, page);
  }

  openCreate(): void {
    this.editingDebt = null;
    this.debtForm.reset({
      creditorName: '',
      totalAmount: null,
      monthlyPayment: null,
      interestRate: null,
      startDate: dayjs().format('YYYY-MM-DD'),
      dueDate: '',
    });
    this.activePanel = 'create';
  }

  openEdit(debt: Debt): void {
    this.editingDebt = debt;
    this.debtForm.setValue({
      creditorName:  debt.creditorName,
      totalAmount:   debt.totalAmount,
      monthlyPayment:debt.monthlyPayment,
      interestRate:  debt.interestRate ?? null,
      startDate:     debt.startDate,
      dueDate:       debt.dueDate ?? '',
    });
    this.activePanel = 'edit';
  }

  openPay(debt: Debt): void {
    this.payingDebt = debt;
    this.paymentForm.reset({
      amount: null,
      paymentDate: dayjs().format('YYYY-MM-DD'),
      note: '',
    });
    this.activePanel = 'pay';
  }

  openQuickPayment(): void {
    const active = this.activeDebts;
    if (active.length === 0) { this.openCreate(); return; }
    if (active.length === 1) { this.openPay(active[0]); return; }
    this.activePanel = 'select';
  }

  selectDebtForPayment(debt: DebtWithPayments): void {
    this.openPay(debt);
  }

  openHistory(debt: DebtWithPayments): void {
    this.historyDebt = debt;
    if (debt.paymentsPage === null) {
      this.loadPayments(debt, 0);
    }
  }

  closeHistory(): void {
    this.historyDebt = null;
  }

  closePanel(): void {
    this.activePanel = null;
    this.editingDebt = null;
    this.payingDebt = null;
  }

  submitDebt(): void {
    if (this.debtForm.invalid) { this.debtForm.markAllAsTouched(); return; }
    this.saving = true;

    const v = this.debtForm.value;
    const payload = {
      creditorName:  v.creditorName!,
      totalAmount:   v.totalAmount!,
      monthlyPayment:v.monthlyPayment!,
      interestRate:  v.interestRate ?? null,
      startDate:     v.startDate!,
      dueDate:       v.dueDate || null,
    };

    const obs = this.editingDebt
      ? this.debtsService.update(this.editingDebt.id, payload as UpdateDebtRequest)
      : this.debtsService.create(payload as CreateDebtRequest);

    const isEditing = !!this.editingDebt;
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closePanel();
        this.loadAll();
        Swal.fire({ icon: 'success', title: isEditing ? 'Dette mise à jour' : 'Dette créée', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer la dette.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  submitPayment(): void {
    if (this.paymentForm.invalid || !this.payingDebt) { this.paymentForm.markAllAsTouched(); return; }
    this.saving = true;

    const v = this.paymentForm.value;
    const payload: RegisterDebtPaymentRequest = {
      amount:      v.amount!,
      paymentDate: v.paymentDate!,
      note:        v.note || null,
    };

    this.debtsService.registerPayment(this.payingDebt.id, payload).subscribe({
      next: () => {
        this.saving = false;
        this.closePanel();
        this.loadAll();
        Swal.fire({ icon: 'success', title: 'Paiement enregistré', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer le paiement.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  async deleteDebt(debt: Debt): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer cette dette ?',
      text: `"${debt.creditorName}" sera définitivement supprimée.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.debtsService.delete(debt.id).subscribe({
      next: () => {
        this.loadAll();
        Swal.fire({ icon: 'success', title: 'Dette supprimée', timer: 1200, showConfirmButton: false });
      },
      error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer la dette.', confirmButtonColor: '#0f766e' }),
    });
  }

  debtColor(debt: DebtWithPayments) {
    return DEBT_COLORS[debt.colorIdx];
  }

  debtConicGradient(debt: DebtWithPayments): string {
    const p = this.repaidPercent(debt);
    return `conic-gradient(${this.debtColor(debt).hex} ${p}%, #e2e8f0 0)`;
  }

  dueDateLabel(debt: Debt): string {
    if (!debt.dueDate) return 'Sans échéance';
    const days = dayjs(debt.dueDate).diff(dayjs(), 'day');
    if (days < 0) return 'Échéance dépassée';
    if (days === 0) return "Aujourd'hui";
    if (days === 1) return 'Demain';
    if (days < 30) return `Dans ${days} jours`;
    if (days < 365) return `Dans ${Math.round(days / 30)} mois`;
    return `Dans ${Math.round(days / 365)} an${Math.round(days / 365) > 1 ? 's' : ''}`;
  }

  dueDateClass(debt: Debt): string {
    if (!debt.dueDate) return 'text-slate-400';
    const days = dayjs(debt.dueDate).diff(dayjs(), 'day');
    if (days < 0) return 'text-red-500';
    if (days <= 30) return 'text-orange-500';
    if (days <= 90) return 'text-amber-500';
    return 'text-slate-500';
  }

  monthsRemaining(debt: Debt): number | null {
    if (!debt.monthlyPayment || debt.monthlyPayment <= 0) return null;
    return Math.ceil(debt.remainingAmount / debt.monthlyPayment);
  }

  projectedRemaining(debt: Debt): number {
    return Math.max(0, debt.remainingAmount - (this.payAmount.value ?? 0));
  }

  projectedRepaidPercent(debt: Debt): number {
    if (!debt.totalAmount) return 0;
    const paid = debt.totalAmount - this.projectedRemaining(debt);
    return Math.min(100, Math.round((paid / debt.totalAmount) * 100));
  }

  repaidPercent(debt: Debt): number {
    if (!debt.totalAmount) return 0;
    const paid = debt.totalAmount - debt.remainingAmount;
    return Math.min(100, Math.round((paid / debt.totalAmount) * 100));
  }

  repaidAmount(debt: Debt): number {
    return debt.totalAmount - debt.remainingAmount;
  }

  statusLabel(debt: Debt): string {
    switch (debt.status) {
      case 'ACTIVE':    return 'En cours';
      case 'PAID':      return 'Remboursée';
      case 'CANCELLED': return 'Annulée';
    }
  }

  statusClass(debt: Debt): string {
    switch (debt.status) {
      case 'ACTIVE':    return 'bg-blue-50 text-blue-700';
      case 'PAID':      return 'bg-emerald-50 text-emerald-700';
      case 'CANCELLED': return 'bg-slate-100 text-slate-500';
    }
  }

  formatDate(d: string): string {
    return dayjs(d).format('DD MMM YYYY');
  }

  formatAmount(n: number | null | undefined): string {
    if (n === null || n === undefined || Number.isNaN(n)) {
      return (0).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
    return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}
