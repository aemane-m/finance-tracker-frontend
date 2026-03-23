import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PublicFooter {
    static ɵfac = function PublicFooter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PublicFooter)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicFooter, selectors: [["app-public-footer"]], decls: 2, vars: 0, template: function PublicFooter_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "public-footer works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicFooter, [{
        type: Component,
        args: [{ selector: 'app-public-footer', imports: [], template: "<p>public-footer works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicFooter, { className: "PublicFooter", filePath: "src/app/shared/components/public-footer/public-footer.ts", lineNumber: 9 }); })();
