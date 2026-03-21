import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';

import { BudgetsService } from '../../services/budgets.service';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Budget, BudgetView, CreateBudgetRequest, UpdateBudgetRequest } from '../../models/budget.model';
import { Category } from '../../../categories/models/category.model';

@Component({
  selector: 'app-budgets-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budgets-page.html',
  styleUrl: './budgets-page.css',
})
export class BudgetsPage implements OnInit {
  private budgetsService = inject(BudgetsService);
  private categoriesService = inject(CategoriesService);
  private fb = inject(FormBuilder);

  budgets: BudgetView[] = [];
  categories: Category[] = [];
  availableCategories: Category[] = [];

  loading = true;
  saving = false;
  error: string | null = null;

  showForm = false;
  editingId: number | null = null;

  form = this.fb.group({
    categoryId: [null as number | null, [Validators.required]],
    monthlyLimit: [null as number | null, [Validators.required, Validators.min(1)]],
    alertThreshold: [80, [Validators.required, Validators.min(1), Validators.max(100)]],
  });

  get categoryId() { return this.form.controls.categoryId; }
  get monthlyLimit() { return this.form.controls.monthlyLimit; }
  get alertThreshold() { return this.form.controls.alertThreshold; }

  get totalLimit(): number {
    return this.budgets.reduce((sum, b) => sum + b.monthlyLimit, 0);
  }

  get avgThreshold(): number {
    if (this.budgets.length === 0) return 0;
    return this.budgets.reduce((sum, b) => sum + b.alertThreshold, 0) / this.budgets.length;
  }

  get budgetCount(): number { return this.budgets.length; }
  get estimatedSpent(): number {
    return this.budgets.reduce((sum, b) => sum + (b.monthlyLimit * b.alertThreshold / 100), 0);
  }
  get estimatedRemaining(): number {
    return Math.max(0, this.totalLimit - this.estimatedSpent);
  }
  get estimatedRateLeft(): number {
    if (this.totalLimit <= 0) return 0;
    return (this.estimatedRemaining / this.totalLimit) * 100;
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

    forkJoin({
      budgets: this.budgetsService.getAll(),
      categories: this.categoriesService.getAll(),
    }).subscribe({
      next: ({ budgets, categories }) => {
        this.categories = categories;
        this.budgets = this.buildViews(budgets, categories);
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les budgets.';
        this.loading = false;
      },
    });
  }

  private buildViews(budgets: Budget[], categories: Category[]): BudgetView[] {
    return budgets.map(b => {
      const cat = categories.find(c => c.id === b.categoryId);
      return {
        ...b,
        categoryName: b.categoryName ?? cat?.name ?? `Catégorie #${b.categoryId}`,
        categoryIcon: cat?.icon ?? null,
        categoryColor: cat?.color ?? null,
      };
    });
  }

  openCreate(): void {
    this.editingId = null;
    this.availableCategories = this.categories.filter(
      c => !this.budgets.some(b => b.categoryId === c.id)
    );
    this.form.reset({ alertThreshold: 80 });
    this.showForm = true;
  }

  openEdit(budget: BudgetView): void {
    this.editingId = budget.id;
    this.availableCategories = this.categories.filter(
      c => c.id === budget.categoryId || !this.budgets.some(b => b.categoryId === c.id)
    );
    this.form.setValue({
      categoryId: budget.categoryId,
      monthlyLimit: budget.monthlyLimit,
      alertThreshold: budget.alertThreshold,
    });
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingId = null;
    this.form.reset({ alertThreshold: 80 });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const { categoryId, monthlyLimit, alertThreshold } = this.form.value;

    if (this.editingId !== null) {
      const payload: UpdateBudgetRequest = {
        categoryId: Number(categoryId),
        monthlyLimit: Number(monthlyLimit),
        alertThreshold: Number(alertThreshold),
      };
      this.budgetsService.update(this.editingId, payload).subscribe({
        next: () => {
          this.saving = false;
          this.closeForm();
          this.loadAll();
          Swal.fire({ icon: 'success', title: 'Budget mis à jour', timer: 1500, showConfirmButton: false });
        },
        error: () => { this.saving = false; this.showSaveError(); },
      });
    } else {
      const payload: CreateBudgetRequest = {
        categoryId: Number(categoryId),
        monthlyLimit: Number(monthlyLimit),
        alertThreshold: Number(alertThreshold),
      };
      this.budgetsService.create(payload).subscribe({
        next: () => {
          this.saving = false;
          this.closeForm();
          this.loadAll();
          Swal.fire({ icon: 'success', title: 'Budget créé', timer: 1500, showConfirmButton: false });
        },
        error: () => { this.saving = false; this.showSaveError(); },
      });
    }
  }

  async deleteBudget(budget: BudgetView): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer ce budget ?',
      text: `Le budget pour "${budget.categoryName}" sera définitivement supprimé.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });

    if (!result.isConfirmed) return;

    this.budgetsService.delete(budget.id).subscribe({
      next: () => {
        this.budgets = this.budgets.filter(b => b.id !== budget.id);
        Swal.fire({ icon: 'success', title: 'Budget supprimé', timer: 1500, showConfirmButton: false });
      },
      error: () => this.showSaveError(),
    });
  }

  private showSaveError(): void {
    Swal.fire({ icon: 'error', title: 'Erreur', text: 'Une erreur est survenue. Veuillez réessayer.', confirmButtonColor: '#0f766e' });
  }

  thresholdBarWidth(budget: BudgetView): string {
    return `${budget.alertThreshold}%`;
  }

  thresholdColor(threshold: number): string {
    if (threshold >= 90) return 'bg-red-500';
    if (threshold >= 75) return 'bg-orange-500';
    return 'bg-[#0f766e]';
  }

  thresholdTextColor(threshold: number): string {
    if (threshold >= 90) return 'text-red-600';
    if (threshold >= 75) return 'text-orange-500';
    return 'text-[#0f766e]';
  }

  trackById(_: number, item: BudgetView): number { return item.id; }
}
