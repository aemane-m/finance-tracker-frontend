import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class DebtsService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/debts`;
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
    registerPayment(id, payload) {
        return this.http.patch(`${this.base}/${id}/payment`, payload);
    }
    getPayments(id, page = 0, size = 5) {
        const params = new HttpParams()
            .set('page', page)
            .set('size', size)
            .set('sort', 'paymentDate,desc');
        return this.http.get(`${this.base}/${id}/payments`, { params });
    }
    getSummary() {
        return this.http.get(`${this.base}/summary`);
    }
    static ɵfac = function DebtsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DebtsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DebtsService, factory: DebtsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DebtsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
