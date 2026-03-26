import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { catchError, of } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import dayjs from 'dayjs';

import { DashboardService } from '../../services/dashboard.service';
import { TransactionsService } from '../../../transactions/services/transactions.service';
import { PlannedTransactionsService } from '../../../planned-transactions/services/planned-transactions.service';
import { Transaction } from '../../../transactions/models/transaction.model';
import {
  MonthlySummary,
  SpendingByCategory,
  UpcomingPlanned,
  GoalProgress,
  BudgetAlert,
} from '../../models/dashboard.model';
import { Page } from '../../../../core/models/common.model';

const CHART_COLORS = [
  '#0f766e', '#6366f1', '#f59e0b', '#ef4444',
  '#8b5cf6', '#0ea5e9', '#10b981', '#f97316',
];

const EMPTY_PAGE: Page<Transaction> = {
  content: [], totalElements: 0, totalPages: 0, number: 0, size: 0,
};

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterLink, BaseChartDirective],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {
  private dashboardService    = inject(DashboardService);
  private transactionsService = inject(TransactionsService);
  private plannedService      = inject(PlannedTransactionsService);

  loading = true;
  error: string | null = null;

  summary: MonthlySummary | null = null;
  spending: SpendingByCategory[]  = [];
  upcoming: UpcomingPlanned[]     = [];
  goals:           GoalProgress[] = [];
  totalActiveGoals = 0;
  alerts:   BudgetAlert[]         = [];
  recentTransactions: Transaction[] = [];

  // Weekly activity [W1..W4]
  weeklyIncome:   number[] = [0, 0, 0, 0];
  weeklyExpense:  number[] = [0, 0, 0, 0];
  maxWeeklyValue  = 1;
  readonly weeks  = [0, 1, 2, 3];

  goalsOverallPct    = 0;
  incomeRetentionPct = 0;

  currentMonth = dayjs().format('MMMM YYYY');

  get spendingBackground(): string {
    const total = this.spendingTotal();
    if (total === 0 || this.spending.length === 0) return '#e2e8f0';
    let deg = 0;
    const stops = this.spending.map((item, i) => {
      const end = deg + (Number(item.amount) / total) * 360;
      const s = `${CHART_COLORS[i % CHART_COLORS.length]} ${deg.toFixed(2)}deg ${end.toFixed(2)}deg`;
      deg = end;
      return s;
    });
    return `conic-gradient(${stops.join(',')})`;
  }

  lineData: ChartData<'line'> = {
    labels: [],
    datasets: [{ data: [], borderColor: '#0f766e', backgroundColor: 'rgba(15,118,110,0.08)', fill: true, tension: 0.4, pointRadius: 0 }],
  };
  lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { maxTicksLimit: 6, font: { size: 10 }, color: '#94a3b8' } },
      y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 }, color: '#94a3b8', callback: v => `${v} €` } },
    },
    elements: { point: { radius: 0, hoverRadius: 4 } },
  };

  ngOnInit(): void { this.loadAll(); }

  retryLoad(): void { this.loadAll(); }

  loadAll(): void {
    this.loading = true;
    this.error   = null;
    const month     = dayjs().format('YYYY-MM');
    const startDate = dayjs().startOf('month').format('YYYY-MM-DD');
    const endDate   = dayjs().format('YYYY-MM-DD');

    forkJoin({
      summary:   this.dashboardService.getSummary(month).pipe(catchError(() => of(null))),
      spending:  this.dashboardService.getSpendingByCategory(month).pipe(catchError(() => of([]))),
      planned:   this.plannedService.getAll().pipe(catchError(() => of([]))),
      goals:     this.dashboardService.getGoalsProgress().pipe(catchError(() => of([]))),
      alerts:    this.dashboardService.getBudgetAlerts(month).pipe(catchError(() => of([]))),
      recent:    this.transactionsService.getAll(0, 5).pipe(catchError(() => of(EMPTY_PAGE))),
      monthlyTx: this.transactionsService.search({ startDate, endDate }, 0, 500).pipe(catchError(() => of(EMPTY_PAGE))),
    }).subscribe({
      next: ({ summary, spending: _spending, planned, goals, alerts, recent, monthlyTx }) => {
        this.summary  = summary;

        this.upcoming = planned
          .filter(p => p.active)
          .sort((a, b) => a.nextDueDate.localeCompare(b.nextDueDate))
          .slice(0, 5)
          .map(p => ({
            id:          p.id,
            label:       p.label,
            amount:      p.amount,
            type:        p.type,
            nextDueDate: p.nextDueDate,
            frequency:   p.frequency,
          }));

        this.alerts = alerts;
        const activeGoals       = goals.filter((g: GoalProgress) => g.status === 'ACTIVE');
        this.totalActiveGoals  = activeGoals.length;
        this.goals             = activeGoals.slice(0, 3);

        const totalTarget  = goals.reduce((s: number, g: GoalProgress) => s + g.targetAmount,  0);
        const totalCurrent = goals.reduce((s: number, g: GoalProgress) => s + g.currentAmount, 0);
        this.goalsOverallPct = totalTarget > 0
          ? Math.round((totalCurrent / totalTarget) * 100)
          : 0;

        this.incomeRetentionPct = (summary?.totalIncome ?? 0) > 0
          ? Math.round(((summary?.netBalance ?? 0) / (summary?.totalIncome ?? 1)) * 100)
          : 0;

        // Recent transactions — latest 5 overall, fallback to monthly transactions
        this.recentTransactions = (recent.content.length > 0 ? recent.content : monthlyTx.content).slice(0, 5);

        // Chart data — current month transactions
        const txList = monthlyTx.content;
        this.buildWeeklyData(txList);
        this.buildLineChart(txList);

        // Always compute spending from actual transactions (more reliable than dashboard API)
        this.buildSpendingFromTransactions(txList);

        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les données du tableau de bord.';
        this.loading = false;
      },
    });
  }

  spendingTotal(): number {
    return this.spending.reduce((s, i) => s + Number(i.amount), 0);
  }

  spendingPct(item: SpendingByCategory): number {
    const total = this.spendingTotal();
    return total > 0 ? Math.round((Number(item.amount) / total) * 100) : 0;
  }

  private buildWeeklyData(transactions: Transaction[]): void {
    const now     = dayjs();
    const income  = [0, 0, 0, 0];
    const expense = [0, 0, 0, 0];

    for (const tx of transactions) {
      const d = dayjs(tx.date);
      if (d.month() !== now.month() || d.year() !== now.year()) continue;
      const week = Math.min(3, Math.floor((d.date() - 1) / 7));
      if (tx.type === 'INCOME') income[week]  += tx.amount;
      else                      expense[week] += tx.amount;
    }

    this.weeklyIncome   = income;
    this.weeklyExpense  = expense;
    this.maxWeeklyValue = Math.max(...income, ...expense, 1);
  }

  private buildLineChart(transactions: Transaction[]): void {
    const now          = dayjs();
    const daysUntilToday = now.date();
    const dailyNet     = new Array<number>(daysUntilToday).fill(0);

    for (const tx of transactions) {
      const d = dayjs(tx.date);
      if (d.month() !== now.month() || d.year() !== now.year()) continue;
      const idx = d.date() - 1;
      if (idx >= 0 && idx < daysUntilToday) {
        dailyNet[idx] += tx.type === 'INCOME' ? tx.amount : -tx.amount;
      }
    }

    const start  = now.startOf('month');
    const labels: string[] = [];
    const data:   number[] = [];
    let running = 0;

    for (let i = 0; i < daysUntilToday; i++) {
      running += dailyNet[i];
      data.push(running);
      const d = i + 1;
      labels.push(d === 1 || d % 7 === 0 || i === daysUntilToday - 1
        ? start.add(i, 'day').format('DD MMM')
        : '');
    }

    this.lineData = {
      labels,
      datasets: [{
        data,
        borderColor: '#0f766e',
        backgroundColor: 'rgba(15,118,110,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      }],
    };
  }

  private buildSpendingFromTransactions(transactions: Transaction[]): void {
    const map = new Map<number, { name: string; amount: number }>();
    for (const tx of transactions) {
      if (tx.type !== 'EXPENSE') continue;
      const existing = map.get(tx.categoryId);
      if (existing) {
        existing.amount += tx.amount;
      } else {
        map.set(tx.categoryId, { name: tx.categoryName ?? `#${tx.categoryId}`, amount: tx.amount });
      }
    }
    const total = [...map.values()].reduce((s, v) => s + v.amount, 0);
    this.spending = [...map.entries()]
      .map(([id, v]) => ({
        categoryId: id,
        categoryName: v.name,
        amount: v.amount,
        percentage: total > 0 ? Math.round((v.amount / total) * 100) : 0,
      }))
      .sort((a, b) => b.amount - a.amount);
  }

  weeklyBarHeight(value: number): number {
    return this.maxWeeklyValue > 0 ? Math.round((value / this.maxWeeklyValue) * 100) : 5;
  }

  weekLabel(weekIndex: number): string {
    const start = dayjs().startOf('month').add(weekIndex * 7, 'day');
    const end   = start.add(6, 'day');
    const cap   = end.isAfter(dayjs().endOf('month')) ? dayjs().endOf('month') : end;
    return `${start.date()}–${cap.date()}`;
  }

  get weeklyTotalIncome():  number { return this.weeklyIncome.reduce((s, v)  => s + v, 0); }
  get weeklyTotalExpense(): number { return this.weeklyExpense.reduce((s, v) => s + v, 0); }

  goalPercent(goal: GoalProgress): number {
    if (goal.targetAmount <= 0) return 0;
    return Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
  }

  goalColor(i: number): string { return CHART_COLORS[i % CHART_COLORS.length]; }

  private isOver(a: BudgetAlert): boolean {
    return a.overBudget === true;
  }

  alertSeverityClass(a: BudgetAlert): string { return this.isOver(a) ? 'bg-red-50 border-red-100' : 'bg-amber-50 border-amber-100'; }
  alertIconClass(a: BudgetAlert):    string { return this.isOver(a) ? 'text-red-500' : 'text-amber-500'; }
  alertIcon(a: BudgetAlert):         string { return this.isOver(a) ? 'warning' : 'notification_important'; }
  alertTitleClass(a: BudgetAlert):   string { return this.isOver(a) ? 'text-red-900' : 'text-amber-900'; }
  alertTextClass(a: BudgetAlert):    string { return this.isOver(a) ? 'text-red-700' : 'text-amber-700'; }
  alertMessage(a: BudgetAlert): string {
    const remaining = a.remainingAmount ?? 0;
    const pct = a.percentage != null
      ? a.percentage
      : (a.monthlyLimit && a.spentAmount != null
          ? Math.round((a.spentAmount / a.monthlyLimit) * 100)
          : 0);
    return this.isOver(a)
      ? `Dépassement de ${Math.abs(remaining).toFixed(2)} €.`
      : `${pct.toFixed(0)}% du budget mensuel utilisé.`;
  }

  dotColor(i: number): string { return CHART_COLORS[i % CHART_COLORS.length]; }

  txAmountClass(tx: Transaction): string { return tx.type === 'INCOME' ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'; }
  txAmountText(tx: Transaction):  string {
    const sign = tx.type === 'INCOME' ? '+' : '-';
    return `${sign}${tx.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  }
  txCategoryClass(tx: Transaction): string {
    return tx.type === 'INCOME'
      ? 'bg-emerald-50 text-emerald-700'
      : 'bg-slate-100 text-slate-600';
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}
