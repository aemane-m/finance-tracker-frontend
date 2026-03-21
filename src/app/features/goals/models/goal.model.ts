import { GoalStatus } from '../../../core/models/common.model';

export interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string | null;
  status: GoalStatus;
  createdAt: string;
  updatedAt: string;
}

export interface GoalContribution {
  id: number;
  goalId: number;
  amount: number;
  contributionDate: string;
  note?: string | null;
  transactionId?: number | null;
  createdAt: string;
}

export interface CreateGoalRequest {
  name: string;
  targetAmount: number;
  deadline?: string | null;
}

export interface UpdateGoalRequest {
  name: string;
  targetAmount: number;
  deadline?: string | null;
  status?: GoalStatus;
}

export interface ContributeGoalRequest {
  amount: number;
  contributionDate: string;
  note?: string | null;
}
