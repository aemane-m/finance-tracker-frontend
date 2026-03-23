import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class GoalsService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/goals`;
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
    contribute(id, payload) {
        return this.http.patch(`${this.base}/${id}/contribute`, payload);
    }
    getContributions(id, page = 0, size = 5) {
        const params = new HttpParams()
            .set('page', page)
            .set('size', size)
            .set('sort', 'contributionDate,desc');
        return this.http.get(`${this.base}/${id}/contributions`, { params });
    }
    static ɵfac = function GoalsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GoalsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GoalsService, factory: GoalsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoalsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
