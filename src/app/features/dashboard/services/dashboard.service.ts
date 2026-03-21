import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  MonthlySummary,
  SpendingByCategory,
  UpcomingPlanned,
  GoalProgress,
  BudgetAlert,
} from '../models/dashboard.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/dashboard`;

  private monthParams(month: string): HttpParams {
    return new HttpParams().set('month', month);
  }

  getSummary(month: string): Observable<MonthlySummary> {
    return this.http.get<MonthlySummary>(`${this.base}/summary`, {
      params: this.monthParams(month),
    });
  }

  getSpendingByCategory(month: string): Observable<SpendingByCategory[]> {
    return this.http.get<SpendingByCategory[]>(`${this.base}/spending-by-category`, {
      params: this.monthParams(month),
    });
  }

  getUpcoming(limit = 3): Observable<UpcomingPlanned[]> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<UpcomingPlanned[]>(`${this.base}/upcoming`, { params });
  }

  getGoalsProgress(): Observable<GoalProgress[]> {
    return this.http.get<GoalProgress[]>(`${this.base}/goals-progress`);
  }

  getBudgetAlerts(month: string): Observable<BudgetAlert[]> {
    return this.http.get<BudgetAlert[]>(`${this.base}/budget-alerts`, {
      params: this.monthParams(month),
    });
  }
}
