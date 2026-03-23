import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class TransactionsService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/transactions`;
    getAll(page = 0, size = 200) {
        const params = new HttpParams()
            .set('page', page)
            .set('size', size)
            .set('sort', 'transactionDate,desc');
        return this.http.get(this.base, { params }).pipe(map((res) => this.normalize(res)));
    }
    delete(id) {
        return this.http.delete(`${this.base}/${id}`);
    }
    normalize(res) {
        if (Array.isArray(res))
            return res;
        return res.content ?? [];
    }
    static ɵfac = function TransactionsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TransactionsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TransactionsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
