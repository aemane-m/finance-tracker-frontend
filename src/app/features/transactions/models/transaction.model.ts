import { TransactionType } from '../../../core/models/common.model';

export interface Transaction {
  id: number;
  label: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  categoryName?: string | null;
  date: string;
  note?: string | null;
  source?: string | null;
  createdAt: string;
  updatedAt?: string | null;
}

export interface CreateTransactionRequest {
  amount: number;
  type: TransactionType;
  categoryId: number;
  label: string;
  date: string;
  note?: string | null;
}

export interface UpdateTransactionRequest {
  amount: number;
  type: TransactionType;
  categoryId: number;
  label: string;
  date: string;
  note?: string | null;
}

export interface TransactionSearchParams {
  type?: TransactionType;
  categoryId?: number;
  startDate?: string;
  endDate?: string;
  label?: string;
}
