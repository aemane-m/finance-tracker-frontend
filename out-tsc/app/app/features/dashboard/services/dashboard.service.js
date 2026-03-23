import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class DashboardService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/dashboard`;
    monthParams(month, year) {
        return new HttpParams()
            .set('month', month)
            .set('year', year);
    }
    getSummary(month, year) {
        return this.http.get(`${this.base}/summary`, {
            params: this.monthParams(month, year),
        });
    }
    getSpendingByCategory(month, year) {
        return this.http.get(`${this.base}/spending-by-category`, {
            params: this.monthParams(month, year),
        });
    }
    getUpcoming() {
        return this.http.get(`${this.base}/upcoming`);
    }
    getGoalsProgress(month, year) {
        return this.http.get(`${this.base}/goals-progress`, {
            params: this.monthParams(month, year),
        });
    }
    getBudgetAlerts(month, year) {
        return this.http.get(`${this.base}/budget-alerts`, {
            params: this.monthParams(month, year),
        });
    }
    // Backward-compatible overload helpers if needed in other callers.
    getGoalsProgressLegacy() {
        return this.http.get(`${this.base}/goals-progress`);
    }
    static ɵfac = function DashboardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
