export interface Category {
  id: number;
  name: string;
  icon?: string | null;
  color?: string | null;
  isDefault: boolean;
  createdAt: string;
}

export interface CreateCategoryRequest {
  name: string;
  icon?: string | null;
  color?: string | null;
}

export interface UpdateCategoryRequest {
  name: string;
  icon?: string | null;
  color?: string | null;
}
