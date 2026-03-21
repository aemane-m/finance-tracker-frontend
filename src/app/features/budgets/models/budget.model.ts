export interface Budget {
  id: number;
  categoryId: number;
  categoryName?: string | null;
  monthlyLimit: number;
  alertThreshold: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBudgetRequest {
  categoryId: number;
  monthlyLimit: number;
  alertThreshold: number;
}

export interface UpdateBudgetRequest {
  categoryId: number;
  monthlyLimit: number;
  alertThreshold: number;
}

/** Budget enriched with category name for display */
export interface BudgetView extends Budget {
  categoryName: string;
  categoryIcon?: string | null;
  categoryColor?: string | null;
}
