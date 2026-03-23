import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { TransactionsService } from '../../services/transactions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [1, 2, 3, 4, 5, 6];
function TransactionsPage_For_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", category_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(category_r1);
} }
function TransactionsPage_Conditional_57_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Type: ", ctx_r2.selectedType, " ");
} }
function TransactionsPage_Conditional_57_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selectedDateRange === "month" ? "This Month" : "All Time", " ");
} }
function TransactionsPage_Conditional_57_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selectedCategory, " ");
} }
function TransactionsPage_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵconditionalCreate(1, TransactionsPage_Conditional_57_Conditional_1_Template, 2, 1, "span", 41);
    i0.ɵɵconditionalCreate(2, TransactionsPage_Conditional_57_Conditional_2_Template, 2, 1, "span", 41);
    i0.ɵɵconditionalCreate(3, TransactionsPage_Conditional_57_Conditional_3_Template, 2, 1, "span", 41);
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function TransactionsPage_Conditional_57_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clearFilters()); });
    i0.ɵɵtext(5, " Clear all ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.selectedType !== "ALL" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.selectedDateRange !== "30d" ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.selectedCategory !== "ALL" ? 3 : -1);
} }
function TransactionsPage_Conditional_59_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 43);
} }
function TransactionsPage_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵrepeaterCreate(1, TransactionsPage_Conditional_59_For_2_Template, 1, 0, "div", 43, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function TransactionsPage_Conditional_60_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "span", 44);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 46);
    i0.ɵɵlistener("click", function TransactionsPage_Conditional_60_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.loadTransactions()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.error);
} }
function TransactionsPage_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "span", 47);
    i0.ɵɵtext(2, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 48);
    i0.ɵɵtext(4, "No transaction matches your filters.");
    i0.ɵɵelementEnd()();
} }
function TransactionsPage_Conditional_62_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 56)(1, "td", 59)(2, "div", 60);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 61);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td", 59)(9, "div", 62)(10, "div", 63)(11, "span", 6);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 64);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "td", 59)(16, "span", 65);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td", 66)(19, "span", 67);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 68)(22, "div", 69);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td", 68)(26, "div", 70)(27, "button", 71)(28, "span", 72);
    i0.ɵɵtext(29, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "button", 73);
    i0.ɵɵlistener("click", function TransactionsPage_Conditional_62_For_18_Template_button_click_30_listener() { const tx_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteTransaction(tx_r7)); });
    i0.ɵɵelementStart(31, "span", 72);
    i0.ɵɵtext(32, "delete");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const tx_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 15, tx_r7.transactionDate, "MMM dd, yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 18, tx_r7.transactionDate, "HH:mm"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.rowIcon(tx_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tx_r7.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.displayCategory(tx_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-emerald-500", tx_r7.type === "INCOME")("text-rose-500", tx_r7.type === "EXPENSE");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tx_r7.type, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r2.amountClass(tx_r7));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r2.amountPrefix(tx_r7), "", i0.ɵɵpipeBind2(24, 21, tx_r7.amount < 0 ? -tx_r7.amount : tx_r7.amount, "1.2-2"), " \u20AC ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r2.deleting);
} }
function TransactionsPage_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "table", 50)(2, "thead")(3, "tr", 51)(4, "th", 52);
    i0.ɵɵtext(5, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 52);
    i0.ɵɵtext(7, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 52);
    i0.ɵɵtext(9, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 53);
    i0.ɵɵtext(11, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 54);
    i0.ɵɵtext(13, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 54);
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody", 55);
    i0.ɵɵrepeaterCreate(17, TransactionsPage_Conditional_62_For_18_Template, 33, 24, "tr", 56, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 57)(20, "app-pagination", 58);
    i0.ɵɵlistener("pageChange", function TransactionsPage_Conditional_62_Template_app_pagination_pageChange_20_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onPageChange($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r2.pagedTransactions);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("page", ctx_r2.page)("totalPages", ctx_r2.totalPages)("totalElements", ctx_r2.filteredTransactions.length)("size", ctx_r2.pageSize);
} }
export class TransactionsPage {
    transactionsService = inject(TransactionsService);
    loading = true;
    deleting = false;
    error = null;
    search = '';
    selectedType = 'ALL';
    selectedCategory = 'ALL';
    selectedDateRange = '30d';
    minAmount = null;
    maxAmount = null;
    transactions = [];
    page = 0;
    pageSize = 10;
    ngOnInit() {
        void this.loadTransactions();
    }
    get categories() {
        const unique = new Set(this.transactions
            .map((t) => this.displayCategory(t))
            .filter((c) => c.length > 0));
        return Array.from(unique).sort((a, b) => a.localeCompare(b));
    }
    get filteredTransactions() {
        const now = new Date();
        return this.transactions.filter((t) => {
            const text = `${t.label} ${t.note ?? ''} ${t.merchant ?? ''}`.toLowerCase();
            const query = this.search.trim().toLowerCase();
            if (query && !text.includes(query))
                return false;
            if (this.selectedType !== 'ALL' && t.type !== this.selectedType)
                return false;
            const category = this.displayCategory(t);
            if (this.selectedCategory !== 'ALL' && category !== this.selectedCategory)
                return false;
            if (this.selectedDateRange !== 'all') {
                const txDate = new Date(t.transactionDate);
                if (Number.isNaN(txDate.getTime()))
                    return false;
                if (this.selectedDateRange === '30d') {
                    const msDiff = now.getTime() - txDate.getTime();
                    if (msDiff > 30 * 24 * 60 * 60 * 1000)
                        return false;
                }
                else if (txDate.getMonth() !== now.getMonth() ||
                    txDate.getFullYear() !== now.getFullYear()) {
                    return false;
                }
            }
            const absAmount = Math.abs(t.amount);
            if (this.minAmount !== null && absAmount < this.minAmount)
                return false;
            if (this.maxAmount !== null && absAmount > this.maxAmount)
                return false;
            return true;
        });
    }
    get pagedTransactions() {
        const start = this.page * this.pageSize;
        return this.filteredTransactions.slice(start, start + this.pageSize);
    }
    get totalPages() {
        return Math.max(1, Math.ceil(this.filteredTransactions.length / this.pageSize));
    }
    get totalIncome() {
        return this.filteredTransactions
            .filter((t) => t.type === 'INCOME')
            .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    }
    get totalExpense() {
        return this.filteredTransactions
            .filter((t) => t.type === 'EXPENSE')
            .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    }
    get netFlow() {
        return this.totalIncome - this.totalExpense;
    }
    get activeFilterCount() {
        let count = 0;
        if (this.search.trim())
            count++;
        if (this.selectedType !== 'ALL')
            count++;
        if (this.selectedCategory !== 'ALL')
            count++;
        if (this.selectedDateRange !== '30d')
            count++;
        if (this.minAmount !== null)
            count++;
        if (this.maxAmount !== null)
            count++;
        return count;
    }
    async loadTransactions() {
        this.loading = true;
        this.error = null;
        this.page = 0;
        try {
            this.transactions = await firstValueFrom(this.transactionsService.getAll());
        }
        catch {
            this.error = 'Impossible de charger les transactions.';
        }
        finally {
            this.loading = false;
        }
    }
    onFiltersChanged() {
        this.page = 0;
    }
    clearFilters() {
        this.search = '';
        this.selectedType = 'ALL';
        this.selectedCategory = 'ALL';
        this.selectedDateRange = '30d';
        this.minAmount = null;
        this.maxAmount = null;
        this.page = 0;
    }
    onPageChange(p) {
        this.page = p;
    }
    async deleteTransaction(tx) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer cette transaction ?',
            text: `"${tx.label}" sera supprimee.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.deleting = true;
        try {
            await firstValueFrom(this.transactionsService.delete(tx.id));
            await Swal.fire({
                icon: 'success',
                title: 'Transaction supprimee',
                timer: 1200,
                showConfirmButton: false,
            });
            await this.loadTransactions();
        }
        catch {
            await Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Impossible de supprimer cette transaction.',
                confirmButtonColor: '#5048e5',
            });
        }
        finally {
            this.deleting = false;
        }
    }
    async showCreateNotReady() {
        await Swal.fire({
            icon: 'info',
            title: 'Formulaire en cours',
            text: 'La creation de transaction sera reliee ici.',
            confirmButtonColor: '#5048e5',
        });
    }
    displayCategory(tx) {
        return tx.categoryName?.trim() || 'Uncategorized';
    }
    amountClass(tx) {
        return tx.type === 'INCOME' ? 'text-emerald-600' : 'text-rose-600';
    }
    amountPrefix(tx) {
        return tx.type === 'INCOME' ? '+' : '-';
    }
    rowIcon(tx) {
        if (tx.type === 'INCOME')
            return 'payments';
        const name = this.displayCategory(tx).toLowerCase();
        if (name.includes('food') || name.includes('restaurant'))
            return 'restaurant';
        if (name.includes('house') || name.includes('rent') || name.includes('housing'))
            return 'home';
        if (name.includes('shop'))
            return 'shopping_bag';
        return 'receipt_long';
    }
    trackById(_, tx) {
        return tx.id;
    }
    static ɵfac = function TransactionsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TransactionsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TransactionsPage, selectors: [["app-transactions-page"]], decls: 82, vars: 21, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "max-w-7xl", "mx-auto", "w-full", "px-4", "md:px-8", "py-8"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "text-slate-500", "mt-1", "text-sm", "font-medium"], [1, "flex", "items-center", "justify-center", "gap-2", "bg-[#5048e5]", "hover:bg-[#4338ca]", "text-white", "px-5", "py-2.5", "rounded-lg", "font-bold", "text-sm", "shadow-lg", "shadow-[#5048e5]/20", "transition-all", "active:scale-95", 3, "click"], [1, "material-symbols-outlined", "text-sm"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "mb-6", "shadow-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-6", "gap-4", "items-end"], [1, "lg:col-span-2", "space-y-1.5"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider", "px-1"], [1, "relative", "flex", "items-center"], [1, "material-symbols-outlined", "absolute", "left-3", "text-slate-400", "text-lg"], ["placeholder", "Description, merchant, note...", "type", "text", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-slate-50", "border-none", "rounded-lg", "focus:ring-2", "focus:ring-[#5048e5]/50", "text-sm", "placeholder:text-slate-400", 3, "ngModelChange", "ngModel"], [1, "space-y-1.5"], [1, "w-full", "py-2", "bg-slate-50", "border-none", "rounded-lg", "focus:ring-2", "focus:ring-[#5048e5]/50", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "INCOME"], ["value", "EXPENSE"], [3, "value"], ["value", "30d"], ["value", "month"], ["value", "all"], [1, "flex", "items-center", "gap-2"], ["placeholder", "Min", "type", "number", "min", "0", 1, "w-full", "py-2", "px-3", "bg-slate-50", "border-none", "rounded-lg", "text-sm", "placeholder:text-slate-400", 3, "ngModelChange", "ngModel"], [1, "text-slate-400"], ["placeholder", "Max", "type", "number", "min", "0", 1, "w-full", "py-2", "px-3", "bg-slate-50", "border-none", "rounded-lg", "text-sm", "placeholder:text-slate-400", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "gap-2", "mt-4", "pt-4", "border-t", "border-slate-100"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "p-6", "space-y-3"], [1, "p-10", "text-center"], [1, "mt-8", "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "p-4", "bg-emerald-50", "border", "border-emerald-100", "rounded-xl"], [1, "text-xs", "font-bold", "text-emerald-600", "uppercase", "tracking-widest", "mb-1"], [1, "text-2xl", "font-black", "text-emerald-700"], [1, "p-4", "bg-rose-50", "border", "border-rose-100", "rounded-xl"], [1, "text-xs", "font-bold", "text-rose-600", "uppercase", "tracking-widest", "mb-1"], [1, "text-2xl", "font-black", "text-rose-700"], [1, "p-4", "bg-[#5048e5]/5", "border", "border-[#5048e5]/10", "rounded-xl"], [1, "text-xs", "font-bold", "text-[#5048e5]", "uppercase", "tracking-widest", "mb-1"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1", "bg-[#5048e5]/10", "text-[#5048e5]", "text-xs", "font-semibold", "rounded-full"], [1, "text-slate-400", "hover:text-slate-600", "text-xs", "font-medium", "px-2", 3, "click"], [1, "h-12", "rounded", "bg-slate-200", "animate-pulse"], [1, "material-symbols-outlined", "text-4xl", "text-red-300", "mb-2"], [1, "text-slate-600", "font-medium"], [1, "mt-3", "text-sm", "text-[#5048e5]", "hover:underline", 3, "click"], [1, "material-symbols-outlined", "text-4xl", "text-slate-300", "mb-2"], [1, "text-slate-500"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-slate-50", "border-b", "border-slate-100"], [1, "px-6", "py-4", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider", "text-center"], [1, "px-6", "py-4", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/50", "transition-colors", "group"], [1, "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-100"], [3, "pageChange", "page", "totalPages", "totalElements", "size"], [1, "px-6", "py-4"], [1, "text-sm", "font-semibold", "text-slate-700"], [1, "text-[10px]", "text-slate-400", "font-medium"], [1, "flex", "items-center", "gap-3"], [1, "size-8", "rounded-lg", "bg-slate-100", "flex", "items-center", "justify-center", "text-slate-500"], [1, "text-sm", "font-medium", "text-slate-900"], [1, "inline-flex", "px-2.5", "py-1", "rounded-md", "bg-slate-100", "text-slate-600", "text-xs", "font-semibold"], [1, "px-6", "py-4", "text-center"], [1, "font-bold", "text-xs", "uppercase", "tracking-widest"], [1, "px-6", "py-4", "text-right"], [1, "text-sm", "font-bold"], [1, "flex", "justify-end", "gap-2", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "p-1.5", "text-slate-400", "hover:text-[#5048e5]", "hover:bg-[#5048e5]/10", "rounded-lg"], [1, "material-symbols-outlined", "text-lg"], [1, "p-1.5", "text-slate-400", "hover:text-rose-500", "hover:bg-rose-50", "rounded-lg", "disabled:opacity-40", 3, "click", "disabled"]], template: function TransactionsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
            i0.ɵɵtext(5, "Transactions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7, "Review and manage your financial history");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function TransactionsPage_Template_button_click_8_listener() { return ctx.showCreateNotReady(); });
            i0.ɵɵelementStart(9, "span", 6);
            i0.ɵɵtext(10, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Add Transaction ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "label", 10);
            i0.ɵɵtext(16, "Search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 11)(18, "span", 12);
            i0.ɵɵtext(19, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_20_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_20_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div", 14)(22, "label", 10);
            i0.ɵɵtext(23, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_24_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementStart(25, "option", 16);
            i0.ɵɵtext(26, "All Types");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "option", 17);
            i0.ɵɵtext(28, "Income");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "option", 18);
            i0.ɵɵtext(30, "Expense");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "div", 14)(32, "label", 10);
            i0.ɵɵtext(33, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_34_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_34_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementStart(35, "option", 16);
            i0.ɵɵtext(36, "All Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(37, TransactionsPage_For_38_Template, 2, 2, "option", 19, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 14)(40, "label", 10);
            i0.ɵɵtext(41, "Date Range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_42_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedDateRange, $event) || (ctx.selectedDateRange = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_select_ngModelChange_42_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementStart(43, "option", 20);
            i0.ɵɵtext(44, "Last 30 Days");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "option", 21);
            i0.ɵɵtext(46, "This Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "option", 22);
            i0.ɵɵtext(48, "All Time");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 14)(50, "label", 10);
            i0.ɵɵtext(51, "Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 23)(53, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_53_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.minAmount, $event) || (ctx.minAmount = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_53_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "span", 25);
            i0.ɵɵtext(55, "-");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "input", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_56_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.maxAmount, $event) || (ctx.maxAmount = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TransactionsPage_Template_input_ngModelChange_56_listener() { return ctx.onFiltersChanged(); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(57, TransactionsPage_Conditional_57_Template, 6, 3, "div", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 28);
            i0.ɵɵconditionalCreate(59, TransactionsPage_Conditional_59_Template, 3, 1, "div", 29)(60, TransactionsPage_Conditional_60_Template, 7, 1, "div", 30)(61, TransactionsPage_Conditional_61_Template, 5, 0, "div", 30)(62, TransactionsPage_Conditional_62_Template, 21, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 31)(64, "div", 32)(65, "div", 33);
            i0.ɵɵtext(66, "Total Income");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 34);
            i0.ɵɵtext(68);
            i0.ɵɵpipe(69, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "div", 35)(71, "div", 36);
            i0.ɵɵtext(72, "Total Expenses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 37);
            i0.ɵɵtext(74);
            i0.ɵɵpipe(75, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 38)(77, "div", 39);
            i0.ɵɵtext(78, "Net Flow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "div", 40);
            i0.ɵɵtext(80);
            i0.ɵɵpipe(81, "number");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(20);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedType);
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCategory);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedDateRange);
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.minAmount);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.maxAmount);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeFilterCount > 0 ? 57 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading ? 59 : ctx.error ? 60 : ctx.filteredTransactions.length === 0 ? 61 : 62);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("+", i0.ɵɵpipeBind2(69, 12, ctx.totalIncome, "1.2-2"), " \u20AC");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("-", i0.ɵɵpipeBind2(75, 15, ctx.totalExpense, "1.2-2"), " \u20AC");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("", ctx.netFlow >= 0 ? "+" : "-", "", i0.ɵɵpipeBind2(81, 18, ctx.netFlow < 0 ? -ctx.netFlow : ctx.netFlow, "1.2-2"), " \u20AC");
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.NgModel, PaginationComponent, i2.DecimalPipe, i2.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TransactionsPage, [{
        type: Component,
        args: [{ selector: 'app-transactions-page', standalone: true, imports: [CommonModule, FormsModule, PaginationComponent], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <main class=\"max-w-7xl mx-auto w-full px-4 md:px-8 py-8\">\n    <div class=\"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8\">\n      <div>\n        <h1 class=\"text-3xl font-bold tracking-tight text-slate-900\">Transactions</h1>\n        <p class=\"text-slate-500 mt-1 text-sm font-medium\">Review and manage your financial history</p>\n      </div>\n      <button\n        (click)=\"showCreateNotReady()\"\n        class=\"flex items-center justify-center gap-2 bg-[#5048e5] hover:bg-[#4338ca] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-[#5048e5]/20 transition-all active:scale-95\"\n      >\n        <span class=\"material-symbols-outlined text-sm\">add</span>\n        Add Transaction\n      </button>\n    </div>\n\n    <div class=\"bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm\">\n      <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end\">\n        <div class=\"lg:col-span-2 space-y-1.5\">\n          <label class=\"text-xs font-bold text-slate-500 uppercase tracking-wider px-1\">Search</label>\n          <div class=\"relative flex items-center\">\n            <span class=\"material-symbols-outlined absolute left-3 text-slate-400 text-lg\">search</span>\n            <input\n              [(ngModel)]=\"search\"\n              (ngModelChange)=\"onFiltersChanged()\"\n              class=\"w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#5048e5]/50 text-sm placeholder:text-slate-400\"\n              placeholder=\"Description, merchant, note...\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\"space-y-1.5\">\n          <label class=\"text-xs font-bold text-slate-500 uppercase tracking-wider px-1\">Type</label>\n          <select\n            [(ngModel)]=\"selectedType\"\n            (ngModelChange)=\"onFiltersChanged()\"\n            class=\"w-full py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#5048e5]/50 text-sm\"\n          >\n            <option value=\"ALL\">All Types</option>\n            <option value=\"INCOME\">Income</option>\n            <option value=\"EXPENSE\">Expense</option>\n          </select>\n        </div>\n\n        <div class=\"space-y-1.5\">\n          <label class=\"text-xs font-bold text-slate-500 uppercase tracking-wider px-1\">Category</label>\n          <select\n            [(ngModel)]=\"selectedCategory\"\n            (ngModelChange)=\"onFiltersChanged()\"\n            class=\"w-full py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#5048e5]/50 text-sm\"\n          >\n            <option value=\"ALL\">All Categories</option>\n            @for (category of categories; track category) {\n              <option [value]=\"category\">{{ category }}</option>\n            }\n          </select>\n        </div>\n\n        <div class=\"space-y-1.5\">\n          <label class=\"text-xs font-bold text-slate-500 uppercase tracking-wider px-1\">Date Range</label>\n          <select\n            [(ngModel)]=\"selectedDateRange\"\n            (ngModelChange)=\"onFiltersChanged()\"\n            class=\"w-full py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#5048e5]/50 text-sm\"\n          >\n            <option value=\"30d\">Last 30 Days</option>\n            <option value=\"month\">This Month</option>\n            <option value=\"all\">All Time</option>\n          </select>\n        </div>\n\n        <div class=\"space-y-1.5\">\n          <label class=\"text-xs font-bold text-slate-500 uppercase tracking-wider px-1\">Amount</label>\n          <div class=\"flex items-center gap-2\">\n            <input\n              [(ngModel)]=\"minAmount\"\n              (ngModelChange)=\"onFiltersChanged()\"\n              class=\"w-full py-2 px-3 bg-slate-50 border-none rounded-lg text-sm placeholder:text-slate-400\"\n              placeholder=\"Min\"\n              type=\"number\"\n              min=\"0\"\n            />\n            <span class=\"text-slate-400\">-</span>\n            <input\n              [(ngModel)]=\"maxAmount\"\n              (ngModelChange)=\"onFiltersChanged()\"\n              class=\"w-full py-2 px-3 bg-slate-50 border-none rounded-lg text-sm placeholder:text-slate-400\"\n              placeholder=\"Max\"\n              type=\"number\"\n              min=\"0\"\n            />\n          </div>\n        </div>\n      </div>\n\n      @if (activeFilterCount > 0) {\n        <div class=\"flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100\">\n          @if (selectedType !== 'ALL') {\n            <span class=\"inline-flex items-center gap-1.5 px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-semibold rounded-full\">\n              Type: {{ selectedType }}\n            </span>\n          }\n          @if (selectedDateRange !== '30d') {\n            <span class=\"inline-flex items-center gap-1.5 px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-semibold rounded-full\">\n              {{ selectedDateRange === 'month' ? 'This Month' : 'All Time' }}\n            </span>\n          }\n          @if (selectedCategory !== 'ALL') {\n            <span class=\"inline-flex items-center gap-1.5 px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-semibold rounded-full\">\n              {{ selectedCategory }}\n            </span>\n          }\n          <button\n            (click)=\"clearFilters()\"\n            class=\"text-slate-400 hover:text-slate-600 text-xs font-medium px-2\"\n          >\n            Clear all\n          </button>\n        </div>\n      }\n    </div>\n\n    <div class=\"bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden\">\n      @if (loading) {\n        <div class=\"p-6 space-y-3\">\n          @for (i of [1,2,3,4,5,6]; track i) {\n            <div class=\"h-12 rounded bg-slate-200 animate-pulse\"></div>\n          }\n        </div>\n      } @else if (error) {\n        <div class=\"p-10 text-center\">\n          <span class=\"material-symbols-outlined text-4xl text-red-300 mb-2\">error_outline</span>\n          <p class=\"text-slate-600 font-medium\">{{ error }}</p>\n          <button (click)=\"loadTransactions()\" class=\"mt-3 text-sm text-[#5048e5] hover:underline\">Retry</button>\n        </div>\n      } @else if (filteredTransactions.length === 0) {\n        <div class=\"p-10 text-center\">\n          <span class=\"material-symbols-outlined text-4xl text-slate-300 mb-2\">receipt_long</span>\n          <p class=\"text-slate-500\">No transaction matches your filters.</p>\n        </div>\n      } @else {\n        <div class=\"overflow-x-auto\">\n          <table class=\"w-full text-left border-collapse\">\n            <thead>\n              <tr class=\"bg-slate-50 border-b border-slate-100\">\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider\">Date</th>\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider\">Label</th>\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider\">Category</th>\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center\">Type</th>\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right\">Amount</th>\n                <th class=\"px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right\">Actions</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-slate-100\">\n              @for (tx of pagedTransactions; track trackById($index, tx)) {\n                <tr class=\"hover:bg-slate-50/50 transition-colors group\">\n                  <td class=\"px-6 py-4\">\n                    <div class=\"text-sm font-semibold text-slate-700\">{{ tx.transactionDate | date:'MMM dd, yyyy' }}</div>\n                    <div class=\"text-[10px] text-slate-400 font-medium\">{{ tx.transactionDate | date:'HH:mm' }}</div>\n                  </td>\n                  <td class=\"px-6 py-4\">\n                    <div class=\"flex items-center gap-3\">\n                      <div class=\"size-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500\">\n                        <span class=\"material-symbols-outlined text-sm\">{{ rowIcon(tx) }}</span>\n                      </div>\n                      <div class=\"text-sm font-medium text-slate-900\">{{ tx.label }}</div>\n                    </div>\n                  </td>\n                  <td class=\"px-6 py-4\">\n                    <span class=\"inline-flex px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold\">{{ displayCategory(tx) }}</span>\n                  </td>\n                  <td class=\"px-6 py-4 text-center\">\n                    <span class=\"font-bold text-xs uppercase tracking-widest\" [class.text-emerald-500]=\"tx.type === 'INCOME'\" [class.text-rose-500]=\"tx.type === 'EXPENSE'\">\n                      {{ tx.type }}\n                    </span>\n                  </td>\n                  <td class=\"px-6 py-4 text-right\">\n                    <div class=\"text-sm font-bold\" [class]=\"amountClass(tx)\">\n                      {{ amountPrefix(tx) }}{{ (tx.amount < 0 ? -tx.amount : tx.amount) | number:'1.2-2' }} \u20AC\n                    </div>\n                  </td>\n                  <td class=\"px-6 py-4 text-right\">\n                    <div class=\"flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity\">\n                      <button class=\"p-1.5 text-slate-400 hover:text-[#5048e5] hover:bg-[#5048e5]/10 rounded-lg\">\n                        <span class=\"material-symbols-outlined text-lg\">edit</span>\n                      </button>\n                      <button\n                        (click)=\"deleteTransaction(tx)\"\n                        [disabled]=\"deleting\"\n                        class=\"p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg disabled:opacity-40\"\n                      >\n                        <span class=\"material-symbols-outlined text-lg\">delete</span>\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"px-6 py-4 bg-slate-50 border-t border-slate-100\">\n          <app-pagination\n            [page]=\"page\"\n            [totalPages]=\"totalPages\"\n            [totalElements]=\"filteredTransactions.length\"\n            [size]=\"pageSize\"\n            (pageChange)=\"onPageChange($event)\"\n          />\n        </div>\n      }\n    </div>\n\n    <div class=\"mt-8 grid grid-cols-1 md:grid-cols-3 gap-6\">\n      <div class=\"p-4 bg-emerald-50 border border-emerald-100 rounded-xl\">\n        <div class=\"text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1\">Total Income</div>\n        <div class=\"text-2xl font-black text-emerald-700\">+{{ totalIncome | number:'1.2-2' }} \u20AC</div>\n      </div>\n      <div class=\"p-4 bg-rose-50 border border-rose-100 rounded-xl\">\n        <div class=\"text-xs font-bold text-rose-600 uppercase tracking-widest mb-1\">Total Expenses</div>\n        <div class=\"text-2xl font-black text-rose-700\">-{{ totalExpense | number:'1.2-2' }} \u20AC</div>\n      </div>\n      <div class=\"p-4 bg-[#5048e5]/5 border border-[#5048e5]/10 rounded-xl\">\n        <div class=\"text-xs font-bold text-[#5048e5] uppercase tracking-widest mb-1\">Net Flow</div>\n        <div class=\"text-2xl font-black text-slate-900\">{{ netFlow >= 0 ? '+' : '-' }}{{ (netFlow < 0 ? -netFlow : netFlow) | number:'1.2-2' }} \u20AC</div>\n      </div>\n    </div>\n  </main>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TransactionsPage, { className: "TransactionsPage", filePath: "src/app/features/transactions/pages/transactions-page/transactions-page.ts", lineNumber: 18 }); })();
