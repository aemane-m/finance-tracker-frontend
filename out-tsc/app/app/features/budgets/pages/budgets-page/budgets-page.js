import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { BudgetsService } from '../../services/budgets.service';
import { CategoriesService } from '../../../categories/services/categories.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2, 3, 4, 5, 6];
const _forTrack0 = ($index, $item) => $item.id;
function BudgetsPage_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function BudgetsPage_Conditional_17_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
function BudgetsPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵrepeaterCreate(1, BudgetsPage_Conditional_17_For_2_Template, 1, 0, "div", 12, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵrepeaterCreate(4, BudgetsPage_Conditional_17_For_5_Template, 1, 0, "div", 14, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(1, _c1));
} }
function BudgetsPage_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "span", 15);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 17);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_18_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.retryLoad()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function BudgetsPage_Conditional_19_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    i0.ɵɵtext(3, "pie_chart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h3", 29);
    i0.ɵɵtext(5, "No budgets yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 30);
    i0.ɵɵtext(7, "Create your first budget to track spending by category.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 31);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_19_Conditional_29_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵtext(9, "Create Budget");
    i0.ɵɵelementEnd()();
} }
function BudgetsPage_Conditional_19_Conditional_30_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 46)(2, "div", 47)(3, "span", 35);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 48)(6, "button", 49);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_19_Conditional_30_For_2_Template_button_click_6_listener() { const budget_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openEdit(budget_r6)); });
    i0.ɵɵelementStart(7, "span", 35);
    i0.ɵɵtext(8, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 49);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_19_Conditional_30_For_2_Template_button_click_9_listener() { const budget_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteBudget(budget_r6)); });
    i0.ɵɵelementStart(10, "span", 35);
    i0.ɵɵtext(11, "more_vert");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "h3", 50);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 51);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵpipe(17, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 52)(19, "div", 53)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 54);
    i0.ɵɵelement(24, "div", 55);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const budget_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", (budget_r6.categoryColor || "#5048e5") + "1A")("color", budget_r6.categoryColor || "#5048e5");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(budget_r6.categoryIcon || "pie_chart");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(budget_r6.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(16, 15, budget_r6.monthlyLimit * budget_r6.alertThreshold / 100, "1.0-0"), " / ", i0.ɵɵpipeBind2(17, 18, budget_r6.monthlyLimit, "1.0-0"), " \u20AC");
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(ctx_r1.thresholdTextColor(budget_r6.alertThreshold));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(22, 21, budget_r6.alertThreshold, "1.0-1"), "% used");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.thresholdColor(budget_r6.alertThreshold));
    i0.ɵɵstyleProp("width", ctx_r1.thresholdBarWidth(budget_r6));
} }
function BudgetsPage_Conditional_19_Conditional_30_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 56)(2, "div", 5)(3, "div", 57)(4, "span", 58);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 59);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "td", 60);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td", 61);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 56)(14, "span", 62);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 63)(17, "button", 64)(18, "span", 7);
    i0.ɵɵtext(19, "chevron_right");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const budget_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(budget_r7.categoryIcon || "pie_chart");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(budget_r7.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.pseudoLastTxDate($index_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("- ", i0.ɵɵpipeBind2(12, 7, budget_r7.monthlyLimit * budget_r7.alertThreshold / 100, "1.2-2"), " \u20AC");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.statusClass(budget_r7));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(budget_r7), " ");
} }
function BudgetsPage_Conditional_19_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵrepeaterCreate(1, BudgetsPage_Conditional_19_Conditional_30_For_2_Template, 25, 24, "div", 32, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_19_Conditional_30_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵelementStart(4, "div", 34)(5, "span", 35);
    i0.ɵɵtext(6, "add");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 36);
    i0.ɵɵtext(8, "Add Category");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 37)(10, "div", 38)(11, "h3", 39);
    i0.ɵɵtext(12, "Recent Budget Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 40);
    i0.ɵɵtext(14, "View all transactions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 41)(16, "table", 42)(17, "thead")(18, "tr", 43)(19, "th", 44);
    i0.ɵɵtext(20, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 44);
    i0.ɵɵtext(22, "Last Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 44);
    i0.ɵɵtext(24, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th", 44);
    i0.ɵɵtext(26, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "th", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "tbody", 45);
    i0.ɵɵrepeaterCreate(29, BudgetsPage_Conditional_19_Conditional_30_For_30_Template, 20, 10, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.budgets);
    i0.ɵɵadvance(28);
    i0.ɵɵrepeater(ctx_r1.budgets.slice(0, 6));
} }
function BudgetsPage_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 18)(2, "p", 19);
    i0.ɵɵtext(3, "Spent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 20);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 21)(8, "span", 22);
    i0.ɵɵtext(9, "arrow_downward");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11, "Based on alert configuration");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 18)(13, "p", 19);
    i0.ɵɵtext(14, "Remaining");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p", 20);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 23);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 18)(22, "p", 19);
    i0.ɵɵtext(23, "Savings Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p", 24);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 25);
    i0.ɵɵtext(28, "Keep it up!");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(29, BudgetsPage_Conditional_19_Conditional_29_Template, 10, 0, "div", 26)(30, BudgetsPage_Conditional_19_Conditional_30_Template, 31, 0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(6, 5, ctx_r1.estimatedSpent, "1.0-0"), " \u20AC");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(17, 8, ctx_r1.estimatedRemaining, "1.0-0"), " \u20AC");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(20, 11, ctx_r1.estimatedRateLeft, "1.0-1"), "% of your limit left");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(26, 14, ctx_r1.avgThreshold, "1.0-1"), "%");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.budgets.length === 0 ? 29 : 30);
} }
function BudgetsPage_Conditional_20_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", cat_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r10.name);
} }
function BudgetsPage_Conditional_20_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 76);
    i0.ɵɵtext(1, "Category is required.");
    i0.ɵɵelementEnd();
} }
function BudgetsPage_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 65);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_20_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeForm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 66)(3, "div", 67)(4, "h3", 68);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 69);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_20_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeForm()); });
    i0.ɵɵelementStart(7, "span", 35);
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "form", 70);
    i0.ɵɵlistener("ngSubmit", function BudgetsPage_Conditional_20_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(10, "div")(11, "label", 71);
    i0.ɵɵtext(12, "Category ");
    i0.ɵɵelementStart(13, "span", 72);
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "select", 73)(16, "option", 74);
    i0.ɵɵtext(17, "Select category");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, BudgetsPage_Conditional_20_For_19_Template, 2, 2, "option", 75, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(20, BudgetsPage_Conditional_20_Conditional_20_Template, 2, 0, "p", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "label", 77);
    i0.ɵɵtext(23, "Monthly limit (\u20AC) ");
    i0.ɵɵelementStart(24, "span", 72);
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(26, "input", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div")(28, "label", 79);
    i0.ɵɵtext(29, "Alert threshold (%) ");
    i0.ɵɵelementStart(30, "span", 72);
    i0.ɵɵtext(31, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(32, "input", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 81)(34, "button", 82);
    i0.ɵɵlistener("click", function BudgetsPage_Conditional_20_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeForm()); });
    i0.ɵɵtext(35, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 83);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.editingId ? "Edit Budget" : "Create Budget");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r1.categoryId.invalid && ctx_r1.categoryId.touched)("border-zinc-300", !(ctx_r1.categoryId.invalid && ctx_r1.categoryId.touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.availableCategories);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.categoryId.touched && ctx_r1.categoryId.hasError("required") ? 20 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r1.monthlyLimit.invalid && ctx_r1.monthlyLimit.touched)("border-zinc-300", !(ctx_r1.monthlyLimit.invalid && ctx_r1.monthlyLimit.touched));
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r1.alertThreshold.invalid && ctx_r1.alertThreshold.touched)("border-zinc-300", !(ctx_r1.alertThreshold.invalid && ctx_r1.alertThreshold.touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : ctx_r1.editingId ? "Update" : "Create Budget", " ");
} }
export class BudgetsPage {
    budgetsService = inject(BudgetsService);
    categoriesService = inject(CategoriesService);
    fb = inject(FormBuilder);
    budgets = [];
    categories = [];
    availableCategories = [];
    loading = true;
    saving = false;
    error = null;
    showForm = false;
    editingId = null;
    form = this.fb.group({
        categoryId: [null, [Validators.required]],
        monthlyLimit: [null, [Validators.required, Validators.min(1)]],
        alertThreshold: [80, [Validators.required, Validators.min(1), Validators.max(100)]],
    });
    get categoryId() { return this.form.controls.categoryId; }
    get monthlyLimit() { return this.form.controls.monthlyLimit; }
    get alertThreshold() { return this.form.controls.alertThreshold; }
    get totalLimit() {
        return this.budgets.reduce((sum, b) => sum + b.monthlyLimit, 0);
    }
    get avgThreshold() {
        if (this.budgets.length === 0)
            return 0;
        return this.budgets.reduce((sum, b) => sum + b.alertThreshold, 0) / this.budgets.length;
    }
    get budgetCount() { return this.budgets.length; }
    get estimatedSpent() {
        return this.budgets.reduce((sum, b) => sum + (b.monthlyLimit * b.alertThreshold / 100), 0);
    }
    get estimatedRemaining() {
        return Math.max(0, this.totalLimit - this.estimatedSpent);
    }
    get estimatedRateLeft() {
        if (this.totalLimit <= 0)
            return 0;
        return (this.estimatedRemaining / this.totalLimit) * 100;
    }
    ngOnInit() {
        this.loadAll();
    }
    retryLoad() {
        this.loadAll();
    }
    loadAll() {
        this.loading = true;
        this.error = null;
        forkJoin({
            budgets: this.budgetsService.getAll(),
            categories: this.categoriesService.getAll(),
        }).subscribe({
            next: ({ budgets, categories }) => {
                this.categories = categories;
                this.budgets = this.buildViews(budgets, categories);
                this.loading = false;
            },
            error: () => {
                this.error = 'Impossible de charger les budgets.';
                this.loading = false;
            },
        });
    }
    buildViews(budgets, categories) {
        return budgets.map(b => {
            const cat = categories.find(c => c.id === b.categoryId);
            return {
                ...b,
                categoryName: cat?.name ?? `Catégorie #${b.categoryId}`,
                categoryIcon: cat?.icon ?? null,
                categoryColor: cat?.color ?? null,
            };
        });
    }
    openCreate() {
        this.editingId = null;
        this.availableCategories = this.categories.filter(c => !this.budgets.some(b => b.categoryId === c.id));
        this.form.reset({ alertThreshold: 80 });
        this.showForm = true;
    }
    openEdit(budget) {
        this.editingId = budget.id;
        this.availableCategories = this.categories.filter(c => c.id === budget.categoryId || !this.budgets.some(b => b.categoryId === c.id));
        this.form.setValue({
            categoryId: budget.categoryId,
            monthlyLimit: budget.monthlyLimit,
            alertThreshold: budget.alertThreshold,
        });
        this.showForm = true;
    }
    closeForm() {
        this.showForm = false;
        this.editingId = null;
        this.form.reset({ alertThreshold: 80 });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.saving = true;
        const { categoryId, monthlyLimit, alertThreshold } = this.form.value;
        if (this.editingId !== null) {
            const payload = {
                monthlyLimit: monthlyLimit,
                alertThreshold: alertThreshold,
            };
            this.budgetsService.update(this.editingId, payload).subscribe({
                next: () => { this.saving = false; this.closeForm(); this.loadAll(); },
                error: () => { this.saving = false; this.showSaveError(); },
            });
        }
        else {
            const payload = {
                categoryId: categoryId,
                monthlyLimit: monthlyLimit,
                alertThreshold: alertThreshold,
            };
            this.budgetsService.create(payload).subscribe({
                next: () => { this.saving = false; this.closeForm(); this.loadAll(); },
                error: () => { this.saving = false; this.showSaveError(); },
            });
        }
    }
    async deleteBudget(budget) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer ce budget ?',
            text: `Le budget pour "${budget.categoryName}" sera définitivement supprimé.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.budgetsService.delete(budget.id).subscribe({
            next: () => {
                this.budgets = this.budgets.filter(b => b.id !== budget.id);
                Swal.fire({ icon: 'success', title: 'Budget supprimé', timer: 1500, showConfirmButton: false });
            },
            error: () => this.showSaveError(),
        });
    }
    showSaveError() {
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Une erreur est survenue. Veuillez réessayer.', confirmButtonColor: '#5048e5' });
    }
    thresholdBarWidth(budget) {
        return `${budget.alertThreshold}%`;
    }
    statusLabel(budget) {
        if (budget.alertThreshold >= 100)
            return 'Limit Reached';
        if (budget.alertThreshold >= 90)
            return 'Near Limit';
        return 'On Track';
    }
    statusClass(budget) {
        if (budget.alertThreshold >= 100)
            return 'bg-red-50 text-red-600';
        if (budget.alertThreshold >= 90)
            return 'bg-orange-50 text-orange-600';
        return 'bg-emerald-50 text-emerald-600';
    }
    pseudoLastTxDate(index) {
        if (index === 0)
            return 'Today, 10:24 AM';
        if (index === 1)
            return 'Yesterday';
        return `${index + 2} days ago`;
    }
    thresholdColor(threshold) {
        if (threshold >= 90)
            return 'bg-red-500';
        if (threshold >= 75)
            return 'bg-orange-500';
        return 'bg-[#5048e5]';
    }
    thresholdTextColor(threshold) {
        if (threshold >= 90)
            return 'text-red-600';
        if (threshold >= 75)
            return 'text-orange-500';
        return 'text-[#5048e5]';
    }
    trackById(_, item) { return item.id; }
    static ɵfac = function BudgetsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BudgetsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BudgetsPage, selectors: [["app-budgets-page"]], decls: 21, vars: 10, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "flex-1", "overflow-y-auto", "bg-white/70"], [1, "flex", "items-center", "justify-between", "px-6", "lg:px-8", "py-6", "sticky", "top-0", "bg-white/80", "backdrop-blur-md", "z-10", "border-b", "border-slate-100"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition-all", "shadow-sm", "shadow-[#5048e5]/20", 3, "click"], [1, "material-symbols-outlined", "text-sm"], [1, "px-6", "lg:px-8", "py-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "fixed", "inset-0", "z-40", "flex"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-10"], [1, "h-24", "rounded-xl", "bg-slate-200", "animate-pulse"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "h-48", "rounded-xl", "bg-slate-200", "animate-pulse"], [1, "material-symbols-outlined", "text-5xl", "text-red-300", "mb-3"], [1, "text-slate-600", "font-medium"], [1, "mt-4", "text-sm", "text-[#5048e5]", "hover:underline", "font-medium", 3, "click"], [1, "p-5", "rounded-xl", "border", "border-slate-100", "bg-white", "shadow-sm"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-widest", "mb-1"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "mt-2", "text-xs", "text-emerald-500", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-xs"], [1, "mt-2", "text-xs", "text-slate-400"], [1, "text-2xl", "font-bold", "text-[#5048e5]"], [1, "mt-2", "text-xs", "text-indigo-400"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], [1, "size-14", "rounded-full", "bg-[#5048e5]/10", "flex", "items-center", "justify-center", "mb-4"], [1, "material-symbols-outlined", "text-3xl", "text-[#5048e5]"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-1"], [1, "text-sm", "text-slate-400", "mb-6", "max-w-xs"], [1, "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "rounded-lg", "font-semibold", "text-sm", 3, "click"], [1, "p-5", "rounded-xl", "border", "border-slate-100", "bg-white", "shadow-sm", "flex", "flex-col", "hover:border-[#5048e5]/30", "transition-colors", "group"], [1, "p-5", "rounded-xl", "border", "border-dashed", "border-slate-200", "bg-slate-50/50", "flex", "flex-col", "items-center", "justify-center", "gap-3", "cursor-pointer", "hover:bg-slate-50", "transition-all", "group", 3, "click"], [1, "size-10", "rounded-full", "border", "border-slate-200", "flex", "items-center", "justify-center", "text-slate-400", "group-hover:text-[#5048e5]", "group-hover:border-[#5048e5]/30", "transition-colors"], [1, "material-symbols-outlined"], [1, "text-sm", "font-semibold", "text-slate-400", "group-hover:text-[#5048e5]", "transition-colors"], [1, "mt-12"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-xl", "font-bold", "tracking-tight"], ["routerLink", "/app/transactions", 1, "text-sm", "font-semibold", "text-[#5048e5]", "hover:underline"], [1, "overflow-x-auto"], [1, "w-full", "text-left"], [1, "border-b", "border-slate-100", "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-slate-400"], [1, "pb-4", "font-bold"], [1, "divide-y", "divide-slate-50"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "size-10", "rounded-lg", "flex", "items-center", "justify-center"], [1, "flex", "gap-1", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "text-slate-300", "hover:text-slate-500", 3, "click"], [1, "font-semibold", "text-slate-800", "mb-1"], [1, "text-xs", "text-slate-500", "mb-4"], [1, "mt-auto"], [1, "flex", "justify-between", "items-end", "text-[10px]", "font-bold", "mb-1"], [1, "h-2", "w-full", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "py-4"], [1, "size-8", "rounded-full", "bg-slate-100", "flex", "items-center", "justify-center", "text-slate-600"], [1, "material-symbols-outlined", "text-base"], [1, "text-sm", "font-medium"], [1, "py-4", "text-sm", "text-slate-500"], [1, "py-4", "text-sm", "font-semibold"], [1, "px-2", "py-1", "text-[10px]", "font-bold", "rounded-full", "uppercase", "tracking-tighter"], [1, "py-4", "text-right"], [1, "text-slate-400", "hover:text-slate-600"], [1, "flex-1", "bg-black/30", "backdrop-blur-sm", 3, "click"], [1, "w-full", "max-w-md", "bg-white", "h-full", "shadow-2xl", "flex", "flex-col", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "p-2", "rounded-lg", "text-slate-400", "hover:text-slate-600", "hover:bg-slate-100", "transition-colors", 3, "click"], ["novalidate", "", 1, "flex-1", "p-6", "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], ["for", "categoryId", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "text-red-400"], ["id", "categoryId", "formControlName", "categoryId", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "bg-white", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "mt-1.5", "text-xs", "text-red-500"], ["for", "monthlyLimit", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "monthlyLimit", "type", "number", "formControlName", "monthlyLimit", "required", "", "min", "1", "step", "10", "placeholder", "e.g. 500", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["for", "alertThreshold", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "alertThreshold", "type", "number", "formControlName", "alertThreshold", "required", "", "min", "1", "max", "100", "step", "5", "placeholder", "e.g. 80", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "mt-auto", "pt-4", "flex", "gap-3"], ["type", "button", 1, "flex-1", "rounded-lg", "border", "border-slate-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-slate-600", "hover:bg-slate-50", "transition-colors", 3, "click"], ["type", "submit", 1, "flex-1", "rounded-lg", "bg-[#5048e5]", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-[#4338ca]", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"]], template: function BudgetsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "header", 2)(3, "div")(4, "h2", 3);
            i0.ɵɵtext(5, "Monthly Budgets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "number");
            i0.ɵɵpipe(9, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5)(11, "button", 6);
            i0.ɵɵlistener("click", function BudgetsPage_Template_button_click_11_listener() { return ctx.openCreate(); });
            i0.ɵɵelementStart(12, "span", 7);
            i0.ɵɵtext(13, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "Create Budget");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵconditionalCreate(17, BudgetsPage_Conditional_17_Template, 6, 2)(18, BudgetsPage_Conditional_18_Template, 7, 1, "div", 9)(19, BudgetsPage_Conditional_19_Template, 31, 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(20, BudgetsPage_Conditional_20_Template, 38, 18, "div", 10);
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate2("Total spent this month: ", i0.ɵɵpipeBind2(8, 4, ctx.estimatedSpent, "1.0-0"), " / ", i0.ɵɵpipeBind2(9, 7, ctx.totalLimit, "1.0-0"), " \u20AC");
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(ctx.loading ? 17 : ctx.error ? 18 : 19);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.showForm ? 20 : -1);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinValidator, i1.MaxValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink, i2.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BudgetsPage, [{
        type: Component,
        args: [{ selector: 'app-budgets-page', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <main class=\"flex-1 overflow-y-auto bg-white/70\">\n    <header class=\"flex items-center justify-between px-6 lg:px-8 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-slate-100\">\n      <div>\n        <h2 class=\"text-2xl font-bold tracking-tight\">Monthly Budgets</h2>\n        <p class=\"text-sm text-slate-500\">Total spent this month: {{ estimatedSpent | number:'1.0-0' }} / {{ totalLimit | number:'1.0-0' }} \u20AC</p>\n      </div>\n      <div class=\"flex items-center gap-3\">\n        <button\n          (click)=\"openCreate()\"\n          class=\"flex items-center gap-2 px-4 py-2 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all shadow-sm shadow-[#5048e5]/20\"\n        >\n          <span class=\"material-symbols-outlined text-sm\">add</span>\n          <span>Create Budget</span>\n        </button>\n      </div>\n    </header>\n\n    <div class=\"px-6 lg:px-8 py-6\">\n      @if (loading) {\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10\">\n          @for (i of [1,2,3]; track i) { <div class=\"h-24 rounded-xl bg-slate-200 animate-pulse\"></div> }\n        </div>\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\">\n          @for (i of [1,2,3,4,5,6]; track i) { <div class=\"h-48 rounded-xl bg-slate-200 animate-pulse\"></div> }\n        </div>\n      } @else if (error) {\n        <div class=\"flex flex-col items-center justify-center py-20 text-center\">\n          <span class=\"material-symbols-outlined text-5xl text-red-300 mb-3\">error_outline</span>\n          <p class=\"text-slate-600 font-medium\">{{ error }}</p>\n          <button (click)=\"retryLoad()\" class=\"mt-4 text-sm text-[#5048e5] hover:underline font-medium\">Retry</button>\n        </div>\n      } @else {\n        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10\">\n          <div class=\"p-5 rounded-xl border border-slate-100 bg-white shadow-sm\">\n            <p class=\"text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1\">Spent</p>\n            <p class=\"text-2xl font-bold text-slate-900\">{{ estimatedSpent | number:'1.0-0' }} \u20AC</p>\n            <div class=\"mt-2 text-xs text-emerald-500 flex items-center gap-1\">\n              <span class=\"material-symbols-outlined text-xs\">arrow_downward</span>\n              <span>Based on alert configuration</span>\n            </div>\n          </div>\n          <div class=\"p-5 rounded-xl border border-slate-100 bg-white shadow-sm\">\n            <p class=\"text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1\">Remaining</p>\n            <p class=\"text-2xl font-bold text-slate-900\">{{ estimatedRemaining | number:'1.0-0' }} \u20AC</p>\n            <div class=\"mt-2 text-xs text-slate-400\">{{ estimatedRateLeft | number:'1.0-1' }}% of your limit left</div>\n          </div>\n          <div class=\"p-5 rounded-xl border border-slate-100 bg-white shadow-sm\">\n            <p class=\"text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1\">Savings Rate</p>\n            <p class=\"text-2xl font-bold text-[#5048e5]\">{{ avgThreshold | number:'1.0-1' }}%</p>\n            <div class=\"mt-2 text-xs text-indigo-400\">Keep it up!</div>\n          </div>\n        </div>\n\n        @if (budgets.length === 0) {\n          <div class=\"flex flex-col items-center justify-center py-24 text-center\">\n            <div class=\"size-14 rounded-full bg-[#5048e5]/10 flex items-center justify-center mb-4\">\n              <span class=\"material-symbols-outlined text-3xl text-[#5048e5]\">pie_chart</span>\n            </div>\n            <h3 class=\"text-lg font-semibold text-slate-700 mb-1\">No budgets yet</h3>\n            <p class=\"text-sm text-slate-400 mb-6 max-w-xs\">Create your first budget to track spending by category.</p>\n            <button (click)=\"openCreate()\" class=\"px-5 py-2.5 bg-[#5048e5] text-white rounded-lg font-semibold text-sm\">Create Budget</button>\n          </div>\n        } @else {\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\">\n            @for (budget of budgets; track trackById($index, budget)) {\n              <div class=\"p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex flex-col hover:border-[#5048e5]/30 transition-colors group\">\n                <div class=\"flex items-start justify-between mb-4\">\n                  <div\n                    class=\"size-10 rounded-lg flex items-center justify-center\"\n                    [style.background-color]=\"(budget.categoryColor || '#5048e5') + '1A'\"\n                    [style.color]=\"budget.categoryColor || '#5048e5'\"\n                  >\n                    <span class=\"material-symbols-outlined\">{{ budget.categoryIcon || 'pie_chart' }}</span>\n                  </div>\n                  <div class=\"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity\">\n                    <button (click)=\"openEdit(budget)\" class=\"text-slate-300 hover:text-slate-500\"><span class=\"material-symbols-outlined\">edit</span></button>\n                    <button (click)=\"deleteBudget(budget)\" class=\"text-slate-300 hover:text-slate-500\"><span class=\"material-symbols-outlined\">more_vert</span></button>\n                  </div>\n                </div>\n                <h3 class=\"font-semibold text-slate-800 mb-1\">{{ budget.categoryName }}</h3>\n                <p class=\"text-xs text-slate-500 mb-4\">{{ (budget.monthlyLimit * budget.alertThreshold / 100) | number:'1.0-0' }} / {{ budget.monthlyLimit | number:'1.0-0' }} \u20AC</p>\n                <div class=\"mt-auto\">\n                  <div class=\"flex justify-between items-end text-[10px] font-bold mb-1\" [class]=\"thresholdTextColor(budget.alertThreshold)\">\n                    <span>{{ budget.alertThreshold | number:'1.0-1' }}% used</span>\n                  </div>\n                  <div class=\"h-2 w-full bg-slate-100 rounded-full overflow-hidden\">\n                    <div class=\"h-full rounded-full transition-all duration-500\" [class]=\"thresholdColor(budget.alertThreshold)\" [style.width]=\"thresholdBarWidth(budget)\"></div>\n                  </div>\n                </div>\n              </div>\n            }\n\n            <button\n              (click)=\"openCreate()\"\n              class=\"p-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-50 transition-all group\"\n            >\n              <div class=\"size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#5048e5] group-hover:border-[#5048e5]/30 transition-colors\">\n                <span class=\"material-symbols-outlined\">add</span>\n              </div>\n              <p class=\"text-sm font-semibold text-slate-400 group-hover:text-[#5048e5] transition-colors\">Add Category</p>\n            </button>\n          </div>\n\n          <div class=\"mt-12\">\n            <div class=\"flex items-center justify-between mb-6\">\n              <h3 class=\"text-xl font-bold tracking-tight\">Recent Budget Activity</h3>\n              <a routerLink=\"/app/transactions\" class=\"text-sm font-semibold text-[#5048e5] hover:underline\">View all transactions</a>\n            </div>\n            <div class=\"overflow-x-auto\">\n              <table class=\"w-full text-left\">\n                <thead>\n                  <tr class=\"border-b border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400\">\n                    <th class=\"pb-4 font-bold\">Category</th>\n                    <th class=\"pb-4 font-bold\">Last Transaction</th>\n                    <th class=\"pb-4 font-bold\">Amount</th>\n                    <th class=\"pb-4 font-bold\">Status</th>\n                    <th class=\"pb-4 font-bold\"></th>\n                  </tr>\n                </thead>\n                <tbody class=\"divide-y divide-slate-50\">\n                  @for (budget of budgets.slice(0, 6); track budget.id) {\n                    <tr>\n                      <td class=\"py-4\">\n                        <div class=\"flex items-center gap-3\">\n                          <div class=\"size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600\">\n                            <span class=\"material-symbols-outlined text-base\">{{ budget.categoryIcon || 'pie_chart' }}</span>\n                          </div>\n                          <span class=\"text-sm font-medium\">{{ budget.categoryName }}</span>\n                        </div>\n                      </td>\n                      <td class=\"py-4 text-sm text-slate-500\">{{ pseudoLastTxDate($index) }}</td>\n                      <td class=\"py-4 text-sm font-semibold\">- {{ (budget.monthlyLimit * budget.alertThreshold / 100) | number:'1.2-2' }} \u20AC</td>\n                      <td class=\"py-4\">\n                        <span class=\"px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter\" [class]=\"statusClass(budget)\">\n                          {{ statusLabel(budget) }}\n                        </span>\n                      </td>\n                      <td class=\"py-4 text-right\">\n                        <button class=\"text-slate-400 hover:text-slate-600\"><span class=\"material-symbols-outlined text-sm\">chevron_right</span></button>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n          </div>\n        }\n      }\n    </div>\n  </main>\n</div>\n\n@if (showForm) {\n  <div class=\"fixed inset-0 z-40 flex\">\n    <div class=\"flex-1 bg-black/30 backdrop-blur-sm\" (click)=\"closeForm()\"></div>\n    <div class=\"w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-y-auto\">\n      <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n        <h3 class=\"text-lg font-bold text-slate-900\">{{ editingId ? 'Edit Budget' : 'Create Budget' }}</h3>\n        <button (click)=\"closeForm()\" class=\"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors\">\n          <span class=\"material-symbols-outlined\">close</span>\n        </button>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate class=\"flex-1 p-6 flex flex-col gap-5\">\n        <div>\n          <label for=\"categoryId\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Category <span class=\"text-red-400\">*</span></label>\n          <select\n            id=\"categoryId\"\n            formControlName=\"categoryId\"\n            required\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition bg-white focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            [class.border-red-400]=\"categoryId.invalid && categoryId.touched\"\n            [class.border-zinc-300]=\"!(categoryId.invalid && categoryId.touched)\"\n          >\n            <option [ngValue]=\"null\" disabled>Select category</option>\n            @for (cat of availableCategories; track cat.id) {\n              <option [ngValue]=\"cat.id\">{{ cat.name }}</option>\n            }\n          </select>\n          @if (categoryId.touched && categoryId.hasError('required')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">Category is required.</p>\n          }\n        </div>\n\n        <div>\n          <label for=\"monthlyLimit\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Monthly limit (\u20AC) <span class=\"text-red-400\">*</span></label>\n          <input\n            id=\"monthlyLimit\"\n            type=\"number\"\n            formControlName=\"monthlyLimit\"\n            required\n            min=\"1\"\n            step=\"10\"\n            placeholder=\"e.g. 500\"\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            [class.border-red-400]=\"monthlyLimit.invalid && monthlyLimit.touched\"\n            [class.border-zinc-300]=\"!(monthlyLimit.invalid && monthlyLimit.touched)\"\n          />\n        </div>\n\n        <div>\n          <label for=\"alertThreshold\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Alert threshold (%) <span class=\"text-red-400\">*</span></label>\n          <input\n            id=\"alertThreshold\"\n            type=\"number\"\n            formControlName=\"alertThreshold\"\n            required\n            min=\"1\"\n            max=\"100\"\n            step=\"5\"\n            placeholder=\"e.g. 80\"\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            [class.border-red-400]=\"alertThreshold.invalid && alertThreshold.touched\"\n            [class.border-zinc-300]=\"!(alertThreshold.invalid && alertThreshold.touched)\"\n          />\n        </div>\n\n        <div class=\"mt-auto pt-4 flex gap-3\">\n          <button type=\"button\" (click)=\"closeForm()\" class=\"flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors\">Cancel</button>\n          <button type=\"submit\" [disabled]=\"saving\" class=\"flex-1 rounded-lg bg-[#5048e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca] transition-all disabled:opacity-60 disabled:cursor-not-allowed\">\n            {{ saving ? 'Saving...' : (editingId ? 'Update' : 'Create Budget') }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BudgetsPage, { className: "BudgetsPage", filePath: "src/app/features/budgets/pages/budgets-page/budgets-page.ts", lineNumber: 20 }); })();
