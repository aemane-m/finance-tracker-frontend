import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';
import dayjs from 'dayjs';

import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { Transaction, CreateTransactionRequest, UpdateTransactionRequest } from '../../models/transaction.model';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionType, Page } from '../../../../core/models/common.model';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Category } from '../../../categories/models/category.model';

@Component({
  selector: 'app-transactions-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './transactions-page.html',
  styleUrl: './transactions-page.css',
})
export class TransactionsPage implements OnInit {
  private transactionsService = inject(TransactionsService);
  private categoriesService   = inject(CategoriesService);
  private fb    = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  loading  = true;
  deleting = false;
  saving   = false;
  error: string | null = null;

  // Filters
  search = '';
  selectedType: 'ALL' | TransactionType = 'ALL';
  selectedCategory = 'ALL';
  selectedDateRange: '30d' | 'month' | 'all' = '30d';
  minAmount: number | null = null;
  maxAmount: number | null = null;

  // Data
  transactions: Transaction[] = [];
  allCategories: Category[] = [];
  page     = 0;
  pageSize = 10;

  // Form
  showForm  = false;
  editingId: number | null = null;

  form = this.fb.group({
    label:      ['', [Validators.required, Validators.maxLength(255)]],
    amount:     [null as number | null, [Validators.required, Validators.min(0.01)]],
    type:       ['EXPENSE' as TransactionType, [Validators.required]],
    categoryId: [null as number | null, [Validators.required]],
    date:       ['', [Validators.required]],
    note:       ['', [Validators.maxLength(2000)]],
  });

  get label()      { return this.form.controls.label; }
  get amount()     { return this.form.controls.amount; }
  get formType()   { return this.form.controls.type; }
  get categoryId() { return this.form.controls.categoryId; }
  get date()       { return this.form.controls.date; }
  get note()       { return this.form.controls.note; }

  ngOnInit(): void {
    void this.loadTransactions();
    this.categoriesService.getAll().subscribe({
      next: cats => { this.allCategories = cats; },
      error: () => {
        Swal.fire({ icon: 'warning', title: 'Catégories indisponibles', text: 'Impossible de charger les catégories.', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      },
    });
    if (this.route.snapshot.queryParamMap.get('create') === '1') {
      this.openCreate();
    }
  }

  // ── Filters ──────────────────────────────────────────────────────────────

  get categories(): string[] {
    const unique = new Set(
      this.transactions.map(t => this.displayCategory(t)).filter(c => c.length > 0)
    );
    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  }

  get filteredTransactions(): Transaction[] {
    const now = new Date();
    return this.transactions.filter(t => {
      const text  = `${t.label} ${t.note ?? ''} ${t.source ?? ''}`.toLowerCase();
      const query = this.search.trim().toLowerCase();
      if (query && !text.includes(query)) return false;
      if (this.selectedType !== 'ALL' && t.type !== this.selectedType) return false;
      if (this.selectedCategory !== 'ALL' && this.displayCategory(t) !== this.selectedCategory) return false;
      if (this.selectedDateRange !== 'all') {
        const txDate = new Date(t.date);
        if (Number.isNaN(txDate.getTime())) return false;
        if (this.selectedDateRange === '30d') {
          if (now.getTime() - txDate.getTime() > 30 * 24 * 60 * 60 * 1000) return false;
        } else if (txDate.getMonth() !== now.getMonth() || txDate.getFullYear() !== now.getFullYear()) {
          return false;
        }
      }
      const abs = Math.abs(t.amount);
      if (this.minAmount !== null && abs < this.minAmount) return false;
      if (this.maxAmount !== null && abs > this.maxAmount) return false;
      return true;
    });
  }

  get pagedTransactions(): Transaction[] {
    const start = this.page * this.pageSize;
    return this.filteredTransactions.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredTransactions.length / this.pageSize));
  }

  get totalIncome(): number {
    return this.filteredTransactions.filter(t => t.type === 'INCOME').reduce((s, t) => s + t.amount, 0);
  }

