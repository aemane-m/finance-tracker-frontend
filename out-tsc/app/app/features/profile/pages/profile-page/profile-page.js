import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/profile.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function ProfilePage_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1, "Password must be at least 8 characters.");
    i0.ɵɵelementEnd();
} }
function ProfilePage_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1, "Passwords do not match.");
    i0.ɵɵelementEnd();
} }
function ProfilePage_For_78_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1, "Current");
    i0.ɵɵelementEnd();
} }
function ProfilePage_For_78_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function ProfilePage_For_78_Conditional_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const session_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.revokeSession(session_r2)); });
    i0.ɵɵtext(1, "Revoke");
    i0.ɵɵelementEnd();
} }
function ProfilePage_For_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "span", 52);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div")(6, "p", 53);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 54);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(10, ProfilePage_For_78_Conditional_10_Template, 2, 0, "span", 55)(11, ProfilePage_For_78_Conditional_11_Template, 2, 0, "button", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const session_r2 = ctx.$implicit;
    i0.ɵɵclassMap(session_r2.current ? "bg-slate-50 border-slate-100" : "border-slate-100");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(session_r2.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(session_r2.device);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", session_r2.location, " \u2022 ", session_r2.when);
    i0.ɵɵadvance();
    i0.ɵɵconditional(session_r2.current ? 10 : 11);
} }
function passwordMatchValidator(ctrl) {
    const pw = ctrl.get('newPassword')?.value;
    const cpw = ctrl.get('confirmPassword')?.value;
    return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
}
export class ProfilePage {
    profileService = inject(ProfileService);
    fb = inject(FormBuilder);
    loadingProfile = true;
    savingPreferences = false;
    savingPassword = false;
    userEmail = '';
    preferenceForm = this.fb.group({
        language: ['en', [Validators.required]],
        dateFormat: ['dmy', [Validators.required]],
        currency: ['eur', [Validators.required]],
    });
    passwordForm = this.fb.group({
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
    }, { validators: passwordMatchValidator });
    sessions = [
        {
            id: '1',
            device: 'Chrome on MacOS',
            location: 'San Francisco, USA',
            when: 'Active now',
            icon: 'desktop_windows',
            current: true,
        },
        {
            id: '2',
            device: 'iPhone 13 Pro',
            location: 'San Francisco, USA',
            when: '2 hours ago',
            icon: 'smartphone',
            current: false,
        },
    ];
    get newPassword() {
        return this.passwordForm.controls.newPassword;
    }
    get confirmPassword() {
        return this.passwordForm.controls.confirmPassword;
    }
    async ngOnInit() {
        try {
            const user = await this.profileService.getCurrentUser();
            this.userEmail = user?.email ?? '';
            this.loadPreferences();
        }
        finally {
            this.loadingProfile = false;
        }
    }
    loadPreferences() {
        const raw = localStorage.getItem('user_preferences');
        if (!raw)
            return;
        try {
            const parsed = JSON.parse(raw);
            this.preferenceForm.patchValue({
                language: parsed.language ?? 'en',
                dateFormat: parsed.dateFormat ?? 'dmy',
                currency: parsed.currency ?? 'eur',
            });
        }
        catch {
            // Ignore corrupted local preferences.
        }
    }
    async savePreferences() {
        if (this.preferenceForm.invalid) {
            this.preferenceForm.markAllAsTouched();
            return;
        }
        this.savingPreferences = true;
        try {
            localStorage.setItem('user_preferences', JSON.stringify(this.preferenceForm.value));
            await Swal.fire({
                icon: 'success',
                title: 'Preferences saved',
                timer: 1400,
                showConfirmButton: false,
            });
        }
        finally {
            this.savingPreferences = false;
        }
    }
    async savePassword() {
        if (this.passwordForm.invalid) {
            this.passwordForm.markAllAsTouched();
            return;
        }
        this.savingPassword = true;
        try {
            await this.profileService.updatePassword({ newPassword: this.newPassword.value });
            this.passwordForm.reset();
            await Swal.fire({
                icon: 'success',
                title: 'Password updated',
                timer: 1400,
                showConfirmButton: false,
            });
        }
        catch {
            await Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Unable to update password.',
                confirmButtonColor: '#5048e5',
            });
        }
        finally {
            this.savingPassword = false;
        }
    }
    async revokeSession(session) {
        if (session.current)
            return;
        this.sessions = this.sessions.filter((s) => s.id !== session.id);
        await Swal.fire({
            icon: 'success',
            title: 'Session revoked',
            timer: 1200,
            showConfirmButton: false,
        });
    }
    async signOutOtherSessions() {
        this.sessions = this.sessions.filter((s) => s.current);
        await Swal.fire({
            icon: 'success',
            title: 'Other sessions closed',
            timer: 1200,
            showConfirmButton: false,
        });
    }
    async deleteAccount() {
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Delete account?',
            text: 'This action is irreversible.',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#dc2626',
        });
        if (!result.isConfirmed)
            return;
        await Swal.fire({
            icon: 'info',
            title: 'Not implemented yet',
            text: 'Account deletion endpoint is not wired yet.',
            confirmButtonColor: '#5048e5',
        });
    }
    static ɵfac = function ProfilePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfilePage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilePage, selectors: [["app-profile-page"]], decls: 98, vars: 9, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "flex-1", "overflow-y-auto"], [1, "max-w-[800px]", "mx-auto", "py-8", "px-6", "lg:px-8"], [1, "mb-12"], [1, "mb-6"], [1, "text-2xl", "font-bold"], [1, "text-slate-500", "text-sm"], [1, "space-y-6", "bg-white", "p-6", "rounded-xl", "border", "border-slate-200", "shadow-sm"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "flex", "flex-col", "gap-2"], [1, "text-slate-700", "text-sm", "font-semibold"], ["formControlName", "language", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "text-slate-900", "focus:border-[#5048e5]", "focus:ring-[#5048e5]"], ["value", "en"], ["value", "es"], ["value", "fr"], ["value", "de"], ["formControlName", "dateFormat", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "text-slate-900", "focus:border-[#5048e5]", "focus:ring-[#5048e5]"], ["value", "mdy"], ["value", "dmy"], ["value", "ymd"], [1, "flex", "flex-col", "gap-2", "md:col-span-2"], ["formControlName", "currency", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "text-slate-900", "focus:border-[#5048e5]", "focus:ring-[#5048e5]"], ["value", "usd"], ["value", "eur"], ["value", "gbp"], ["value", "jpy"], [1, "pt-4", "border-t", "border-slate-100", "flex", "justify-between", "items-center"], [1, "text-xs", "text-slate-400"], ["type", "submit", 1, "bg-[#5048e5]", "hover:bg-[#4338ca]", "text-white", "font-semibold", "py-2", "px-6", "rounded-lg", "transition-colors", "text-sm", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "space-y-8"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-200", "shadow-sm"], [1, "font-semibold", "mb-4", "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-[#5048e5]"], [1, "space-y-4", "max-w-md", 3, "ngSubmit", "formGroup"], ["formControlName", "currentPassword", "placeholder", "Current Password", "type", "password", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "focus:border-[#5048e5]", "focus:ring-[#5048e5]", "w-full"], ["formControlName", "newPassword", "placeholder", "New Password", "type", "password", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "focus:border-[#5048e5]", "focus:ring-[#5048e5]", "w-full"], ["formControlName", "confirmPassword", "placeholder", "Confirm New Password", "type", "password", 1, "rounded-lg", "border-slate-200", "bg-slate-50", "focus:border-[#5048e5]", "focus:ring-[#5048e5]", "w-full"], [1, "text-xs", "text-red-500"], ["type", "submit", 1, "mt-2", "bg-[#5048e5]", "hover:bg-[#4338ca]", "text-white", "font-semibold", "py-2", "px-6", "rounded-lg", "transition-colors", "text-sm", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between", "p-4", "rounded-lg", "border", 3, "class"], [1, "mt-6", "text-[#5048e5]", "hover:underline", "text-sm", "font-semibold", 3, "click"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "bg-red-50", "p-6", "rounded-xl", "border", "border-red-200", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-6"], [1, "text-red-700", "font-bold"], [1, "text-sm", "text-red-600/80", "max-w-md"], [1, "bg-red-600", "hover:bg-red-700", "text-white", "font-bold", "py-2", "px-6", "rounded-lg", "transition-colors", "text-sm", "whitespace-nowrap", 3, "click"], [1, "py-8", "px-10", "text-center", "text-slate-400", "text-xs", "border-t", "border-slate-200"], [1, "flex", "items-center", "justify-between", "p-4", "rounded-lg", "border"], [1, "flex", "items-center", "gap-4"], [1, "text-slate-400"], [1, "material-symbols-outlined", "text-3xl"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "text-xs", "font-bold", "text-emerald-500", "bg-emerald-500/10", "px-2", "py-1", "rounded-full", "uppercase"], [1, "text-xs", "font-semibold", "text-slate-500", "hover:text-red-500", "transition-colors"], [1, "text-xs", "font-semibold", "text-slate-500", "hover:text-red-500", "transition-colors", 3, "click"]], template: function ProfilePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "section", 3)(4, "div", 4)(5, "h2", 5);
            i0.ɵɵtext(6, "User Preferences");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 6);
            i0.ɵɵtext(8, "Manage how information is displayed in your account.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7)(10, "form", 8);
            i0.ɵɵlistener("ngSubmit", function ProfilePage_Template_form_ngSubmit_10_listener() { return ctx.savePreferences(); });
            i0.ɵɵelementStart(11, "div", 9)(12, "label", 10)(13, "span", 11);
            i0.ɵɵtext(14, "Language");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 12)(16, "option", 13);
            i0.ɵɵtext(17, "English (US)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 14);
            i0.ɵɵtext(19, "Spanish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 15);
            i0.ɵɵtext(21, "French");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 16);
            i0.ɵɵtext(23, "German");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "label", 10)(25, "span", 11);
            i0.ɵɵtext(26, "Date Format");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "select", 17)(28, "option", 18);
            i0.ɵɵtext(29, "MM/DD/YYYY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "option", 19);
            i0.ɵɵtext(31, "DD/MM/YYYY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "option", 20);
            i0.ɵɵtext(33, "YYYY-MM-DD");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "label", 21)(35, "span", 11);
            i0.ɵɵtext(36, "Currency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "select", 22)(38, "option", 23);
            i0.ɵɵtext(39, "USD ($)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "option", 24);
            i0.ɵɵtext(41, "EUR (\u20AC)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "option", 25);
            i0.ɵɵtext(43, "GBP (\u00A3)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "option", 26);
            i0.ɵɵtext(45, "JPY (\u00A5)");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(46, "div", 27)(47, "p", 28);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "button", 29);
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(51, "section", 3)(52, "div", 4)(53, "h2", 5);
            i0.ɵɵtext(54, "Account Security");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "p", 6);
            i0.ɵɵtext(56, "Update your password and manage active sessions.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 30)(58, "div", 31)(59, "h3", 32)(60, "span", 33);
            i0.ɵɵtext(61, "lock");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(62, " Change Password ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "form", 34);
            i0.ɵɵlistener("ngSubmit", function ProfilePage_Template_form_ngSubmit_63_listener() { return ctx.savePassword(); });
            i0.ɵɵelement(64, "input", 35)(65, "input", 36)(66, "input", 37);
            i0.ɵɵconditionalCreate(67, ProfilePage_Conditional_67_Template, 2, 0, "p", 38);
            i0.ɵɵconditionalCreate(68, ProfilePage_Conditional_68_Template, 2, 0, "p", 38);
            i0.ɵɵelementStart(69, "button", 39);
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(71, "div", 31)(72, "h3", 32)(73, "span", 33);
            i0.ɵɵtext(74, "devices");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(75, " Active Sessions ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div", 40);
            i0.ɵɵrepeaterCreate(77, ProfilePage_For_78_Template, 12, 7, "div", 41, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "button", 42);
            i0.ɵɵlistener("click", function ProfilePage_Template_button_click_79_listener() { return ctx.signOutOtherSessions(); });
            i0.ɵɵtext(80, "Sign out of all other sessions");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "section")(82, "div", 4)(83, "h2", 43);
            i0.ɵɵtext(84, "Danger Zone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "p", 6);
            i0.ɵɵtext(86, "Irreversible actions related to your account.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 44)(88, "div")(89, "h3", 45);
            i0.ɵɵtext(90, "Delete Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "p", 46);
            i0.ɵɵtext(92, "Once you delete your account, there is no going back. Please be certain.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(93, "button", 47);
            i0.ɵɵlistener("click", function ProfilePage_Template_button_click_93_listener() { return ctx.deleteAccount(); });
            i0.ɵɵtext(94, "Delete my account");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(95, "footer", 48)(96, "p");
            i0.ɵɵtext(97, "\u00A9 2023 System Settings. All rights reserved.");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.preferenceForm);
            i0.ɵɵadvance(38);
            i0.ɵɵtextInterpolate(ctx.userEmail);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.savingPreferences);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.savingPreferences ? "Saving..." : "Save Preferences", " ");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("formGroup", ctx.passwordForm);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.newPassword.touched && ctx.newPassword.hasError("minlength") ? 67 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.confirmPassword.touched && ctx.passwordForm.hasError("passwordMismatch") ? 68 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.savingPassword);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.savingPassword ? "Updating..." : "Update Password", " ");
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.sessions);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilePage, [{
        type: Component,
        args: [{ selector: 'app-profile-page', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <main class=\"flex-1 overflow-y-auto\">\n    <div class=\"max-w-[800px] mx-auto py-8 px-6 lg:px-8\">\n      <section class=\"mb-12\">\n        <div class=\"mb-6\">\n          <h2 class=\"text-2xl font-bold\">User Preferences</h2>\n          <p class=\"text-slate-500 text-sm\">Manage how information is displayed in your account.</p>\n        </div>\n\n        <div class=\"space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm\">\n          <form [formGroup]=\"preferenceForm\" (ngSubmit)=\"savePreferences()\" class=\"space-y-6\">\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n              <label class=\"flex flex-col gap-2\">\n                <span class=\"text-slate-700 text-sm font-semibold\">Language</span>\n                <select formControlName=\"language\" class=\"rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-[#5048e5] focus:ring-[#5048e5]\">\n                  <option value=\"en\">English (US)</option>\n                  <option value=\"es\">Spanish</option>\n                  <option value=\"fr\">French</option>\n                  <option value=\"de\">German</option>\n                </select>\n              </label>\n\n              <label class=\"flex flex-col gap-2\">\n                <span class=\"text-slate-700 text-sm font-semibold\">Date Format</span>\n                <select formControlName=\"dateFormat\" class=\"rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-[#5048e5] focus:ring-[#5048e5]\">\n                  <option value=\"mdy\">MM/DD/YYYY</option>\n                  <option value=\"dmy\">DD/MM/YYYY</option>\n                  <option value=\"ymd\">YYYY-MM-DD</option>\n                </select>\n              </label>\n\n              <label class=\"flex flex-col gap-2 md:col-span-2\">\n                <span class=\"text-slate-700 text-sm font-semibold\">Currency</span>\n                <select formControlName=\"currency\" class=\"rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-[#5048e5] focus:ring-[#5048e5]\">\n                  <option value=\"usd\">USD ($)</option>\n                  <option value=\"eur\">EUR (\u20AC)</option>\n                  <option value=\"gbp\">GBP (\u00A3)</option>\n                  <option value=\"jpy\">JPY (\u00A5)</option>\n                </select>\n              </label>\n            </div>\n\n            <div class=\"pt-4 border-t border-slate-100 flex justify-between items-center\">\n              <p class=\"text-xs text-slate-400\">{{ userEmail }}</p>\n              <button type=\"submit\" [disabled]=\"savingPreferences\" class=\"bg-[#5048e5] hover:bg-[#4338ca] text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed\">\n                {{ savingPreferences ? 'Saving...' : 'Save Preferences' }}\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n\n      <section class=\"mb-12\">\n        <div class=\"mb-6\">\n          <h2 class=\"text-2xl font-bold\">Account Security</h2>\n          <p class=\"text-slate-500 text-sm\">Update your password and manage active sessions.</p>\n        </div>\n\n        <div class=\"space-y-8\">\n          <div class=\"bg-white p-6 rounded-xl border border-slate-200 shadow-sm\">\n            <h3 class=\"font-semibold mb-4 flex items-center gap-2\">\n              <span class=\"material-symbols-outlined text-[#5048e5]\">lock</span>\n              Change Password\n            </h3>\n\n            <form [formGroup]=\"passwordForm\" (ngSubmit)=\"savePassword()\" class=\"space-y-4 max-w-md\">\n              <input formControlName=\"currentPassword\" class=\"rounded-lg border-slate-200 bg-slate-50 focus:border-[#5048e5] focus:ring-[#5048e5] w-full\" placeholder=\"Current Password\" type=\"password\"/>\n              <input formControlName=\"newPassword\" class=\"rounded-lg border-slate-200 bg-slate-50 focus:border-[#5048e5] focus:ring-[#5048e5] w-full\" placeholder=\"New Password\" type=\"password\"/>\n              <input formControlName=\"confirmPassword\" class=\"rounded-lg border-slate-200 bg-slate-50 focus:border-[#5048e5] focus:ring-[#5048e5] w-full\" placeholder=\"Confirm New Password\" type=\"password\"/>\n\n              @if (newPassword.touched && newPassword.hasError('minlength')) {\n                <p class=\"text-xs text-red-500\">Password must be at least 8 characters.</p>\n              }\n              @if (confirmPassword.touched && passwordForm.hasError('passwordMismatch')) {\n                <p class=\"text-xs text-red-500\">Passwords do not match.</p>\n              }\n\n              <button type=\"submit\" [disabled]=\"savingPassword\" class=\"mt-2 bg-[#5048e5] hover:bg-[#4338ca] text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed\">\n                {{ savingPassword ? 'Updating...' : 'Update Password' }}\n              </button>\n            </form>\n          </div>\n\n          <div class=\"bg-white p-6 rounded-xl border border-slate-200 shadow-sm\">\n            <h3 class=\"font-semibold mb-4 flex items-center gap-2\">\n              <span class=\"material-symbols-outlined text-[#5048e5]\">devices</span>\n              Active Sessions\n            </h3>\n\n            <div class=\"space-y-4\">\n              @for (session of sessions; track session.id) {\n                <div class=\"flex items-center justify-between p-4 rounded-lg border\" [class]=\"session.current ? 'bg-slate-50 border-slate-100' : 'border-slate-100'\">\n                  <div class=\"flex items-center gap-4\">\n                    <div class=\"text-slate-400\">\n                      <span class=\"material-symbols-outlined text-3xl\">{{ session.icon }}</span>\n                    </div>\n                    <div>\n                      <p class=\"text-sm font-semibold text-slate-900\">{{ session.device }}</p>\n                      <p class=\"text-xs text-slate-500\">{{ session.location }} \u2022 {{ session.when }}</p>\n                    </div>\n                  </div>\n\n                  @if (session.current) {\n                    <span class=\"text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full uppercase\">Current</span>\n                  } @else {\n                    <button (click)=\"revokeSession(session)\" class=\"text-xs font-semibold text-slate-500 hover:text-red-500 transition-colors\">Revoke</button>\n                  }\n                </div>\n              }\n            </div>\n\n            <button (click)=\"signOutOtherSessions()\" class=\"mt-6 text-[#5048e5] hover:underline text-sm font-semibold\">Sign out of all other sessions</button>\n          </div>\n        </div>\n      </section>\n\n      <section>\n        <div class=\"mb-6\">\n          <h2 class=\"text-2xl font-bold text-red-600\">Danger Zone</h2>\n          <p class=\"text-slate-500 text-sm\">Irreversible actions related to your account.</p>\n        </div>\n\n        <div class=\"bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col md:flex-row md:items-center justify-between gap-6\">\n          <div>\n            <h3 class=\"text-red-700 font-bold\">Delete Account</h3>\n            <p class=\"text-sm text-red-600/80 max-w-md\">Once you delete your account, there is no going back. Please be certain.</p>\n          </div>\n          <button (click)=\"deleteAccount()\" class=\"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm whitespace-nowrap\">Delete my account</button>\n        </div>\n      </section>\n    </div>\n  </main>\n\n  <footer class=\"py-8 px-10 text-center text-slate-400 text-xs border-t border-slate-200\">\n    <p>\u00A9 2023 System Settings. All rights reserved.</p>\n  </footer>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/features/profile/pages/profile-page/profile-page.ts", lineNumber: 36 }); })();
