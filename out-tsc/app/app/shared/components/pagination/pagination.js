import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PaginationComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.rangeStart, "\u2013", ctx_r1.rangeEnd);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" sur ", i0.ɵɵpipeBind1(3, 3, ctx_r1.totalElements), " ");
} }
function PaginationComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " 0 r\u00E9sultat ");
} }
function PaginationComponent_Conditional_0_For_12_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 11);
    i0.ɵɵdomListener("click", function PaginationComponent_Conditional_0_For_12_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goTo(item_r4.value)); });
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-[#5048e5]", item_r4.value === ctx_r1.page)("text-white", item_r4.value === ctx_r1.page)("border-[#5048e5]", item_r4.value === ctx_r1.page)("shadow-sm", item_r4.value === ctx_r1.page)("text-slate-600", item_r4.value !== ctx_r1.page)("border-transparent", item_r4.value !== ctx_r1.page)("hover:bg-slate-100", item_r4.value !== ctx_r1.page);
    i0.ɵɵattribute("aria-current", item_r4.value === ctx_r1.page ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r4.value + 1, " ");
} }
function PaginationComponent_Conditional_0_For_12_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 10);
    i0.ɵɵtext(1, " \u2026 ");
    i0.ɵɵdomElementEnd();
} }
function PaginationComponent_Conditional_0_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PaginationComponent_Conditional_0_For_12_Conditional_0_Template, 2, 16, "button", 9)(1, PaginationComponent_Conditional_0_For_12_Conditional_1_Template, 2, 0, "span", 10);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r1.isPageItem(item_r4) ? 0 : 1);
} }
function PaginationComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 0)(1, "p", 1);
    i0.ɵɵconditionalCreate(2, PaginationComponent_Conditional_0_Conditional_2_Template, 4, 5)(3, PaginationComponent_Conditional_0_Conditional_3_Template, 1, 0);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "nav", 2)(5, "button", 3);
    i0.ɵɵdomListener("click", function PaginationComponent_Conditional_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goTo(ctx_r1.page - 1)); });
    i0.ɵɵdomElementStart(6, "span", 4);
    i0.ɵɵtext(7, "chevron_left");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "span", 5);
    i0.ɵɵtext(9, "Pr\u00E9c\u00E9dent");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(10, "div", 6);
    i0.ɵɵrepeaterCreate(11, PaginationComponent_Conditional_0_For_12_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "button", 7);
    i0.ɵɵdomListener("click", function PaginationComponent_Conditional_0_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goTo(ctx_r1.page + 1)); });
    i0.ɵɵdomElementStart(14, "span", 5);
    i0.ɵɵtext(15, "Suivant");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(16, "span", 4);
    i0.ɵɵtext(17, "chevron_right");
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.totalElements > 0 ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵdomProperty("disabled", ctx_r1.isFirst);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.pages);
    i0.ɵɵadvance(2);
    i0.ɵɵdomProperty("disabled", ctx_r1.isLast);
} }
export class PaginationComponent {
    /** Current page — 0-based (Spring convention) */
    page = 0;
    /** Total number of pages */
    totalPages = 0;
    /** Total number of elements (for display) */
    totalElements = 0;
    /** Page size */
    size = 20;
    pageChange = new EventEmitter();
    pages = [];
    get isFirst() { return this.page === 0; }
    get isLast() { return this.page >= this.totalPages - 1; }
    /** 1-based display range, e.g. "1–20 sur 120" */
    get rangeStart() { return this.totalElements === 0 ? 0 : this.page * this.size + 1; }
    get rangeEnd() { return Math.min((this.page + 1) * this.size, this.totalElements); }
    ngOnChanges() {
        this.pages = this.buildPages();
    }
    buildPages() {
        const total = this.totalPages;
        if (total <= 1)
            return [];
        const current = this.page;
        const items = [];
        const addPage = (n) => items.push({ type: 'page', value: n });
        const addGap = () => items.push({ type: 'gap' });
        if (total <= 7) {
            for (let i = 0; i < total; i++)
                addPage(i);
            return items;
        }
        // Always show first 2
        addPage(0);
        addPage(1);
        if (current > 3)
            addGap();
        // Window around current
        const from = Math.max(2, current - 1);
        const to = Math.min(total - 3, current + 1);
        for (let i = from; i <= to; i++)
            addPage(i);
        if (current < total - 4)
            addGap();
        // Always show last 2
        addPage(total - 2);
        addPage(total - 1);
        return items;
    }
    goTo(p) {
        if (p < 0 || p >= this.totalPages || p === this.page)
            return;
        this.pageChange.emit(p);
    }
    isPageItem(item) {
        return item.type === 'page';
    }
    static ɵfac = function PaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { page: "page", totalPages: "totalPages", totalElements: "totalElements", size: "size" }, outputs: { pageChange: "pageChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-between", "gap-4", "py-3"], [1, "text-sm", "text-slate-500", "shrink-0"], ["aria-label", "Pagination", 1, "flex", "items-center", "gap-1"], ["aria-label", "Page pr\u00E9c\u00E9dente", 1, "flex", "items-center", "gap-1", "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "border", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", "enabled:hover:bg-slate-100", "enabled:border-slate-200", "disabled:border-slate-100", "text-slate-600", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-[16px]"], [1, "hidden", "sm:inline"], [1, "flex", "items-center", "gap-1"], ["aria-label", "Page suivante", 1, "flex", "items-center", "gap-1", "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "border", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", "enabled:hover:bg-slate-100", "enabled:border-slate-200", "disabled:border-slate-100", "text-slate-600", 3, "click", "disabled"], [1, "font-medium", "text-slate-700"], [1, "min-w-[36px]", "h-9", "px-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "border", 3, "bg-[#5048e5]", "text-white", "border-[#5048e5]", "shadow-sm", "text-slate-600", "border-transparent", "hover:bg-slate-100"], [1, "min-w-[36px]", "h-9", "flex", "items-end", "justify-center", "pb-1", "text-slate-400", "text-base", "font-bold", "select-none"], [1, "min-w-[36px]", "h-9", "px-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "border", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, PaginationComponent_Conditional_0_Template, 18, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.totalPages > 1 ? 0 : -1);
        } }, dependencies: [CommonModule, i1.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'app-pagination', standalone: true, imports: [CommonModule], template: "@if (totalPages > 1) {\n  <div class=\"flex items-center justify-between gap-4 py-3\">\n\n    <!-- Range info -->\n    <p class=\"text-sm text-slate-500 shrink-0\">\n      @if (totalElements > 0) {\n        <span class=\"font-medium text-slate-700\">{{ rangeStart }}\u2013{{ rangeEnd }}</span>\n        sur {{ totalElements | number }}\n      } @else {\n        0 r\u00E9sultat\n      }\n    </p>\n\n    <!-- Page controls -->\n    <nav class=\"flex items-center gap-1\" aria-label=\"Pagination\">\n\n      <!-- Previous -->\n      <button\n        (click)=\"goTo(page - 1)\"\n        [disabled]=\"isFirst\"\n        class=\"flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors\n          disabled:opacity-40 disabled:cursor-not-allowed\n          enabled:hover:bg-slate-100 enabled:border-slate-200\n          disabled:border-slate-100 text-slate-600\"\n        aria-label=\"Page pr\u00E9c\u00E9dente\"\n      >\n        <span class=\"material-symbols-outlined text-[16px]\">chevron_left</span>\n        <span class=\"hidden sm:inline\">Pr\u00E9c\u00E9dent</span>\n      </button>\n\n      <!-- Page numbers -->\n      <div class=\"flex items-center gap-1\">\n        @for (item of pages; track $index) {\n          @if (isPageItem(item)) {\n            <button\n              (click)=\"goTo(item.value)\"\n              class=\"min-w-[36px] h-9 px-2 rounded-lg text-sm font-medium transition-colors border\"\n              [class.bg-[#5048e5]]=\"item.value === page\"\n              [class.text-white]=\"item.value === page\"\n              [class.border-[#5048e5]]=\"item.value === page\"\n              [class.shadow-sm]=\"item.value === page\"\n              [class.text-slate-600]=\"item.value !== page\"\n              [class.border-transparent]=\"item.value !== page\"\n              [class.hover:bg-slate-100]=\"item.value !== page\"\n              [attr.aria-current]=\"item.value === page ? 'page' : null\"\n            >\n              {{ item.value + 1 }}\n            </button>\n          } @else {\n            <span class=\"min-w-[36px] h-9 flex items-end justify-center pb-1 text-slate-400 text-base font-bold select-none\">\n              &hellip;\n            </span>\n          }\n        }\n      </div>\n\n      <!-- Next -->\n      <button\n        (click)=\"goTo(page + 1)\"\n        [disabled]=\"isLast\"\n        class=\"flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors\n          disabled:opacity-40 disabled:cursor-not-allowed\n          enabled:hover:bg-slate-100 enabled:border-slate-200\n          disabled:border-slate-100 text-slate-600\"\n        aria-label=\"Page suivante\"\n      >\n        <span class=\"hidden sm:inline\">Suivant</span>\n        <span class=\"material-symbols-outlined text-[16px]\">chevron_right</span>\n      </button>\n\n    </nav>\n  </div>\n}\n" }]
    }], null, { page: [{
            type: Input
        }], totalPages: [{
            type: Input
        }], totalElements: [{
            type: Input
        }], size: [{
            type: Input
        }], pageChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/components/pagination/pagination.ts", lineNumber: 12 }); })();
