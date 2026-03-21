import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

import { GoalsService } from '../../services/goals.service';
import {
  Goal,
  GoalContribution,
  CreateGoalRequest,
  UpdateGoalRequest,
  ContributeGoalRequest,
} from '../../models/goal.model';
import { Page } from '../../../../core/models/common.model';

type FormPanel = 'create' | 'edit' | 'contribute' | null;

const GOAL_COLORS = [
  { bg: 'bg-[#0f766e]/10', text: 'text-[#0f766e]', bar: 'bg-[#0f766e]',   hex: '#0f766e' },
  { bg: 'bg-violet-100',   text: 'text-violet-600', bar: 'bg-violet-500',  hex: '#7c3aed' },
  { bg: 'bg-amber-100',    text: 'text-amber-600',  bar: 'bg-amber-500',   hex: '#f59e0b' },
  { bg: 'bg-rose-100',     text: 'text-rose-600',   bar: 'bg-rose-500',    hex: '#f43f5e' },
  { bg: 'bg-sky-100',      text: 'text-sky-600',    bar: 'bg-sky-500',     hex: '#0ea5e9' },
  { bg: 'bg-orange-100',   text: 'text-orange-600', bar: 'bg-orange-500',  hex: '#f97316' },
];

interface GoalWithContributions extends Goal {
  recentContributions: GoalContribution[];
  contributionsPage: Page<GoalContribution> | null;
  loadingContributions: boolean;
  colorIdx: number;
}

@Component({
  selector: 'app-goals-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './goals-page.html',
  styleUrl: './goals-page.css',
})
export class GoalsPage implements OnInit {
  private goalsService = inject(GoalsService);
  private fb = inject(FormBuilder);

  goals: GoalWithContributions[] = [];
  loading = true;
  error: string | null = null;
  saving = false;

  activePanel: FormPanel = null;
  editingGoal: Goal | null = null;
  contributingGoal: GoalWithContributions | null = null;

  goalForm = this.fb.group({
    name:         ['', [Validators.required, Validators.maxLength(100)]],
    targetAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    deadline:     [''],
  });

  contributeForm = this.fb.group({
    amount:           [null as number | null, [Validators.required, Validators.min(0.01)]],
    contributionDate: ['', [Validators.required]],
    note:             ['', [Validators.maxLength(300)]],
  });

  get name()         { return this.goalForm.controls.name; }
  get targetAmount() { return this.goalForm.controls.targetAmount; }
  get deadline()     { return this.goalForm.controls.deadline; }

  get contribAmount() { return this.contributeForm.controls.amount; }
  get contribDate()   { return this.contributeForm.controls.contributionDate; }
  get contribNote()   { return this.contributeForm.controls.note; }

  get totalSaved(): number {
    return this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED')
                     .reduce((s, g) => s + g.currentAmount, 0);
  }

  get activeCount(): number {
    return this.goals.filter(g => g.status === 'ACTIVE').length;
  }

  get leadGoal(): GoalWithContributions | null {
    const active = this.goals.filter(g => g.status === 'ACTIVE');
    if (!active.length) return null;
    return active.reduce((best, g) => this.percent(g) > this.percent(best) ? g : best, active[0]);
  }

  get monthlyAverage(): number {
    const active = this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED');
    if (!active.length) return 0;
    return active.reduce((s, g) => s + g.currentAmount, 0) / active.length;
  }

  get overallProgress(): number {
    const active = this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED');
    const totalTarget = active.reduce((s, g) => s + g.targetAmount, 0);
    if (totalTarget <= 0) return 0;
    const totalCurrent = active.reduce((s, g) => s + g.currentAmount, 0);
    return Math.min(100, Math.round((totalCurrent / totalTarget) * 100));
  }

