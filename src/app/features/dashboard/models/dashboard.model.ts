import { TransactionType, PlannedFrequency, GoalStatus } from '../../../core/models/common.model';

export interface MonthlySummary {
  month: string;
  totalIncome: number;
  totalExpenses: number;
  netBalance: number;
  transactionCount: number;
  savingsRate?: number | null;
}

export interface SpendingByCategory {
  categoryId: number;
  categoryName: string;
  amount: number;
  percentage: number;
  budgetLimit?: number | null;
  usagePercentage?: number | null;
}

export interface UpcomingPlanned {
  id: number;
  label: string;
  amount: number;
  type: TransactionType;
  nextDueDate: string;
  frequency: PlannedFrequency;
}

export interface GoalProgress {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  percentage: number;
  deadline?: string | null;
  status: GoalStatus;
}

export interface BudgetAlert {
  budgetId: number;
  categoryId: number;
  categoryName: string;
  monthlyLimit?: number;
  alertThreshold?: number;
  spentAmount?: number;
  remainingAmount?: number;
  percentage?: number;
  overBudget?: boolean;
}
