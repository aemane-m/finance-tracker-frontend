import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class CalendarService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/calendar/events`;
    getMonth(month) {
        const params = new HttpParams().set('month', month);
        return this.http.get(this.base, { params });
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
    static ɵfac = function CalendarService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CalendarService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
