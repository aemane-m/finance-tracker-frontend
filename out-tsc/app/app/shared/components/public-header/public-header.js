import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PublicHeader {
    static ɵfac = function PublicHeader_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PublicHeader)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicHeader, selectors: [["app-public-header"]], decls: 2, vars: 0, template: function PublicHeader_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "public-header works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicHeader, [{
        type: Component,
        args: [{ selector: 'app-public-header', imports: [], template: "<p>public-header works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicHeader, { className: "PublicHeader", filePath: "src/app/shared/components/public-header/public-header.ts", lineNumber: 9 }); })();
