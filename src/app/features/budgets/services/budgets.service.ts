import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Budget, CreateBudgetRequest, UpdateBudgetRequest } from '../models/budget.model';

@Injectable({ providedIn: 'root' })
export class BudgetsService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/budgets`;

  getAll(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.base);
  }

  getById(id: number): Observable<Budget> {
    return this.http.get<Budget>(`${this.base}/${id}`);
  }

  create(payload: CreateBudgetRequest): Observable<Budget> {
    return this.http.post<Budget>(this.base, payload);
  }

  update(id: number, payload: UpdateBudgetRequest): Observable<Budget> {
    return this.http.put<Budget>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
