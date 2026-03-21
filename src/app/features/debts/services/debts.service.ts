import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Debt,
  DebtPayment,
  DebtSummary,
  CreateDebtRequest,
  UpdateDebtRequest,
  RegisterDebtPaymentRequest,
} from '../models/debt.model';
import { Page } from '../../../core/models/common.model';

@Injectable({ providedIn: 'root' })
export class DebtsService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/debts`;

  getAll(): Observable<Debt[]> {
    return this.http.get<Debt[]>(this.base);
  }

  getById(id: number): Observable<Debt> {
    return this.http.get<Debt>(`${this.base}/${id}`);
  }

  create(payload: CreateDebtRequest): Observable<Debt> {
    return this.http.post<Debt>(this.base, payload);
  }

  update(id: number, payload: UpdateDebtRequest): Observable<Debt> {
    return this.http.put<Debt>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  registerPayment(id: number, payload: RegisterDebtPaymentRequest): Observable<Debt> {
    return this.http.patch<Debt>(`${this.base}/${id}/payment`, payload);
  }

  getPayments(id: number, page = 0, size = 5): Observable<Page<DebtPayment>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', 'paymentDate,desc');
    return this.http.get<Page<DebtPayment>>(`${this.base}/${id}/payments`, { params });
  }

  getSummary(): Observable<DebtSummary> {
    return this.http.get<DebtSummary>(`${this.base}/summary`);
  }
}
