import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
export class ImportExportService {
    http = inject(HttpClient);
    base = `${environment.apiBaseUrl}/transactions`;
    importCsv(file) {
        const fd = new FormData();
        fd.append('file', file);
        return this.http.post(`${this.base}/import`, fd);
    }
    exportData(params) {
        let p = new HttpParams()
            .set('format', params.format)
            .set('range', params.range);
        if (params.dateFrom)
            p = p.set('dateFrom', params.dateFrom);
        if (params.dateTo)
            p = p.set('dateTo', params.dateTo);
        return this.http.get(`${this.base}/export`, {
            params: p,
            responseType: 'blob',
        });
    }
    static ɵfac = function ImportExportService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportExportService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImportExportService, factory: ImportExportService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
