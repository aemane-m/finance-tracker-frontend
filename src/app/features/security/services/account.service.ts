import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/account`;

  logoutAll(): Observable<void> {
    return this.http.post<void>(`${this.base}/logout-all`, null);
  }
}
