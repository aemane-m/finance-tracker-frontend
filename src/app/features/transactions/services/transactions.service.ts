import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Transaction,
  CreateTransactionRequest,
  UpdateTransactionRequest,
  TransactionSearchParams,
} from '../models/transaction.model';
import { Page } from '../../../core/models/common.model';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/transactions`;

  getAll(page = 0, size = 200): Observable<Page<Transaction>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', 'date,desc');
    return this.http.get<Page<Transaction>>(this.base, { params });
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.base}/${id}`);
  }

  create(payload: CreateTransactionRequest): Observable<Transaction> {
    return this.http.post<Transaction>(this.base, payload);
  }

  update(id: number, payload: UpdateTransactionRequest): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  search(params: TransactionSearchParams, page = 0, size = 200): Observable<Page<Transaction>> {
    let httpParams = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', 'date,desc');

    if (params.type)       httpParams = httpParams.set('type', params.type);
    if (params.categoryId) httpParams = httpParams.set('categoryId', params.categoryId);
    if (params.startDate)  httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate)    httpParams = httpParams.set('endDate', params.endDate);
    if (params.label)      httpParams = httpParams.set('label', params.label);

    return this.http.get<Page<Transaction>>(`${this.base}/search`, { params: httpParams });
  }
}
