import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function LoginPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "L'email est requis.");
    i0.ɵɵelementEnd();
} }
function LoginPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "Format d'email invalide.");
    i0.ɵɵelementEnd();
} }
function LoginPage_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "Le mot de passe est requis.");
    i0.ɵɵelementEnd();
} }
function LoginPage_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "Minimum 6 caract\u00E8res.");
    i0.ɵɵelementEnd();
} }
function LoginPage_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 24);
    i0.ɵɵelement(2, "circle", 25)(3, "path", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Connexion\u2026 ");
    i0.ɵɵelementEnd();
} }
function LoginPage_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Se connecter ");
} }
export class LoginPage {
    fb = inject(FormBuilder);
    authService = inject(AuthService);
    router = inject(Router);
    loading = false;
    showPassword = false;
    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
    get email() { return this.form.controls.email; }
    get password() { return this.form.controls.password; }
    async submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        const { error } = await this.authService.signIn(this.email.value, this.password.value);
        this.loading = false;
        if (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Connexion échouée',
                text: error.message === 'Invalid login credentials'
                    ? 'Email ou mot de passe incorrect.'
                    : error.message,
                confirmButtonColor: '#5048e5',
            });
            return;
        }
        await this.router.navigate(['/app/dashboard']);
    }
    static ɵfac = function LoginPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginPage, selectors: [["app-login-page"]], decls: 38, vars: 15, consts: [[1, "min-h-screen", "bg-[#f6f6f8]", "flex", "items-center", "justify-center", "px-4"], [1, "w-full", "max-w-sm"], [1, "mb-8", "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-12", "h-12", "rounded-xl", "bg-[#5048e5]", "mb-4"], [1, "material-symbols-outlined", "text-white", "text-2xl"], [1, "text-2xl", "font-bold", "text-zinc-900", "tracking-tight"], [1, "mt-1", "text-sm", "text-zinc-500"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-zinc-200", "p-8"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-5"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "required", "", "placeholder", "vous@exemple.com", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]", "disabled:bg-zinc-50", "disabled:text-zinc-400"], [1, "mt-1.5", "text-xs", "text-red-500"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-zinc-700", "mb-1.5"], [1, "relative"], ["id", "password", "formControlName", "password", "autocomplete", "current-password", "required", "", "minlength", "6", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "rounded-lg", "border", "px-3.5", "py-2.5", "pr-10", "text-sm", "text-zinc-900", "placeholder-zinc-400", "outline-none", "transition", "focus:ring-2", "focus:ring-[#5048e5]/30", "focus:border-[#5048e5]", "disabled:bg-zinc-50", "disabled:text-zinc-400", 3, "type"], ["type", "button", "tabindex", "-1", 1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "text-zinc-400", "hover:text-zinc-600", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], [1, "mb-6", "flex", "justify-end"], ["routerLink", "/forgot-password", 1, "text-xs", "text-[#5048e5]", "hover:underline", "font-medium"], ["type", "submit", 1, "w-full", "rounded-lg", "bg-[#5048e5]", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-[#4338ca]", "active:scale-[0.98]", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "mt-6", "text-center", "text-sm", "text-zinc-500"], ["routerLink", "/signup", 1, "text-[#5048e5]", "font-medium", "hover:underline"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-4", "w-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8z", 1, "opacity-75"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "account_balance_wallet");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1", 5);
            i0.ɵɵtext(7, "FinanceTracker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 6);
            i0.ɵɵtext(9, "Connectez-vous \u00E0 votre espace");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 7)(11, "form", 8);
            i0.ɵɵlistener("ngSubmit", function LoginPage_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(12, "div", 9)(13, "label", 10);
            i0.ɵɵtext(14, " Adresse email ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 11);
            i0.ɵɵconditionalCreate(16, LoginPage_Conditional_16_Template, 2, 0, "p", 12)(17, LoginPage_Conditional_17_Template, 2, 0, "p", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 9)(19, "label", 13);
            i0.ɵɵtext(20, " Mot de passe ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 14);
            i0.ɵɵelement(22, "input", 15);
            i0.ɵɵelementStart(23, "button", 16);
            i0.ɵɵlistener("click", function LoginPage_Template_button_click_23_listener() { return ctx.showPassword = !ctx.showPassword; });
            i0.ɵɵelementStart(24, "span", 17);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(26, LoginPage_Conditional_26_Template, 2, 0, "p", 12)(27, LoginPage_Conditional_27_Template, 2, 0, "p", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 18)(29, "a", 19);
            i0.ɵɵtext(30, " Mot de passe oubli\u00E9 ? ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "button", 20);
            i0.ɵɵconditionalCreate(32, LoginPage_Conditional_32_Template, 5, 0, "span", 21)(33, LoginPage_Conditional_33_Template, 1, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "p", 22);
            i0.ɵɵtext(35, " Pas encore de compte ? ");
            i0.ɵɵelementStart(36, "a", 23);
            i0.ɵɵtext(37, " Cr\u00E9er un compte ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("border-red-400", ctx.email.invalid && ctx.email.touched)("border-zinc-300", !(ctx.email.invalid && ctx.email.touched));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.email.touched && ctx.email.hasError("required") ? 16 : ctx.email.touched && ctx.email.hasError("email") ? 17 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("border-red-400", ctx.password.invalid && ctx.password.touched)("border-zinc-300", !(ctx.password.invalid && ctx.password.touched));
            i0.ɵɵproperty("type", ctx.showPassword ? "text" : "password");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.showPassword ? "visibility_off" : "visibility", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.password.touched && ctx.password.hasError("required") ? 26 : ctx.password.touched && ctx.password.hasError("minlength") ? 27 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 32 : 33);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginPage, [{
        type: Component,
        args: [{ selector: 'app-login-page', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"min-h-screen bg-[#f6f6f8] flex items-center justify-center px-4\">\n  <div class=\"w-full max-w-sm\">\n\n    <!-- Logo / Brand -->\n    <div class=\"mb-8 text-center\">\n      <div class=\"inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5048e5] mb-4\">\n        <span class=\"material-symbols-outlined text-white text-2xl\">account_balance_wallet</span>\n      </div>\n      <h1 class=\"text-2xl font-bold text-zinc-900 tracking-tight\">FinanceTracker</h1>\n      <p class=\"mt-1 text-sm text-zinc-500\">Connectez-vous \u00E0 votre espace</p>\n    </div>\n\n    <!-- Card -->\n    <div class=\"bg-white rounded-2xl shadow-sm border border-zinc-200 p-8\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n\n        <!-- Email -->\n        <div class=\"mb-5\">\n          <label for=\"email\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">\n            Adresse email\n          </label>\n          <input\n            id=\"email\"\n            type=\"email\"\n            formControlName=\"email\"\n            autocomplete=\"email\"\n            required\n            placeholder=\"vous@exemple.com\"\n            class=\"w-full rounded-lg border px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition\n              focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\n              disabled:bg-zinc-50 disabled:text-zinc-400\"\n            [class.border-red-400]=\"email.invalid && email.touched\"\n            [class.border-zinc-300]=\"!(email.invalid && email.touched)\"\n          />\n          @if (email.touched && email.hasError('required')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">L'email est requis.</p>\n          } @else if (email.touched && email.hasError('email')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">Format d'email invalide.</p>\n          }\n        </div>\n\n        <!-- Password -->\n        <div class=\"mb-5\">\n          <label for=\"password\" class=\"block text-sm font-medium text-zinc-700 mb-1.5\">\n            Mot de passe\n          </label>\n          <div class=\"relative\">\n            <input\n              id=\"password\"\n              [type]=\"showPassword ? 'text' : 'password'\"\n              formControlName=\"password\"\n              autocomplete=\"current-password\"\n              required\n              minlength=\"6\"\n              placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\"\n              class=\"w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition\n                focus:ring-2 focus:ring-[#5048e5]/30 focus:border-[#5048e5]\n                disabled:bg-zinc-50 disabled:text-zinc-400\"\n              [class.border-red-400]=\"password.invalid && password.touched\"\n              [class.border-zinc-300]=\"!(password.invalid && password.touched)\"\n            />\n            <button\n              type=\"button\"\n              (click)=\"showPassword = !showPassword\"\n              class=\"absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-zinc-600 transition\"\n              tabindex=\"-1\"\n            >\n              <span class=\"material-symbols-outlined text-[18px]\">\n                {{ showPassword ? 'visibility_off' : 'visibility' }}\n              </span>\n            </button>\n          </div>\n          @if (password.touched && password.hasError('required')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">Le mot de passe est requis.</p>\n          } @else if (password.touched && password.hasError('minlength')) {\n            <p class=\"mt-1.5 text-xs text-red-500\">Minimum 6 caract\u00E8res.</p>\n          }\n        </div>\n\n        <!-- Forgot password -->\n        <div class=\"mb-6 flex justify-end\">\n          <a routerLink=\"/forgot-password\" class=\"text-xs text-[#5048e5] hover:underline font-medium\">\n            Mot de passe oubli\u00E9 ?\n          </a>\n        </div>\n\n        <!-- Submit -->\n        <button\n          type=\"submit\"\n          [disabled]=\"loading\"\n          class=\"w-full rounded-lg bg-[#5048e5] px-4 py-2.5 text-sm font-semibold text-white\n            hover:bg-[#4338ca] active:scale-[0.98] transition-all\n            disabled:opacity-60 disabled:cursor-not-allowed\"\n        >\n          @if (loading) {\n            <span class=\"flex items-center justify-center gap-2\">\n              <svg class=\"h-4 w-4 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n                <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8z\"/>\n              </svg>\n              Connexion\u2026\n            </span>\n          } @else {\n            Se connecter\n          }\n        </button>\n\n      </form>\n    </div>\n\n    <!-- Sign up link -->\n    <p class=\"mt-6 text-center text-sm text-zinc-500\">\n      Pas encore de compte ?\n      <a routerLink=\"/signup\" class=\"text-[#5048e5] font-medium hover:underline\">\n        Cr\u00E9er un compte\n      </a>\n    </p>\n\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/features/auth/pages/login-page/login-page.ts", lineNumber: 15 }); })();
