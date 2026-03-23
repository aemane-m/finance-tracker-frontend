import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: false });
const _forTrack0 = ($index, $item) => $item.route;
function AppSidebar_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7)(1, "span", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.route)("routerLinkActiveOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function AppSidebar_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "a", 19);
    i0.ɵɵlistener("click", function AppSidebar_Conditional_24_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showUserMenu = false); });
    i0.ɵɵelementStart(2, "span", 20);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 21);
    i0.ɵɵelementStart(6, "button", 22);
    i0.ɵɵlistener("click", function AppSidebar_Conditional_24_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.signOut()); });
    i0.ɵɵelementStart(7, "span", 23);
    i0.ɵɵtext(8, "logout");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " Se d\u00E9connecter ");
    i0.ɵɵelementEnd()();
} }
const MAIN_NAV = [
    { label: 'Dashboard', icon: 'dashboard', route: '/app/dashboard' },
    { label: 'Transactions', icon: 'receipt_long', route: '/app/transactions' },
    { label: 'Planifiées', icon: 'schedule', route: '/app/planned' },
    { label: 'Catégories', icon: 'category', route: '/app/categories' },
    { label: 'Budgets', icon: 'account_balance_wallet', route: '/app/budgets' },
    { label: 'Objectifs', icon: 'track_changes', route: '/app/goals' },
    { label: 'Dettes', icon: 'hand_bones', route: '/app/debts' },
    { label: 'Calendrier', icon: 'calendar_today', route: '/app/calendar' },
    { label: 'Import/Export', icon: 'import_export', route: '/app/import-export' },
];
const BOTTOM_NAV = [];
export class AppSidebar {
    authService = inject(AuthService);
    router = inject(Router);
    mainNav = MAIN_NAV;
    bottomNav = BOTTOM_NAV;
    showUserMenu = false;
    userFullName = '';
    userEmail = '';
    userInitials = '';
    async ngOnInit() {
        const user = await this.authService.getCurrentUser();
        if (user) {
            this.userEmail = user.email ?? '';
            this.userFullName = user.user_metadata?.['full_name'] ?? this.userEmail.split('@')[0];
            this.userInitials = this.buildInitials(this.userFullName);
        }
    }
    buildInitials(name) {
        const parts = name.trim().split(/\s+/);
        if (parts.length === 1)
            return parts[0].slice(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    toggleUserMenu() {
        this.showUserMenu = !this.showUserMenu;
    }
    onDocumentClick(event) {
        const target = event.target;
        if (!target.closest('[data-user-menu]')) {
            this.showUserMenu = false;
        }
    }
    async signOut() {
        this.showUserMenu = false;
        const result = await Swal.fire({
            icon: 'question',
            title: 'Se déconnecter ?',
            text: 'Votre session sera fermée.',
            showCancelButton: true,
            confirmButtonText: 'Déconnecter',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#5048e5',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        await this.authService.signOut();
        await this.router.navigate(['/login']);
    }
    static ɵfac = function AppSidebar_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppSidebar)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppSidebar, selectors: [["app-sidebar"]], hostBindings: function AppSidebar_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AppSidebar_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, i0.ɵɵresolveDocument);
        } }, decls: 25, vars: 6, consts: [["data-purpose", "navigation-sidebar", 1, "fixed", "top-0", "left-0", "h-screen", "w-64", "bg-[#FAFAFA]", "border-r", "border-gray-200", "flex", "flex-col", "z-50", "shadow-sm"], [1, "p-6", "pb-4", "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "gap-2", "group", "cursor-pointer"], [1, "w-8", "h-8", "bg-[#0f766e]", "rounded-lg", "flex", "items-center", "justify-center", "shadow-md", "shadow-emerald-200"], [1, "material-symbols-outlined", "text-white"], [1, "text-xl", "font-bold", "text-[#111827]", "tracking-tight"], ["data-purpose", "primary-navigation", 1, "flex-1", "px-3", "mt-4", "space-y-1", "overflow-y-auto", "custom-scrollbar"], ["routerLinkActive", "active-nav bg-emerald-50 text-[#0f766e] font-semibold", 1, "nav-item", "group", "flex", "items-center", "gap-3", "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "text-[#6B7280]", "hover:bg-[#F3F4F6]", "hover:text-[#111827]", "transition-all", 3, "routerLink", "routerLinkActiveOptions"], ["data-purpose", "user-profile-section", "data-user-menu", "", 1, "p-4", "border-t", "border-gray-100", "relative"], [1, "w-full", "flex", "items-center", "justify-between", "p-2", "rounded-xl", "hover:bg-[#F3F4F6]", "transition-colors", "cursor-pointer", "group", 3, "click"], [1, "flex", "items-center", "gap-3", "overflow-hidden"], [1, "w-9", "h-9", "flex-shrink-0", "bg-emerald-100", "border", "border-emerald-200", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-xs", "font-bold", "text-[#0f766e]"], [1, "flex", "flex-col", "min-w-0", "text-left"], [1, "text-sm", "font-semibold", "text-[#111827]", "truncate"], [1, "text-xs", "text-[#6B7280]", "truncate"], [1, "material-symbols-outlined", "text-[#6B7280]", "group-hover:text-[#111827]", "ml-1", "transition-transform", "duration-200"], [1, "absolute", "bottom-full", "left-3", "right-3", "mb-1", "bg-white", "border", "border-slate-200", "rounded-xl", "shadow-lg", "overflow-hidden", "py-1", "z-20"], [1, "material-symbols-outlined", "text-[#6B7280]", "group-hover:text-[#111827]"], ["routerLink", "/app/profile", 1, "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-sm", "text-slate-700", "hover:bg-slate-50", "transition-colors", 3, "click"], [1, "material-symbols-outlined", "text-[18px]", "text-slate-400"], [1, "my-1", "border-t", "border-slate-100"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-sm", "text-red-600", "hover:bg-red-50", "transition-colors", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"]], template: function AppSidebar_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "account_balance");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1", 5);
            i0.ɵɵtext(7, "FinanceApp");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "nav", 6);
            i0.ɵɵrepeaterCreate(9, AppSidebar_For_10_Template, 5, 5, "a", 7, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "footer", 8)(12, "button", 9);
            i0.ɵɵlistener("click", function AppSidebar_Template_button_click_12_listener() { return ctx.toggleUserMenu(); });
            i0.ɵɵelementStart(13, "div", 10)(14, "div", 11)(15, "span", 12);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 13)(18, "span", 14);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span", 15);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "span", 16);
            i0.ɵɵtext(23, " expand_less ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(24, AppSidebar_Conditional_24_Template, 10, 0, "div", 17);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.mainNav);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.userInitials || "T");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.userFullName || "Test");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.userEmail || "aemane@test.com");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("rotate-180", ctx.showUserMenu);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showUserMenu ? 24 : -1);
        } }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: [".custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 10px;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n  font-size: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n}\n\n.active-nav[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: 'FILL' 1;\n  color: #0f766e;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppSidebar, [{
        type: Component,
        args: [{ selector: 'app-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: "<aside class=\"fixed top-0 left-0 h-screen w-64 bg-[#FAFAFA] border-r border-gray-200 flex flex-col z-50 shadow-sm\" data-purpose=\"navigation-sidebar\">\n  <header class=\"p-6 pb-4 flex flex-col gap-1\">\n    <div class=\"flex items-center gap-2 group cursor-pointer\">\n      <div class=\"w-8 h-8 bg-[#0f766e] rounded-lg flex items-center justify-center shadow-md shadow-emerald-200\">\n        <span class=\"material-symbols-outlined text-white\">account_balance</span>\n      </div>\n      <h1 class=\"text-xl font-bold text-[#111827] tracking-tight\">FinanceApp</h1>\n    </div>\n  </header>\n\n  <nav class=\"flex-1 px-3 mt-4 space-y-1 overflow-y-auto custom-scrollbar\" data-purpose=\"primary-navigation\">\n    @for (item of mainNav; track item.route) {\n      <a\n        class=\"nav-item group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all\"\n        [routerLink]=\"item.route\"\n        routerLinkActive=\"active-nav bg-emerald-50 text-[#0f766e] font-semibold\"\n        [routerLinkActiveOptions]=\"{ exact: false }\"\n      >\n        <span class=\"material-symbols-outlined text-[#6B7280] group-hover:text-[#111827]\">{{ item.icon }}</span>\n        <span>{{ item.label }}</span>\n      </a>\n    }\n  </nav>\n\n  <footer class=\"p-4 border-t border-gray-100 relative\" data-purpose=\"user-profile-section\" data-user-menu>\n    <button\n      (click)=\"toggleUserMenu()\"\n      class=\"w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#F3F4F6] transition-colors cursor-pointer group\"\n    >\n      <div class=\"flex items-center gap-3 overflow-hidden\">\n        <div class=\"w-9 h-9 flex-shrink-0 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center\">\n          <span class=\"text-xs font-bold text-[#0f766e]\">{{ userInitials || 'T' }}</span>\n        </div>\n        <div class=\"flex flex-col min-w-0 text-left\">\n          <span class=\"text-sm font-semibold text-[#111827] truncate\">{{ userFullName || 'Test' }}</span>\n          <span class=\"text-xs text-[#6B7280] truncate\">{{ userEmail || 'aemane@test.com' }}</span>\n        </div>\n      </div>\n\n      <span class=\"material-symbols-outlined text-[#6B7280] group-hover:text-[#111827] ml-1 transition-transform duration-200\" [class.rotate-180]=\"showUserMenu\">\n        expand_less\n      </span>\n    </button>\n\n    @if (showUserMenu) {\n      <div class=\"absolute bottom-full left-3 right-3 mb-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden py-1 z-20\">\n        <a\n          routerLink=\"/app/profile\"\n          (click)=\"showUserMenu = false\"\n          class=\"flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors\"\n        >\n          <span class=\"material-symbols-outlined text-[18px] text-slate-400\">settings</span>\n          Settings\n        </a>\n        <div class=\"my-1 border-t border-slate-100\"></div>\n        <button\n          (click)=\"signOut()\"\n          class=\"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors\"\n        >\n          <span class=\"material-symbols-outlined text-[18px]\">logout</span>\n          Se d\u00E9connecter\n        </button>\n      </div>\n    }\n  </footer>\n</aside>\n", styles: [".custom-scrollbar::-webkit-scrollbar {\n  width: 4px;\n}\n\n.custom-scrollbar::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 10px;\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n  font-size: 20px;\n}\n\n.nav-item:hover .material-symbols-outlined {\n  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n}\n\n.active-nav .material-symbols-outlined {\n  font-variation-settings: 'FILL' 1;\n  color: #0f766e;\n}\n"] }]
    }], null, { onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/features/sidebar/pages/sidebar-page/sidebar-page.ts", lineNumber: 34 }); })();
