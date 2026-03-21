import { TransactionType, PlannedFrequency, PlannedRunStatus } from '../../../core/models/common.model';

export interface PlannedTransaction {
  id: number;
  label: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  frequency: PlannedFrequency;
  nextDueDate: string;
  autoCreate: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PlannedTransactionRun {
  id: number;
  plannedTransactionId: number;
  dueDate: string;
  executedAt?: string | null;
  status: PlannedRunStatus;
  createdTransactionId?: number | null;
  errorMessage?: string | null;
}

export interface CreatePlannedTransactionRequest {
  label: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  frequency: PlannedFrequency;
  nextDueDate: string;
  autoCreate: boolean;
}

export interface UpdatePlannedTransactionRequest {
  label: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  frequency: PlannedFrequency;
  nextDueDate: string;
  autoCreate: boolean;
}
