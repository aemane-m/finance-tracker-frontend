import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { DashboardService } from '../../services/dashboard.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2];
const _forTrack0 = ($index, $item) => $item.label + $item.date;
const _forTrack1 = ($index, $item) => $item.categoryId;
const _forTrack2 = ($index, $item) => $item.id;
const _forTrack3 = ($index, $item) => $item.budgetId;
function DashboardPage_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 8);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_8_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.retryLoad()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function DashboardPage_Conditional_9_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 70)(1, "div", 71);
} }
function DashboardPage_Conditional_9_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 72);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 73)(4, "span", 74);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("text-emerald-600", ctx_r1.summary.netBalance >= 0)("text-rose-600", ctx_r1.summary.netBalance < 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.summary.netBalance >= 0 ? "+" : "", "", i0.ɵɵpipeBind2(2, 12, ctx_r1.summary.netBalance, "1.0-0"), "\u20AC ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-emerald-500", ctx_r1.summary.netBalance >= 0)("text-rose-500", ctx_r1.summary.netBalance < 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.summary.netBalance >= 0 ? "trending_up" : "trending_down");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 15, ctx_r1.summary.savingsRate, "1.0-1"), "% this month ");
} }
function DashboardPage_Conditional_9_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} }
function DashboardPage_Conditional_9_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u20AC", i0.ɵɵpipeBind2(2, 1, ctx_r1.summary.totalIncome, "1.0-0"));
} }
function DashboardPage_Conditional_9_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} }
function DashboardPage_Conditional_9_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u20AC", i0.ɵɵpipeBind2(2, 1, ctx_r1.summary.totalExpenses, "1.0-0"));
} }
function DashboardPage_Conditional_9_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} }
function DashboardPage_Conditional_9_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u20AC", i0.ɵɵpipeBind2(2, 1, ctx_r1.summary.netBalance, "1.0-0"));
} }
function DashboardPage_Conditional_9_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} }
function DashboardPage_Conditional_9_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(2, 1, ctx_r1.summary.savingsRate, "1.0-0"), "%");
} }
function DashboardPage_Conditional_9_Conditional_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 37);
} }
function DashboardPage_Conditional_9_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1, "No spending data.");
    i0.ɵɵelementEnd();
} }
function DashboardPage_Conditional_9_Conditional_62_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 51);
    i0.ɵɵelement(2, "span", 78);
    i0.ɵɵelementStart(3, "span", 79);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "span", 80);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", ctx_r1.dotColor($index_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(7, 4, item_r3.percentage, "1.0-0"), "%");
} }
function DashboardPage_Conditional_9_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelement(1, "canvas", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 69);
    i0.ɵɵrepeaterCreate(3, DashboardPage_Conditional_9_Conditional_62_For_4_Template, 8, 7, "div", 77, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r1.donutData)("options", ctx_r1.donutOptions)("type", "doughnut");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.spending.slice(0, 3));
} }
function DashboardPage_Conditional_9_Conditional_103_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 81);
} }
function DashboardPage_Conditional_9_Conditional_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_103_For_2_Template, 1, 0, "div", 81, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function DashboardPage_Conditional_9_Conditional_104_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1, "No active goals.");
    i0.ɵɵelementEnd();
} }
function DashboardPage_Conditional_9_Conditional_105_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 82)(2, "span", 83);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 84);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 85);
    i0.ɵɵelement(7, "div", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 87);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const goal_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(goal_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.goalPercent(goal_r5), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.goalPercent(goal_r5), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("\u20AC", i0.ɵɵpipeBind2(10, 6, goal_r5.currentAmount, "1.0-0"), " / \u20AC", i0.ɵɵpipeBind2(11, 9, goal_r5.targetAmount, "1.0-0"));
} }
function DashboardPage_Conditional_9_Conditional_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_105_For_2_Template, 12, 12, "div", null, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.goals.slice(0, 3));
} }
function DashboardPage_Conditional_9_Conditional_109_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 88);
} }
function DashboardPage_Conditional_9_Conditional_109_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_109_For_2_Template, 1, 0, "div", 88, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c1));
} }
function DashboardPage_Conditional_9_Conditional_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1, "No alerts.");
    i0.ɵɵelementEnd();
} }
function DashboardPage_Conditional_9_Conditional_111_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90)(1, "span", 91);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "p", 80);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 92);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const alert_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r1.alertSeverityClass(alert_r6));
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.alertIconClass(alert_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.alertIcon(alert_r6));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.alertTitleClass(alert_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(alert_r6.categoryName);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.alertTextClass(alert_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.alertMessage(alert_r6));
} }
function DashboardPage_Conditional_9_Conditional_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_111_For_2_Template, 8, 11, "div", 89, _forTrack3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.alerts.slice(0, 2));
} }
function DashboardPage_Conditional_9_For_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 93)(2, "div", 94)(3, "div", 95)(4, "span", 96);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 80);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "td", 93)(9, "span", 97);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td", 98);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 99);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tx_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(tx_r7.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tx_r7.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(tx_r7.category);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-rose-500", tx_r7.amount < 0)("text-emerald-500", tx_r7.amount >= 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.txSign(tx_r7.amount), "\u20AC", i0.ɵɵpipeBind2(13, 10, tx_r7.amount < 0 ? -tx_r7.amount : tx_r7.amount, "1.2-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 13, tx_r7.date, "MMM dd, yyyy"));
} }
function DashboardPage_Conditional_9_Conditional_137_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 100);
} }
function DashboardPage_Conditional_9_Conditional_137_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_137_For_2_Template, 1, 0, "div", 100, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function DashboardPage_Conditional_9_Conditional_138_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1, "No upcoming payments.");
    i0.ɵɵelementEnd();
} }
function DashboardPage_Conditional_9_Conditional_139_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101)(1, "div", 94)(2, "div", 103)(3, "span", 104);
    i0.ɵɵtext(4, "schedule");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div")(6, "p", 105);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 106);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "span", 80);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(item_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 3, item_r8.nextDueDate, "MMM dd, yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(13, 6, item_r8.amount, "1.2-2"), "\u20AC");
} }
function DashboardPage_Conditional_9_Conditional_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_9_Conditional_139_For_2_Template, 14, 9, "div", 101, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 102);
    i0.ɵɵtext(4, " Manage Subscriptions ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.upcoming.slice(0, 3));
} }
function DashboardPage_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "p", 12);
    i0.ɵɵtext(4, "Global Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 13);
    i0.ɵɵtext(6, "account_balance");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, DashboardPage_Conditional_9_Conditional_7_Template, 2, 0)(8, DashboardPage_Conditional_9_Conditional_8_Template, 8, 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 14)(10, "div", 15)(11, "p", 16);
    i0.ɵɵtext(12, "Income");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, DashboardPage_Conditional_9_Conditional_13_Template, 1, 0, "div", 17)(14, DashboardPage_Conditional_9_Conditional_14_Template, 3, 4, "p", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 15)(16, "p", 16);
    i0.ɵɵtext(17, "Expenses");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, DashboardPage_Conditional_9_Conditional_18_Template, 1, 0, "div", 17)(19, DashboardPage_Conditional_9_Conditional_19_Template, 3, 4, "p", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 15)(21, "p", 16);
    i0.ɵɵtext(22, "Net Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(23, DashboardPage_Conditional_9_Conditional_23_Template, 1, 0, "div", 17)(24, DashboardPage_Conditional_9_Conditional_24_Template, 3, 4, "p", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 15)(26, "p", 16);
    i0.ɵɵtext(27, "Savings Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, DashboardPage_Conditional_9_Conditional_28_Template, 1, 0, "div", 17)(29, DashboardPage_Conditional_9_Conditional_29_Template, 3, 4, "p", 21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 22)(31, "div", 23)(32, "div", 24)(33, "h4", 25);
    i0.ɵɵtext(34, "Cumulative Daily Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "select", 26)(36, "option");
    i0.ɵɵtext(37, "Last 30 Days");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(39, "svg", 28)(40, "defs")(41, "linearGradient", 29);
    i0.ɵɵelement(42, "stop", 30)(43, "stop", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(44, "path", 32)(45, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(46, "div", 34)(47, "span");
    i0.ɵɵtext(48, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "span");
    i0.ɵɵtext(50, "08");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "span");
    i0.ɵɵtext(52, "15");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "span");
    i0.ɵɵtext(54, "22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "span");
    i0.ɵɵtext(56, "31");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(57, "div", 35)(58, "h4", 36);
    i0.ɵɵtext(59, "Spending by Category");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(60, DashboardPage_Conditional_9_Conditional_60_Template, 1, 0, "div", 37)(61, DashboardPage_Conditional_9_Conditional_61_Template, 2, 0, "div", 38)(62, DashboardPage_Conditional_9_Conditional_62_Template, 5, 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 22)(64, "div", 35)(65, "h4", 36);
    i0.ɵɵtext(66, "Weekly Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "div", 39)(68, "div", 40);
    i0.ɵɵelement(69, "div", 41)(70, "div", 42);
    i0.ɵɵelementStart(71, "span", 43);
    i0.ɵɵtext(72, "W1");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "div", 40);
    i0.ɵɵelement(74, "div", 44)(75, "div", 45);
    i0.ɵɵelementStart(76, "span", 43);
    i0.ɵɵtext(77, "W2");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div", 40);
    i0.ɵɵelement(79, "div", 46)(80, "div", 47);
    i0.ɵɵelementStart(81, "span", 43);
    i0.ɵɵtext(82, "W3");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(83, "div", 40);
    i0.ɵɵelement(84, "div", 48)(85, "div", 49);
    i0.ɵɵelementStart(86, "span", 43);
    i0.ɵɵtext(87, "W4");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(88, "div", 50)(89, "div", 51);
    i0.ɵɵelement(90, "div", 52);
    i0.ɵɵelementStart(91, "span", 53);
    i0.ɵɵtext(92, "Income");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "div", 51);
    i0.ɵɵelement(94, "div", 54);
    i0.ɵɵelementStart(95, "span", 53);
    i0.ɵɵtext(96, "Expense");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(97, "div", 35)(98, "div", 24)(99, "h4", 25);
    i0.ɵɵtext(100, "Active Goals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "a", 55);
    i0.ɵɵtext(102, "arrow_forward_ios");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(103, DashboardPage_Conditional_9_Conditional_103_Template, 3, 1, "div", 56)(104, DashboardPage_Conditional_9_Conditional_104_Template, 2, 0, "div", 38)(105, DashboardPage_Conditional_9_Conditional_105_Template, 3, 0, "div", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "div", 35)(107, "h4", 36);
    i0.ɵɵtext(108, "Budget Alerts");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(109, DashboardPage_Conditional_9_Conditional_109_Template, 3, 1, "div", 56)(110, DashboardPage_Conditional_9_Conditional_110_Template, 2, 0, "div", 38)(111, DashboardPage_Conditional_9_Conditional_111_Template, 3, 0, "div", 56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(112, "div", 58)(113, "div", 59)(114, "div", 60)(115, "h4", 25);
    i0.ɵɵtext(116, "Recent Transactions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "a", 61);
    i0.ɵɵtext(118, "View All");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(119, "div", 62)(120, "table", 63)(121, "thead")(122, "tr", 64)(123, "th", 65);
    i0.ɵɵtext(124, "Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "th", 65);
    i0.ɵɵtext(126, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "th", 66);
    i0.ɵɵtext(128, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "th", 66);
    i0.ɵɵtext(130, "Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(131, "tbody", 67);
    i0.ɵɵrepeaterCreate(132, DashboardPage_Conditional_9_For_133_Template, 17, 16, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(134, "div", 68)(135, "h4", 36);
    i0.ɵɵtext(136, "Upcoming Payments");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(137, DashboardPage_Conditional_9_Conditional_137_Template, 3, 1, "div", 69)(138, DashboardPage_Conditional_9_Conditional_138_Template, 2, 0, "div", 38)(139, DashboardPage_Conditional_9_Conditional_139_Template, 5, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.loading || !ctx_r1.summary ? 7 : 8);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.loading || !ctx_r1.summary ? 13 : 14);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.loading || !ctx_r1.summary ? 18 : 19);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.loading || !ctx_r1.summary ? 23 : 24);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.loading || !ctx_r1.summary ? 28 : 29);
    i0.ɵɵadvance(32);
    i0.ɵɵconditional(ctx_r1.loading ? 60 : ctx_r1.spending.length === 0 ? 61 : 62);
    i0.ɵɵadvance(43);
    i0.ɵɵconditional(ctx_r1.loading ? 103 : ctx_r1.goals.length === 0 ? 104 : 105);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.loading ? 109 : ctx_r1.alerts.length === 0 ? 110 : 111);
    i0.ɵɵadvance(23);
    i0.ɵɵrepeater(ctx_r1.recentTransactions);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.loading ? 137 : ctx_r1.upcoming.length === 0 ? 138 : 139);
} }
dayjs.locale('fr');
const CHART_COLORS = [
    '#5048e5', '#818cf8', '#a5b4fc', '#c7d2fe',
    '#6366f1', '#4f46e5', '#3730a3', '#312e81',
];
export class DashboardPage {
    dashboardService = inject(DashboardService);
    loading = true;
    error = null;
    summary = null;
    spending = [];
    upcoming = [];
    goals = [];
    alerts = [];
    searchQuery = '';
    notificationCount = 0;
    recentTransactions = [
        { label: 'Apple Store Purchase', category: 'Tech', amount: -129, date: '2024-07-12', icon: 'shopping_bag' },
        { label: 'Stripe Payout', category: 'Salary', amount: 2500, date: '2024-07-10', icon: 'work' },
        { label: 'Italian Bistro', category: 'Dining', amount: -45.2, date: '2024-07-09', icon: 'restaurant' },
    ];
    currentMonth = dayjs().format('MMMM YYYY');
    // Doughnut chart
    donutData = { labels: [], datasets: [] };
    donutOptions = {
        responsive: true,
        cutout: '72%',
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.label}: ${ctx.parsed.toFixed(0)} €`,
                },
            },
        },
    };
    ngOnInit() {
        this.loadAll();
    }
    retryLoad() {
        this.loadAll();
    }
    loadAll() {
        this.loading = true;
        this.error = null;
        const month = dayjs().month() + 1;
        const year = dayjs().year();
        forkJoin({
            summary: this.dashboardService.getSummary(month, year),
            spending: this.dashboardService.getSpendingByCategory(month, year),
            upcoming: this.dashboardService.getUpcoming(),
            goals: this.dashboardService.getGoalsProgress(month, year),
            alerts: this.dashboardService.getBudgetAlerts(month, year),
        }).subscribe({
            next: ({ summary, spending, upcoming, goals, alerts }) => {
                this.summary = summary;
                this.spending = spending;
                this.upcoming = upcoming;
                this.goals = goals.filter(g => g.status === 'ACTIVE').slice(0, 4);
                this.alerts = alerts;
                this.buildDonut(spending);
                this.loading = false;
            },
            error: () => {
                this.error = 'Impossible de charger le tableau de bord.';
                this.loading = false;
            },
        });
    }
    buildDonut(spending) {
        this.donutData = {
            labels: spending.map(s => s.categoryName),
            datasets: [{
                    data: spending.map(s => s.amount),
                    backgroundColor: spending.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]),
                    borderWidth: 0,
                    hoverOffset: 4,
                }],
        };
    }
    goalPercent(goal) {
        return Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
    }
    alertSeverityClass(alert) {
        if (alert.isOverBudget)
            return 'bg-red-50 border-red-100';
        return 'bg-amber-50 border-amber-100';
    }
    alertIconClass(alert) {
        return alert.isOverBudget ? 'text-red-500' : 'text-amber-500';
    }
    alertIcon(alert) {
        return alert.isOverBudget ? 'warning' : 'notification_important';
    }
    alertTitleClass(alert) {
        return alert.isOverBudget ? 'text-red-900' : 'text-amber-900';
    }
    alertTextClass(alert) {
        return alert.isOverBudget ? 'text-red-700' : 'text-amber-700';
    }
    alertMessage(alert) {
        if (alert.isOverBudget) {
            return `Budget dépassé de ${Math.abs(alert.remainingAmount).toFixed(2)} €.`;
        }
        return `${alert.percentage.toFixed(0)}% du budget utilisé ce mois-ci.`;
    }
    dotColor(index) {
        return CHART_COLORS[index % CHART_COLORS.length];
    }
    trackById(_, item) { return item.id; }
    txSign(amount) {
        return amount >= 0 ? '+' : '-';
    }
    static ɵfac = function DashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["app-dashboard-page"]], decls: 10, vars: 2, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "px-6", "lg:px-8", "py-6"], [1, "flex", "flex-wrap", "items-center", "gap-4", "mb-8"], [1, "text-2xl", "font-bold"], [1, "text-slate-500", "font-medium"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "material-symbols-outlined", "text-5xl", "text-red-300", "mb-3"], [1, "text-slate-600", "font-medium"], [1, "mt-4", "text-sm", "text-[#5048e5]", "hover:underline", "font-medium", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-6", "mb-8"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-200", "shadow-sm", "col-span-1"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-slate-500", "text-sm", "font-medium"], [1, "material-symbols-outlined", "text-[#5048e5]"], [1, "md:col-span-3", "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "p-5", "rounded-xl", "border", "border-slate-200"], [1, "text-slate-500", "text-xs", "font-bold", "uppercase", "tracking-wider", "mb-2"], [1, "h-7", "rounded", "bg-slate-200", "animate-pulse"], [1, "text-xl", "font-bold", "text-emerald-600"], [1, "text-xl", "font-bold", "text-rose-600"], [1, "text-xl", "font-bold", "text-[#5048e5]"], [1, "text-xl", "font-bold", "text-slate-800"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", "mb-8"], [1, "lg:col-span-2", "bg-white", "p-6", "rounded-xl", "border", "border-slate-200"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-bold"], [1, "bg-slate-50", "border-none", "rounded", "text-xs", "font-bold", "px-3", "py-1", "outline-none"], [1, "h-64", "relative", "w-full", "overflow-hidden"], ["preserveAspectRatio", "none", "viewBox", "0 0 400 150", 1, "w-full", "h-full"], ["id", "line-grad", "x1", "0", "x2", "0", "y1", "0", "y2", "1"], ["offset", "0%", "stop-color", "#5048e5", "stop-opacity", "0.2"], ["offset", "100%", "stop-color", "#5048e5", "stop-opacity", "0"], ["d", "M0,130 C20,120 40,140 60,110 C80,80 100,100 120,70 C140,40 160,60 180,45 C200,30 220,50 240,40 C260,30 280,20 300,35 C320,50 340,10 360,15 C380,20 400,5 400,5 L400,150 L0,150 Z", "fill", "url(#line-grad)"], ["d", "M0,130 C20,120 40,140 60,110 C80,80 100,100 120,70 C140,40 160,60 180,45 C200,30 220,50 240,40 C260,30 280,20 300,35 C320,50 340,10 360,15 C380,20 400,5 400,5", "fill", "none", "stroke", "#5048e5", "stroke-width", "3"], [1, "flex", "justify-between", "mt-4", "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "px-2"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-200"], [1, "font-bold", "mb-6"], [1, "h-40", "rounded-full", "bg-slate-200", "animate-pulse", "mb-6"], [1, "text-sm", "text-slate-400", "text-center", "py-10"], [1, "flex", "items-end", "justify-between", "h-40", "gap-2", "mb-4"], [1, "flex", "flex-col", "items-center", "flex-1", "gap-1", "h-full", "justify-end"], [1, "w-full", "bg-emerald-100", "rounded-t", "h-[60%]"], [1, "w-full", "bg-rose-100", "rounded-t", "h-[40%]"], [1, "text-[10px]", "font-bold", "text-slate-400", "mt-2"], [1, "w-full", "bg-emerald-500", "rounded-t", "h-[80%]"], [1, "w-full", "bg-rose-500", "rounded-t", "h-[30%]"], [1, "w-full", "bg-emerald-100", "rounded-t", "h-[50%]"], [1, "w-full", "bg-rose-100", "rounded-t", "h-[70%]"], [1, "w-full", "bg-emerald-100", "rounded-t", "h-[65%]"], [1, "w-full", "bg-rose-100", "rounded-t", "h-[45%]"], [1, "flex", "justify-center", "gap-6", "mt-4"], [1, "flex", "items-center", "gap-2"], [1, "w-3", "h-3", "bg-emerald-500", "rounded-sm"], [1, "text-xs", "font-medium"], [1, "w-3", "h-3", "bg-rose-500", "rounded-sm"], ["routerLink", "/app/goals", 1, "material-symbols-outlined", "text-slate-400"], [1, "space-y-4"], [1, "space-y-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "rounded-xl", "border", "border-slate-200", "overflow-hidden", "shadow-sm"], [1, "p-6", "border-b", "border-slate-200", "flex", "items-center", "justify-between"], ["routerLink", "/app/transactions", 1, "text-[#5048e5]", "text-xs", "font-bold", "hover:underline"], [1, "overflow-x-auto"], [1, "w-full"], [1, "text-left", "bg-slate-50"], [1, "px-6", "py-3", "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest"], [1, "px-6", "py-3", "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "text-right"], [1, "divide-y", "divide-slate-100"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-200", "shadow-sm"], [1, "space-y-3"], [1, "h-8", "w-32", "rounded", "bg-slate-200", "animate-pulse", "mb-2"], [1, "h-4", "w-24", "rounded", "bg-slate-200", "animate-pulse"], [1, "text-2xl", "font-bold", "mb-1"], [1, "text-sm", "font-bold", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-[16px]"], [1, "flex", "items-center", "justify-center", "mb-6"], ["baseChart", "", 1, "max-w-[180px]", 3, "data", "options", "type"], [1, "flex", "items-center", "justify-between"], [1, "w-2", "h-2", "rounded-full"], [1, "text-sm", "font-medium"], [1, "text-sm", "font-bold"], [1, "h-10", "rounded", "bg-slate-200", "animate-pulse"], [1, "flex", "justify-between", "mb-2"], [1, "text-sm", "font-bold", "truncate", "max-w-[180px]"], [1, "text-xs", "font-bold", "text-slate-500"], [1, "w-full", "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "bg-[#5048e5]", "h-full", "rounded-full"], [1, "text-[11px]", "text-slate-400", "mt-2"], [1, "h-16", "rounded-xl", "bg-slate-200", "animate-pulse"], [1, "flex", "items-start", "gap-4", "p-4", "rounded-xl", "border", 3, "class"], [1, "flex", "items-start", "gap-4", "p-4", "rounded-xl", "border"], [1, "material-symbols-outlined"], [1, "text-xs"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-slate-100", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-[18px]"], [1, "px-2", "py-1", "bg-[#5048e5]/10", "text-[#5048e5]", "text-[10px]", "font-bold", "rounded", "uppercase"], [1, "px-6", "py-4", "text-right", "font-bold", "text-sm"], [1, "px-6", "py-4", "text-right", "text-xs", "text-slate-500", "font-medium"], [1, "h-14", "rounded-lg", "bg-slate-200", "animate-pulse"], [1, "flex", "items-center", "justify-between", "p-3", "border", "border-slate-100", "rounded-lg"], ["routerLink", "/app/planned", 1, "w-full", "mt-6", "py-2", "bg-slate-50", "text-slate-600", "rounded-lg", "text-xs", "font-bold", "border", "border-slate-100", "hover:bg-slate-100", "transition-colors", "flex", "items-center", "justify-center"], [1, "bg-slate-100", "p-2", "rounded", "text-slate-500"], [1, "material-symbols-outlined", "text-[20px]"], [1, "text-xs", "font-bold"], [1, "text-[10px]", "text-slate-400", "font-medium"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "header", 2)(3, "div")(4, "h2", 3);
            i0.ɵɵtext(5, "Financial Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(8, DashboardPage_Conditional_8_Template, 7, 1, "div", 5)(9, DashboardPage_Conditional_9_Template, 140, 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" Welcome back, here's your summary for ", ctx.currentMonth, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && ctx.error ? 8 : 9);
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, RouterLink, BaseChartDirective, i2.DecimalPipe, i2.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardPage, [{
        type: Component,
        args: [{ selector: 'app-dashboard-page', standalone: true, imports: [CommonModule, FormsModule, RouterLink, BaseChartDirective], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <main class=\"px-6 lg:px-8 py-6\">\n    <header class=\"flex flex-wrap items-center gap-4 mb-8\">\n      <div>\n        <h2 class=\"text-2xl font-bold\">Financial Dashboard</h2>\n        <p class=\"text-slate-500 font-medium\">\n          Welcome back, here's your summary for {{ currentMonth }}\n        </p>\n      </div>\n    </header>\n\n    @if (!loading && error) {\n      <div class=\"flex flex-col items-center justify-center py-20 text-center\">\n        <span class=\"material-symbols-outlined text-5xl text-red-300 mb-3\">error_outline</span>\n        <p class=\"text-slate-600 font-medium\">{{ error }}</p>\n        <button (click)=\"retryLoad()\" class=\"mt-4 text-sm text-[#5048e5] hover:underline font-medium\">Retry</button>\n      </div>\n    } @else {\n      <div class=\"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8\">\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1\">\n          <div class=\"flex items-center justify-between mb-4\">\n            <p class=\"text-slate-500 text-sm font-medium\">Global Balance</p>\n            <span class=\"material-symbols-outlined text-[#5048e5]\">account_balance</span>\n          </div>\n          @if (loading || !summary) {\n            <div class=\"h-8 w-32 rounded bg-slate-200 animate-pulse mb-2\"></div>\n            <div class=\"h-4 w-24 rounded bg-slate-200 animate-pulse\"></div>\n          } @else {\n            <h3\n              class=\"text-2xl font-bold mb-1\"\n              [class.text-emerald-600]=\"summary.netBalance >= 0\"\n              [class.text-rose-600]=\"summary.netBalance < 0\"\n            >\n              {{ summary.netBalance >= 0 ? '+' : '' }}{{ summary.netBalance | number:'1.0-0' }}\u20AC\n            </h3>\n            <p class=\"text-sm font-bold flex items-center gap-1\" [class.text-emerald-500]=\"summary.netBalance >= 0\" [class.text-rose-500]=\"summary.netBalance < 0\">\n              <span class=\"material-symbols-outlined text-[16px]\">{{ summary.netBalance >= 0 ? 'trending_up' : 'trending_down' }}</span>\n              {{ summary.savingsRate | number:'1.0-1' }}% this month\n            </p>\n          }\n        </div>\n\n        <div class=\"md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4\">\n          <div class=\"bg-white p-5 rounded-xl border border-slate-200\">\n            <p class=\"text-slate-500 text-xs font-bold uppercase tracking-wider mb-2\">Income</p>\n            @if (loading || !summary) {\n              <div class=\"h-7 rounded bg-slate-200 animate-pulse\"></div>\n            } @else {\n              <p class=\"text-xl font-bold text-emerald-600\">\u20AC{{ summary.totalIncome | number:'1.0-0' }}</p>\n            }\n          </div>\n          <div class=\"bg-white p-5 rounded-xl border border-slate-200\">\n            <p class=\"text-slate-500 text-xs font-bold uppercase tracking-wider mb-2\">Expenses</p>\n            @if (loading || !summary) {\n              <div class=\"h-7 rounded bg-slate-200 animate-pulse\"></div>\n            } @else {\n              <p class=\"text-xl font-bold text-rose-600\">\u20AC{{ summary.totalExpenses | number:'1.0-0' }}</p>\n            }\n          </div>\n          <div class=\"bg-white p-5 rounded-xl border border-slate-200\">\n            <p class=\"text-slate-500 text-xs font-bold uppercase tracking-wider mb-2\">Net Balance</p>\n            @if (loading || !summary) {\n              <div class=\"h-7 rounded bg-slate-200 animate-pulse\"></div>\n            } @else {\n              <p class=\"text-xl font-bold text-[#5048e5]\">\u20AC{{ summary.netBalance | number:'1.0-0' }}</p>\n            }\n          </div>\n          <div class=\"bg-white p-5 rounded-xl border border-slate-200\">\n            <p class=\"text-slate-500 text-xs font-bold uppercase tracking-wider mb-2\">Savings Rate</p>\n            @if (loading || !summary) {\n              <div class=\"h-7 rounded bg-slate-200 animate-pulse\"></div>\n            } @else {\n              <p class=\"text-xl font-bold text-slate-800\">{{ summary.savingsRate | number:'1.0-0' }}%</p>\n            }\n          </div>\n        </div>\n      </div>\n\n      <div class=\"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8\">\n        <div class=\"lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200\">\n          <div class=\"flex items-center justify-between mb-6\">\n            <h4 class=\"font-bold\">Cumulative Daily Balance</h4>\n            <select class=\"bg-slate-50 border-none rounded text-xs font-bold px-3 py-1 outline-none\">\n              <option>Last 30 Days</option>\n            </select>\n          </div>\n          <div class=\"h-64 relative w-full overflow-hidden\">\n            <svg class=\"w-full h-full\" preserveAspectRatio=\"none\" viewBox=\"0 0 400 150\">\n              <defs>\n                <linearGradient id=\"line-grad\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n                  <stop offset=\"0%\" stop-color=\"#5048e5\" stop-opacity=\"0.2\"></stop>\n                  <stop offset=\"100%\" stop-color=\"#5048e5\" stop-opacity=\"0\"></stop>\n                </linearGradient>\n              </defs>\n              <path d=\"M0,130 C20,120 40,140 60,110 C80,80 100,100 120,70 C140,40 160,60 180,45 C200,30 220,50 240,40 C260,30 280,20 300,35 C320,50 340,10 360,15 C380,20 400,5 400,5 L400,150 L0,150 Z\" fill=\"url(#line-grad)\"></path>\n              <path d=\"M0,130 C20,120 40,140 60,110 C80,80 100,100 120,70 C140,40 160,60 180,45 C200,30 220,50 240,40 C260,30 280,20 300,35 C320,50 340,10 360,15 C380,20 400,5 400,5\" fill=\"none\" stroke=\"#5048e5\" stroke-width=\"3\"></path>\n            </svg>\n            <div class=\"flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2\">\n              <span>01</span><span>08</span><span>15</span><span>22</span><span>31</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200\">\n          <h4 class=\"font-bold mb-6\">Spending by Category</h4>\n          @if (loading) {\n            <div class=\"h-40 rounded-full bg-slate-200 animate-pulse mb-6\"></div>\n          } @else if (spending.length === 0) {\n            <div class=\"text-sm text-slate-400 text-center py-10\">No spending data.</div>\n          } @else {\n            <div class=\"flex items-center justify-center mb-6\">\n              <canvas baseChart [data]=\"donutData\" [options]=\"donutOptions\" [type]=\"'doughnut'\" class=\"max-w-[180px]\"></canvas>\n            </div>\n            <div class=\"space-y-3\">\n              @for (item of spending.slice(0, 3); track item.categoryId) {\n                <div class=\"flex items-center justify-between\">\n                  <div class=\"flex items-center gap-2\">\n                    <span class=\"w-2 h-2 rounded-full\" [style.background-color]=\"dotColor($index)\"></span>\n                    <span class=\"text-sm font-medium\">{{ item.categoryName }}</span>\n                  </div>\n                  <span class=\"text-sm font-bold\">{{ item.percentage | number:'1.0-0' }}%</span>\n                </div>\n              }\n            </div>\n          }\n        </div>\n      </div>\n\n      <div class=\"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8\">\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200\">\n          <h4 class=\"font-bold mb-6\">Weekly Activity</h4>\n          <div class=\"flex items-end justify-between h-40 gap-2 mb-4\">\n            <div class=\"flex flex-col items-center flex-1 gap-1 h-full justify-end\">\n              <div class=\"w-full bg-emerald-100 rounded-t h-[60%]\"></div>\n              <div class=\"w-full bg-rose-100 rounded-t h-[40%]\"></div>\n              <span class=\"text-[10px] font-bold text-slate-400 mt-2\">W1</span>\n            </div>\n            <div class=\"flex flex-col items-center flex-1 gap-1 h-full justify-end\">\n              <div class=\"w-full bg-emerald-500 rounded-t h-[80%]\"></div>\n              <div class=\"w-full bg-rose-500 rounded-t h-[30%]\"></div>\n              <span class=\"text-[10px] font-bold text-slate-400 mt-2\">W2</span>\n            </div>\n            <div class=\"flex flex-col items-center flex-1 gap-1 h-full justify-end\">\n              <div class=\"w-full bg-emerald-100 rounded-t h-[50%]\"></div>\n              <div class=\"w-full bg-rose-100 rounded-t h-[70%]\"></div>\n              <span class=\"text-[10px] font-bold text-slate-400 mt-2\">W3</span>\n            </div>\n            <div class=\"flex flex-col items-center flex-1 gap-1 h-full justify-end\">\n              <div class=\"w-full bg-emerald-100 rounded-t h-[65%]\"></div>\n              <div class=\"w-full bg-rose-100 rounded-t h-[45%]\"></div>\n              <span class=\"text-[10px] font-bold text-slate-400 mt-2\">W4</span>\n            </div>\n          </div>\n          <div class=\"flex justify-center gap-6 mt-4\">\n            <div class=\"flex items-center gap-2\"><div class=\"w-3 h-3 bg-emerald-500 rounded-sm\"></div><span class=\"text-xs font-medium\">Income</span></div>\n            <div class=\"flex items-center gap-2\"><div class=\"w-3 h-3 bg-rose-500 rounded-sm\"></div><span class=\"text-xs font-medium\">Expense</span></div>\n          </div>\n        </div>\n\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200\">\n          <div class=\"flex items-center justify-between mb-6\">\n            <h4 class=\"font-bold\">Active Goals</h4>\n            <a routerLink=\"/app/goals\" class=\"material-symbols-outlined text-slate-400\">arrow_forward_ios</a>\n          </div>\n          @if (loading) {\n            <div class=\"space-y-4\">\n              @for (i of [1,2,3]; track i) { <div class=\"h-10 rounded bg-slate-200 animate-pulse\"></div> }\n            </div>\n          } @else if (goals.length === 0) {\n            <div class=\"text-sm text-slate-400 text-center py-10\">No active goals.</div>\n          } @else {\n            <div class=\"space-y-6\">\n              @for (goal of goals.slice(0,3); track goal.id) {\n                <div>\n                  <div class=\"flex justify-between mb-2\">\n                    <span class=\"text-sm font-bold truncate max-w-[180px]\">{{ goal.name }}</span>\n                    <span class=\"text-xs font-bold text-slate-500\">{{ goalPercent(goal) }}%</span>\n                  </div>\n                  <div class=\"w-full h-2 bg-slate-100 rounded-full overflow-hidden\">\n                    <div class=\"bg-[#5048e5] h-full rounded-full\" [style.width.%]=\"goalPercent(goal)\"></div>\n                  </div>\n                  <p class=\"text-[11px] text-slate-400 mt-2\">\u20AC{{ goal.currentAmount | number:'1.0-0' }} / \u20AC{{ goal.targetAmount | number:'1.0-0' }}</p>\n                </div>\n              }\n            </div>\n          }\n        </div>\n\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200\">\n          <h4 class=\"font-bold mb-6\">Budget Alerts</h4>\n          @if (loading) {\n            <div class=\"space-y-4\">\n              @for (i of [1,2]; track i) { <div class=\"h-16 rounded-xl bg-slate-200 animate-pulse\"></div> }\n            </div>\n          } @else if (alerts.length === 0) {\n            <div class=\"text-sm text-slate-400 text-center py-10\">No alerts.</div>\n          } @else {\n            <div class=\"space-y-4\">\n              @for (alert of alerts.slice(0,2); track alert.budgetId) {\n                <div class=\"flex items-start gap-4 p-4 rounded-xl border\" [class]=\"alertSeverityClass(alert)\">\n                  <span class=\"material-symbols-outlined\" [class]=\"alertIconClass(alert)\">{{ alertIcon(alert) }}</span>\n                  <div>\n                    <p class=\"text-sm font-bold\" [class]=\"alertTitleClass(alert)\">{{ alert.categoryName }}</p>\n                    <p class=\"text-xs\" [class]=\"alertTextClass(alert)\">{{ alertMessage(alert) }}</p>\n                  </div>\n                </div>\n              }\n            </div>\n          }\n        </div>\n      </div>\n\n      <div class=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">\n        <div class=\"lg:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm\">\n          <div class=\"p-6 border-b border-slate-200 flex items-center justify-between\">\n            <h4 class=\"font-bold\">Recent Transactions</h4>\n            <a routerLink=\"/app/transactions\" class=\"text-[#5048e5] text-xs font-bold hover:underline\">View All</a>\n          </div>\n          <div class=\"overflow-x-auto\">\n            <table class=\"w-full\">\n              <thead>\n                <tr class=\"text-left bg-slate-50\">\n                  <th class=\"px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest\">Transaction</th>\n                  <th class=\"px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest\">Category</th>\n                  <th class=\"px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right\">Amount</th>\n                  <th class=\"px-6 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right\">Date</th>\n                </tr>\n              </thead>\n              <tbody class=\"divide-y divide-slate-100\">\n                @for (tx of recentTransactions; track tx.label + tx.date) {\n                  <tr>\n                    <td class=\"px-6 py-4\">\n                      <div class=\"flex items-center gap-3\">\n                        <div class=\"w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center\">\n                          <span class=\"material-symbols-outlined text-[18px]\">{{ tx.icon }}</span>\n                        </div>\n                        <span class=\"text-sm font-bold\">{{ tx.label }}</span>\n                      </div>\n                    </td>\n                    <td class=\"px-6 py-4\">\n                      <span class=\"px-2 py-1 bg-[#5048e5]/10 text-[#5048e5] text-[10px] font-bold rounded uppercase\">{{ tx.category }}</span>\n                    </td>\n                    <td class=\"px-6 py-4 text-right font-bold text-sm\" [class.text-rose-500]=\"tx.amount < 0\" [class.text-emerald-500]=\"tx.amount >= 0\">\n                      {{ txSign(tx.amount) }}\u20AC{{ (tx.amount < 0 ? -tx.amount : tx.amount) | number:'1.2-2' }}\n                    </td>\n                    <td class=\"px-6 py-4 text-right text-xs text-slate-500 font-medium\">{{ tx.date | date:'MMM dd, yyyy' }}</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"bg-white p-6 rounded-xl border border-slate-200 shadow-sm\">\n          <h4 class=\"font-bold mb-6\">Upcoming Payments</h4>\n          @if (loading) {\n            <div class=\"space-y-3\">\n              @for (i of [1,2,3]; track i) { <div class=\"h-14 rounded-lg bg-slate-200 animate-pulse\"></div> }\n            </div>\n          } @else if (upcoming.length === 0) {\n            <div class=\"text-sm text-slate-400 text-center py-10\">No upcoming payments.</div>\n          } @else {\n            <div class=\"space-y-4\">\n              @for (item of upcoming.slice(0, 3); track item.id) {\n                <div class=\"flex items-center justify-between p-3 border border-slate-100 rounded-lg\">\n                  <div class=\"flex items-center gap-3\">\n                    <div class=\"bg-slate-100 p-2 rounded text-slate-500\">\n                      <span class=\"material-symbols-outlined text-[20px]\">schedule</span>\n                    </div>\n                    <div>\n                      <p class=\"text-xs font-bold\">{{ item.label }}</p>\n                      <p class=\"text-[10px] text-slate-400 font-medium\">{{ item.nextDueDate | date:'MMM dd, yyyy' }}</p>\n                    </div>\n                  </div>\n                  <span class=\"text-sm font-bold\">{{ item.amount | number:'1.2-2' }}\u20AC</span>\n                </div>\n              }\n            </div>\n            <a\n              routerLink=\"/app/planned\"\n              class=\"w-full mt-6 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center\"\n            >\n              Manage Subscriptions\n            </a>\n          }\n        </div>\n      </div>\n    }\n  </main>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "src/app/features/dashboard/pages/dashboard-page/dashboard-page.ts", lineNumber: 35 }); })();
