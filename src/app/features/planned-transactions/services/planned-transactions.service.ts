import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  PlannedTransaction,
  PlannedTransactionRun,
  CreatePlannedTransactionRequest,
  UpdatePlannedTransactionRequest,
} from '../models/planned-transaction.model';
import { Page } from '../../../core/models/common.model';

@Injectable({ providedIn: 'root' })
export class PlannedTransactionsService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/planned-transactions`;

  getAll(): Observable<PlannedTransaction[]> {
    return this.http.get<PlannedTransaction[]>(this.base);
  }

  getById(id: number): Observable<PlannedTransaction> {
    return this.http.get<PlannedTransaction>(`${this.base}/${id}`);
  }

  create(payload: CreatePlannedTransactionRequest): Observable<PlannedTransaction> {
    return this.http.post<PlannedTransaction>(this.base, payload);
  }

  update(id: number, payload: UpdatePlannedTransactionRequest): Observable<PlannedTransaction> {
    return this.http.put<PlannedTransaction>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  toggle(id: number): Observable<PlannedTransaction> {
    return this.http.patch<PlannedTransaction>(`${this.base}/${id}/toggle`, {});
  }

  runNow(id: number): Observable<PlannedTransactionRun> {
    return this.http.post<PlannedTransactionRun>(`${this.base}/${id}/run-now`, {});
  }

  getRuns(id: number, page = 0, size = 5): Observable<Page<PlannedTransactionRun>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', 'dueDate,desc');
    return this.http.get<Page<PlannedTransactionRun>>(`${this.base}/${id}/runs`, { params });
  }
}
