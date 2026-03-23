import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import Swal from 'sweetalert2';
import { CalendarService } from '../../services/calendar.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
function CalendarPage_Conditional_32_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} }
function CalendarPage_Conditional_32_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} }
function CalendarPage_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, CalendarPage_Conditional_32_For_2_Template, 1, 0, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵrepeaterCreate(3, CalendarPage_Conditional_32_For_4_Template, 1, 0, "div", 21, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.weekDays);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function CalendarPage_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 22);
    i0.ɵɵtext(2, "error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 24);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_33_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.ngOnInit()); });
    i0.ɵɵtext(6, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function CalendarPage_Conditional_34_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayName_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dayName_r3);
} }
function CalendarPage_Conditional_34_For_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1, "Today");
    i0.ɵɵelementEnd();
} }
function CalendarPage_Conditional_34_For_4_For_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(": ", ctx_r0.amountText(event_r7.amount));
} }
function CalendarPage_Conditional_34_For_4_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_34_For_4_For_6_Template_button_click_0_listener($event) { const event_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r0.openEdit(event_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CalendarPage_Conditional_34_For_4_For_6_span_2_Template, 2, 1, "span", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r0.eventPillClass(event_r7));
    i0.ɵɵproperty("title", event_r7.title);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", event_r7.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", event_r7.amount !== null && event_r7.amount !== undefined);
} }
function CalendarPage_Conditional_34_For_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", ctx_r0.filteredEvents(day_r5.events).length - 2, " more");
} }
function CalendarPage_Conditional_34_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_34_For_4_Template_div_click_0_listener() { const day_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectDay(day_r5)); });
    i0.ɵɵelementStart(1, "span", 28);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵconditionalCreate(4, CalendarPage_Conditional_34_For_4_Conditional_4_Template, 2, 0, "span", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, CalendarPage_Conditional_34_For_4_For_6_Template, 3, 5, "button", 30, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵconditionalCreate(7, CalendarPage_Conditional_34_For_4_Conditional_7_Template, 2, 1, "span", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-slate-50", !day_r5.isCurrentMonth)("text-slate-400", !day_r5.isCurrentMonth)("bg-[#5048e5]/5", day_r5.isToday)("ring-2", day_r5.isToday)("ring-inset", day_r5.isToday)("ring-[#5048e5]", day_r5.isToday)("bg-slate-100", (ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.dateStr) === day_r5.dateStr && !day_r5.isToday);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-[#5048e5]", day_r5.isToday);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 19, day_r5.date, "d"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(day_r5.isToday ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.filteredEvents(day_r5.events).slice(0, 2));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.filteredEvents(day_r5.events).length > 2 ? 7 : -1);
} }
function CalendarPage_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵrepeaterCreate(1, CalendarPage_Conditional_34_For_2_Template, 2, 1, "div", 25, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵrepeaterCreate(3, CalendarPage_Conditional_34_For_4_Template, 8, 22, "div", 26, i0.ɵɵcomponentInstance().trackByDate, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.weekDays);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.calendarDays);
} }
function CalendarPage_Conditional_35_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1, "No events for this day.");
    i0.ɵɵelementEnd();
} }
function CalendarPage_Conditional_35_Conditional_14_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 52)(5, "p", 53);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 45);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 54)(11, "p", 55);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 56);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_35_Conditional_14_For_1_Template_button_click_13_listener() { const event_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openEdit(event_r10)); });
    i0.ɵɵelementStart(14, "span", 57);
    i0.ɵɵtext(15, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "button", 58);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_35_Conditional_14_For_1_Template_button_click_16_listener() { const event_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.deleteEvent(event_r10)); });
    i0.ɵɵelementStart(17, "span", 57);
    i0.ɵɵtext(18, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.eventIcon(event_r10));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(event_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, ctx_r0.getEventKind(event_r10)));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.amountText(event_r10.amount));
} }
function CalendarPage_Conditional_35_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, CalendarPage_Conditional_35_Conditional_14_For_1_Template, 19, 6, "div", 50, i0.ɵɵcomponentInstance().trackById, true);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r0.selectedDayEvents);
} }
function CalendarPage_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 18)(1, "div", 34)(2, "div")(3, "h2", 35);
    i0.ɵɵtext(4, "Schedule Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 36);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 37);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_35_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleDetails()); });
    i0.ɵɵelementStart(9, "span", 38);
    i0.ɵɵtext(10, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 39)(12, "div", 40);
    i0.ɵɵconditionalCreate(13, CalendarPage_Conditional_35_Conditional_13_Template, 2, 0, "div", 41)(14, CalendarPage_Conditional_35_Conditional_14_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 42)(16, "h3", 43);
    i0.ɵɵtext(17, "Daily Outlook");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 44)(19, "span", 45);
    i0.ɵɵtext(20, "Scheduled Out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 46);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 44)(25, "span", 45);
    i0.ɵɵtext(26, "Scheduled In");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 47);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 48)(31, "span", 49);
    i0.ɵɵtext(32, "End Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span", 49);
    i0.ɵɵtext(34);
    i0.ɵɵpipe(35, "number");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 5, ctx_r0.selectedDay.date, "MMMM d, y"));
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r0.selectedDayEvents.length === 0 ? 13 : 14);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("-", i0.ɵɵpipeBind2(23, 8, ctx_r0.selectedDayScheduledOut, "1.2-2"), "$");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("+", i0.ɵɵpipeBind2(29, 11, ctx_r0.selectedDayScheduledIn, "1.2-2"), "$");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(35, 14, ctx_r0.selectedDayEndBalance, "1.2-2"), "$");
} }
function CalendarPage_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 59);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_36_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 60)(3, "div", 61)(4, "h3", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 62);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵelementStart(7, "span", 8);
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "form", 63);
    i0.ɵɵlistener("ngSubmit", function CalendarPage_Conditional_36_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵelementStart(10, "div")(11, "label", 64);
    i0.ɵɵtext(12, "Title ");
    i0.ɵɵelementStart(13, "span", 65);
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(15, "input", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div")(17, "label", 67);
    i0.ɵɵtext(18, "Date ");
    i0.ɵɵelementStart(19, "span", 65);
    i0.ɵɵtext(20, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(21, "input", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div")(23, "label", 69);
    i0.ɵɵtext(24, "Amount ($)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "input", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div")(27, "label", 71);
    i0.ɵɵtext(28, "Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 72);
    i0.ɵɵelement(30, "input", 73);
    i0.ɵɵelementStart(31, "span", 36);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div")(34, "label", 74);
    i0.ɵɵtext(35, "Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(36, "textarea", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div", 76)(38, "button", 77);
    i0.ɵɵlistener("click", function CalendarPage_Conditional_36_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵtext(39, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 78);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.editingId ? "Edit Event" : "New Event");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r0.title.invalid && ctx_r0.title.touched)("border-zinc-300", !(ctx_r0.title.invalid && ctx_r0.title.touched));
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("border-red-400", ctx_r0.eventDate.invalid && ctx_r0.eventDate.touched)("border-zinc-300", !(ctx_r0.eventDate.invalid && ctx_r0.eventDate.touched));
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r0.form.value.color);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r0.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.saving ? "Saving..." : ctx_r0.editingId ? "Update" : "Create");
} }
dayjs.locale('fr');
const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHLY_BUDGET_TARGET = 8450;
const BASE_DAY_BALANCE = 4500;
export class CalendarPage {
    calendarService = inject(CalendarService);
    fb = inject(FormBuilder);
    weekDays = WEEK_DAYS;
    currentMonth = dayjs().startOf('month');
    calendarDays = [];
    events = [];
    selectedDay = null;
    selectedEvent = null;
    lastSelectedDateStr = null;
    activeFilter = 'all';
    detailsCollapsed = false;
    loading = true;
    saving = false;
    error = null;
    showForm = false;
    editingId = null;
    form = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(100)]],
        eventDate: ['', [Validators.required]],
        amount: [null],
        color: ['#5048e5'],
        notes: ['', [Validators.maxLength(500)]],
    });
    get title() { return this.form.controls.title; }
    get eventDate() { return this.form.controls.eventDate; }
    get amount() { return this.form.controls.amount; }
    get notes() { return this.form.controls.notes; }
    get monthLabel() {
        return this.currentMonth.format('MMMM YYYY');
    }
    get monthParam() {
        return this.currentMonth.format('YYYY-MM');
    }
    ngOnInit() {
        this.loadMonth();
    }
    loadMonth() {
        this.loading = true;
        this.error = null;
        this.selectedDay = null;
        this.calendarService.getMonth(this.monthParam).subscribe({
            next: events => {
                this.events = events;
                this.calendarDays = this.buildGrid(events);
                this.selectedDay = null;
                this.loading = false;
            },
            error: () => {
                this.error = 'Impossible de charger le calendrier.';
                this.loading = false;
            },
        });
    }
    buildGrid(events) {
        const today = dayjs().format('YYYY-MM-DD');
        const firstDay = this.currentMonth.startOf('month');
        // Sunday-first layout
        const startOffset = firstDay.day();
        const daysInMonth = this.currentMonth.daysInMonth();
        const totalCells = 42; // 6 rows × 7
        // Index events by date
        const byDate = new Map();
        for (const e of events) {
            if (!byDate.has(e.eventDate))
                byDate.set(e.eventDate, []);
            byDate.get(e.eventDate).push(e);
        }
        const cells = [];
        for (let i = 0; i < totalCells; i++) {
            const date = firstDay.subtract(startOffset, 'day').add(i, 'day');
            const dateStr = date.format('YYYY-MM-DD');
            cells.push({
                date: date.toDate(),
                dateStr,
                isCurrentMonth: date.month() === this.currentMonth.month(),
                isToday: dateStr === today,
                events: byDate.get(dateStr) ?? [],
            });
        }
        return cells;
    }
    prevMonth() {
        this.currentMonth = this.currentMonth.subtract(1, 'month');
        this.loadMonth();
    }
    nextMonth() {
        this.currentMonth = this.currentMonth.add(1, 'month');
        this.loadMonth();
    }
    goToday() {
        this.currentMonth = dayjs().startOf('month');
        this.loadMonth();
    }
    selectDay(day) {
        this.selectedDay = day;
        this.lastSelectedDateStr = day.dateStr;
        this.detailsCollapsed = false;
        this.selectedEvent = null;
    }
    openCreate(day) {
        this.editingId = null;
        this.selectedEvent = null;
        const defaultDate = day?.dateStr ?? this.lastSelectedDateStr ?? dayjs().format('YYYY-MM-DD');
        this.form.reset({
            title: '',
            eventDate: defaultDate,
            amount: null,
            color: '#5048e5',
            notes: '',
        });
        this.showForm = true;
    }
    toggleDetails() {
        this.detailsCollapsed = !this.detailsCollapsed;
    }
    openEdit(event) {
        this.editingId = event.id;
        this.selectedEvent = event;
        this.form.setValue({
            title: event.title,
            eventDate: event.eventDate,
            amount: event.amount ?? null,
            color: event.color ?? '#5048e5',
            notes: event.notes ?? '',
        });
        this.showForm = true;
    }
    closeForm() {
        this.showForm = false;
        this.editingId = null;
        this.selectedEvent = null;
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.saving = true;
        const { title, eventDate, amount, color, notes } = this.form.value;
        const obs = this.editingId !== null
            ? this.calendarService.update(this.editingId, {
                title: title,
                eventDate: eventDate,
                amount: amount ?? null,
                color: color ?? null,
                notes: notes ?? null,
            })
            : this.calendarService.create({
                title: title,
                eventDate: eventDate,
                amount: amount ?? null,
                color: color ?? null,
                notes: notes ?? null,
            });
        obs.subscribe({
            next: () => { this.saving = false; this.closeForm(); this.loadMonth(); },
            error: () => {
                this.saving = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible d\'enregistrer l\'événement.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    async deleteEvent(event) {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer cet événement ?',
            text: `"${event.title}" sera définitivement supprimé.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        this.calendarService.delete(event.id).subscribe({
            next: () => {
                if (this.selectedDay) {
                    this.selectedDay = {
                        ...this.selectedDay,
                        events: this.selectedDay.events.filter(e => e.id !== event.id),
                    };
                }
                this.loadMonth();
                Swal.fire({ icon: 'success', title: 'Événement supprimé', timer: 1200, showConfirmButton: false });
            },
            error: () => Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer l\'événement.', confirmButtonColor: '#5048e5' }),
        });
    }
    eventDotStyle(event) {
        return event.color ?? '#5048e5';
    }
    getEventKind(event) {
        const t = event.title.toLowerCase();
        if (event.amount !== null && event.amount !== undefined) {
            if (event.amount > 0)
                return 'income';
            if (event.amount < 0)
                return 'expense';
        }
        if (t.includes('loan') || t.includes('debt') || t.includes('credit') || t.includes('visa'))
            return 'debt';
        if (t.includes('salary') || t.includes('freelance') || t.includes('income') || t.includes('dividend'))
            return 'income';
        if (t.includes('rent') || t.includes('bill') || t.includes('expense') || t.includes('internet') || t.includes('electric'))
            return 'expense';
        return 'event';
    }
    eventPillClass(event) {
        switch (this.getEventKind(event)) {
            case 'income':
                return 'bg-emerald-100 text-emerald-700';
            case 'debt':
                return 'bg-amber-100 text-amber-700';
            case 'event':
                return 'bg-indigo-100 text-indigo-700';
            case 'expense':
            default:
                return 'bg-[#5048e5] text-white';
        }
    }
    setFilter(filter) {
        this.activeFilter = filter;
    }
    isFilterActive(filter) {
        return this.activeFilter === filter;
    }
    filteredEvents(events) {
        if (this.activeFilter === 'all')
            return events;
        return events.filter((e) => this.getEventKind(e) === this.activeFilter);
    }
    eventIcon(event) {
        switch (this.getEventKind(event)) {
            case 'income':
                return 'trending_up';
            case 'debt':
                return 'credit_card';
            case 'event':
                return 'event';
            case 'expense':
            default:
                return 'trending_down';
        }
    }
    amountText(value) {
        if (value === null || value === undefined)
            return '';
        const sign = value > 0 ? '+' : '';
        return `${sign}${value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}`;
    }
    categoryCount(kind) {
        return this.events.filter((e) => this.getEventKind(e) === kind).length;
    }
    get selectedDayEvents() {
        return this.filteredEvents(this.selectedDay?.events ?? []);
    }
    get monthlyBudgetTarget() {
        return MONTHLY_BUDGET_TARGET;
    }
    get monthlySpent() {
        return Math.abs(this.events.filter((e) => (e.amount ?? 0) < 0).reduce((s, e) => s + (e.amount ?? 0), 0));
    }
    get monthlyUsagePercent() {
        if (this.monthlyBudgetTarget <= 0)
            return 0;
        return Math.min(100, Math.round((this.monthlySpent / this.monthlyBudgetTarget) * 100));
    }
    get selectedDayScheduledOut() {
        return Math.abs((this.selectedDay?.events ?? []).filter((e) => (e.amount ?? 0) < 0).reduce((s, e) => s + (e.amount ?? 0), 0));
    }
    get selectedDayScheduledIn() {
        return (this.selectedDay?.events ?? []).filter((e) => (e.amount ?? 0) > 0).reduce((s, e) => s + (e.amount ?? 0), 0);
    }
    get selectedDayEndBalance() {
        return BASE_DAY_BALANCE + this.selectedDayScheduledIn - this.selectedDayScheduledOut;
    }
    trackByDate(_, day) { return day.dateStr; }
    trackById(_, e) { return e.id; }
    static ɵfac = function CalendarPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CalendarPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarPage, selectors: [["app-calendar-page"]], decls: 37, vars: 73, consts: [[1, "relative", "flex", "h-auto", "min-h-screen", "w-full", "flex-col", "overflow-x-hidden", "bg-[#f6f6f8]", "text-slate-900"], [1, "flex", "flex-1", "overflow-hidden"], [1, "flex-1", "flex", "flex-col", "p-6", "overflow-y-auto", "min-w-0"], [1, "flex", "items-center", "justify-between", "mb-4", "gap-3", "flex-wrap"], [1, "flex", "items-center", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-900", "capitalize"], [1, "flex", "bg-white", "border", "border-slate-200", "rounded-lg", "overflow-hidden"], [1, "p-2", "hover:bg-slate-50", "text-slate-600", "border-r", "border-slate-200", 3, "click"], [1, "material-symbols-outlined"], [1, "p-2", "hover:bg-slate-50", "text-slate-600", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-medium", "border", "border-slate-200", "rounded-lg", "hover:bg-slate-50", 3, "click"], [1, "px-4", "py-2", "bg-[#5048e5]", "text-white", "rounded-lg", "text-sm", "font-semibold", "hover:bg-[#4338ca]", 3, "click"], [1, "mb-6", "flex", "items-center", "gap-2", "overflow-x-auto", "pb-1"], [1, "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold", "border", "transition", 3, "click"], [1, "ml-auto", "text-xs", "text-slate-500", "whitespace-nowrap", "hidden", "md:block"], [1, "grid", "grid-cols-7", "gap-px", "bg-slate-200", "rounded-xl", "overflow-hidden", "animate-pulse", "min-h-[800px]"], [1, "bg-red-50", "border", "border-red-200", "rounded-2xl", "p-6", "text-center"], [1, "flex-1", "grid", "grid-cols-7", "grid-rows-7", "border-t", "border-l", "border-slate-200", "min-h-[800px]", "bg-white", "shadow-sm", "rounded-xl", "overflow-hidden"], [1, "hidden", "xl:flex", "w-80", "border-l", "border-slate-200", "bg-white", "flex-col", "overflow-y-auto"], [1, "fixed", "inset-0", "z-40", "flex"], [1, "bg-slate-50", "py-3"], [1, "bg-white", "h-24"], [1, "material-symbols-outlined", "text-red-400", "text-3xl", "block", "mb-2"], [1, "text-sm", "text-red-600"], [1, "mt-3", "text-sm", "text-[#5048e5]", "font-semibold", "hover:underline", 3, "click"], [1, "bg-slate-50", "py-3", "text-center", "border-r", "border-b", "border-slate-200", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-widest"], [1, "p-2", "border-r", "border-b", "border-slate-200", "flex", "flex-col", "gap-1", "cursor-pointer", "hover:bg-slate-50", 3, "bg-slate-50", "text-slate-400", "bg-[#5048e5]/5", "ring-2", "ring-inset", "ring-[#5048e5]", "bg-slate-100"], [1, "p-2", "border-r", "border-b", "border-slate-200", "flex", "flex-col", "gap-1", "cursor-pointer", "hover:bg-slate-50", 3, "click"], [1, "text-sm", "font-bold", "flex", "items-center", "justify-between"], [1, "text-[10px]", "bg-[#5048e5]", "text-white", "px-1.5", "rounded-full"], [1, "text-left", "text-[10px]", "px-1.5", "py-0.5", "rounded", "font-medium", "truncate", 3, "class", "title"], [1, "text-[10px]", "text-slate-400", "font-medium"], [1, "text-left", "text-[10px]", "px-1.5", "py-0.5", "rounded", "font-medium", "truncate", 3, "click", "title"], [4, "ngIf"], [1, "p-6", "border-b", "border-slate-100", "flex", "items-start", "justify-between", "gap-2"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500"], ["title", "Close details", 1, "mt-0.5", "p-1.5", "rounded-lg", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], [1, "p-6", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-4"], [1, "text-sm", "text-slate-400"], [1, "pt-4", "border-t", "border-slate-100"], [1, "text-sm", "font-bold", "mb-3"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "text-xs", "text-slate-500"], [1, "text-sm", "font-bold", "text-rose-500"], [1, "text-sm", "font-bold", "text-emerald-500"], [1, "flex", "items-center", "justify-between", "py-2", "mt-2", "pt-2", "border-t", "border-dashed", "border-slate-200"], [1, "text-sm", "font-bold"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-xl", "bg-slate-50", "border", "border-slate-100"], [1, "size-10", "rounded-lg", "bg-[#5048e5]/15", "text-[#5048e5]", "flex", "items-center", "justify-center"], [1, "flex-1", "overflow-hidden"], [1, "text-sm", "font-bold", "text-slate-900", "truncate"], [1, "flex", "items-center", "gap-1"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "p-1", "text-slate-400", "hover:text-[#5048e5]", 3, "click"], [1, "material-symbols-outlined", "text-[16px]"], [1, "p-1", "text-slate-400", "hover:text-red-500", 3, "click"], [1, "flex-1", "bg-black/30", "backdrop-blur-sm", 3, "click"], [1, "w-full", "max-w-md", "bg-white", "h-full", "shadow-2xl", "flex", "flex-col", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "p-2", "rounded-lg", "text-slate-400", "hover:text-slate-600", "hover:bg-slate-100", "transition-colors", 3, "click"], ["novalidate", "", 1, "flex-1", "p-6", "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], ["for", "title", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "text-red-400"], ["id", "title", "type", "text", "formControlName", "title", "required", "", "maxlength", "100", "placeholder", "Ex: Rent, Salary...", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["for", "eventDate", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "eventDate", "type", "date", "formControlName", "eventDate", "required", "", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["for", "amount", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "amount", "type", "number", "formControlName", "amount", "step", "0.01", "placeholder", "Ex: -1200.00", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], ["for", "color", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "flex", "items-center", "gap-3"], ["id", "color", "type", "color", "formControlName", "color", 1, "w-10", "h-10", "rounded-lg", "border", "border-zinc-300", "cursor-pointer", "p-0.5"], ["for", "notes", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "notes", "formControlName", "notes", "maxlength", "500", "rows", "3", "placeholder", "Description, reminders...", 1, "w-full", "rounded-lg", "border", "border-zinc-300", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "outline-none", "transition", "resize-none", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]"], [1, "mt-auto", "pt-4", "flex", "gap-3"], ["type", "button", 1, "flex-1", "rounded-lg", "border", "border-slate-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-slate-600", "hover:bg-slate-50", "transition-colors", 3, "click"], ["type", "submit", 1, "flex-1", "rounded-lg", "bg-[#5048e5]", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-[#4338ca]", "active:scale-[0.98]", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"]], template: function CalendarPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "main", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "button", 7);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_8_listener() { return ctx.prevMonth(); });
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10, "chevron_left");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_11_listener() { return ctx.nextMonth(); });
            i0.ɵɵelementStart(12, "span", 8);
            i0.ɵɵtext(13, "chevron_right");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "button", 10);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_14_listener() { return ctx.goToday(); });
            i0.ɵɵtext(15, "Today");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "button", 11);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_16_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(17, " New Entry ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 12)(19, "button", 13);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_19_listener() { return ctx.setFilter("all"); });
            i0.ɵɵtext(20, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 13);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_21_listener() { return ctx.setFilter("income"); });
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 13);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_23_listener() { return ctx.setFilter("expense"); });
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 13);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_25_listener() { return ctx.setFilter("debt"); });
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 13);
            i0.ɵɵlistener("click", function CalendarPage_Template_button_click_27_listener() { return ctx.setFilter("event"); });
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 14);
            i0.ɵɵtext(30);
            i0.ɵɵpipe(31, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(32, CalendarPage_Conditional_32_Template, 5, 1, "div", 15)(33, CalendarPage_Conditional_33_Template, 7, 1, "div", 16)(34, CalendarPage_Conditional_34_Template, 5, 0, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(35, CalendarPage_Conditional_35_Template, 36, 17, "aside", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(36, CalendarPage_Conditional_36_Template, 42, 13, "div", 19);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.monthLabel);
            i0.ɵɵadvance(13);
            i0.ɵɵclassProp("bg-[#5048e5]", ctx.isFilterActive("all"))("text-white", ctx.isFilterActive("all"))("border-[#5048e5]", ctx.isFilterActive("all"))("bg-white", !ctx.isFilterActive("all"))("text-slate-600", !ctx.isFilterActive("all"))("border-slate-200", !ctx.isFilterActive("all"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("bg-emerald-600", ctx.isFilterActive("income"))("text-white", ctx.isFilterActive("income"))("border-emerald-600", ctx.isFilterActive("income"))("bg-white", !ctx.isFilterActive("income"))("text-slate-600", !ctx.isFilterActive("income"))("border-slate-200", !ctx.isFilterActive("income"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Income (", ctx.categoryCount("income"), ")");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bg-[#5048e5]", ctx.isFilterActive("expense"))("text-white", ctx.isFilterActive("expense"))("border-[#5048e5]", ctx.isFilterActive("expense"))("bg-white", !ctx.isFilterActive("expense"))("text-slate-600", !ctx.isFilterActive("expense"))("border-slate-200", !ctx.isFilterActive("expense"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Expenses (", ctx.categoryCount("expense"), ")");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bg-amber-600", ctx.isFilterActive("debt"))("text-white", ctx.isFilterActive("debt"))("border-amber-600", ctx.isFilterActive("debt"))("bg-white", !ctx.isFilterActive("debt"))("text-slate-600", !ctx.isFilterActive("debt"))("border-slate-200", !ctx.isFilterActive("debt"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Debts (", ctx.categoryCount("debt"), ")");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bg-indigo-600", ctx.isFilterActive("event"))("text-white", ctx.isFilterActive("event"))("border-indigo-600", ctx.isFilterActive("event"))("bg-white", !ctx.isFilterActive("event"))("text-slate-600", !ctx.isFilterActive("event"))("border-slate-200", !ctx.isFilterActive("event"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Events (", ctx.categoryCount("event"), ")");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" Monthly Budget: ", i0.ɵɵpipeBind2(31, 70, ctx.monthlyBudgetTarget, "1.0-0"), " $ \u00B7 ", ctx.monthlyUsagePercent, "% used ");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading ? 32 : ctx.error ? 33 : 34);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.selectedDay && !ctx.detailsCollapsed ? 35 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showForm ? 36 : -1);
        } }, dependencies: [CommonModule, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i1.DecimalPipe, i1.TitleCasePipe, i1.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarPage, [{
        type: Component,
        args: [{ selector: 'app-calendar-page', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f6f8] text-slate-900\">\n  <div class=\"flex flex-1 overflow-hidden\">\n    <main class=\"flex-1 flex flex-col p-6 overflow-y-auto min-w-0\">\n      <div class=\"flex items-center justify-between mb-4 gap-3 flex-wrap\">\n        <div class=\"flex items-center gap-4\">\n          <h2 class=\"text-2xl font-bold text-slate-900 capitalize\">{{ monthLabel }}</h2>\n          <div class=\"flex bg-white border border-slate-200 rounded-lg overflow-hidden\">\n            <button (click)=\"prevMonth()\" class=\"p-2 hover:bg-slate-50 text-slate-600 border-r border-slate-200\">\n              <span class=\"material-symbols-outlined\">chevron_left</span>\n            </button>\n            <button (click)=\"nextMonth()\" class=\"p-2 hover:bg-slate-50 text-slate-600\">\n              <span class=\"material-symbols-outlined\">chevron_right</span>\n            </button>\n          </div>\n          <button (click)=\"goToday()\" class=\"px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50\">Today</button>\n        </div>\n\n        <button (click)=\"openCreate()\" class=\"px-4 py-2 bg-[#5048e5] text-white rounded-lg text-sm font-semibold hover:bg-[#4338ca]\">\n          New Entry\n        </button>\n      </div>\n\n      <div class=\"mb-6 flex items-center gap-2 overflow-x-auto pb-1\">\n        <button\n          (click)=\"setFilter('all')\"\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border transition\"\n          [class.bg-[#5048e5]]=\"isFilterActive('all')\"\n          [class.text-white]=\"isFilterActive('all')\"\n          [class.border-[#5048e5]]=\"isFilterActive('all')\"\n          [class.bg-white]=\"!isFilterActive('all')\"\n          [class.text-slate-600]=\"!isFilterActive('all')\"\n          [class.border-slate-200]=\"!isFilterActive('all')\"\n        >All</button>\n        <button\n          (click)=\"setFilter('income')\"\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border transition\"\n          [class.bg-emerald-600]=\"isFilterActive('income')\"\n          [class.text-white]=\"isFilterActive('income')\"\n          [class.border-emerald-600]=\"isFilterActive('income')\"\n          [class.bg-white]=\"!isFilterActive('income')\"\n          [class.text-slate-600]=\"!isFilterActive('income')\"\n          [class.border-slate-200]=\"!isFilterActive('income')\"\n        >Income ({{ categoryCount('income') }})</button>\n        <button\n          (click)=\"setFilter('expense')\"\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border transition\"\n          [class.bg-[#5048e5]]=\"isFilterActive('expense')\"\n          [class.text-white]=\"isFilterActive('expense')\"\n          [class.border-[#5048e5]]=\"isFilterActive('expense')\"\n          [class.bg-white]=\"!isFilterActive('expense')\"\n          [class.text-slate-600]=\"!isFilterActive('expense')\"\n          [class.border-slate-200]=\"!isFilterActive('expense')\"\n        >Expenses ({{ categoryCount('expense') }})</button>\n        <button\n          (click)=\"setFilter('debt')\"\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border transition\"\n          [class.bg-amber-600]=\"isFilterActive('debt')\"\n          [class.text-white]=\"isFilterActive('debt')\"\n          [class.border-amber-600]=\"isFilterActive('debt')\"\n          [class.bg-white]=\"!isFilterActive('debt')\"\n          [class.text-slate-600]=\"!isFilterActive('debt')\"\n          [class.border-slate-200]=\"!isFilterActive('debt')\"\n        >Debts ({{ categoryCount('debt') }})</button>\n        <button\n          (click)=\"setFilter('event')\"\n          class=\"px-3 py-1.5 rounded-full text-xs font-semibold border transition\"\n          [class.bg-indigo-600]=\"isFilterActive('event')\"\n          [class.text-white]=\"isFilterActive('event')\"\n          [class.border-indigo-600]=\"isFilterActive('event')\"\n          [class.bg-white]=\"!isFilterActive('event')\"\n          [class.text-slate-600]=\"!isFilterActive('event')\"\n          [class.border-slate-200]=\"!isFilterActive('event')\"\n        >Events ({{ categoryCount('event') }})</button>\n\n        <div class=\"ml-auto text-xs text-slate-500 whitespace-nowrap hidden md:block\">\n          Monthly Budget: {{ monthlyBudgetTarget | number:'1.0-0' }} $ \u00B7 {{ monthlyUsagePercent }}% used\n        </div>\n      </div>\n\n      @if (loading) {\n        <div class=\"grid grid-cols-7 gap-px bg-slate-200 rounded-xl overflow-hidden animate-pulse min-h-[800px]\">\n          @for (h of weekDays; track h) {\n            <div class=\"bg-slate-50 py-3\"></div>\n          }\n          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]; track i) {\n            <div class=\"bg-white h-24\"></div>\n          }\n        </div>\n      } @else if (error) {\n        <div class=\"bg-red-50 border border-red-200 rounded-2xl p-6 text-center\">\n          <span class=\"material-symbols-outlined text-red-400 text-3xl block mb-2\">error</span>\n          <p class=\"text-sm text-red-600\">{{ error }}</p>\n          <button (click)=\"ngOnInit()\" class=\"mt-3 text-sm text-[#5048e5] font-semibold hover:underline\">Retry</button>\n        </div>\n      } @else {\n        <div class=\"flex-1 grid grid-cols-7 grid-rows-7 border-t border-l border-slate-200 min-h-[800px] bg-white shadow-sm rounded-xl overflow-hidden\">\n          @for (dayName of weekDays; track dayName) {\n            <div class=\"bg-slate-50 py-3 text-center border-r border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest\">{{ dayName }}</div>\n          }\n\n          @for (day of calendarDays; track trackByDate($index, day)) {\n            <div\n              class=\"p-2 border-r border-b border-slate-200 flex flex-col gap-1 cursor-pointer hover:bg-slate-50\"\n              [class.bg-slate-50]=\"!day.isCurrentMonth\"\n              [class.text-slate-400]=\"!day.isCurrentMonth\"\n              [class.bg-[#5048e5]/5]=\"day.isToday\"\n              [class.ring-2]=\"day.isToday\"\n              [class.ring-inset]=\"day.isToday\"\n              [class.ring-[#5048e5]]=\"day.isToday\"\n              [class.bg-slate-100]=\"selectedDay?.dateStr === day.dateStr && !day.isToday\"\n              (click)=\"selectDay(day)\"\n            >\n              <span class=\"text-sm font-bold flex items-center justify-between\" [class.text-[#5048e5]]=\"day.isToday\">\n                {{ day.date | date:'d' }}\n                @if (day.isToday) {\n                  <span class=\"text-[10px] bg-[#5048e5] text-white px-1.5 rounded-full\">Today</span>\n                }\n              </span>\n\n              @for (event of filteredEvents(day.events).slice(0, 2); track trackById($index, event)) {\n                <button\n                  class=\"text-left text-[10px] px-1.5 py-0.5 rounded font-medium truncate\"\n                  [class]=\"eventPillClass(event)\"\n                  (click)=\"$event.stopPropagation(); openEdit(event)\"\n                  [title]=\"event.title\"\n                >\n                  {{ event.title }}<span *ngIf=\"event.amount !== null && event.amount !== undefined\">: {{ amountText(event.amount) }}</span>\n                </button>\n              }\n\n              @if (filteredEvents(day.events).length > 2) {\n                <span class=\"text-[10px] text-slate-400 font-medium\">+{{ filteredEvents(day.events).length - 2 }} more</span>\n              }\n            </div>\n          }\n        </div>\n      }\n    </main>\n\n    @if (selectedDay && !detailsCollapsed) {\n      <aside class=\"hidden xl:flex w-80 border-l border-slate-200 bg-white flex-col overflow-y-auto\">\n        <div class=\"p-6 border-b border-slate-100 flex items-start justify-between gap-2\">\n          <div>\n            <h2 class=\"text-lg font-bold text-slate-900\">Schedule Details</h2>\n            <p class=\"text-sm text-slate-500\">{{ selectedDay.date | date:'MMMM d, y' }}</p>\n          </div>\n          <button\n            (click)=\"toggleDetails()\"\n            class=\"mt-0.5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition\"\n            title=\"Close details\"\n          >\n            <span class=\"material-symbols-outlined text-[18px]\">close</span>\n          </button>\n        </div>\n\n        <div class=\"p-6 flex flex-col gap-6\">\n          <div class=\"flex flex-col gap-4\">\n            @if (selectedDayEvents.length === 0) {\n              <div class=\"text-sm text-slate-400\">No events for this day.</div>\n            } @else {\n              @for (event of selectedDayEvents; track trackById($index, event)) {\n                <div class=\"flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100\">\n                  <div class=\"size-10 rounded-lg bg-[#5048e5]/15 text-[#5048e5] flex items-center justify-center\">\n                    <span class=\"material-symbols-outlined\">{{ eventIcon(event) }}</span>\n                  </div>\n                  <div class=\"flex-1 overflow-hidden\">\n                    <p class=\"text-sm font-bold text-slate-900 truncate\">{{ event.title }}</p>\n                    <p class=\"text-xs text-slate-500\">{{ getEventKind(event) | titlecase }}</p>\n                  </div>\n                  <div class=\"flex items-center gap-1\">\n                    <p class=\"text-sm font-bold text-slate-900\">{{ amountText(event.amount) }}</p>\n                    <button (click)=\"openEdit(event)\" class=\"p-1 text-slate-400 hover:text-[#5048e5]\"><span class=\"material-symbols-outlined text-[16px]\">edit</span></button>\n                    <button (click)=\"deleteEvent(event)\" class=\"p-1 text-slate-400 hover:text-red-500\"><span class=\"material-symbols-outlined text-[16px]\">delete</span></button>\n                  </div>\n                </div>\n              }\n            }\n          </div>\n\n          <div class=\"pt-4 border-t border-slate-100\">\n            <h3 class=\"text-sm font-bold mb-3\">Daily Outlook</h3>\n            <div class=\"flex items-center justify-between py-2\">\n              <span class=\"text-xs text-slate-500\">Scheduled Out</span>\n              <span class=\"text-sm font-bold text-rose-500\">-{{ selectedDayScheduledOut | number:'1.2-2' }}$</span>\n            </div>\n            <div class=\"flex items-center justify-between py-2\">\n              <span class=\"text-xs text-slate-500\">Scheduled In</span>\n              <span class=\"text-sm font-bold text-emerald-500\">+{{ selectedDayScheduledIn | number:'1.2-2' }}$</span>\n            </div>\n            <div class=\"flex items-center justify-between py-2 mt-2 pt-2 border-t border-dashed border-slate-200\">\n              <span class=\"text-sm font-bold\">End Balance</span>\n              <span class=\"text-sm font-bold\">{{ selectedDayEndBalance | number:'1.2-2' }}$</span>\n            </div>\n          </div>\n        </div>\n      </aside>\n    }\n  </div>\n</div>\n\n@if (showForm) {\n  <div class=\"fixed inset-0 z-40 flex\">\n    <div class=\"flex-1 bg-black/30 backdrop-blur-sm\" (click)=\"closeForm()\"></div>\n    <div class=\"w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-y-auto\">\n      <div class=\"flex items-center justify-between px-6 py-5 border-b border-slate-100\">\n        <h3 class=\"text-lg font-bold text-slate-900\">{{ editingId ? 'Edit Event' : 'New Event' }}</h3>\n        <button (click)=\"closeForm()\" class=\"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors\">\n          <span class=\"material-symbols-outlined\">close</span>\n        </button>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate class=\"flex-1 p-6 flex flex-col gap-5\">\n        <div>\n          <label for=\"title\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Title <span class=\"text-red-400\">*</span></label>\n          <input id=\"title\" type=\"text\" formControlName=\"title\" required maxlength=\"100\" placeholder=\"Ex: Rent, Salary...\" class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" [class.border-red-400]=\"title.invalid && title.touched\" [class.border-zinc-300]=\"!(title.invalid && title.touched)\" />\n        </div>\n\n        <div>\n          <label for=\"eventDate\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Date <span class=\"text-red-400\">*</span></label>\n          <input id=\"eventDate\" type=\"date\" formControlName=\"eventDate\" required class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" [class.border-red-400]=\"eventDate.invalid && eventDate.touched\" [class.border-zinc-300]=\"!(eventDate.invalid && eventDate.touched)\" />\n        </div>\n\n        <div>\n          <label for=\"amount\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Amount ($)</label>\n          <input id=\"amount\" type=\"number\" formControlName=\"amount\" step=\"0.01\" placeholder=\"Ex: -1200.00\" class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\" />\n        </div>\n\n        <div>\n          <label for=\"color\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Color</label>\n          <div class=\"flex items-center gap-3\">\n            <input id=\"color\" type=\"color\" formControlName=\"color\" class=\"w-10 h-10 rounded-lg border border-zinc-300 cursor-pointer p-0.5\" />\n            <span class=\"text-sm text-slate-500\">{{ form.value.color }}</span>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"notes\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">Notes</label>\n          <textarea id=\"notes\" formControlName=\"notes\" maxlength=\"500\" rows=\"3\" placeholder=\"Description, reminders...\" class=\"w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition resize-none focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\"></textarea>\n        </div>\n\n        <div class=\"mt-auto pt-4 flex gap-3\">\n          <button type=\"button\" (click)=\"closeForm()\" class=\"flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors\">Cancel</button>\n          <button type=\"submit\" [disabled]=\"saving\" class=\"flex-1 rounded-lg bg-[#5048e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed\">{{ saving ? 'Saving...' : (editingId ? 'Update' : 'Create') }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalendarPage, { className: "CalendarPage", filePath: "src/app/features/calendar/pages/calendar-page/calendar-page.ts", lineNumber: 32 }); })();
