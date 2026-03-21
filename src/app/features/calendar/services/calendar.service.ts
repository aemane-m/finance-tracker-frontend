import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  CalendarEvent,
  CreateCalendarEventRequest,
  UpdateCalendarEventRequest,
} from '../models/calendar.model';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/calendar/events`;

  getMonth(month: string): Observable<CalendarEvent[]> {
    const params = new HttpParams().set('month', month);
    return this.http.get<CalendarEvent[]>(this.base, { params });
  }

  getById(id: number): Observable<CalendarEvent> {
    return this.http.get<CalendarEvent>(`${this.base}/${id}`);
  }

  create(payload: CreateCalendarEventRequest): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(this.base, payload);
  }

  update(id: number, payload: UpdateCalendarEventRequest): Observable<CalendarEvent> {
    return this.http.put<CalendarEvent>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