  get recentContributionsFeed(): GoalContribution[] {
    const map = new Map<number, GoalContribution>();
    for (const goal of this.goals) {
      for (const c of goal.recentContributions) {
        if (!map.has(c.id)) map.set(c.id, c);
      }
    }
    return Array.from(map.values())
      .sort((a, b) => new Date(b.contributionDate).getTime() - new Date(a.contributionDate).getTime())
      .slice(0, 8);
  }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void {
    this.loading = true;
    this.error = null;

    this.goalsService.getAll().subscribe({
      next: goals => {
        this.goals = goals.map((g, i) => ({
          ...g,
          recentContributions: [],
          contributionsPage: null,
          loadingContributions: false,
          colorIdx: i % GOAL_COLORS.length,
        }));
        this.loading = false;
        this.goals.forEach(g => this.loadContributions(g, 0));
      },
      error: () => {
        this.error = 'Impossible de charger les objectifs.';
        this.loading = false;
      },
    });
  }

  loadContributions(goal: GoalWithContributions, page: number): void {
    goal.loadingContributions = true;
    this.goalsService.getContributions(goal.id, page, 3).subscribe({
      next: result => {
        goal.recentContributions = result.content;
        goal.contributionsPage = result;
        goal.loadingContributions = false;
      },
      error: () => { goal.loadingContributions = false; },
    });
  }

  openCreate(): void {
    this.editingGoal = null;
    this.goalForm.reset({ name: '', targetAmount: null, deadline: '' });
    this.activePanel = 'create';
  }

  openEdit(goal: Goal): void {
    this.editingGoal = goal;
    this.goalForm.setValue({
      name:         goal.name,
      targetAmount: goal.targetAmount,
      deadline:     goal.deadline ?? '',
    });
    this.activePanel = 'edit';
  }

  openContribute(goal: GoalWithContributions): void {
    this.contributingGoal = goal;
    this.contributeForm.reset({
      amount: null,
      contributionDate: dayjs().format('YYYY-MM-DD'),
      note: '',
    });
    this.activePanel = 'contribute';
  }

  closePanel(): void {
    this.activePanel = null;
    this.editingGoal = null;
    this.contributingGoal = null;
  }

