import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { DebtsService } from '../../services/debts.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2];
const _forTrack0 = ($index, $item) => $item.id;
function DebtsPage_Conditional_13_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function DebtsPage_Conditional_13_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} }
function DebtsPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, DebtsPage_Conditional_13_For_2_Template, 1, 0, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵrepeaterCreate(4, DebtsPage_Conditional_13_For_5_Template, 1, 0, "div", 13, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(1, _c1));
} }
function DebtsPage_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "span", 14);
    i0.ɵɵtext(2, "error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 16);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_14_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.retryLoad()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function DebtsPage_Conditional_15_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "span", 32);
    i0.ɵɵtext(2, "account_balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 33);
    i0.ɵɵtext(4, "No active loans found.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 34);
    i0.ɵɵtext(6, "Add your first debt to start tracking repayments.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 35);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_15_Conditional_30_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵtext(8, "Add Debt");
    i0.ɵɵelementEnd()();
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_35_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const debt_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openPay(debt_r6)); });
    i0.ɵɵtext(1, " Add Payment ");
    i0.ɵɵelementEnd();
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵelement(1, "div", 62)(2, "div", 62)(3, "div", 62);
    i0.ɵɵelementEnd();
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, " No payments recorded yet. ");
    i0.ɵɵelementEnd();
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 72)(6, "span", 73);
    i0.ɵɵtext(7, "Paid");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td", 74);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(p_r7.paymentDate));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r7.note || "Monthly Installment");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(p_r7.amount));
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "app-pagination", 75);
    i0.ɵɵlistener("pageChange", function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_Conditional_15_Template_app_pagination_pageChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const debt_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onPaymentPageChange(debt_r6, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const debt_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("page", debt_r6.paymentsPage.number)("totalPages", debt_r6.paymentsPage.totalPages)("totalElements", debt_r6.paymentsPage.totalElements)("size", debt_r6.paymentsPage.size);
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "table", 64)(2, "thead", 65)(3, "tr")(4, "th", 66);
    i0.ɵɵtext(5, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 66);
    i0.ɵɵtext(7, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 66);
    i0.ɵɵtext(9, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 67);
    i0.ɵɵtext(11, "Amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "tbody", 68);
    i0.ɵɵrepeaterCreate(13, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_For_14_Template, 10, 3, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(15, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_Conditional_15_Template, 2, 4, "div", 69);
} if (rf & 2) {
    const debt_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(debt_r6.payments);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(debt_r6.paymentsPage && debt_r6.paymentsPage.totalPages > 1 ? 15 : -1);
} }
function DebtsPage_Conditional_15_Conditional_31_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div")(4, "div", 39)(5, "div", 40)(6, "span", 6);
    i0.ɵɵtext(7, "account_balance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "h3", 41);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 42)(11, "div", 43)(12, "span", 33);
    i0.ɵɵtext(13, "Total Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 44);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 43)(17, "span", 33);
    i0.ɵɵtext(18, "Remaining Principal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 45);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 43)(22, "span", 33);
    i0.ɵɵtext(23, "Monthly Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 46);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 47)(27, "div", 48)(28, "span", 49);
    i0.ɵɵtext(29, "Repayment Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 50);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 51);
    i0.ɵɵelement(33, "div", 52);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(34, "div", 53);
    i0.ɵɵconditionalCreate(35, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_35_Template, 2, 0, "button", 54);
    i0.ɵɵelementStart(36, "button", 55);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_15_Conditional_31_For_2_Template_button_click_36_listener() { const debt_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openEdit(debt_r6)); });
    i0.ɵɵtext(37, " Edit ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 56);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_15_Conditional_31_For_2_Template_button_click_38_listener() { const debt_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteDebt(debt_r6)); });
    i0.ɵɵtext(39, " Delete ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 57)(41, "h4", 58);
    i0.ɵɵtext(42, "Recent Payment History");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(43, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_43_Template, 4, 0, "div", 59)(44, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_44_Template, 2, 0, "div", 60)(45, DebtsPage_Conditional_15_Conditional_31_For_2_Conditional_45_Template, 16, 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const debt_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(debt_r6.creditorName);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(debt_r6.totalAmount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(debt_r6.remainingAmount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(debt_r6.monthlyPayment));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.repaidPercent(debt_r6), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(debt_r6.status === "PAID" ? "bg-emerald-500" : "bg-[#5048e5]");
    i0.ɵɵstyleProp("width", ctx_r1.repaidPercent(debt_r6), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(debt_r6.status === "ACTIVE" ? 35 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(debt_r6.loadingPayments ? 43 : debt_r6.payments.length === 0 ? 44 : 45);
} }
function DebtsPage_Conditional_15_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵrepeaterCreate(1, DebtsPage_Conditional_15_Conditional_31_For_2_Template, 46, 11, "div", 36, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.debts);
} }
function DebtsPage_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 17)(2, "div", 18)(3, "span", 19);
    i0.ɵɵtext(4, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6, "Total Combined Debt");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 21)(8, "span", 22);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 17)(11, "div", 18)(12, "span", 23);
    i0.ɵɵtext(13, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 20);
    i0.ɵɵtext(15, "Total Paid to Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 21)(17, "span", 22);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 17)(20, "div", 18)(21, "span", 24);
    i0.ɵɵtext(22, "event");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 20);
    i0.ɵɵtext(24, "Next Major Due");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 21)(26, "span", 22);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 25);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(30, DebtsPage_Conditional_15_Conditional_30_Template, 9, 0, "div", 26)(31, DebtsPage_Conditional_15_Conditional_31_Template, 3, 0, "div", 12);
    i0.ɵɵelementStart(32, "div", 27)(33, "p", 28);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 29)(36, "button", 30);
    i0.ɵɵtext(37, "Previous");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 31);
    i0.ɵɵtext(39, "Next");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.totalCombinedDebt));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.totalPaidToDate));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.nextMajorDueDate ? ctx_r1.formatDate(ctx_r1.nextMajorDueDate) : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.nextMajorDueCreditor || "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.debts.length === 0 ? 30 : 31);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Showing ", ctx_r1.debts.length, " active loans");
} }
function DebtsPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_16_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementEnd();
} }
function DebtsPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 9)(1, "div", 77)(2, "h3", 78);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 79);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_17_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementStart(5, "span", 80);
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 81)(8, "form", 82);
    i0.ɵɵlistener("ngSubmit", function DebtsPage_Conditional_17_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitDebt()); });
    i0.ɵɵelementStart(9, "div")(10, "label", 83);
    i0.ɵɵtext(11, "Creditor ");
    i0.ɵɵelementStart(12, "span", 84);
    i0.ɵɵtext(13, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "input", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div")(16, "label", 83);
    i0.ɵɵtext(17, "Total Amount (\u20AC) ");
    i0.ɵɵelementStart(18, "span", 84);
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(20, "input", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "label", 83);
    i0.ɵɵtext(23, "Monthly Payment (\u20AC) ");
    i0.ɵɵelementStart(24, "span", 84);
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(26, "input", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div")(28, "label", 83);
    i0.ɵɵtext(29, "Interest Rate (%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div")(32, "label", 83);
    i0.ɵɵtext(33, "Start Date ");
    i0.ɵɵelementStart(34, "span", 84);
    i0.ɵɵtext(35, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(36, "input", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div")(38, "label", 83);
    i0.ɵɵtext(39, "Final Due Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(40, "input", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 91)(42, "button", 92);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_17_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵtext(43, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 93);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.activePanel === "edit" ? "Edit Debt" : "Create Debt");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.debtForm);
    i0.ɵɵadvance(36);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : ctx_r1.activePanel === "edit" ? "Save" : "Create", " ");
} }
function DebtsPage_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 9)(1, "div", 77)(2, "div")(3, "h3", 78);
    i0.ɵɵtext(4, "Register Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 94);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 79);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementStart(8, "span", 80);
    i0.ɵɵtext(9, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 95)(11, "div", 96)(12, "span", 97);
    i0.ɵɵtext(13, "Remaining principal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 78);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 81)(17, "form", 82);
    i0.ɵɵlistener("ngSubmit", function DebtsPage_Conditional_18_Template_form_ngSubmit_17_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitPayment()); });
    i0.ɵɵelementStart(18, "div")(19, "label", 83);
    i0.ɵɵtext(20, "Amount (\u20AC) ");
    i0.ɵɵelementStart(21, "span", 84);
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(23, "input", 98);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div")(25, "label", 83);
    i0.ɵɵtext(26, "Payment date ");
    i0.ɵɵelementStart(27, "span", 84);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(29, "input", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div")(31, "label", 83);
    i0.ɵɵtext(32, "Note");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 91)(35, "button", 92);
    i0.ɵɵlistener("click", function DebtsPage_Conditional_18_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵtext(36, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 93);
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.payingDebt.creditorName);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.payingDebt.remainingAmount));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.paymentForm);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save Payment", " ");
} }
export class DebtsPage {
    debtsService = inject(DebtsService);
    fb = inject(FormBuilder);
    debts = [];
    summary = null;
    loading = true;
    error = null;
    saving = false;
    activePanel = null;
    editingDebt = null;
    payingDebt = null;
    debtForm = this.fb.group({
        creditorName: ['', [Validators.required, Validators.maxLength(100)]],
        totalAmount: [null, [Validators.required, Validators.min(0.01)]],
        monthlyPayment: [null, [Validators.required, Validators.min(0.01)]],
        interestRate: [null, [Validators.min(0), Validators.max(100)]],
        startDate: ['', [Validators.required]],
        dueDate: [''],
    });
    paymentForm = this.fb.group({
        amount: [null, [Validators.required, Validators.min(0.01)]],
        paymentDate: ['', [Validators.required]],
        note: ['', [Validators.maxLength(300)]],
    });
    get creditorName() { return this.debtForm.controls.creditorName; }
    get totalAmount() { return this.debtForm.controls.totalAmount; }
    get monthlyPayment() { return this.debtForm.controls.monthlyPayment; }
    get interestRate() { return this.debtForm.controls.interestRate; }
    get startDate() { return this.debtForm.controls.startDate; }
    get dueDate() { return this.debtForm.controls.dueDate; }
    get payAmount() { return this.paymentForm.controls.amount; }
    get payDate() { return this.paymentForm.controls.paymentDate; }
    get payNote() { return this.paymentForm.controls.note; }
    get isDebtFormOpen() {
        return this.activePanel === 'create' || this.activePanel === 'edit';
    }
    get isPaymentFormOpen() {
        return this.activePanel === 'pay' && !!this.payingDebt;
    }
    get activeDebts() {
        return this.debts.filter((d) => d.status === 'ACTIVE');
    }
    get totalCombinedDebt() {
        return this.summary?.totalDebt ?? this.activeDebts.reduce((s, d) => s + (d.remainingAmount ?? 0), 0);
    }
    get totalPaidToDate() {
        return this.summary?.totalPaid ?? this.debts.reduce((s, d) => s + this.repaidAmount(d), 0);
    }
    get nextMajorDueDate() {
        if (this.summary?.nextDueDate)
            return this.summary.nextDueDate;
        const withDue = this.activeDebts
            .filter((d) => !!d.dueDate)
            .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
        return withDue[0]?.dueDate ?? null;
    }
    get nextMajorDueCreditor() {
        if (this.summary?.nextDueCreditor)
            return this.summary.nextDueCreditor;
        const nextDate = this.nextMajorDueDate;
        if (!nextDate)
            return null;
        return this.activeDebts.find((d) => d.dueDate === nextDate)?.creditorName ?? null;
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
        this.debtsService.getSummary().subscribe({
            next: summary => { this.summary = summary; },
            error: () => { },
        });
        this.debtsService.getAll().subscribe({
            next: debts => {
                this.debts = debts.map(d => ({
                    ...d,
                    payments: [],
                    paymentsPage: null,
                    loadingPayments: false,
                }));
                this.loading = false;
                this.debts.forEach(d => this.loadPayments(d, 0));
            },
            error: () => {
                this.error = 'Impossible de charger les dettes.';
                this.loading = false;
            },
        });
    }
    loadPayments(debt, page) {
        debt.loadingPayments = true;
        this.debtsService.getPayments(debt.id, page).subscribe({
            next: result => {
                debt.payments = result.content;
                debt.paymentsPage = result;
                debt.loadingPayments = false;
            },
            error: () => { debt.loadingPayments = false; },
        });
    }
    onPaymentPageChange(debt, page) {
        this.loadPayments(debt, page);
    }
    openCreate() {
        this.editingDebt = null;
        this.debtForm.reset({
            creditorName: '',
            totalAmount: null,
            monthlyPayment: null,
            interestRate: null,
            startDate: dayjs().format('YYYY-MM-DD'),
            dueDate: '',
        });
        this.activePanel = 'create';
    }
    openEdit(debt) {
        this.editingDebt = debt;
        this.debtForm.setValue({
            creditorName: debt.creditorName,
            totalAmount: debt.totalAmount,
            monthlyPayment: debt.monthlyPayment,
            interestRate: debt.interestRate ?? null,
            startDate: debt.startDate,
            dueDate: debt.dueDate ?? '',
        });
        this.activePanel = 'edit';
    }
    openPay(debt) {
        this.payingDebt = debt;
        this.paymentForm.reset({
            amount: null,
            paymentDate: dayjs().format('YYYY-MM-DD'),
            note: '',
        });
        this.activePanel = 'pay';
    }
    openQuickPayment() {
        const active = this.activeDebts[0];
        if (active) {
            this.openPay(active);
            return;
        }
        this.openCreate();
    }
    closePanel() {
        this.activePanel = null;
        this.editingDebt = null;
        this.payingDebt = null;
    }
    submitDebt() {
        if (this.debtForm.invalid) {
            this.debtForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        const v = this.debtForm.value;
        const payload = {
            creditorName: v.creditorName,
            totalAmount: v.totalAmount,
            monthlyPayment: v.monthlyPayment,
            interestRate: v.interestRate ?? null,
            startDate: v.startDate,
            dueDate: v.dueDate || null,
        };
        const obs = this.editingDebt
            ? this.debtsService.update(this.editingDebt.id, payload)
            : this.debtsService.create(payload);
        obs.subscribe({
            next: () => {
                this.saving = false;
                this.closePanel();
                this.loadAll();
            },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer la dette.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    submitPayment() {
        if (this.paymentForm.invalid || !this.payingDebt) {
            this.paymentForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        const v = this.paymentForm.value;
        const payload = {
            amount: v.amount,
            paymentDate: v.paymentDate,
            note: v.note || null,
        };
        this.debtsService.registerPayment(this.payingDebt.id, payload).subscribe({
            next: () => {
                this.saving = false;
                this.closePanel();
                this.loadAll();
                Swal.fire({ icon: 'success', title: 'Paiement enregistré', timer: 1500, showConfirmButton: false });
            },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer le paiement.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    async deleteDebt(debt) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer cette dette ?',
            text: `"${debt.creditorName}" sera définitivement supprimée.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.debtsService.delete(debt.id).subscribe({
            next: () => {
                this.loadAll();
                Swal.fire({ icon: 'success', title: 'Dette supprimée', timer: 1200, showConfirmButton: false });
            },
            error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer la dette.', confirmButtonColor: '#5048e5' }),
        });
    }
    repaidPercent(debt) {
        if (!debt.totalAmount)
            return 0;
        const paid = debt.totalAmount - debt.remainingAmount;
        return Math.min(100, Math.round((paid / debt.totalAmount) * 100));
    }
    repaidAmount(debt) {
        return debt.totalAmount - debt.remainingAmount;
    }
    statusLabel(debt) {
        switch (debt.status) {
            case 'ACTIVE': return 'En cours';
            case 'PAID': return 'Remboursée';
            case 'CANCELLED': return 'Annulée';
        }
    }
    statusClass(debt) {
        switch (debt.status) {
            case 'ACTIVE': return 'bg-blue-50 text-blue-700';
            case 'PAID': return 'bg-emerald-50 text-emerald-700';
            case 'CANCELLED': return 'bg-slate-100 text-slate-500';
        }
    }
    formatDate(d) {
        return dayjs(d).format('DD/MM/YYYY');
    }
    formatAmount(n) {
        if (n === null || n === undefined || Number.isNaN(n)) {
            return (0).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
        }
        return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
    trackById(_, item) { return item.id; }
    static ɵfac = function DebtsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DebtsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DebtsPage, selectors: [["app-debts-page"]], decls: 19, vars: 4, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "flex-1", "max-w-[1200px]", "mx-auto", "w-full", "p-6", "lg:p-8"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-end", "gap-6", "mb-10"], [1, "text-4xl", "font-black", "tracking-tight"], [1, "text-slate-600", "mt-2", "text-lg"], [1, "flex", "items-center", "justify-center", "gap-2", "px-6", "py-3", "bg-[#5048e5]", "text-white", "rounded-xl", "font-bold", "shadow-lg", "shadow-[#5048e5]/25", "hover:bg-[#4338ca]", "transition-all", 3, "click"], [1, "material-symbols-outlined"], [1, "bg-red-50", "border", "border-red-200", "rounded-2xl", "p-6", "text-center"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm"], [1, "fixed", "inset-y-0", "right-0", "z-40", "w-full", "max-w-md", "bg-white", "shadow-2xl", "flex", "flex-col"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-10"], [1, "bg-white", "p-6", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "h-28", "animate-pulse"], [1, "space-y-8"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "h-72", "animate-pulse"], [1, "material-symbols-outlined", "text-red-400", "text-3xl", "block", "mb-2"], [1, "text-sm", "text-red-600"], [1, "mt-3", "text-sm", "text-[#5048e5]", "font-semibold", "hover:underline", 3, "click"], [1, "bg-white", "p-6", "rounded-2xl", "border", "border-slate-200", "shadow-sm"], [1, "flex", "items-center", "gap-3", "text-slate-500", "mb-2"], [1, "material-symbols-outlined", "text-[#5048e5]"], [1, "text-sm", "font-semibold", "uppercase", "tracking-wider"], [1, "flex", "items-baseline", "gap-3"], [1, "text-3xl", "font-black", "text-slate-900"], [1, "material-symbols-outlined", "text-green-500"], [1, "material-symbols-outlined", "text-indigo-400"], [1, "text-slate-500", "text-sm", "font-medium"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "p-16", "text-center"], [1, "mt-12", "flex", "items-center", "justify-between", "border-t", "border-slate-200", "pt-8"], [1, "text-sm", "text-slate-500"], [1, "flex", "gap-2"], ["disabled", "", 1, "px-4", "py-2", "border", "border-slate-200", "rounded-lg", "text-sm", "font-bold", "disabled:opacity-50"], [1, "px-4", "py-2", "bg-slate-100", "rounded-lg", "text-sm", "font-bold"], [1, "material-symbols-outlined", "text-slate-300", "text-5xl", "block", "mb-3"], [1, "text-slate-500", "font-medium"], [1, "text-sm", "text-slate-400", "mt-1"], [1, "mt-5", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "p-6", "md:p-8", "flex", "flex-col", "lg:flex-row", "gap-8"], [1, "lg:w-1/3", "flex", "flex-col", "justify-between"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "p-2", "bg-indigo-50", "text-[#5048e5]", "rounded-lg"], [1, "text-xl", "font-bold", "truncate"], [1, "space-y-4"], [1, "flex", "justify-between", "text-sm"], [1, "text-slate-900", "font-bold"], [1, "text-[#5048e5]", "font-black", "text-lg", "leading-none"], [1, "text-slate-900", "font-semibold"], [1, "pt-2"], [1, "flex", "justify-between", "items-end", "mb-2"], [1, "text-xs", "font-bold", "text-slate-400", "uppercase", "tracking-tighter"], [1, "text-sm", "font-black", "text-[#5048e5]"], [1, "w-full", "h-3", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all"], [1, "mt-6", "pt-6", "border-t", "border-slate-100", "flex", "gap-2"], [1, "flex-1", "py-2", "px-4", "bg-[#5048e5]", "text-white", "font-bold", "rounded-lg", "hover:bg-[#4338ca]", "transition-colors", "text-sm"], [1, "py-2", "px-3", "border", "border-[#5048e5]", "text-[#5048e5]", "font-bold", "rounded-lg", "hover:bg-[#5048e5]/5", "transition-colors", "text-sm", 3, "click"], [1, "py-2", "px-3", "border", "border-slate-200", "text-slate-500", "font-bold", "rounded-lg", "hover:bg-slate-50", "transition-colors", "text-sm", 3, "click"], [1, "lg:w-2/3"], [1, "text-sm", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mb-4"], [1, "space-y-2", "animate-pulse"], [1, "rounded-xl", "border", "border-slate-100", "bg-slate-50", "p-6", "text-center", "text-sm", "text-slate-400"], [1, "flex-1", "py-2", "px-4", "bg-[#5048e5]", "text-white", "font-bold", "rounded-lg", "hover:bg-[#4338ca]", "transition-colors", "text-sm", 3, "click"], [1, "h-10", "bg-slate-200", "rounded"], [1, "overflow-x-auto"], [1, "w-full", "text-left"], [1, "border-b", "border-slate-100"], [1, "py-3", "text-xs", "font-bold", "text-slate-500", "uppercase"], [1, "py-3", "text-xs", "font-bold", "text-slate-500", "uppercase", "text-right"], [1, "divide-y", "divide-slate-50"], [1, "pt-3", "border-t", "border-slate-100"], [1, "py-4", "text-sm", "font-medium"], [1, "py-4", "text-sm", "text-slate-600"], [1, "py-4"], [1, "px-2", "py-1", "text-[10px]", "font-bold", "bg-green-100", "text-green-700", "rounded", "uppercase"], [1, "py-4", "text-sm", "font-bold", "text-right"], [3, "pageChange", "page", "totalPages", "totalElements", "size"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm", 3, "click"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "font-bold", "text-slate-900"], [1, "p-2", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[20px]"], [1, "flex-1", "overflow-y-auto", "px-6", "py-5"], ["novalidate", "", 1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "text-red-400"], ["type", "text", "formControlName", "creditorName", "required", "", "maxlength", "100", "placeholder", "Bank, lender...", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "number", "formControlName", "totalAmount", "required", "", "min", "0.01", "step", "0.01", "placeholder", "10000", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "number", "formControlName", "monthlyPayment", "required", "", "min", "0.01", "step", "0.01", "placeholder", "250", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "number", "formControlName", "interestRate", "min", "0", "max", "100", "step", "0.01", "placeholder", "3.5", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "startDate", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "dueDate", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "pt-2", "flex", "justify-end", "gap-3"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-semibold", "text-slate-600", "bg-slate-100", "hover:bg-slate-200", "rounded-lg", "transition", 3, "click"], ["type", "submit", 1, "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "px-6", "py-4", "bg-slate-50", "border-b", "border-slate-100"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "text-slate-500"], ["type", "number", "formControlName", "amount", "required", "", "min", "0.01", "step", "0.01", "placeholder", "200", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "paymentDate", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "text", "formControlName", "note", "maxlength", "300", "placeholder", "Manual transfer...", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"]], template: function DebtsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
            i0.ɵɵtext(5, "Active Loans");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7, "Detailed overview of your current liabilities and repayment status.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function DebtsPage_Template_button_click_8_listener() { return ctx.openQuickPayment(); });
            i0.ɵɵelementStart(9, "span", 6);
            i0.ɵɵtext(10, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Add Payment");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(13, DebtsPage_Conditional_13_Template, 6, 2)(14, DebtsPage_Conditional_14_Template, 7, 1, "div", 7)(15, DebtsPage_Conditional_15_Template, 40, 6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, DebtsPage_Conditional_16_Template, 1, 0, "div", 8);
            i0.ɵɵconditionalCreate(17, DebtsPage_Conditional_17_Template, 46, 4, "aside", 9);
            i0.ɵɵconditionalCreate(18, DebtsPage_Conditional_18_Template, 39, 5, "aside", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.loading ? 13 : ctx.error ? 14 : 15);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.activePanel ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isDebtFormOpen ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isPaymentFormOpen && ctx.payingDebt ? 18 : -1);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.FormGroupDirective, i1.FormControlName, PaginationComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DebtsPage, [{
        type: Component,
        args: [{ selector: 'app-debts-page', standalone: true, imports: [CommonModule, ReactiveFormsModule, PaginationComponent], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <main class=\"flex-1 max-w-[1200px] mx-auto w-full p-6 lg:p-8\">\n    <div class=\"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10\">\n      <div>\n        <h1 class=\"text-4xl font-black tracking-tight\">Active Loans</h1>\n        <p class=\"text-slate-600 mt-2 text-lg\">Detailed overview of your current liabilities and repayment status.</p>\n      </div>\n      <button\n        (click)=\"openQuickPayment()\"\n        class=\"flex items-center justify-center gap-2 px-6 py-3 bg-[#5048e5] text-white rounded-xl font-bold shadow-lg shadow-[#5048e5]/25 hover:bg-[#4338ca] transition-all\"\n      >\n        <span class=\"material-symbols-outlined\">add</span>\n        <span>Add Payment</span>\n      </button>\n    </div>\n\n    @if (loading) {\n      <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10\">\n        @for (i of [1,2,3]; track i) {\n          <div class=\"bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-28 animate-pulse\"></div>\n        }\n      </div>\n      <div class=\"space-y-8\">\n        @for (i of [1,2]; track i) {\n          <div class=\"bg-white rounded-2xl border border-slate-200 shadow-sm h-72 animate-pulse\"></div>\n        }\n      </div>\n    } @else if (error) {\n      <div class=\"bg-red-50 border border-red-200 rounded-2xl p-6 text-center\">\n        <span class=\"material-symbols-outlined text-red-400 text-3xl block mb-2\">error</span>\n        <p class=\"text-sm text-red-600\">{{ error }}</p>\n        <button (click)=\"retryLoad()\" class=\"mt-3 text-sm text-[#5048e5] font-semibold hover:underline\">Retry</button>\n      </div>\n    } @else {\n      <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10\">\n        <div class=\"bg-white p-6 rounded-2xl border border-slate-200 shadow-sm\">\n          <div class=\"flex items-center gap-3 text-slate-500 mb-2\">\n            <span class=\"material-symbols-outlined text-[#5048e5]\">payments</span>\n            <span class=\"text-sm font-semibold uppercase tracking-wider\">Total Combined Debt</span>\n          </div>\n          <div class=\"flex items-baseline gap-3\">\n            <span class=\"text-3xl font-black text-slate-900\">{{ formatAmount(totalCombinedDebt) }}</span>\n          </div>\n        </div>\n        <div class=\"bg-white p-6 rounded-2xl border border-slate-200 shadow-sm\">\n          <div class=\"flex items-center gap-3 text-slate-500 mb-2\">\n            <span class=\"material-symbols-outlined text-green-500\">check_circle</span>\n            <span class=\"text-sm font-semibold uppercase tracking-wider\">Total Paid to Date</span>\n          </div>\n          <div class=\"flex items-baseline gap-3\">\n            <span class=\"text-3xl font-black text-slate-900\">{{ formatAmount(totalPaidToDate) }}</span>\n          </div>\n        </div>\n        <div class=\"bg-white p-6 rounded-2xl border border-slate-200 shadow-sm\">\n          <div class=\"flex items-center gap-3 text-slate-500 mb-2\">\n            <span class=\"material-symbols-outlined text-indigo-400\">event</span>\n            <span class=\"text-sm font-semibold uppercase tracking-wider\">Next Major Due</span>\n          </div>\n          <div class=\"flex items-baseline gap-3\">\n            <span class=\"text-3xl font-black text-slate-900\">{{ nextMajorDueDate ? formatDate(nextMajorDueDate) : '\u2014' }}</span>\n            <span class=\"text-slate-500 text-sm font-medium\">{{ nextMajorDueCreditor || '' }}</span>\n          </div>\n        </div>\n      </div>\n\n      @if (debts.length === 0) {\n        <div class=\"bg-white rounded-2xl border border-slate-200 shadow-sm p-16 text-center\">\n          <span class=\"material-symbols-outlined text-slate-300 text-5xl block mb-3\">account_balance</span>\n          <p class=\"text-slate-500 font-medium\">No active loans found.</p>\n          <p class=\"text-sm text-slate-400 mt-1\">Add your first debt to start tracking repayments.</p>\n          <button (click)=\"openCreate()\" class=\"mt-5 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition\">Add Debt</button>\n        </div>\n      } @else {\n        <div class=\"space-y-8\">\n          @for (debt of debts; track trackById($index, debt)) {\n            <div class=\"bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden\">\n              <div class=\"p-6 md:p-8 flex flex-col lg:flex-row gap-8\">\n                <div class=\"lg:w-1/3 flex flex-col justify-between\">\n                  <div>\n                    <div class=\"flex items-center gap-3 mb-4\">\n                      <div class=\"p-2 bg-indigo-50 text-[#5048e5] rounded-lg\">\n                        <span class=\"material-symbols-outlined\">account_balance</span>\n                      </div>\n                      <h3 class=\"text-xl font-bold truncate\">{{ debt.creditorName }}</h3>\n                    </div>\n\n                    <div class=\"space-y-4\">\n                      <div class=\"flex justify-between text-sm\">\n                        <span class=\"text-slate-500 font-medium\">Total Amount</span>\n                        <span class=\"text-slate-900 font-bold\">{{ formatAmount(debt.totalAmount) }}</span>\n                      </div>\n                      <div class=\"flex justify-between text-sm\">\n                        <span class=\"text-slate-500 font-medium\">Remaining Principal</span>\n                        <span class=\"text-[#5048e5] font-black text-lg leading-none\">{{ formatAmount(debt.remainingAmount) }}</span>\n                      </div>\n                      <div class=\"flex justify-between text-sm\">\n                        <span class=\"text-slate-500 font-medium\">Monthly Payment</span>\n                        <span class=\"text-slate-900 font-semibold\">{{ formatAmount(debt.monthlyPayment) }}</span>\n                      </div>\n                      <div class=\"pt-2\">\n                        <div class=\"flex justify-between items-end mb-2\">\n                          <span class=\"text-xs font-bold text-slate-400 uppercase tracking-tighter\">Repayment Progress</span>\n                          <span class=\"text-sm font-black text-[#5048e5]\">{{ repaidPercent(debt) }}%</span>\n                        </div>\n                        <div class=\"w-full h-3 bg-slate-100 rounded-full overflow-hidden\">\n                          <div class=\"h-full rounded-full transition-all\" [class]=\"debt.status === 'PAID' ? 'bg-emerald-500' : 'bg-[#5048e5]'\" [style.width.%]=\"repaidPercent(debt)\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"mt-6 pt-6 border-t border-slate-100 flex gap-2\">\n                    @if (debt.status === 'ACTIVE') {\n                      <button\n                        (click)=\"openPay(debt)\"\n                        class=\"flex-1 py-2 px-4 bg-[#5048e5] text-white font-bold rounded-lg hover:bg-[#4338ca] transition-colors text-sm\"\n                      >\n                        Add Payment\n                      </button>\n                    }\n                    <button (click)=\"openEdit(debt)\" class=\"py-2 px-3 border border-[#5048e5] text-[#5048e5] font-bold rounded-lg hover:bg-[#5048e5]/5 transition-colors text-sm\">\n                      Edit\n                    </button>\n                    <button (click)=\"deleteDebt(debt)\" class=\"py-2 px-3 border border-slate-200 text-slate-500 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm\">\n                      Delete\n                    </button>\n                  </div>\n                </div>\n\n                <div class=\"lg:w-2/3\">\n                  <h4 class=\"text-sm font-bold text-slate-400 uppercase tracking-widest mb-4\">Recent Payment History</h4>\n                  @if (debt.loadingPayments) {\n                    <div class=\"space-y-2 animate-pulse\">\n                      <div class=\"h-10 bg-slate-200 rounded\"></div>\n                      <div class=\"h-10 bg-slate-200 rounded\"></div>\n                      <div class=\"h-10 bg-slate-200 rounded\"></div>\n                    </div>\n                  } @else if (debt.payments.length === 0) {\n                    <div class=\"rounded-xl border border-slate-100 bg-slate-50 p-6 text-center text-sm text-slate-400\">\n                      No payments recorded yet.\n                    </div>\n                  } @else {\n                    <div class=\"overflow-x-auto\">\n                      <table class=\"w-full text-left\">\n                        <thead class=\"border-b border-slate-100\">\n                          <tr>\n                            <th class=\"py-3 text-xs font-bold text-slate-500 uppercase\">Date</th>\n                            <th class=\"py-3 text-xs font-bold text-slate-500 uppercase\">Description</th>\n                            <th class=\"py-3 text-xs font-bold text-slate-500 uppercase\">Status</th>\n                            <th class=\"py-3 text-xs font-bold text-slate-500 uppercase text-right\">Amount</th>\n                          </tr>\n                        </thead>\n                        <tbody class=\"divide-y divide-slate-50\">\n                          @for (p of debt.payments; track p.id) {\n                            <tr>\n                              <td class=\"py-4 text-sm font-medium\">{{ formatDate(p.paymentDate) }}</td>\n                              <td class=\"py-4 text-sm text-slate-600\">{{ p.note || 'Monthly Installment' }}</td>\n                              <td class=\"py-4\">\n                                <span class=\"px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded uppercase\">Paid</span>\n                              </td>\n                              <td class=\"py-4 text-sm font-bold text-right\">{{ formatAmount(p.amount) }}</td>\n                            </tr>\n                          }\n                        </tbody>\n                      </table>\n                    </div>\n                    @if (debt.paymentsPage && debt.paymentsPage.totalPages > 1) {\n                      <div class=\"pt-3 border-t border-slate-100\">\n                        <app-pagination\n                          [page]=\"debt.paymentsPage.number\"\n                          [totalPages]=\"debt.paymentsPage.totalPages\"\n                          [totalElements]=\"debt.paymentsPage.totalElements\"\n                          [size]=\"debt.paymentsPage.size\"\n                          (pageChange)=\"onPaymentPageChange(debt, $event)\"\n                        />\n                      </div>\n                    }\n                  }\n                </div>\n              </div>\n            </div>\n          }\n        </div>\n      }\n\n      <div class=\"mt-12 flex items-center justify-between border-t border-slate-200 pt-8\">\n        <p class=\"text-sm text-slate-500\">Showing {{ debts.length }} active loans</p>\n        <div class=\"flex gap-2\">\n          <button class=\"px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold disabled:opacity-50\" disabled>Previous</button>\n          <button class=\"px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold\">Next</button>\n        </div>\n      </div>\n    }\n  </main>\n  @if (activePanel) {\n    <div class=\"fixed inset-0 z-30 bg-black/30 backdrop-blur-sm\" (click)=\"closePanel()\"></div>\n  }\n\n  @if (isDebtFormOpen) {\n    <aside class=\"fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl flex flex-col\">\n      <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n        <h3 class=\"font-bold text-slate-900\">{{ activePanel === 'edit' ? 'Edit Debt' : 'Create Debt' }}</h3>\n        <button (click)=\"closePanel()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n          <span class=\"material-symbols-outlined text-[20px]\">close</span>\n        </button>\n      </div>\n\n      <div class=\"flex-1 overflow-y-auto px-6 py-5\">\n        <form [formGroup]=\"debtForm\" (ngSubmit)=\"submitDebt()\" novalidate class=\"space-y-4\">\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Creditor <span class=\"text-red-400\">*</span></label>\n            <input type=\"text\" formControlName=\"creditorName\" required maxlength=\"100\" placeholder=\"Bank, lender...\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Total Amount (\u20AC) <span class=\"text-red-400\">*</span></label>\n            <input type=\"number\" formControlName=\"totalAmount\" required min=\"0.01\" step=\"0.01\" placeholder=\"10000\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Monthly Payment (\u20AC) <span class=\"text-red-400\">*</span></label>\n            <input type=\"number\" formControlName=\"monthlyPayment\" required min=\"0.01\" step=\"0.01\" placeholder=\"250\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Interest Rate (%)</label>\n            <input type=\"number\" formControlName=\"interestRate\" min=\"0\" max=\"100\" step=\"0.01\" placeholder=\"3.5\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Start Date <span class=\"text-red-400\">*</span></label>\n            <input type=\"date\" formControlName=\"startDate\" required class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Final Due Date</label>\n            <input type=\"date\" formControlName=\"dueDate\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div class=\"pt-2 flex justify-end gap-3\">\n            <button type=\"button\" (click)=\"closePanel()\" class=\"px-4 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition\">Cancel</button>\n            <button type=\"submit\" [disabled]=\"saving\" class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all disabled:opacity-50 disabled:cursor-not-allowed\">\n              {{ saving ? 'Saving...' : (activePanel === 'edit' ? 'Save' : 'Create') }}\n            </button>\n          </div>\n        </form>\n      </div>\n    </aside>\n  }\n\n  @if (isPaymentFormOpen && payingDebt) {\n    <aside class=\"fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl flex flex-col\">\n      <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n        <div>\n          <h3 class=\"font-bold text-slate-900\">Register Payment</h3>\n          <p class=\"text-sm text-slate-500 mt-0.5\">{{ payingDebt.creditorName }}</p>\n        </div>\n        <button (click)=\"closePanel()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n          <span class=\"material-symbols-outlined text-[20px]\">close</span>\n        </button>\n      </div>\n\n      <div class=\"px-6 py-4 bg-slate-50 border-b border-slate-100\">\n        <div class=\"flex items-center justify-between text-sm\">\n          <span class=\"text-slate-500\">Remaining principal</span>\n          <span class=\"font-bold text-slate-900\">{{ formatAmount(payingDebt.remainingAmount) }}</span>\n        </div>\n      </div>\n\n      <div class=\"flex-1 overflow-y-auto px-6 py-5\">\n        <form [formGroup]=\"paymentForm\" (ngSubmit)=\"submitPayment()\" novalidate class=\"space-y-4\">\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Amount (\u20AC) <span class=\"text-red-400\">*</span></label>\n            <input type=\"number\" formControlName=\"amount\" required min=\"0.01\" step=\"0.01\" placeholder=\"200\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Payment date <span class=\"text-red-400\">*</span></label>\n            <input type=\"date\" formControlName=\"paymentDate\" required class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div>\n            <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Note</label>\n            <input type=\"text\" formControlName=\"note\" maxlength=\"300\" placeholder=\"Manual transfer...\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n          </div>\n          <div class=\"pt-2 flex justify-end gap-3\">\n            <button type=\"button\" (click)=\"closePanel()\" class=\"px-4 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition\">Cancel</button>\n            <button type=\"submit\" [disabled]=\"saving\" class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all disabled:opacity-50 disabled:cursor-not-allowed\">\n              {{ saving ? 'Saving...' : 'Save Payment' }}\n            </button>\n          </div>\n        </form>\n      </div>\n    </aside>\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DebtsPage, { className: "DebtsPage", filePath: "src/app/features/debts/pages/debts-page/debts-page.ts", lineNumber: 34 }); })();
