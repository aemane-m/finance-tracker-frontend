import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Goal,
  GoalContribution,
  CreateGoalRequest,
  UpdateGoalRequest,
  ContributeGoalRequest,
} from '../models/goal.model';
import { Page } from '../../../core/models/common.model';

@Injectable({ providedIn: 'root' })
export class GoalsService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/goals`;

  getAll(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.base);
  }

  getById(id: number): Observable<Goal> {
    return this.http.get<Goal>(`${this.base}/${id}`);
  }

  create(payload: CreateGoalRequest): Observable<Goal> {
    return this.http.post<Goal>(this.base, payload);
  }

  update(id: number, payload: UpdateGoalRequest): Observable<Goal> {
    return this.http.put<Goal>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  contribute(id: number, payload: ContributeGoalRequest): Observable<Goal> {
    return this.http.patch<Goal>(`${this.base}/${id}/contribute`, payload);
  }

  getContributions(id: number, page = 0, size = 5): Observable<Page<GoalContribution>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', 'contributionDate,desc');
    return this.http.get<Page<GoalContribution>>(`${this.base}/${id}/contributions`, { params });
  }
}