  submitGoal(): void {
    if (this.goalForm.invalid) { this.goalForm.markAllAsTouched(); return; }
    this.saving = true;

    const v = this.goalForm.value;
    const payload = {
      name:         v.name!,
      targetAmount: v.targetAmount!,
      deadline:     v.deadline || null,
    };

    const isEditing = !!this.editingGoal;
    const obs = this.editingGoal
      ? this.goalsService.update(this.editingGoal.id, payload as UpdateGoalRequest)
      : this.goalsService.create(payload as CreateGoalRequest);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closePanel();
        this.loadGoals();
        Swal.fire({ icon: 'success', title: isEditing ? 'Objectif mis à jour' : 'Objectif créé', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer l\'objectif.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  submitContribute(): void {
    if (this.contributeForm.invalid || !this.contributingGoal) { this.contributeForm.markAllAsTouched(); return; }
    this.saving = true;

    const v = this.contributeForm.value;
    const payload: ContributeGoalRequest = {
      amount:           v.amount!,
      contributionDate: v.contributionDate!,
      note:             v.note || null,
    };

    this.goalsService.contribute(this.contributingGoal.id, payload).subscribe({
      next: () => {
        this.saving = false;
        this.closePanel();
        this.loadGoals();
        Swal.fire({ icon: 'success', title: 'Contribution enregistrée', timer: 1500, showConfirmButton: false });
      },
      error: () => {
        this.saving = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer la contribution.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  async deleteGoal(goal: Goal): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer cet objectif ?',
      text: `"${goal.name}" sera définitivement supprimé.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.goalsService.delete(goal.id).subscribe({
      next: () => {
        this.loadGoals();
        Swal.fire({ icon: 'success', title: 'Objectif supprimé', timer: 1200, showConfirmButton: false });
      },
      error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer l\'objectif.', confirmButtonColor: '#0f766e' }),
    });
  }

  percent(goal: Goal): number {
    if (!goal.targetAmount) return 0;
    return Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
  }

  projectedPercent(goal: GoalWithContributions): number {
    const added = this.contribAmount.value ?? 0;
    if (!goal.targetAmount) return 0;
    return Math.min(100, Math.round(((goal.currentAmount + added) / goal.targetAmount) * 100));
  }

  remaining(goal: Goal): number {
    return Math.max(0, goal.targetAmount - goal.currentAmount);
  }

  color(goal: GoalWithContributions) {
    return GOAL_COLORS[goal.colorIdx];
  }

  conicGradient(goal: GoalWithContributions): string {
    const p = this.percent(goal);
    return `conic-gradient(${this.color(goal).hex} ${p}%, #e2e8f0 0)`;
  }

  projectedConicGradient(goal: GoalWithContributions): string {
    const p = this.projectedPercent(goal);
    return `conic-gradient(${this.color(goal).hex} ${p}%, #e2e8f0 0)`;
  }

  daysLeft(goal: Goal): number | null {
    if (!goal.deadline) return null;
    return dayjs(goal.deadline).diff(dayjs(), 'day');
  }

  deadlineLabel(goal: Goal): string {
    const d = this.daysLeft(goal);
    if (d === null) return 'Sans échéance';
    if (d < 0) return 'Échéance dépassée';
    if (d === 0) return "Aujourd'hui";
    if (d === 1) return 'Demain';
    if (d < 30) return `Dans ${d} jours`;
    if (d < 365) return `Dans ${Math.round(d / 30)} mois`;
    return `Dans ${Math.round(d / 365)} an${Math.round(d / 365) > 1 ? 's' : ''}`;
  }

  deadlineClass(goal: Goal): string {
    const d = this.daysLeft(goal);
    if (d === null) return 'text-slate-400';
    if (d < 0) return 'text-red-500';
    if (d <= 7) return 'text-orange-500';
    if (d <= 30) return 'text-amber-500';
    return 'text-slate-500';
  }

  iconForGoal(goal: Goal): string {
    const name = goal.name.toLowerCase();
    if (name.includes('home') || name.includes('maison') || name.includes('logement')) return 'home';
    if (name.includes('trip') || name.includes('travel') || name.includes('vacance') || name.includes('voyage')) return 'flight';
    if (name.includes('car') || name.includes('vehicle') || name.includes('voiture')) return 'directions_car';
    if (name.includes('education') || name.includes('school') || name.includes('etude') || name.includes('formation')) return 'school';
    if (name.includes('emergency') || name.includes('buffer') || name.includes('urgence') || name.includes('securite')) return 'shield';
    if (name.includes('retraite') || name.includes('pension')) return 'elderly';
    if (name.includes('enfant') || name.includes('bebe')) return 'child_care';
    if (name.includes('mariage') || name.includes('noce')) return 'favorite';
    return 'savings';
  }

  contributionMethodFr(c: GoalContribution): string {
    if (c.transactionId) return 'Virement automatique';
    if (c.note && c.note.trim().length > 0) return 'Dépôt manuel';
    return 'Virement récurrent';
  }

  goalNameById(goalId: number): string {
    return this.goals.find((g) => g.id === goalId)?.name ?? `Objectif #${goalId}`;
  }

  statusLabel(goal: Goal): string {
    switch (goal.status) {
      case 'ACTIVE':    return 'En cours';
      case 'COMPLETED': return 'Atteint ✓';
      case 'ARCHIVED':  return 'Archivé';
    }
  }

  statusClass(goal: Goal): string {
    switch (goal.status) {
      case 'ACTIVE':    return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'COMPLETED': return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
      case 'ARCHIVED':  return 'bg-slate-100 text-slate-500';
    }
  }

  formatAmount(n: number | null | undefined): string {
    if (n === null || n === undefined || Number.isNaN(n)) {
      return (0).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
    return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  formatDate(d: string): string {
    return dayjs(d).format('DD MMM YYYY');
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}
