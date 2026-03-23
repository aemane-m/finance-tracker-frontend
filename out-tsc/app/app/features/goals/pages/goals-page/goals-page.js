import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { GoalsService } from '../../services/goals.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4];
const _c1 = () => [1, 2, 3, 4, 5, 6];
const _forTrack0 = ($index, $item) => $item.id;
function GoalsPage_Conditional_12_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function GoalsPage_Conditional_12_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} }
function GoalsPage_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, GoalsPage_Conditional_12_For_2_Template, 1, 0, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵrepeaterCreate(4, GoalsPage_Conditional_12_For_5_Template, 1, 0, "div", 13, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(1, _c1));
} }
function GoalsPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "span", 14);
    i0.ɵɵtext(2, "error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 16);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_13_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadGoals()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function GoalsPage_Conditional_14_For_33_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_14_For_33_Conditional_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const goal_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openContribute(goal_r6)); });
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Contribute ");
    i0.ɵɵelementEnd();
} }
function GoalsPage_Conditional_14_For_33_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const goal_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", goal_r6.status === "COMPLETED" ? "Completed Goal" : "Archived Goal", " ");
} }
function GoalsPage_Conditional_14_For_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 41)(2, "div", 42)(3, "div", 43)(4, "span", 44);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 45)(7, "p", 46);
    i0.ɵɵtext(8, "Target Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 47);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "h3", 48);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 49)(14, "div")(15, "p", 18);
    i0.ɵɵtext(16, "Current Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 50);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 45)(20, "p", 18);
    i0.ɵɵtext(21, "Goal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p", 51);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 52)(25, "div", 53)(26, "span", 54);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 55);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 56);
    i0.ɵɵelement(31, "div", 57);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 58);
    i0.ɵɵconditionalCreate(33, GoalsPage_Conditional_14_For_33_Conditional_33_Template, 4, 0, "button", 59)(34, GoalsPage_Conditional_14_For_33_Conditional_34_Template, 2, 1, "div", 60);
    i0.ɵɵelementStart(35, "button", 61);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_14_For_33_Template_button_click_35_listener() { const goal_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openEdit(goal_r6)); });
    i0.ɵɵelementStart(36, "span", 62);
    i0.ɵɵtext(37, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "button", 63);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_14_For_33_Template_button_click_38_listener() { const goal_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteGoal(goal_r6)); });
    i0.ɵɵelementStart(39, "span", 62);
    i0.ɵɵtext(40, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const goal_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.color(goal_r6).bg + " " + ctx_r1.color(goal_r6).text);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.iconForGoal(goal_r6));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(goal_r6.deadline ? ctx_r1.formatDate(goal_r6.deadline) : "Ongoing");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(goal_r6.name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(goal_r6.currentAmount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(goal_r6.targetAmount));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.percent(goal_r6), "% Complete");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.statusClass(goal_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(goal_r6), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.color(goal_r6).bar);
    i0.ɵɵstyleProp("width", ctx_r1.percent(goal_r6), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(goal_r6.status === "ACTIVE" ? 33 : 34);
} }
function GoalsPage_Conditional_14_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 65);
    i0.ɵɵtext(2, "No contributions yet.");
    i0.ɵɵelementEnd()();
} }
function GoalsPage_Conditional_14_Conditional_59_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 66);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 67);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 68);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 69);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(c_r7.contributionDate));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.goalNameById(c_r7.goalId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.contributionMethod(c_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", ctx_r1.formatAmount(c_r7.amount));
} }
function GoalsPage_Conditional_14_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, GoalsPage_Conditional_14_Conditional_59_For_1_Template, 9, 4, "tr", null, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.recentContributionsFeed);
} }
function GoalsPage_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 17)(2, "p", 18);
    i0.ɵɵtext(3, "Total Saved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19)(5, "span", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 21);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 17)(10, "p", 18);
    i0.ɵɵtext(11, "Active Goals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 19)(13, "span", 20);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 22);
    i0.ɵɵtext(16, "In Progress");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 17)(18, "p", 18);
    i0.ɵɵtext(19, "Monthly Average");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 19)(21, "span", 20);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 23)(24, "p", 24);
    i0.ɵɵtext(25, "Next Milestone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 19)(27, "span", 25);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "p", 26);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 12);
    i0.ɵɵrepeaterCreate(32, GoalsPage_Conditional_14_For_33_Template, 41, 16, "div", 27, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementStart(34, "button", 28);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_14_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵelementStart(35, "div", 29)(36, "span", 30);
    i0.ɵɵtext(37, "add");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "h3", 31);
    i0.ɵɵtext(39, "Add another goal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "p", 32);
    i0.ɵɵtext(41, "Define a new saving target and start tracking.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 33)(43, "h3", 34);
    i0.ɵɵtext(44, "Recent Contributions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 35)(46, "table", 36)(47, "thead")(48, "tr", 37)(49, "th", 38);
    i0.ɵɵtext(50, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "th", 38);
    i0.ɵɵtext(52, "Goal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "th", 38);
    i0.ɵɵtext(54, "Method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th", 39);
    i0.ɵɵtext(56, "Amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "tbody", 40);
    i0.ɵɵconditionalCreate(58, GoalsPage_Conditional_14_Conditional_58_Template, 3, 0, "tr")(59, GoalsPage_Conditional_14_Conditional_59_Template, 2, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.totalSaved));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", ctx_r1.growthRate, "%");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.activeCount);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.monthlyAverage));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((ctx_r1.leadGoal == null ? null : ctx_r1.leadGoal.name) || "No Active Goal");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.leadGoal ? ctx_r1.percent(ctx_r1.leadGoal) + "% Complete" : "Create your first goal");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.goals);
    i0.ɵɵadvance(26);
    i0.ɵɵconditional(ctx_r1.recentContributionsFeed.length === 0 ? 58 : 59);
} }
function GoalsPage_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementEnd();
} }
function GoalsPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 9)(1, "div", 71)(2, "h3", 72);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 73);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_16_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementStart(5, "span", 74);
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 75)(8, "form", 76);
    i0.ɵɵlistener("ngSubmit", function GoalsPage_Conditional_16_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitGoal()); });
    i0.ɵɵelementStart(9, "div")(10, "label", 77);
    i0.ɵɵtext(11, "Goal name ");
    i0.ɵɵelementStart(12, "span", 78);
    i0.ɵɵtext(13, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "input", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div")(16, "label", 77);
    i0.ɵɵtext(17, "Target amount (\u20AC) ");
    i0.ɵɵelementStart(18, "span", 78);
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(20, "input", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "label", 77);
    i0.ɵɵtext(23, "Deadline");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 82)(26, "button", 83);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_16_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵtext(27, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 84);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.activePanel === "edit" ? "Edit Goal" : "Create Goal");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.goalForm);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : ctx_r1.activePanel === "edit" ? "Save" : "Create", " ");
} }
function GoalsPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 9)(1, "div", 71)(2, "div")(3, "h3", 72);
    i0.ɵɵtext(4, "Contribute");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 85);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 73);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_17_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementStart(8, "span", 74);
    i0.ɵɵtext(9, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 86)(11, "div", 87)(12, "span", 88);
    i0.ɵɵtext(13, "Saved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 72);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 89)(17, "span", 88);
    i0.ɵɵtext(18, "Target");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 90);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 91);
    i0.ɵɵelement(22, "div", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 93);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 75)(26, "form", 76);
    i0.ɵɵlistener("ngSubmit", function GoalsPage_Conditional_17_Template_form_ngSubmit_26_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitContribute()); });
    i0.ɵɵelementStart(27, "div")(28, "label", 77);
    i0.ɵɵtext(29, "Amount (\u20AC) ");
    i0.ɵɵelementStart(30, "span", 78);
    i0.ɵɵtext(31, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(32, "input", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div")(34, "label", 77);
    i0.ɵɵtext(35, "Date ");
    i0.ɵɵelementStart(36, "span", 78);
    i0.ɵɵtext(37, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(38, "input", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div")(40, "label", 77);
    i0.ɵɵtext(41, "Note");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(42, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 82)(44, "button", 83);
    i0.ɵɵlistener("click", function GoalsPage_Conditional_17_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵtext(45, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 84);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.contributingGoal.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.contributingGoal.currentAmount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatAmount(ctx_r1.contributingGoal.targetAmount));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.percent(ctx_r1.contributingGoal), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.percent(ctx_r1.contributingGoal), "% complete");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.contributeForm);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save Contribution", " ");
} }
const GOAL_COLORS = [
    { bg: 'bg-[#5048e5]/10', text: 'text-[#5048e5]', bar: 'bg-[#5048e5]' },
    { bg: 'bg-emerald-100', text: 'text-emerald-600', bar: 'bg-emerald-500' },
    { bg: 'bg-amber-100', text: 'text-amber-600', bar: 'bg-amber-500' },
    { bg: 'bg-rose-100', text: 'text-rose-600', bar: 'bg-rose-500' },
    { bg: 'bg-purple-100', text: 'text-purple-600', bar: 'bg-purple-500' },
    { bg: 'bg-sky-100', text: 'text-sky-600', bar: 'bg-sky-500' },
];
export class GoalsPage {
    goalsService = inject(GoalsService);
    fb = inject(FormBuilder);
    goals = [];
    loading = true;
    error = null;
    saving = false;
    activePanel = null;
    editingGoal = null;
    contributingGoal = null;
    goalForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(100)]],
        targetAmount: [null, [Validators.required, Validators.min(0.01)]],
        deadline: [''],
    });
    contributeForm = this.fb.group({
        amount: [null, [Validators.required, Validators.min(0.01)]],
        contributionDate: ['', [Validators.required]],
        note: ['', [Validators.maxLength(300)]],
    });
    get name() { return this.goalForm.controls.name; }
    get targetAmount() { return this.goalForm.controls.targetAmount; }
    get deadline() { return this.goalForm.controls.deadline; }
    get contribAmount() { return this.contributeForm.controls.amount; }
    get contribDate() { return this.contributeForm.controls.contributionDate; }
    get contribNote() { return this.contributeForm.controls.note; }
    get totalSaved() {
        return this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED')
            .reduce((s, g) => s + g.currentAmount, 0);
    }
    get activeCount() {
        return this.goals.filter(g => g.status === 'ACTIVE').length;
    }
    get leadGoal() {
        const active = this.goals.filter(g => g.status === 'ACTIVE');
        if (!active.length)
            return null;
        return active.reduce((best, g) => this.percent(g) > this.percent(best) ? g : best, active[0]);
    }
    get monthlyAverage() {
        const active = this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED');
        if (!active.length)
            return 0;
        return active.reduce((s, g) => s + g.currentAmount, 0) / active.length;
    }
    get overallProgress() {
        const active = this.goals.filter(g => g.status === 'ACTIVE' || g.status === 'COMPLETED');
        const totalTarget = active.reduce((s, g) => s + g.targetAmount, 0);
        if (totalTarget <= 0)
            return 0;
        const totalCurrent = active.reduce((s, g) => s + g.currentAmount, 0);
        return Math.min(100, Math.round((totalCurrent / totalTarget) * 100));
    }
    get growthRate() {
        return 12;
    }
    get recentContributionsFeed() {
        const map = new Map();
        for (const goal of this.goals) {
            for (const c of goal.recentContributions) {
                if (!map.has(c.id))
                    map.set(c.id, c);
            }
        }
        return Array.from(map.values())
            .sort((a, b) => new Date(b.contributionDate).getTime() - new Date(a.contributionDate).getTime())
            .slice(0, 8);
    }
    ngOnInit() {
        this.loadGoals();
    }
    loadGoals() {
        this.loading = true;
        this.error = null;
        this.goalsService.getAll().subscribe({
            next: goals => {
                this.goals = goals.map((g, i) => ({
                    ...g,
                    recentContributions: [],
                    contributionsPage: null,
                    loadingContributions: false,
                    colorIdx: i % GOAL_COLORS.length,
                }));
                this.loading = false;
                this.goals.forEach(g => this.loadContributions(g, 0));
            },
            error: () => {
                this.error = 'Impossible de charger les objectifs.';
                this.loading = false;
            },
        });
    }
    loadContributions(goal, page) {
        goal.loadingContributions = true;
        this.goalsService.getContributions(goal.id, page, 3).subscribe({
            next: result => {
                goal.recentContributions = result.content;
                goal.contributionsPage = result;
                goal.loadingContributions = false;
            },
            error: () => { goal.loadingContributions = false; },
        });
    }
    openCreate() {
        this.editingGoal = null;
        this.goalForm.reset({ name: '', targetAmount: null, deadline: '' });
        this.activePanel = 'create';
    }
    openEdit(goal) {
        this.editingGoal = goal;
        this.goalForm.setValue({
            name: goal.name,
            targetAmount: goal.targetAmount,
            deadline: goal.deadline ?? '',
        });
        this.activePanel = 'edit';
    }
    openContribute(goal) {
        this.contributingGoal = goal;
        this.contributeForm.reset({
            amount: null,
            contributionDate: dayjs().format('YYYY-MM-DD'),
            note: '',
        });
        this.activePanel = 'contribute';
    }
    closePanel() {
        this.activePanel = null;
        this.editingGoal = null;
        this.contributingGoal = null;
    }
    submitGoal() {
        if (this.goalForm.invalid) {
            this.goalForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        const v = this.goalForm.value;
        const payload = {
            name: v.name,
            targetAmount: v.targetAmount,
            deadline: v.deadline || null,
        };
        const obs = this.editingGoal
            ? this.goalsService.update(this.editingGoal.id, payload)
            : this.goalsService.create(payload);
        obs.subscribe({
            next: () => {
                this.saving = false;
                this.closePanel();
                this.loadGoals();
            },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer l\'objectif.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    submitContribute() {
        if (this.contributeForm.invalid || !this.contributingGoal) {
            this.contributeForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        const v = this.contributeForm.value;
        const payload = {
            amount: v.amount,
            contributionDate: v.contributionDate,
            note: v.note || null,
        };
        this.goalsService.contribute(this.contributingGoal.id, payload).subscribe({
            next: () => {
                this.saving = false;
                this.closePanel();
                this.loadGoals();
                Swal.fire({ icon: 'success', title: 'Contribution enregistrée', timer: 1500, showConfirmButton: false });
            },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer la contribution.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    async deleteGoal(goal) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer cet objectif ?',
            text: `"${goal.name}" sera définitivement supprimé.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.goalsService.delete(goal.id).subscribe({
            next: () => {
                this.loadGoals();
                Swal.fire({ icon: 'success', title: 'Objectif supprimé', timer: 1200, showConfirmButton: false });
            },
            error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer l\'objectif.', confirmButtonColor: '#5048e5' }),
        });
    }
    percent(goal) {
        if (!goal.targetAmount)
            return 0;
        return Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
    }
    color(goal) {
        return GOAL_COLORS[goal.colorIdx];
    }
    iconForGoal(goal) {
        const name = goal.name.toLowerCase();
        if (name.includes('home') || name.includes('maison'))
            return 'home';
        if (name.includes('trip') || name.includes('travel') || name.includes('vacance'))
            return 'flight';
        if (name.includes('car') || name.includes('vehicle') || name.includes('voiture'))
            return 'directions_car';
        if (name.includes('education') || name.includes('school') || name.includes('etude'))
            return 'school';
        if (name.includes('emergency') || name.includes('buffer') || name.includes('urgence'))
            return 'favorite';
        return 'savings';
    }
    contributionMethod(c) {
        if (c.transactionId)
            return 'Auto-Transfer';
        if (c.note && c.note.trim().length > 0)
            return 'Manual Deposit';
        return 'Recurring Transfer';
    }
    goalNameById(goalId) {
        return this.goals.find((g) => g.id === goalId)?.name ?? `Goal #${goalId}`;
    }
    statusLabel(goal) {
        switch (goal.status) {
            case 'ACTIVE': return 'En cours';
            case 'COMPLETED': return 'Atteint';
            case 'ARCHIVED': return 'Archivé';
        }
    }
    statusClass(goal) {
        switch (goal.status) {
            case 'ACTIVE': return 'bg-blue-50 text-blue-700';
            case 'COMPLETED': return 'bg-emerald-50 text-emerald-700';
            case 'ARCHIVED': return 'bg-slate-100 text-slate-500';
        }
    }
    formatAmount(n) {
        if (n === null || n === undefined || Number.isNaN(n)) {
            return (0).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
        }
        return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
    formatDate(d) {
        return dayjs(d).format('DD/MM/YYYY');
    }
    trackById(_, item) { return item.id; }
    static ɵfac = function GoalsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GoalsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GoalsPage, selectors: [["app-goals-page"]], decls: 18, vars: 5, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900", "antialiased"], [1, "mx-auto", "w-full", "max-w-7xl", "flex-1", "px-4", "py-8", "sm:px-6", "lg:px-8"], [1, "mb-8", "flex", "flex-col", "justify-between", "gap-4", "sm:flex-row", "sm:items-end"], [1, "text-3xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "mt-1", "text-slate-500", "text-sm"], [1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-[#5048e5]", "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition-all", "hover:bg-[#4338ca]", 3, "click"], [1, "material-symbols-outlined", "text-lg"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-6", "text-center"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm"], [1, "fixed", "inset-y-0", "right-0", "z-40", "w-full", "max-w-md", "bg-white", "shadow-2xl", "flex", "flex-col"], [1, "mb-10", "grid", "grid-cols-1", "gap-6", "sm:grid-cols-2", "lg:grid-cols-4"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white", "p-6", "animate-pulse", "h-28"], [1, "grid", "grid-cols-1", "gap-6", "md:grid-cols-2", "lg:grid-cols-3"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white", "h-72", "animate-pulse"], [1, "material-symbols-outlined", "text-red-400", "text-3xl"], [1, "text-sm", "text-red-600", "mt-2"], [1, "mt-3", "text-sm", "text-[#5048e5]", "font-semibold", "hover:underline", 3, "click"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white", "p-6"], [1, "text-sm", "font-medium", "text-slate-500"], [1, "mt-2", "flex", "items-baseline", "gap-2"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "text-xs", "font-semibold", "text-emerald-600"], [1, "text-xs", "font-semibold", "text-slate-400"], [1, "rounded-2xl", "border", "border-[#5048e5]/10", "bg-[#5048e5]/5", "p-6"], [1, "text-sm", "font-medium", "text-[#5048e5]"], [1, "text-2xl", "font-bold", "text-[#5048e5]"], [1, "mt-1", "text-xs", "text-[#5048e5]/70"], [1, "group", "flex", "flex-col", "rounded-2xl", "border", "border-slate-200", "bg-white", "transition-all", "hover:shadow-lg"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border-2", "border-dashed", "border-slate-200", "bg-white", "p-6", "text-center", "transition-all", "hover:border-slate-300", "hover:bg-slate-50", 3, "click"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-full", "bg-slate-100", "text-slate-400"], [1, "material-symbols-outlined", "text-3xl"], [1, "mt-4", "text-lg", "font-semibold", "text-slate-900"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "mt-12"], [1, "text-xl", "font-bold", "text-slate-900", "mb-6"], [1, "overflow-hidden", "rounded-2xl", "border", "border-slate-200", "bg-white"], [1, "w-full", "text-left"], [1, "border-b", "border-slate-100", "bg-slate-50/50"], [1, "px-6", "py-4", "text-sm", "font-semibold", "text-slate-600"], [1, "px-6", "py-4", "text-right", "text-sm", "font-semibold", "text-slate-600"], [1, "divide-y", "divide-slate-100"], [1, "p-6"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl"], [1, "material-symbols-outlined"], [1, "text-right"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-slate-400"], [1, "text-sm", "font-semibold", "text-slate-700"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "mt-4", "flex", "items-end", "justify-between"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "font-bold", "text-slate-700"], [1, "mt-4"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-xs", "font-semibold", "text-[#5048e5]"], [1, "inline-flex", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-bold", "uppercase", "tracking-wider"], [1, "h-2", "w-full", "overflow-hidden", "rounded-full", "bg-slate-100"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "mt-auto", "border-t", "border-slate-100", "bg-slate-50/50", "p-4", "flex", "gap-2"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white", "px-4", "py-2", "text-sm", "font-bold", "text-slate-900", "shadow-sm", "ring-1", "ring-inset", "ring-slate-300", "hover:bg-slate-50"], [1, "flex-1", "flex", "items-center", "justify-center", "text-sm", "font-semibold", "text-slate-400", "py-2"], [1, "p-2", "rounded-lg", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], [1, "p-2", "rounded-lg", "text-slate-400", "hover:text-red-500", "hover:bg-red-50", 3, "click"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white", "px-4", "py-2", "text-sm", "font-bold", "text-slate-900", "shadow-sm", "ring-1", "ring-inset", "ring-slate-300", "hover:bg-slate-50", 3, "click"], ["colspan", "4", 1, "px-6", "py-8", "text-center", "text-sm", "text-slate-400"], [1, "px-6", "py-4", "text-sm", "text-slate-600"], [1, "px-6", "py-4", "text-sm", "font-medium", "text-slate-900"], [1, "px-6", "py-4", "text-sm", "text-slate-500"], [1, "px-6", "py-4", "text-right", "text-sm", "font-bold", "text-slate-900"], [1, "fixed", "inset-0", "z-30", "bg-black/30", "backdrop-blur-sm", 3, "click"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "font-bold", "text-slate-900"], [1, "p-2", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[20px]"], [1, "flex-1", "overflow-y-auto", "px-6", "py-5"], ["novalidate", "", 1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "text-red-400"], ["type", "text", "formControlName", "name", "required", "", "maxlength", "100", "placeholder", "Vacation, house...", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "number", "formControlName", "targetAmount", "required", "", "min", "0.01", "step", "0.01", "placeholder", "5000", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "deadline", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "pt-2", "flex", "justify-end", "gap-3"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-semibold", "text-slate-600", "bg-slate-100", "hover:bg-slate-200", "rounded-lg", "transition", 3, "click"], ["type", "submit", 1, "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "px-6", "py-4", "bg-slate-50", "border-b", "border-slate-100"], [1, "flex", "items-center", "justify-between", "text-sm", "mb-2"], [1, "text-slate-500"], [1, "flex", "items-center", "justify-between", "text-sm", "mb-3"], [1, "font-semibold", "text-[#5048e5]"], [1, "h-2", "bg-slate-200", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-[#5048e5]", "rounded-full", "transition-all"], [1, "text-right", "text-xs", "text-slate-400", "mt-1"], ["type", "number", "formControlName", "amount", "required", "", "min", "0.01", "step", "0.01", "placeholder", "100", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "date", "formControlName", "contributionDate", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["type", "text", "formControlName", "note", "maxlength", "300", "placeholder", "Manual transfer...", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"]], template: function GoalsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
            i0.ɵɵtext(5, "Savings Goals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function GoalsPage_Template_button_click_8_listener() { return ctx.openCreate(); });
            i0.ɵɵelementStart(9, "span", 6);
            i0.ɵɵtext(10, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Create New Goal ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(12, GoalsPage_Conditional_12_Template, 6, 2)(13, GoalsPage_Conditional_13_Template, 7, 1, "div", 7)(14, GoalsPage_Conditional_14_Template, 60, 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(15, GoalsPage_Conditional_15_Template, 1, 0, "div", 8);
            i0.ɵɵconditionalCreate(16, GoalsPage_Conditional_16_Template, 30, 4, "aside", 9);
            i0.ɵɵconditionalCreate(17, GoalsPage_Conditional_17_Template, 48, 9, "aside", 9);
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("You are ", ctx.overallProgress, "% of the way to your total target.");
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.loading ? 12 : ctx.error ? 13 : 14);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.activePanel ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activePanel === "create" || ctx.activePanel === "edit" ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activePanel === "contribute" && ctx.contributingGoal ? 17 : -1);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoalsPage, [{
        type: Component,
        args: [{ selector: 'app-goals-page', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900 antialiased\">\n  <main class=\"mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8\">\n    <div class=\"mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end\">\n      <div>\n        <h2 class=\"text-3xl font-bold tracking-tight text-slate-900\">Savings Goals</h2>\n        <p class=\"mt-1 text-slate-500 text-sm\">You are {{ overallProgress }}% of the way to your total target.</p>\n      </div>\n      <button\n        (click)=\"openCreate()\"\n        class=\"inline-flex items-center justify-center gap-2 rounded-xl bg-[#5048e5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4338ca]\"\n      >\n        <span class=\"material-symbols-outlined text-lg\">add</span>\n        Create New Goal\n      </button>\n    </div>\n\n    @if (loading) {\n      <div class=\"mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4\">\n        @for (i of [1,2,3,4]; track i) {\n          <div class=\"rounded-2xl border border-slate-200 bg-white p-6 animate-pulse h-28\"></div>\n        }\n      </div>\n      <div class=\"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3\">\n        @for (i of [1,2,3,4,5,6]; track i) {\n          <div class=\"rounded-2xl border border-slate-200 bg-white h-72 animate-pulse\"></div>\n        }\n      </div>\n    } @else if (error) {\n      <div class=\"rounded-2xl border border-red-200 bg-red-50 p-6 text-center\">\n        <span class=\"material-symbols-outlined text-red-400 text-3xl\">error</span>\n        <p class=\"text-sm text-red-600 mt-2\">{{ error }}</p>\n        <button (click)=\"loadGoals()\" class=\"mt-3 text-sm text-[#5048e5] font-semibold hover:underline\">Retry</button>\n      </div>\n    } @else {\n      <div class=\"mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4\">\n        <div class=\"rounded-2xl border border-slate-200 bg-white p-6\">\n          <p class=\"text-sm font-medium text-slate-500\">Total Saved</p>\n          <div class=\"mt-2 flex items-baseline gap-2\">\n            <span class=\"text-2xl font-bold text-slate-900\">{{ formatAmount(totalSaved) }}</span>\n            <span class=\"text-xs font-semibold text-emerald-600\">+{{ growthRate }}%</span>\n          </div>\n        </div>\n        <div class=\"rounded-2xl border border-slate-200 bg-white p-6\">\n          <p class=\"text-sm font-medium text-slate-500\">Active Goals</p>\n          <div class=\"mt-2 flex items-baseline gap-2\">\n            <span class=\"text-2xl font-bold text-slate-900\">{{ activeCount }}</span>\n            <span class=\"text-xs font-semibold text-slate-400\">In Progress</span>\n          </div>\n        </div>\n        <div class=\"rounded-2xl border border-slate-200 bg-white p-6\">\n          <p class=\"text-sm font-medium text-slate-500\">Monthly Average</p>\n          <div class=\"mt-2 flex items-baseline gap-2\">\n            <span class=\"text-2xl font-bold text-slate-900\">{{ formatAmount(monthlyAverage) }}</span>\n          </div>\n        </div>\n        <div class=\"rounded-2xl border border-[#5048e5]/10 bg-[#5048e5]/5 p-6\">\n          <p class=\"text-sm font-medium text-[#5048e5]\">Next Milestone</p>\n          <div class=\"mt-2 flex items-baseline gap-2\">\n            <span class=\"text-2xl font-bold text-[#5048e5]\">{{ leadGoal?.name || 'No Active Goal' }}</span>\n          </div>\n          <p class=\"mt-1 text-xs text-[#5048e5]/70\">{{ leadGoal ? (percent(leadGoal) + '% Complete') : 'Create your first goal' }}</p>\n        </div>\n      </div>\n\n      <div class=\"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3\">\n        @for (goal of goals; track trackById($index, goal)) {\n          <div class=\"group flex flex-col rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg\">\n            <div class=\"p-6\">\n              <div class=\"mb-4 flex items-center justify-between\">\n                <div class=\"flex h-12 w-12 items-center justify-center rounded-xl\" [class]=\"color(goal).bg + ' ' + color(goal).text\">\n                  <span class=\"material-symbols-outlined\">{{ iconForGoal(goal) }}</span>\n                </div>\n                <div class=\"text-right\">\n                  <p class=\"text-xs font-medium uppercase tracking-wider text-slate-400\">Target Date</p>\n                  <p class=\"text-sm font-semibold text-slate-700\">{{ goal.deadline ? formatDate(goal.deadline) : 'Ongoing' }}</p>\n                </div>\n              </div>\n\n              <h3 class=\"text-lg font-bold text-slate-900\">{{ goal.name }}</h3>\n\n              <div class=\"mt-4 flex items-end justify-between\">\n                <div>\n                  <p class=\"text-sm font-medium text-slate-500\">Current Balance</p>\n                  <p class=\"text-xl font-bold text-slate-900\">{{ formatAmount(goal.currentAmount) }}</p>\n                </div>\n                <div class=\"text-right\">\n                  <p class=\"text-sm font-medium text-slate-500\">Goal</p>\n                  <p class=\"text-sm font-bold text-slate-700\">{{ formatAmount(goal.targetAmount) }}</p>\n                </div>\n              </div>\n\n              <div class=\"mt-4\">\n                <div class=\"flex items-center justify-between mb-2\">\n                  <span class=\"text-xs font-semibold text-[#5048e5]\">{{ percent(goal) }}% Complete</span>\n                  <span class=\"inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider\" [class]=\"statusClass(goal)\">\n                    {{ statusLabel(goal) }}\n                  </span>\n                </div>\n                <div class=\"h-2 w-full overflow-hidden rounded-full bg-slate-100\">\n                  <div class=\"h-full rounded-full transition-all duration-500\" [class]=\"color(goal).bar\" [style.width.%]=\"percent(goal)\"></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mt-auto border-t border-slate-100 bg-slate-50/50 p-4 flex gap-2\">\n              @if (goal.status === 'ACTIVE') {\n                <button\n                  (click)=\"openContribute(goal)\"\n                  class=\"flex-1 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50\"\n                >\n                  <span class=\"material-symbols-outlined text-lg\">payments</span>\n                  Contribute\n                </button>\n              } @else {\n                <div class=\"flex-1 flex items-center justify-center text-sm font-semibold text-slate-400 py-2\">\n                  {{ goal.status === 'COMPLETED' ? 'Completed Goal' : 'Archived Goal' }}\n                </div>\n              }\n              <button (click)=\"openEdit(goal)\" class=\"p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100\">\n                <span class=\"material-symbols-outlined text-[18px]\">edit</span>\n              </button>\n              <button (click)=\"deleteGoal(goal)\" class=\"p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50\">\n                <span class=\"material-symbols-outlined text-[18px]\">delete</span>\n              </button>\n            </div>\n          </div>\n        }\n\n        <button\n          (click)=\"openCreate()\"\n          class=\"flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-6 text-center transition-all hover:border-slate-300 hover:bg-slate-50\"\n        >\n          <div class=\"flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400\">\n            <span class=\"material-symbols-outlined text-3xl\">add</span>\n          </div>\n          <h3 class=\"mt-4 text-lg font-semibold text-slate-900\">Add another goal</h3>\n          <p class=\"mt-1 text-sm text-slate-500\">Define a new saving target and start tracking.</p>\n        </button>\n      </div>\n\n      <div class=\"mt-12\">\n        <h3 class=\"text-xl font-bold text-slate-900 mb-6\">Recent Contributions</h3>\n        <div class=\"overflow-hidden rounded-2xl border border-slate-200 bg-white\">\n          <table class=\"w-full text-left\">\n            <thead>\n              <tr class=\"border-b border-slate-100 bg-slate-50/50\">\n                <th class=\"px-6 py-4 text-sm font-semibold text-slate-600\">Date</th>\n                <th class=\"px-6 py-4 text-sm font-semibold text-slate-600\">Goal</th>\n                <th class=\"px-6 py-4 text-sm font-semibold text-slate-600\">Method</th>\n                <th class=\"px-6 py-4 text-right text-sm font-semibold text-slate-600\">Amount</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-slate-100\">\n              @if (recentContributionsFeed.length === 0) {\n                <tr>\n                  <td colspan=\"4\" class=\"px-6 py-8 text-center text-sm text-slate-400\">No contributions yet.</td>\n                </tr>\n              } @else {\n                @for (c of recentContributionsFeed; track c.id) {\n                  <tr>\n                    <td class=\"px-6 py-4 text-sm text-slate-600\">{{ formatDate(c.contributionDate) }}</td>\n                    <td class=\"px-6 py-4 text-sm font-medium text-slate-900\">{{ goalNameById(c.goalId) }}</td>\n                    <td class=\"px-6 py-4 text-sm text-slate-500\">{{ contributionMethod(c) }}</td>\n                    <td class=\"px-6 py-4 text-right text-sm font-bold text-slate-900\">+{{ formatAmount(c.amount) }}</td>\n                  </tr>\n                }\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    }\n  </main>\n</div>\n\n@if (activePanel) {\n  <div class=\"fixed inset-0 z-30 bg-black/30 backdrop-blur-sm\" (click)=\"closePanel()\"></div>\n}\n\n@if (activePanel === 'create' || activePanel === 'edit') {\n  <aside class=\"fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl flex flex-col\">\n    <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n      <h3 class=\"font-bold text-slate-900\">{{ activePanel === 'edit' ? 'Edit Goal' : 'Create Goal' }}</h3>\n      <button (click)=\"closePanel()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n        <span class=\"material-symbols-outlined text-[20px]\">close</span>\n      </button>\n    </div>\n\n    <div class=\"flex-1 overflow-y-auto px-6 py-5\">\n      <form [formGroup]=\"goalForm\" (ngSubmit)=\"submitGoal()\" novalidate class=\"space-y-4\">\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Goal name <span class=\"text-red-400\">*</span></label>\n          <input type=\"text\" formControlName=\"name\" required maxlength=\"100\" placeholder=\"Vacation, house...\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Target amount (\u20AC) <span class=\"text-red-400\">*</span></label>\n          <input type=\"number\" formControlName=\"targetAmount\" required min=\"0.01\" step=\"0.01\" placeholder=\"5000\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Deadline</label>\n          <input type=\"date\" formControlName=\"deadline\" class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n\n        <div class=\"pt-2 flex justify-end gap-3\">\n          <button type=\"button\" (click)=\"closePanel()\" class=\"px-4 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition\">Cancel</button>\n          <button type=\"submit\" [disabled]=\"saving\" class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all disabled:opacity-50 disabled:cursor-not-allowed\">\n            {{ saving ? 'Saving...' : (activePanel === 'edit' ? 'Save' : 'Create') }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </aside>\n}\n\n@if (activePanel === 'contribute' && contributingGoal) {\n  <aside class=\"fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl flex flex-col\">\n    <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n      <div>\n        <h3 class=\"font-bold text-slate-900\">Contribute</h3>\n        <p class=\"text-sm text-slate-500 mt-0.5\">{{ contributingGoal.name }}</p>\n      </div>\n      <button (click)=\"closePanel()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n        <span class=\"material-symbols-outlined text-[20px]\">close</span>\n      </button>\n    </div>\n\n    <div class=\"px-6 py-4 bg-slate-50 border-b border-slate-100\">\n      <div class=\"flex items-center justify-between text-sm mb-2\"><span class=\"text-slate-500\">Saved</span><span class=\"font-bold text-slate-900\">{{ formatAmount(contributingGoal.currentAmount) }}</span></div>\n      <div class=\"flex items-center justify-between text-sm mb-3\"><span class=\"text-slate-500\">Target</span><span class=\"font-semibold text-[#5048e5]\">{{ formatAmount(contributingGoal.targetAmount) }}</span></div>\n      <div class=\"h-2 bg-slate-200 rounded-full overflow-hidden\"><div class=\"h-full bg-[#5048e5] rounded-full transition-all\" [style.width.%]=\"percent(contributingGoal)\"></div></div>\n      <p class=\"text-right text-xs text-slate-400 mt-1\">{{ percent(contributingGoal) }}% complete</p>\n    </div>\n\n    <div class=\"flex-1 overflow-y-auto px-6 py-5\">\n      <form [formGroup]=\"contributeForm\" (ngSubmit)=\"submitContribute()\" novalidate class=\"space-y-4\">\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Amount (\u20AC) <span class=\"text-red-400\">*</span></label>\n          <input type=\"number\" formControlName=\"amount\" required min=\"0.01\" step=\"0.01\" placeholder=\"100\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Date <span class=\"text-red-400\">*</span></label>\n          <input type=\"date\" formControlName=\"contributionDate\" required class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n        <div>\n          <label class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Note</label>\n          <input type=\"text\" formControlName=\"note\" maxlength=\"300\" placeholder=\"Manual transfer...\" class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n\n        <div class=\"pt-2 flex justify-end gap-3\">\n          <button type=\"button\" (click)=\"closePanel()\" class=\"px-4 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition\">Cancel</button>\n          <button type=\"submit\" [disabled]=\"saving\" class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all disabled:opacity-50 disabled:cursor-not-allowed\">\n            {{ saving ? 'Saving...' : 'Save Contribution' }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </aside>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GoalsPage, { className: "GoalsPage", filePath: "src/app/features/goals/pages/goals-page/goals-page.ts", lineNumber: 42 }); })();
