export type TransactionType = 'INCOME' | 'EXPENSE';
export type PlannedFrequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
export type GoalStatus = 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
export type DebtStatus = 'ACTIVE' | 'PAID' | 'CANCELLED';
export type PlannedRunStatus = 'SUCCESS' | 'FAILED';

export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  details?: string[];
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