  get totalExpense(): number {
    return this.filteredTransactions.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + t.amount, 0);
  }

  get netFlow(): number { return this.totalIncome - this.totalExpense; }

  get activeFilterCount(): number {
    let n = 0;
    if (this.search.trim())           n++;
    if (this.selectedType !== 'ALL')  n++;
    if (this.selectedCategory !== 'ALL') n++;
    if (this.selectedDateRange !== '30d') n++;
    if (this.minAmount !== null)      n++;
    if (this.maxAmount !== null)      n++;
    return n;
  }

  // ── Data loading ─────────────────────────────────────────────────────────

  async loadTransactions(): Promise<void> {
    this.loading = true;
    this.error   = null;
    this.page    = 0;
    try {
      const result: Page<Transaction> = await firstValueFrom(this.transactionsService.getAll());
      this.transactions = result.content;
    } catch {
      this.error = 'Impossible de charger les transactions.';
    } finally {
      this.loading = false;
    }
  }

  onFiltersChanged(): void { this.page = 0; }

  clearFilters(): void {
    this.search           = '';
    this.selectedType     = 'ALL';
    this.selectedCategory = 'ALL';
    this.selectedDateRange = '30d';
    this.minAmount = null;
    this.maxAmount = null;
    this.page      = 0;
  }

  onPageChange(p: number): void { this.page = p; }

  // ── Form ─────────────────────────────────────────────────────────────────

  openCreate(): void {
    this.editingId = null;
    this.form.reset({
      label:      '',
      amount:     null,
      type:       'EXPENSE',
      categoryId: null,
      date:       dayjs().format('YYYY-MM-DD'),
      note:       '',
    });
    this.showForm = true;
  }

  openEdit(tx: Transaction): void {
    this.editingId = tx.id;
    this.form.setValue({
      label:      tx.label,
      amount:     tx.amount,
      type:       tx.type,
      categoryId: tx.categoryId,
      date:       tx.date,
      note:       tx.note ?? '',
    });
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm  = false;
    this.editingId = null;
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const v = this.form.value;
    const payload = {
      label:      v.label!,
      amount:     v.amount!,
      type:       v.type! as TransactionType,
      categoryId: v.categoryId!,
      date:       v.date!,
      note:       v.note || null,
    };
    const isEditing = this.editingId !== null;
    const obs = isEditing
      ? this.transactionsService.update(this.editingId!, payload as UpdateTransactionRequest)
      : this.transactionsService.create(payload as CreateTransactionRequest);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeForm();
        void this.loadTransactions();
        Swal.fire({ icon: 'success', title: isEditing ? 'Transaction mise à jour' : 'Transaction créée', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer la transaction.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  async deleteTransaction(tx: Transaction): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer cette transaction ?',
      text: `"${tx.label}" sera supprimée.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;
    this.deleting = true;
    try {
      await firstValueFrom(this.transactionsService.delete(tx.id));
      await Swal.fire({ icon: 'success', title: 'Transaction supprimée', timer: 1200, showConfirmButton: false });
      await this.loadTransactions();
    } catch {
      await Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer cette transaction.', confirmButtonColor: '#0f766e' });
    } finally {
      this.deleting = false;
    }
  }

  // ── Display helpers ───────────────────────────────────────────────────────

  displayCategory(tx: Transaction): string {
    return tx.categoryName?.trim() || 'Non catégorisée';
  }

  amountClass(tx: Transaction): string {
    return tx.type === 'INCOME' ? 'text-emerald-600' : 'text-rose-600';
  }

  amountPrefix(tx: Transaction): '+' | '-' {
    return tx.type === 'INCOME' ? '+' : '-';
  }

  rowIcon(tx: Transaction): string {
    if (tx.type === 'INCOME') return 'payments';
    const name = this.displayCategory(tx).toLowerCase();
    if (name.includes('food') || name.includes('restaurant') || name.includes('alimentation')) return 'restaurant';
    if (name.includes('house') || name.includes('rent') || name.includes('logement')) return 'home';
    if (name.includes('shop') || name.includes('achat')) return 'shopping_bag';
    return 'receipt_long';
  }

  trackById(_: number, tx: Transaction): number { return tx.id; }
}
