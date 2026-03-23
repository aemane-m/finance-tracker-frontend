import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class PlannedTransactionsService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/planned-transactions`;
    getAll() {
        return this.http.get(this.base);
    }
    getById(id) {
        return this.http.get(`${this.base}/${id}`);
    }
    create(payload) {
        return this.http.post(this.base, payload);
    }
    update(id, payload) {
        return this.http.put(`${this.base}/${id}`, payload);
    }
    delete(id) {
        return this.http.delete(`${this.base}/${id}`);
    }
    toggle(id) {
        return this.http.patch(`${this.base}/${id}/toggle`, {});
    }
    runNow(id) {
        return this.http.post(`${this.base}/${id}/run-now`, {});
    }
    getRuns(id, page = 0, size = 5) {
        const params = new HttpParams()
            .set('page', page)
            .set('size', size)
            .set('sort', 'dueDate,desc');
        return this.http.get(`${this.base}/${id}/runs`, { params });
    }
    static ɵfac = function PlannedTransactionsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlannedTransactionsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PlannedTransactionsService, factory: PlannedTransactionsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlannedTransactionsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
