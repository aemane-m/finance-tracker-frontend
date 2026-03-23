import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class BudgetsService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/budgets`;
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
    static ɵfac = function BudgetsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BudgetsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BudgetsService, factory: BudgetsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BudgetsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
