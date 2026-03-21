import { DebtStatus } from '../../../core/models/common.model';
import { Page } from '../../../core/models/common.model';

export interface Debt {
  id: number;
  creditorName: string;
  totalAmount: number;
  remainingAmount: number;
  monthlyPayment: number;
  interestRate?: number | null;
  startDate: string;
  dueDate?: string | null;
  status: DebtStatus;
  createdAt: string;
  updatedAt: string;
}

export interface DebtPayment {
  id: number;
  debtId: number;
  paymentDate: string;
  amount: number;
  note?: string | null;
  transactionId?: number | null;
  createdAt: string;
}

/** Matches DebtSummaryResponse: active/paid counts, total remaining, total monthly payment */
export interface DebtSummary {
  activeDebtsCount: number;
  paidDebtsCount: number;
  totalRemainingAmount: number;
  totalMonthlyPayment: number;
}

export interface CreateDebtRequest {
  creditorName: string;
  totalAmount: number;
  monthlyPayment: number;
  interestRate?: number | null;
  startDate: string;
  dueDate?: string | null;
}

export interface UpdateDebtRequest {
  creditorName: string;
  totalAmount: number;
  monthlyPayment: number;
  interestRate?: number | null;
  startDate: string;
  dueDate?: string | null;
  status?: DebtStatus;
}

export interface RegisterDebtPaymentRequest {
  amount: number;
  paymentDate: string;
  note?: string | null;
}

export type { Page };
