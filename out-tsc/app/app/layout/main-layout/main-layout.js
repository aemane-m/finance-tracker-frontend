import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebar } from '../../features/sidebar/pages/sidebar-page/sidebar-page';
import * as i0 from "@angular/core";
export class MainLayout {
    static ɵfac = function MainLayout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MainLayout)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MainLayout, selectors: [["app-main-layout"]], decls: 4, vars: 0, consts: [[1, "flex", "min-h-screen", "bg-[#f6f6f8]", "text-slate-900", "antialiased", "overflow-x-hidden"], [1, "ml-64", "flex-1", "min-w-0"]], template: function MainLayout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-sidebar");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterOutlet, AppSidebar], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainLayout, [{
        type: Component,
        args: [{ selector: 'app-main-layout', standalone: true, imports: [RouterOutlet, AppSidebar], template: "<div class=\"flex min-h-screen bg-[#f6f6f8] text-slate-900 antialiased overflow-x-hidden\">\n  <app-sidebar />\n  <div class=\"ml-64 flex-1 min-w-0\">\n    <router-outlet />\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/layout/main-layout/main-layout.ts", lineNumber: 12 }); })();
