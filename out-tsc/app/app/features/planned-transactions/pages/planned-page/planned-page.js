import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { PlannedTransactionsService } from '../../services/planned-transactions.service';
import { CategoriesService } from '../../../categories/services/categories.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ({ v: "all", l: "Tout" });
const _c1 = () => ({ v: "EXPENSE", l: "D\u00E9penses" });
const _c2 = () => ({ v: "INCOME", l: "Revenus" });
const _c3 = (a0, a1, a2) => [a0, a1, a2];
const _c4 = () => [1, 2, 3, 4];
const _forTrack0 = ($index, $item) => $item.v;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.value;
function PlannedPage_Conditional_12_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.filteredPlanned[0].label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(ctx_r0.filteredPlanned[0].nextDueDate));
} }
function PlannedPage_Conditional_12_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 15)(2, "p", 16);
    i0.ɵɵtext(3, "Sorties actives / mois");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 15)(7, "p", 16);
    i0.ɵɵtext(8, "Planifications actives");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 18);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 19);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 20)(14, "p", 21);
    i0.ɵɵtext(15, "Prochaine \u00E9ch\u00E9ance");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, PlannedPage_Conditional_12_Conditional_16_Template, 4, 2)(17, PlannedPage_Conditional_12_Conditional_17_Template, 2, 0, "p", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.formatAmount(ctx_r0.totalActiveExpense));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.activeCount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("sur ", ctx_r0.planned.length, " au total");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.filteredPlanned.length > 0 ? 16 : 17);
} }
function PlannedPage_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function PlannedPage_For_15_Template_button_click_0_listener() { const tab_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeTab = tab_r3.v); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("border-[#5048e5]", ctx_r0.activeTab === tab_r3.v)("text-[#5048e5]", ctx_r0.activeTab === tab_r3.v)("font-bold", ctx_r0.activeTab === tab_r3.v)("border-transparent", ctx_r0.activeTab !== tab_r3.v)("text-slate-500", ctx_r0.activeTab !== tab_r3.v);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.l, " ");
} }
function PlannedPage_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "div", 27);
    i0.ɵɵelementStart(2, "div", 28);
    i0.ɵɵelement(3, "div", 29)(4, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 31)(6, "div", 32)(7, "div", 33);
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, PlannedPage_Conditional_16_For_2_Template, 8, 0, "div", 26, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c4));
} }
function PlannedPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 34);
    i0.ɵɵtext(2, "error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 35);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 36);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_17_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadAll()); });
    i0.ɵɵtext(6, "R\u00E9essayer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function PlannedPage_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 37);
    i0.ɵɵtext(2, "event_repeat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 38);
    i0.ɵɵtext(4, "Aucune transaction planifi\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 39);
    i0.ɵɵtext(6, "Ajoutez vos abonnements et paiements r\u00E9currents.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 40);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openCreate()); });
    i0.ɵɵtext(8, " Ajouter une planification ");
    i0.ɵɵelementEnd()();
} }
function PlannedPage_Conditional_19_For_19_Conditional_26_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 72);
    i0.ɵɵelement(1, "circle", 73)(2, "path", 74);
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_19_For_19_Conditional_26_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, "play_arrow");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_19_For_19_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Conditional_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const item_r7 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.runNow(item_r7)); });
    i0.ɵɵconditionalCreate(1, PlannedPage_Conditional_19_For_19_Conditional_26_Conditional_1_Template, 3, 0, ":svg:svg", 72)(2, PlannedPage_Conditional_19_For_19_Conditional_26_Conditional_2_Template, 2, 0, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.running === item_r7.id);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.running === item_r7.id ? 1 : 2);
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵelement(1, "div", 77)(2, "div", 29);
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 56);
    i0.ɵɵtext(1, "Aucune ex\u00E9cution enregistr\u00E9e.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const run_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("ex\u00E9cut\u00E9 le ", ctx_r0.formatDate(run_r9.executedAt));
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const run_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2014 ", run_r9.errorMessage);
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "span", 82);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Conditional_5_Template, 2, 1, "span", 84);
    i0.ɵɵconditionalCreate(6, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Conditional_6_Template, 2, 1, "span", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const run_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.runStatusClass(run_r9.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(run_r9.status === "SUCCESS" ? "Succ\u00E8s" : "\u00C9chec");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(run_r9.dueDate));
    i0.ɵɵadvance();
    i0.ɵɵconditional(run_r9.executedAt ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(run_r9.errorMessage ? 6 : -1);
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "app-pagination", 86);
    i0.ɵɵlistener("pageChange", function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_Conditional_5_Template_app_pagination_pageChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const item_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadRuns(item_r7, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("page", item_r7.runsPage.number)("totalPages", item_r7.runsPage.totalPages)("totalElements", item_r7.runsPage.totalElements)("size", item_r7.runsPage.size);
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "p", 79);
    i0.ɵɵtext(2, "Historique des ex\u00E9cutions");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_For_4_Template, 7, 6, "div", 80, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_Conditional_5_Template, 2, 4, "div", 81);
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(item_r7.runs);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r7.runsPage && item_r7.runsPage.totalPages > 1 ? 5 : -1);
} }
function PlannedPage_Conditional_19_For_19_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 70)(1, "td", 75);
    i0.ɵɵconditionalCreate(2, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_2_Template, 3, 0, "div", 76)(3, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_3_Template, 2, 0, "p", 56)(4, PlannedPage_Conditional_19_For_19_Conditional_36_Conditional_4_Template, 6, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r7.loadingRuns ? 2 : item_r7.runs.length === 0 ? 3 : 4);
} }
function PlannedPage_Conditional_19_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 50);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_tr_click_0_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleRuns(item_r7)); });
    i0.ɵɵelementStart(1, "td", 51)(2, "div", 52)(3, "div", 53)(4, "span", 54);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "p", 55);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 56);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "td", 57);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 51)(14, "span", 58);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 59);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td", 60);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_td_click_18_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(19, "button", 61);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_button_click_19_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggle(item_r7)); });
    i0.ɵɵelementStart(20, "div", 62);
    i0.ɵɵelement(21, "span", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 64);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "td", 60);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_td_click_24_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(25, "div", 65);
    i0.ɵɵconditionalCreate(26, PlannedPage_Conditional_19_For_19_Conditional_26_Template, 3, 2, "button", 66);
    i0.ɵɵelementStart(27, "button", 67);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_button_click_27_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openEdit(item_r7)); });
    i0.ɵɵelementStart(28, "span", 5);
    i0.ɵɵtext(29, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "button", 68);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_button_click_30_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deletePlanned(item_r7)); });
    i0.ɵɵelementStart(31, "span", 5);
    i0.ɵɵtext(32, "delete");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "button", 69);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_19_For_19_Template_button_click_33_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleRuns(item_r7)); });
    i0.ɵɵelementStart(34, "span", 5);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵconditionalCreate(36, PlannedPage_Conditional_19_For_19_Conditional_36_Template, 5, 1, "tr", 70);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-slate-50/40", item_r7.showRuns);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-red-100", item_r7.type === "EXPENSE")("text-red-600", item_r7.type === "EXPENSE")("bg-emerald-100", item_r7.type === "INCOME")("text-emerald-600", item_r7.type === "INCOME");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.type === "INCOME" ? "trending_up" : "trending_down", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-slate-400", !item_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.categoryName(item_r7.categoryId));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-red-600", item_r7.type === "EXPENSE")("text-emerald-600", item_r7.type === "INCOME")("text-slate-400", !item_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", item_r7.type === "INCOME" ? "+" : "-", "", ctx_r0.formatAmount(item_r7.amount), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.frequencyLabel(item_r7.frequency), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(item_r7.nextDueDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", i0.ɵɵinterpolate(item_r7.isActive ? "D\u00E9sactiver" : "Activer"))("disabled", ctx_r0.toggling === item_r7.id);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-[#5048e5]", item_r7.isActive)("bg-slate-200", !item_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("translate-x-4", item_r7.isActive)("translate-x-0", !item_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-[#5048e5]", item_r7.isActive)("text-slate-400", !item_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.isActive ? "Actif" : "Paus\u00E9", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(item_r7.isActive ? 26 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("title", item_r7.showRuns ? "Masquer l'historique" : "Voir l'historique");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.showRuns ? "expand_less" : "history");
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r7.showRuns ? 36 : -1);
} }
function PlannedPage_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42)(2, "table", 43)(3, "thead")(4, "tr", 44)(5, "th", 45);
    i0.ɵɵtext(6, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 46);
    i0.ɵɵtext(8, "Montant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th", 45);
    i0.ɵɵtext(10, "Fr\u00E9quence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 45);
    i0.ɵɵtext(12, "Prochaine \u00E9ch\u00E9ance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 45);
    i0.ɵɵtext(14, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th", 46);
    i0.ɵɵtext(16, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵrepeaterCreate(18, PlannedPage_Conditional_19_For_19_Template, 37, 45, null, null, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "div", 47)(21, "span", 48);
    i0.ɵɵtext(22, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 49);
    i0.ɵɵtext(24, " Les transactions planifi\u00E9es actives apparaissent automatiquement dans votre journal \u00E0 leur date d'\u00E9ch\u00E9ance si ");
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26, "Cr\u00E9ation auto");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " est activ\u00E9e. Utilisez ");
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29, "Ex\u00E9cuter maintenant");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " pour forcer une ex\u00E9cution manuelle. Les transactions paus\u00E9es ne seront pas trait\u00E9es. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r0.filteredPlanned);
} }
function PlannedPage_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_20_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 97);
    i0.ɵɵtext(1, "Le label est requis.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 97);
    i0.ɵɵtext(1, "Requis.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 97);
    i0.ɵɵtext(1, "Doit \u00EAtre positif.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 105);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r13.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r13.name);
} }
function PlannedPage_Conditional_21_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 97);
    i0.ɵɵtext(1, "La cat\u00E9gorie est requise.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 105);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", f_r14.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r14.label);
} }
function PlannedPage_Conditional_21_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 97);
    i0.ɵɵtext(1, "Requise.");
    i0.ɵɵelementEnd();
} }
function PlannedPage_Conditional_21_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 72);
    i0.ɵɵelement(1, "circle", 73)(2, "path", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Enregistrement\u2026 ");
} }
function PlannedPage_Conditional_21_Conditional_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingId !== null ? "Enregistrer" : "Cr\u00E9er", " ");
} }
function PlannedPage_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 14)(1, "div", 88)(2, "h3", 89);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 90);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_21_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵelementStart(5, "span", 91);
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 92)(8, "form", 93);
    i0.ɵɵlistener("ngSubmit", function PlannedPage_Conditional_21_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵelementStart(9, "div")(10, "label", 94);
    i0.ɵɵtext(11, " Label ");
    i0.ɵɵelementStart(12, "span", 95);
    i0.ɵɵtext(13, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "input", 96);
    i0.ɵɵconditionalCreate(15, PlannedPage_Conditional_21_Conditional_15_Template, 2, 0, "p", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 98)(17, "div")(18, "label", 94);
    i0.ɵɵtext(19, "Type ");
    i0.ɵɵelementStart(20, "span", 95);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "select", 99)(23, "option", 100);
    i0.ɵɵtext(24, "D\u00E9pense");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 101);
    i0.ɵɵtext(26, "Revenu");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div")(28, "label", 94);
    i0.ɵɵtext(29, "Montant (\u20AC) ");
    i0.ɵɵelementStart(30, "span", 95);
    i0.ɵɵtext(31, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(32, "input", 102);
    i0.ɵɵconditionalCreate(33, PlannedPage_Conditional_21_Conditional_33_Template, 2, 0, "p", 97)(34, PlannedPage_Conditional_21_Conditional_34_Template, 2, 0, "p", 97);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div")(36, "label", 94);
    i0.ɵɵtext(37, " Cat\u00E9gorie ");
    i0.ɵɵelementStart(38, "span", 95);
    i0.ɵɵtext(39, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "select", 103)(41, "option", 104);
    i0.ɵɵtext(42, "Choisir une cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, PlannedPage_Conditional_21_For_44_Template, 2, 2, "option", 105, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(45, PlannedPage_Conditional_21_Conditional_45_Template, 2, 0, "p", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 98)(47, "div")(48, "label", 94);
    i0.ɵɵtext(49, "Fr\u00E9quence ");
    i0.ɵɵelementStart(50, "span", 95);
    i0.ɵɵtext(51, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "select", 106);
    i0.ɵɵrepeaterCreate(53, PlannedPage_Conditional_21_For_54_Template, 2, 2, "option", 105, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div")(56, "label", 94);
    i0.ɵɵtext(57, "Prochaine date ");
    i0.ɵɵelementStart(58, "span", 95);
    i0.ɵɵtext(59, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(60, "input", 107);
    i0.ɵɵconditionalCreate(61, PlannedPage_Conditional_21_Conditional_61_Template, 2, 0, "p", 97);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 108);
    i0.ɵɵelement(63, "input", 109);
    i0.ɵɵelementStart(64, "label", 110)(65, "span", 111);
    i0.ɵɵtext(66, "Cr\u00E9ation automatique");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "span", 112);
    i0.ɵɵtext(68, "\u2014 cr\u00E9e la transaction \u00E0 chaque \u00E9ch\u00E9ance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "div", 113)(70, "button", 114);
    i0.ɵɵlistener("click", function PlannedPage_Conditional_21_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵtext(71, " Annuler ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "button", 115);
    i0.ɵɵconditionalCreate(73, PlannedPage_Conditional_21_Conditional_73_Template, 4, 0)(74, PlannedPage_Conditional_21_Conditional_74_Template, 1, 1);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingId !== null ? "Modifier la planification" : "Nouvelle planification", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r0.label.invalid && ctx_r0.label.touched)("border-zinc-300", !(ctx_r0.label.invalid && ctx_r0.label.touched));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.label.touched && ctx_r0.label.hasError("required") ? 15 : -1);
    i0.ɵɵadvance(17);
    i0.ɵɵclassProp("border-red-400", ctx_r0.amount.invalid && ctx_r0.amount.touched)("border-zinc-300", !(ctx_r0.amount.invalid && ctx_r0.amount.touched));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.amount.touched && ctx_r0.amount.hasError("required") ? 33 : ctx_r0.amount.touched && ctx_r0.amount.hasError("min") ? 34 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("border-red-400", ctx_r0.categoryId.invalid && ctx_r0.categoryId.touched)("border-zinc-300", !(ctx_r0.categoryId.invalid && ctx_r0.categoryId.touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.categoryId.touched && ctx_r0.categoryId.hasError("required") ? 45 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r0.frequencies);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("border-red-400", ctx_r0.nextDueDate.invalid && ctx_r0.nextDueDate.touched)("border-zinc-300", !(ctx_r0.nextDueDate.invalid && ctx_r0.nextDueDate.touched));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.nextDueDate.touched && ctx_r0.nextDueDate.hasError("required") ? 61 : -1);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r0.saving);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.saving ? 73 : 74);
} }
export class PlannedPage {
    plannedService = inject(PlannedTransactionsService);
    categoriesService = inject(CategoriesService);
    fb = inject(FormBuilder);
    planned = [];
    categories = [];
    loading = true;
    error = null;
    saving = false;
    toggling = null;
    running = null;
    activeTab = 'all';
    showForm = false;
    editingId = null;
    frequencies = [
        { value: 'DAILY', label: 'Quotidien' },
        { value: 'WEEKLY', label: 'Hebdomadaire' },
        { value: 'MONTHLY', label: 'Mensuel' },
        { value: 'YEARLY', label: 'Annuel' },
    ];
    form = this.fb.group({
        label: ['', [Validators.required, Validators.maxLength(100)]],
        amount: [null, [Validators.required, Validators.min(0.01)]],
        type: ['EXPENSE', [Validators.required]],
        categoryId: [null, [Validators.required]],
        frequency: ['MONTHLY', [Validators.required]],
        nextDueDate: ['', [Validators.required]],
        autoCreate: [false],
    });
    get label() { return this.form.controls.label; }
    get amount() { return this.form.controls.amount; }
    get type() { return this.form.controls.type; }
    get categoryId() { return this.form.controls.categoryId; }
    get frequency() { return this.form.controls.frequency; }
    get nextDueDate() { return this.form.controls.nextDueDate; }
    get filteredPlanned() {
        if (this.activeTab === 'all')
            return this.planned;
        return this.planned.filter(p => p.type === this.activeTab);
    }
    get totalActiveExpense() {
        return this.planned
            .filter(p => p.isActive && p.type === 'EXPENSE')
            .reduce((s, p) => s + p.amount, 0);
    }
    get activeCount() {
        return this.planned.filter(p => p.isActive).length;
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.loading = true;
        this.error = null;
        this.categoriesService.getAll().subscribe({
            next: cats => { this.categories = cats; },
            error: () => { },
        });
        this.plannedService.getAll().subscribe({
            next: items => {
                this.planned = items.map(p => ({
                    ...p,
                    runs: [],
                    runsPage: null,
                    loadingRuns: false,
                    showRuns: false,
                }));
                this.loading = false;
            },
            error: () => {
                this.error = 'Impossible de charger les transactions planifiées.';
                this.loading = false;
            },
        });
    }
    toggleRuns(item) {
        item.showRuns = !item.showRuns;
        if (item.showRuns && !item.runsPage) {
            this.loadRuns(item, 0);
        }
    }
    loadRuns(item, page) {
        item.loadingRuns = true;
        this.plannedService.getRuns(item.id, page).subscribe({
            next: result => {
                item.runs = result.content;
                item.runsPage = result;
                item.loadingRuns = false;
            },
            error: () => { item.loadingRuns = false; },
        });
    }
    toggle(item) {
        this.toggling = item.id;
        this.plannedService.toggle(item.id).subscribe({
            next: updated => {
                item.isActive = updated.isActive;
                this.toggling = null;
            },
            error: () => {
                this.toggling = null;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de changer le statut.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    async runNow(item) {
        const result = await Swal.fire({
            icon: 'question',
            title: 'Exécuter maintenant ?',
            text: `La transaction "${item.label}" va être créée immédiatement.`,
            showCancelButton: true,
            confirmButtonText: 'Exécuter',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#5048e5',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.running = item.id;
        this.plannedService.runNow(item.id).subscribe({
            next: run => {
                this.running = null;
                if (run.status === 'SUCCESS') {
                    Swal.fire({ icon: 'success', title: 'Transaction créée', timer: 1500, showConfirmButton: false });
                }
                else {
                    Swal.fire({ icon: 'error', title: 'Échec', text: run.errorMessage ?? 'Erreur lors de l\'exécution.', confirmButtonColor: '#5048e5' });
                }
                if (item.showRuns)
                    this.loadRuns(item, 0);
            },
            error: () => {
                this.running = null;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'exécuter la transaction.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    openCreate() {
        this.editingId = null;
        this.form.reset({
            label: '',
            amount: null,
            type: 'EXPENSE',
            categoryId: null,
            frequency: 'MONTHLY',
            nextDueDate: dayjs().format('YYYY-MM-DD'),
            autoCreate: false,
        });
        this.showForm = true;
    }
    openEdit(item) {
        this.editingId = item.id;
        this.form.setValue({
            label: item.label,
            amount: item.amount,
            type: item.type,
            categoryId: item.categoryId,
            frequency: item.frequency,
            nextDueDate: item.nextDueDate,
            autoCreate: item.autoCreate,
        });
        this.showForm = true;
    }
    closeForm() {
        this.showForm = false;
        this.editingId = null;
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.saving = true;
        const v = this.form.value;
        const payload = {
            label: v.label,
            amount: v.amount,
            type: v.type,
            categoryId: v.categoryId,
            frequency: v.frequency,
            nextDueDate: v.nextDueDate,
            autoCreate: v.autoCreate ?? false,
        };
        const obs = this.editingId !== null
            ? this.plannedService.update(this.editingId, payload)
            : this.plannedService.create(payload);
        obs.subscribe({
            next: () => {
                this.saving = false;
                this.closeForm();
                this.loadAll();
            },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    async deletePlanned(item) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer ?',
            text: `"${item.label}" sera définitivement supprimée.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.plannedService.delete(item.id).subscribe({
            next: () => {
                this.loadAll();
                Swal.fire({ icon: 'success', title: 'Supprimée', timer: 1200, showConfirmButton: false });
            },
            error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer.', confirmButtonColor: '#5048e5' }),
        });
    }
    categoryName(id) {
        return this.categories.find(c => c.id === id)?.name ?? '—';
    }
    frequencyLabel(f) {
        return this.frequencies.find(fr => fr.value === f)?.label ?? f;
    }
    runStatusClass(s) {
        return s === 'SUCCESS' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600';
    }
    formatAmount(n) {
        return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
    formatDate(d) {
        return dayjs(d).format('DD/MM/YYYY');
    }
    trackById(_, item) { return item.id; }
    static ɵfac = function PlannedPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlannedPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlannedPage, selectors: [["app-planned-page"]], decls: 22, vars: 14, consts: [[1, "min-h-screen", "bg-[#f6f6f8]"], [1, "sticky", "top-0", "z-10", "bg-white/80", "backdrop-blur-md", "border-b", "border-slate-100", "px-6", "lg:px-8", "py-5", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "active:scale-[0.98]", "transition-all", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], [1, "px-6", "lg:px-8", "py-6", "space-y-5"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "border-b", "border-slate-200", "flex", "gap-1"], [1, "px-4", "pb-3", "text-sm", "font-medium", "transition-colors", "border-b-2", 3, "border-[#5048e5]", "text-[#5048e5]", "font-bold", "border-transparent", "text-slate-500"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "shadow-sm", "overflow-hidden", "animate-pulse"], [1, "bg-red-50", "border", "border-red-200", "rounded-xl", "p-6", "text-center"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "shadow-sm", "p-14", "text-center"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm"], [1, "fixed", "inset-y-0", "right-0", "z-40", "w-full", "max-w-md", "bg-white", "shadow-2xl", "flex", "flex-col"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "shadow-sm", "p-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-400", "mb-1"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-400", "mt-0.5"], [1, "bg-[#5048e5]/5", "rounded-xl", "border", "border-[#5048e5]/15", "p-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-[#5048e5]", "mb-1"], [1, "text-xl", "font-bold", "text-slate-400"], [1, "text-xl", "font-bold", "text-[#5048e5]", "truncate"], [1, "text-xs", "text-[#5048e5]/70", "mt-0.5"], [1, "px-4", "pb-3", "text-sm", "font-medium", "transition-colors", "border-b-2", 3, "click"], [1, "flex", "items-center", "gap-4", "px-6", "py-4", "border-b", "border-slate-50"], [1, "w-8", "h-8", "bg-slate-200", "rounded-lg", "shrink-0"], [1, "flex-1", "space-y-1.5"], [1, "h-3", "w-1/3", "bg-slate-200", "rounded"], [1, "h-3", "w-1/5", "bg-slate-200", "rounded"], [1, "h-3", "w-16", "bg-slate-200", "rounded"], [1, "h-3", "w-14", "bg-slate-200", "rounded"], [1, "h-5", "w-9", "bg-slate-200", "rounded-full"], [1, "material-symbols-outlined", "text-red-400", "text-3xl", "block", "mb-2"], [1, "text-sm", "text-red-600"], [1, "mt-3", "text-sm", "text-[#5048e5]", "font-semibold", "hover:underline", 3, "click"], [1, "material-symbols-outlined", "text-slate-300", "text-5xl", "block", "mb-3"], [1, "text-slate-500", "font-medium"], [1, "text-sm", "text-slate-400", "mt-1"], [1, "mt-5", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "shadow-sm", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-slate-50/60", "border-b", "border-slate-100"], [1, "text-left", "px-6", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-400"], [1, "text-right", "px-6", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-400"], [1, "flex", "items-start", "gap-3", "p-4", "rounded-xl", "border", "border-[#5048e5]/15", "bg-[#5048e5]/5"], [1, "material-symbols-outlined", "text-[#5048e5]", "text-[20px]", "mt-0.5", "shrink-0"], [1, "text-xs", "text-slate-600", "leading-relaxed"], [1, "border-b", "border-slate-50", "hover:bg-slate-50/60", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-6", "py-3.5"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], [1, "material-symbols-outlined", "text-[16px]"], [1, "font-medium", "text-slate-900"], [1, "text-xs", "text-slate-400"], [1, "px-6", "py-3.5", "text-right", "font-semibold"], [1, "inline-flex", "px-2", "py-0.5", "bg-slate-100", "text-slate-600", "rounded", "text-xs", "font-medium"], [1, "px-6", "py-3.5", "text-slate-600"], [1, "px-6", "py-3.5", 3, "click"], [1, "flex", "items-center", "gap-2", "transition", 3, "click", "disabled", "title"], [1, "relative", "inline-flex", "h-5", "w-9", "items-center", "rounded-full", "transition-colors"], [1, "inline-block", "h-3.5", "w-3.5", "transform", "rounded-full", "bg-white", "transition-transform", "shadow-sm"], [1, "text-xs", "font-medium"], [1, "flex", "justify-end", "gap-1"], ["title", "Ex\u00E9cuter maintenant", 1, "p-1.5", "text-slate-400", "hover:text-[#5048e5]", "hover:bg-[#5048e5]/5", "rounded-lg", "transition", 3, "disabled"], ["title", "Modifier", 1, "p-1.5", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click"], ["title", "Supprimer", 1, "p-1.5", "text-slate-400", "hover:text-red-500", "hover:bg-red-50", "rounded-lg", "transition", 3, "click"], [1, "p-1.5", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click", "title"], [1, "bg-slate-50/40", "border-b", "border-slate-100"], ["title", "Ex\u00E9cuter maintenant", 1, "p-1.5", "text-slate-400", "hover:text-[#5048e5]", "hover:bg-[#5048e5]/5", "rounded-lg", "transition", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-4", "w-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8z", 1, "opacity-75"], ["colspan", "6", 1, "px-6", "py-4"], [1, "animate-pulse", "space-y-2"], [1, "h-3", "w-1/2", "bg-slate-200", "rounded"], [1, "space-y-1.5"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "text-slate-400", "mb-2"], [1, "flex", "items-center", "gap-3", "text-xs"], [1, "mt-3"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "font-bold", "text-[11px]"], [1, "text-slate-500"], [1, "text-slate-400"], [1, "text-red-500"], [3, "pageChange", "page", "totalPages", "totalElements", "size"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm", 3, "click"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "font-bold", "text-slate-900"], [1, "p-2", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[20px]"], [1, "flex-1", "overflow-y-auto", "px-6", "py-5"], ["novalidate", "", 1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "text-red-400"], ["type", "text", "formControlName", "label", "required", "", "maxlength", "100", "placeholder", "Netflix, Loyer, Salaire\u2026", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "mt-1.5", "text-xs", "text-red-500"], [1, "grid", "grid-cols-2", "gap-3"], ["formControlName", "type", "required", "", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["value", "EXPENSE"], ["value", "INCOME"], ["type", "number", "formControlName", "amount", "required", "", "min", "0.01", "step", "0.01", "placeholder", "19.99", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["formControlName", "categoryId", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["disabled", "", 3, "value"], [3, "value"], ["formControlName", "frequency", "required", "", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "nextDueDate", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "flex", "items-center", "gap-3", "p-3", "bg-slate-50", "rounded-lg"], ["id", "autoCreate", "type", "checkbox", "formControlName", "autoCreate", 1, "h-4", "w-4", "rounded", "border-slate-300", "text-[#5048e5]", "focus:ring-[#5048e5]"], ["for", "autoCreate", 1, "text-sm", "text-zinc-700", "cursor-pointer"], [1, "font-medium"], [1, "text-slate-400", "ml-1"], [1, "pt-2", "flex", "justify-end", "gap-3"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-semibold", "text-slate-600", "bg-slate-100", "hover:bg-slate-200", "rounded-lg", "transition", 3, "click"], ["type", "submit", 1, "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "active:scale-[0.98]", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"]], template: function PlannedPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Transactions planifi\u00E9es");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Abonnements, revenus r\u00E9currents et paiements automatiques");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function PlannedPage_Template_button_click_7_listener() { return ctx.openCreate(); });
            i0.ɵɵelementStart(8, "span", 5);
            i0.ɵɵtext(9, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Nouvelle planification ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵconditionalCreate(12, PlannedPage_Conditional_12_Template, 18, 4, "div", 7);
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵrepeaterCreate(14, PlannedPage_For_15_Template, 2, 11, "button", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, PlannedPage_Conditional_16_Template, 3, 1, "div", 10);
            i0.ɵɵconditionalCreate(17, PlannedPage_Conditional_17_Template, 7, 1, "div", 11);
            i0.ɵɵconditionalCreate(18, PlannedPage_Conditional_18_Template, 9, 0, "div", 12);
            i0.ɵɵconditionalCreate(19, PlannedPage_Conditional_19_Template, 31, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(20, PlannedPage_Conditional_20_Template, 1, 0, "div", 13);
            i0.ɵɵconditionalCreate(21, PlannedPage_Conditional_21_Template, 75, 25, "aside", 14);
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵconditional(!ctx.loading && !ctx.error ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpureFunction3(10, _c3, i0.ɵɵpureFunction0(7, _c0), i0.ɵɵpureFunction0(8, _c1), i0.ɵɵpureFunction0(9, _c2)));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && ctx.error ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && !ctx.error && ctx.filteredPlanned.length === 0 ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && !ctx.error && ctx.filteredPlanned.length > 0 ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showForm ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showForm ? 21 : -1);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, PaginationComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlannedPage, [{
        type: Component,
        args: [{ selector: 'app-planned-page', standalone: true, imports: [CommonModule, ReactiveFormsModule, PaginationComponent], template: "<div class=\"min-h-screen bg-[#f6f6f8]\">\n\n  <!-- Header -->\n  <header class=\"sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-8 py-5 flex items-center justify-between\">\n    <div>\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">Transactions planifi\u00E9es</h2>\n      <p class=\"text-sm text-slate-500 mt-0.5\">Abonnements, revenus r\u00E9currents et paiements automatiques</p>\n    </div>\n    <button\n      (click)=\"openCreate()\"\n      class=\"flex items-center gap-2 px-4 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg\n             hover:bg-[#4338ca] active:scale-[0.98] transition-all\"\n    >\n      <span class=\"material-symbols-outlined text-[18px]\">add</span>\n      Nouvelle planification\n    </button>\n  </header>\n\n  <div class=\"px-6 lg:px-8 py-6 space-y-5\">\n\n    <!-- Summary cards -->\n    @if (!loading && !error) {\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-4\">\n        <div class=\"bg-white rounded-xl border border-slate-100 shadow-sm p-5\">\n          <p class=\"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1\">Sorties actives / mois</p>\n          <p class=\"text-2xl font-bold text-red-600\">{{ formatAmount(totalActiveExpense) }}</p>\n        </div>\n        <div class=\"bg-white rounded-xl border border-slate-100 shadow-sm p-5\">\n          <p class=\"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1\">Planifications actives</p>\n          <p class=\"text-2xl font-bold text-slate-900\">{{ activeCount }}</p>\n          <p class=\"text-xs text-slate-400 mt-0.5\">sur {{ planned.length }} au total</p>\n        </div>\n        <div class=\"bg-[#5048e5]/5 rounded-xl border border-[#5048e5]/15 p-5\">\n          <p class=\"text-xs font-semibold uppercase tracking-wider text-[#5048e5] mb-1\">Prochaine \u00E9ch\u00E9ance</p>\n          @if (filteredPlanned.length > 0) {\n            <p class=\"text-xl font-bold text-[#5048e5] truncate\">{{ filteredPlanned[0].label }}</p>\n            <p class=\"text-xs text-[#5048e5]/70 mt-0.5\">{{ formatDate(filteredPlanned[0].nextDueDate) }}</p>\n          } @else {\n            <p class=\"text-xl font-bold text-slate-400\">\u2014</p>\n          }\n        </div>\n      </div>\n    }\n\n    <!-- Tabs -->\n    <div class=\"border-b border-slate-200 flex gap-1\">\n      @for (tab of ([{v:'all',l:'Tout'},{v:'EXPENSE',l:'D\u00E9penses'},{v:'INCOME',l:'Revenus'}]); track tab.v) {\n        <button\n          (click)=\"activeTab = $any(tab.v)\"\n          class=\"px-4 pb-3 text-sm font-medium transition-colors border-b-2\"\n          [class.border-[#5048e5]]=\"activeTab === tab.v\"\n          [class.text-[#5048e5]]=\"activeTab === tab.v\"\n          [class.font-bold]=\"activeTab === tab.v\"\n          [class.border-transparent]=\"activeTab !== tab.v\"\n          [class.text-slate-500]=\"activeTab !== tab.v\"\n        >\n          {{ tab.l }}\n        </button>\n      }\n    </div>\n\n    <!-- Loading -->\n    @if (loading) {\n      <div class=\"bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden animate-pulse\">\n        @for (i of [1,2,3,4]; track i) {\n          <div class=\"flex items-center gap-4 px-6 py-4 border-b border-slate-50\">\n            <div class=\"w-8 h-8 bg-slate-200 rounded-lg shrink-0\"></div>\n            <div class=\"flex-1 space-y-1.5\">\n              <div class=\"h-3 w-1/3 bg-slate-200 rounded\"></div>\n              <div class=\"h-3 w-1/5 bg-slate-200 rounded\"></div>\n            </div>\n            <div class=\"h-3 w-16 bg-slate-200 rounded\"></div>\n            <div class=\"h-3 w-14 bg-slate-200 rounded\"></div>\n            <div class=\"h-5 w-9 bg-slate-200 rounded-full\"></div>\n          </div>\n        }\n      </div>\n    }\n\n    <!-- Error -->\n    @if (!loading && error) {\n      <div class=\"bg-red-50 border border-red-200 rounded-xl p-6 text-center\">\n        <span class=\"material-symbols-outlined text-red-400 text-3xl block mb-2\">error</span>\n        <p class=\"text-sm text-red-600\">{{ error }}</p>\n        <button (click)=\"loadAll()\" class=\"mt-3 text-sm text-[#5048e5] font-semibold hover:underline\">R\u00E9essayer</button>\n      </div>\n    }\n\n    <!-- Empty -->\n    @if (!loading && !error && filteredPlanned.length === 0) {\n      <div class=\"bg-white rounded-xl border border-slate-100 shadow-sm p-14 text-center\">\n        <span class=\"material-symbols-outlined text-slate-300 text-5xl block mb-3\">event_repeat</span>\n        <p class=\"text-slate-500 font-medium\">Aucune transaction planifi\u00E9e</p>\n        <p class=\"text-sm text-slate-400 mt-1\">Ajoutez vos abonnements et paiements r\u00E9currents.</p>\n        <button\n          (click)=\"openCreate()\"\n          class=\"mt-5 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition\"\n        >\n          Ajouter une planification\n        </button>\n      </div>\n    }\n\n    <!-- Table -->\n    @if (!loading && !error && filteredPlanned.length > 0) {\n      <div class=\"bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden\">\n        <div class=\"overflow-x-auto\">\n          <table class=\"w-full text-sm\">\n            <thead>\n              <tr class=\"bg-slate-50/60 border-b border-slate-100\">\n                <th class=\"text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Label</th>\n                <th class=\"text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Montant</th>\n                <th class=\"text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Fr\u00E9quence</th>\n                <th class=\"text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Prochaine \u00E9ch\u00E9ance</th>\n                <th class=\"text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Statut</th>\n                <th class=\"text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (item of filteredPlanned; track trackById($index, item)) {\n                <!-- Main row -->\n                <tr\n                  class=\"border-b border-slate-50 hover:bg-slate-50/60 transition-colors cursor-pointer\"\n                  [class.bg-slate-50/40]=\"item.showRuns\"\n                  (click)=\"toggleRuns(item)\"\n                >\n                  <td class=\"px-6 py-3.5\">\n                    <div class=\"flex items-center gap-3\">\n                      <div\n                        class=\"w-8 h-8 rounded-lg flex items-center justify-center shrink-0\"\n                        [class.bg-red-100]=\"item.type === 'EXPENSE'\"\n                        [class.text-red-600]=\"item.type === 'EXPENSE'\"\n                        [class.bg-emerald-100]=\"item.type === 'INCOME'\"\n                        [class.text-emerald-600]=\"item.type === 'INCOME'\"\n                      >\n                        <span class=\"material-symbols-outlined text-[16px]\">\n                          {{ item.type === 'INCOME' ? 'trending_up' : 'trending_down' }}\n                        </span>\n                      </div>\n                      <div>\n                        <p class=\"font-medium text-slate-900\" [class.text-slate-400]=\"!item.isActive\">{{ item.label }}</p>\n                        <p class=\"text-xs text-slate-400\">{{ categoryName(item.categoryId) }}</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td class=\"px-6 py-3.5 text-right font-semibold\"\n                      [class.text-red-600]=\"item.type === 'EXPENSE'\"\n                      [class.text-emerald-600]=\"item.type === 'INCOME'\"\n                      [class.text-slate-400]=\"!item.isActive\">\n                    {{ item.type === 'INCOME' ? '+' : '-' }}{{ formatAmount(item.amount) }}\n                  </td>\n                  <td class=\"px-6 py-3.5\">\n                    <span class=\"inline-flex px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">\n                      {{ frequencyLabel(item.frequency) }}\n                    </span>\n                  </td>\n                  <td class=\"px-6 py-3.5 text-slate-600\">{{ formatDate(item.nextDueDate) }}</td>\n                  <td class=\"px-6 py-3.5\" (click)=\"$event.stopPropagation()\">\n                    <button\n                      (click)=\"toggle(item)\"\n                      [disabled]=\"toggling === item.id\"\n                      class=\"flex items-center gap-2 transition\"\n                      title=\"{{ item.isActive ? 'D\u00E9sactiver' : 'Activer' }}\"\n                    >\n                      <!-- Toggle switch -->\n                      <div\n                        class=\"relative inline-flex h-5 w-9 items-center rounded-full transition-colors\"\n                        [class.bg-[#5048e5]]=\"item.isActive\"\n                        [class.bg-slate-200]=\"!item.isActive\"\n                      >\n                        <span\n                          class=\"inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm\"\n                          [class.translate-x-4]=\"item.isActive\"\n                          [class.translate-x-0.5]=\"!item.isActive\"\n                        ></span>\n                      </div>\n                      <span class=\"text-xs font-medium\" [class.text-[#5048e5]]=\"item.isActive\" [class.text-slate-400]=\"!item.isActive\">\n                        {{ item.isActive ? 'Actif' : 'Paus\u00E9' }}\n                      </span>\n                    </button>\n                  </td>\n                  <td class=\"px-6 py-3.5\" (click)=\"$event.stopPropagation()\">\n                    <div class=\"flex justify-end gap-1\">\n                      @if (item.isActive) {\n                        <button\n                          (click)=\"runNow(item)\"\n                          [disabled]=\"running === item.id\"\n                          class=\"p-1.5 text-slate-400 hover:text-[#5048e5] hover:bg-[#5048e5]/5 rounded-lg transition\"\n                          title=\"Ex\u00E9cuter maintenant\"\n                        >\n                          @if (running === item.id) {\n                            <svg class=\"h-4 w-4 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\">\n                              <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n                              <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8z\"/>\n                            </svg>\n                          } @else {\n                            <span class=\"material-symbols-outlined text-[18px]\">play_arrow</span>\n                          }\n                        </button>\n                      }\n                      <button\n                        (click)=\"openEdit(item)\"\n                        class=\"p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\"\n                        title=\"Modifier\"\n                      >\n                        <span class=\"material-symbols-outlined text-[18px]\">edit</span>\n                      </button>\n                      <button\n                        (click)=\"deletePlanned(item)\"\n                        class=\"p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition\"\n                        title=\"Supprimer\"\n                      >\n                        <span class=\"material-symbols-outlined text-[18px]\">delete</span>\n                      </button>\n                      <button\n                        (click)=\"toggleRuns(item)\"\n                        class=\"p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\"\n                        [title]=\"item.showRuns ? 'Masquer l\\'historique' : 'Voir l\\'historique'\"\n                      >\n                        <span class=\"material-symbols-outlined text-[18px]\">{{ item.showRuns ? 'expand_less' : 'history' }}</span>\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n\n                <!-- Runs sub-row -->\n                @if (item.showRuns) {\n                  <tr class=\"bg-slate-50/40 border-b border-slate-100\">\n                    <td colspan=\"6\" class=\"px-6 py-4\">\n                      @if (item.loadingRuns) {\n                        <div class=\"animate-pulse space-y-2\">\n                          <div class=\"h-3 w-1/2 bg-slate-200 rounded\"></div>\n                          <div class=\"h-3 w-1/3 bg-slate-200 rounded\"></div>\n                        </div>\n                      } @else if (item.runs.length === 0) {\n                        <p class=\"text-xs text-slate-400\">Aucune ex\u00E9cution enregistr\u00E9e.</p>\n                      } @else {\n                        <div class=\"space-y-1.5\">\n                          <p class=\"text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2\">Historique des ex\u00E9cutions</p>\n                          @for (run of item.runs; track run.id) {\n                            <div class=\"flex items-center gap-3 text-xs\">\n                              <span\n                                class=\"inline-flex px-2 py-0.5 rounded-full font-bold text-[11px]\"\n                                [class]=\"runStatusClass(run.status)\"\n                              >{{ run.status === 'SUCCESS' ? 'Succ\u00E8s' : '\u00C9chec' }}</span>\n                              <span class=\"text-slate-500\">{{ formatDate(run.dueDate) }}</span>\n                              @if (run.executedAt) {\n                                <span class=\"text-slate-400\">ex\u00E9cut\u00E9 le {{ formatDate(run.executedAt) }}</span>\n                              }\n                              @if (run.errorMessage) {\n                                <span class=\"text-red-500\">\u2014 {{ run.errorMessage }}</span>\n                              }\n                            </div>\n                          }\n                        </div>\n                        @if (item.runsPage && item.runsPage.totalPages > 1) {\n                          <div class=\"mt-3\">\n                            <app-pagination\n                              [page]=\"item.runsPage.number\"\n                              [totalPages]=\"item.runsPage.totalPages\"\n                              [totalElements]=\"item.runsPage.totalElements\"\n                              [size]=\"item.runsPage.size\"\n                              (pageChange)=\"loadRuns(item, $event)\"\n                            />\n                          </div>\n                        }\n                      }\n                    </td>\n                  </tr>\n                }\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <!-- Info banner -->\n      <div class=\"flex items-start gap-3 p-4 rounded-xl border border-[#5048e5]/15 bg-[#5048e5]/5\">\n        <span class=\"material-symbols-outlined text-[#5048e5] text-[20px] mt-0.5 shrink-0\">info</span>\n        <p class=\"text-xs text-slate-600 leading-relaxed\">\n          Les transactions planifi\u00E9es actives apparaissent automatiquement dans votre journal \u00E0 leur date d'\u00E9ch\u00E9ance si\n          <strong>Cr\u00E9ation auto</strong> est activ\u00E9e. Utilisez <strong>Ex\u00E9cuter maintenant</strong> pour forcer une ex\u00E9cution manuelle.\n          Les transactions paus\u00E9es ne seront pas trait\u00E9es.\n        </p>\n      </div>\n    }\n\n  </div>\n</div>\n\n<!-- Backdrop -->\n@if (showForm) {\n  <div class=\"fixed inset-0 z-30 bg-black/30 backdrop-blur-sm\" (click)=\"closeForm()\"></div>\n}\n\n<!-- Form panel -->\n@if (showForm) {\n  <aside class=\"fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl flex flex-col\">\n\n    <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n      <h3 class=\"font-bold text-slate-900\">\n        {{ editingId !== null ? 'Modifier la planification' : 'Nouvelle planification' }}\n      </h3>\n      <button (click)=\"closeForm()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n        <span class=\"material-symbols-outlined text-[20px]\">close</span>\n      </button>\n    </div>\n\n    <div class=\"flex-1 overflow-y-auto px-6 py-5\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate class=\"space-y-4\">\n\n        <!-- Label -->\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">\n            Label <span class=\"text-red-400\">*</span>\n          </label>\n          <input\n            type=\"text\"\n            formControlName=\"label\"\n            required\n            maxlength=\"100\"\n            placeholder=\"Netflix, Loyer, Salaire\u2026\"\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition\n                   focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            [class.border-red-400]=\"label.invalid && label.touched\"\n            [class.border-zinc-300]=\"!(label.invalid && label.touched)\"\n          />\n          @if (label.touched && label.hasError('required')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">Le label est requis.</p>\n          }\n        </div>\n\n        <!-- Type + Amount -->\n        <div class=\"grid grid-cols-2 gap-3\">\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Type <span class=\"text-red-400\">*</span></label>\n            <select\n              formControlName=\"type\"\n              required\n              class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition\n                     focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            >\n              <option value=\"EXPENSE\">D\u00E9pense</option>\n              <option value=\"INCOME\">Revenu</option>\n            </select>\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Montant (\u20AC) <span class=\"text-red-400\">*</span></label>\n            <input\n              type=\"number\"\n              formControlName=\"amount\"\n              required\n              min=\"0.01\"\n              step=\"0.01\"\n              placeholder=\"19.99\"\n              class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition\n                     focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n              [class.border-red-400]=\"amount.invalid && amount.touched\"\n              [class.border-zinc-300]=\"!(amount.invalid && amount.touched)\"\n            />\n            @if (amount.touched && amount.hasError('required')) {\n              <p class=\"mt-1.5 text-xs text-red-500\">Requis.</p>\n            } @else if (amount.touched && amount.hasError('min')) {\n              <p class=\"mt-1.5 text-xs text-red-500\">Doit \u00EAtre positif.</p>\n            }\n          </div>\n        </div>\n\n        <!-- Category -->\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">\n            Cat\u00E9gorie <span class=\"text-red-400\">*</span>\n          </label>\n          <select\n            formControlName=\"categoryId\"\n            required\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition\n                   focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            [class.border-red-400]=\"categoryId.invalid && categoryId.touched\"\n            [class.border-zinc-300]=\"!(categoryId.invalid && categoryId.touched)\"\n          >\n            <option [value]=\"null\" disabled>Choisir une cat\u00E9gorie</option>\n            @for (cat of categories; track cat.id) {\n              <option [value]=\"cat.id\">{{ cat.name }}</option>\n            }\n          </select>\n          @if (categoryId.touched && categoryId.hasError('required')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">La cat\u00E9gorie est requise.</p>\n          }\n        </div>\n\n        <!-- Frequency + Next due date -->\n        <div class=\"grid grid-cols-2 gap-3\">\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Fr\u00E9quence <span class=\"text-red-400\">*</span></label>\n            <select\n              formControlName=\"frequency\"\n              required\n              class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition\n                     focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n            >\n              @for (f of frequencies; track f.value) {\n                <option [value]=\"f.value\">{{ f.label }}</option>\n              }\n            </select>\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Prochaine date <span class=\"text-red-400\">*</span></label>\n            <input\n              type=\"date\"\n              formControlName=\"nextDueDate\"\n              required\n              class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition\n                     focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"\n              [class.border-red-400]=\"nextDueDate.invalid && nextDueDate.touched\"\n              [class.border-zinc-300]=\"!(nextDueDate.invalid && nextDueDate.touched)\"\n            />\n            @if (nextDueDate.touched && nextDueDate.hasError('required')) {\n              <p class=\"mt-1.5 text-xs text-red-500\">Requise.</p>\n            }\n          </div>\n        </div>\n\n        <!-- Auto-create -->\n        <div class=\"flex items-center gap-3 p-3 bg-slate-50 rounded-lg\">\n          <input\n            id=\"autoCreate\"\n            type=\"checkbox\"\n            formControlName=\"autoCreate\"\n            class=\"h-4 w-4 rounded border-slate-300 text-[#5048e5] focus:ring-[#5048e5]\"\n          />\n          <label for=\"autoCreate\" class=\"text-sm text-zinc-700 cursor-pointer\">\n            <span class=\"font-medium\">Cr\u00E9ation automatique</span>\n            <span class=\"text-slate-400 ml-1\">\u2014 cr\u00E9e la transaction \u00E0 chaque \u00E9ch\u00E9ance</span>\n          </label>\n        </div>\n\n        <div class=\"pt-2 flex justify-end gap-3\">\n          <button\n            type=\"button\"\n            (click)=\"closeForm()\"\n            class=\"px-4 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition\"\n          >\n            Annuler\n          </button>\n          <button\n            type=\"submit\"\n            [disabled]=\"saving\"\n            class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg\n                   hover:bg-[#4338ca] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed\"\n          >\n            @if (saving) {\n              <svg class=\"h-4 w-4 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n                <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8z\"/>\n              </svg>\n              Enregistrement\u2026\n            } @else {\n              {{ editingId !== null ? 'Enregistrer' : 'Cr\u00E9er' }}\n            }\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </aside>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlannedPage, { className: "PlannedPage", filePath: "src/app/features/planned-transactions/pages/planned-page/planned-page.ts", lineNumber: 35 }); })();
