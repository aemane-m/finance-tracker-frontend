import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function CategoriesPage_Conditional_29_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
} }
function CategoriesPage_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵrepeaterCreate(1, CategoriesPage_Conditional_29_For_2_Template, 1, 0, "div", 19, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function CategoriesPage_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "span", 20);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 22);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_30_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadCategories()); });
    i0.ɵɵtext(6, " Retry ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function CategoriesPage_Conditional_31_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 23)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 32)(6, "button", 33);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_31_For_2_Template_button_click_6_listener($event) { const category_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.openEdit(category_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(7, "span", 34);
    i0.ɵɵtext(8, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 35);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_31_For_2_Template_button_click_9_listener($event) { const category_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.deleteCategory(category_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(10, "span", 34);
    i0.ɵɵtext(11, "more_vert");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "h3", 36);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 37);
    i0.ɵɵelement(15, "span", 38);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", (category_r5.color || "#4F46E5") + "1A")("color", category_r5.color || "#4F46E5");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.icon || "category");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", category_r5.isDefault);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", category_r5.color || "#4F46E5");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.categoryHint(category_r5), " ");
} }
function CategoriesPage_Conditional_31_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "h3", 39);
    i0.ɵɵtext(2, "Income Categories");
    i0.ɵɵelementEnd()();
} }
function CategoriesPage_Conditional_31_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "span", 40);
    i0.ɵɵtext(2, "category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 41);
    i0.ɵɵtext(4, "No categories in this section.");
    i0.ɵɵelementEnd()();
} }
function CategoriesPage_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵrepeaterCreate(1, CategoriesPage_Conditional_31_For_2_Template, 17, 10, "article", 23, i0.ɵɵcomponentInstance().trackById, true);
    i0.ɵɵelementStart(3, "button", 24);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_31_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵelementStart(4, "span", 25);
    i0.ɵɵtext(5, "add_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 26);
    i0.ɵɵtext(7, "New Category");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(8, CategoriesPage_Conditional_31_Conditional_8_Template, 3, 0, "div", 27);
    i0.ɵɵconditionalCreate(9, CategoriesPage_Conditional_31_Conditional_9_Template, 5, 0, "div", 28);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.filteredCategories);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.activeTab === "income" ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.filteredCategories.length === 0 ? 9 : -1);
} }
function CategoriesPage_Conditional_32_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Name is required (min 2 chars).");
    i0.ɵɵelementEnd();
} }
function CategoriesPage_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_32_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelForm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 43)(2, "div", 44)(3, "h4", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 46);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_32_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelForm()); });
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "form", 47);
    i0.ɵɵlistener("ngSubmit", function CategoriesPage_Conditional_32_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(8, "div")(9, "label", 48);
    i0.ɵɵtext(10, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 49);
    i0.ɵɵconditionalCreate(12, CategoriesPage_Conditional_32_Conditional_12_Template, 2, 0, "p", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div")(14, "label", 48);
    i0.ɵɵtext(15, "Icon");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div")(18, "label", 48);
    i0.ɵɵtext(19, "Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 53)(22, "button", 54);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 55);
    i0.ɵɵlistener("click", function CategoriesPage_Conditional_32_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelForm()); });
    i0.ɵɵtext(25, " Cancel ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.editingCategoryId === null ? "New Category" : "Edit Category");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.name.touched && ctx_r1.name.invalid ? 12 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
} }
export class CategoriesPage {
    categoriesService = inject(CategoriesService);
    fb = inject(FormBuilder);
    loading = true;
    saving = false;
    error = '';
    query = '';
    activeTab = 'expenses';
    categories = [];
    showForm = false;
    editingCategoryId = null;
    form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
        icon: ['category'],
        color: ['#5048e5'],
    });
    get name() {
        return this.form.controls.name;
    }
    get filteredCategories() {
        const q = this.query.trim().toLowerCase();
        const source = this.activeTab === 'expenses' ? this.expenseCategories : this.incomeCategories;
        if (!q)
            return source;
        return source.filter((c) => c.name.toLowerCase().includes(q));
    }
    get expenseCategories() {
        return this.categories.filter((c) => !this.isIncomeCategory(c));
    }
    get incomeCategories() {
        return this.categories.filter((c) => this.isIncomeCategory(c));
    }
    ngOnInit() {
        void this.loadCategories();
    }
    async loadCategories() {
        this.loading = true;
        this.error = '';
        try {
            this.categories = await firstValueFrom(this.categoriesService.getAll());
        }
        catch {
            this.error = 'Impossible de charger les categories.';
        }
        finally {
            this.loading = false;
        }
    }
    openCreate() {
        this.showForm = true;
        this.editingCategoryId = null;
        this.form.reset({
            name: '',
            icon: 'category',
            color: '#5048e5',
        }, { emitEvent: false });
    }
    openEdit(category) {
        this.showForm = true;
        this.editingCategoryId = category.id;
        this.form.reset({
            name: category.name,
            icon: category.icon ?? 'category',
            color: category.color ?? '#5048e5',
        }, { emitEvent: false });
    }
    cancelForm() {
        this.showForm = false;
        this.editingCategoryId = null;
    }
    async submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = {
            name: this.name.value.trim(),
            icon: this.form.controls.icon.value?.trim() || null,
            color: this.form.controls.color.value?.trim() || null,
        };
        this.saving = true;
        try {
            if (this.editingCategoryId === null) {
                await firstValueFrom(this.categoriesService.create(payload));
                await Swal.fire({
                    icon: 'success',
                    title: 'Categorie creee',
                    timer: 1200,
                    showConfirmButton: false,
                });
            }
            else {
                await firstValueFrom(this.categoriesService.update(this.editingCategoryId, payload));
                await Swal.fire({
                    icon: 'success',
                    title: 'Categorie mise a jour',
                    timer: 1200,
                    showConfirmButton: false,
                });
            }
            this.cancelForm();
            await this.loadCategories();
        }
        catch {
            await Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Operation impossible pour le moment.',
                confirmButtonColor: '#5048e5',
            });
        }
        finally {
            this.saving = false;
        }
    }
    async deleteCategory(category) {
        if (category.isDefault) {
            await Swal.fire({
                icon: 'warning',
                title: 'Categorie protegee',
                text: 'Une categorie par defaut ne peut pas etre supprimee.',
                confirmButtonColor: '#5048e5',
            });
            return;
        }
        const result = await Swal.fire({
            icon: 'warning',
            title: 'Supprimer cette categorie ?',
            text: `"${category.name}" sera supprimee de votre liste.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
        });
        if (!result.isConfirmed)
            return;
        try {
            await firstValueFrom(this.categoriesService.delete(category.id));
            await Swal.fire({
                icon: 'success',
                title: 'Categorie supprimee',
                timer: 1200,
                showConfirmButton: false,
            });
            await this.loadCategories();
        }
        catch {
            await Swal.fire({
                icon: 'error',
                title: 'Suppression impossible',
                text: 'Cette categorie est peut-etre encore utilisee par des transactions.',
                confirmButtonColor: '#5048e5',
            });
        }
    }
    trackById(_, item) {
        return item.id;
    }
    isIncomeCategory(category) {
        const label = category.name.toLowerCase();
        return [
            'income',
            'revenu',
            'salaire',
            'salary',
            'bonus',
            'freelance',
            'gift',
            'cadeau',
            'dividend',
            'rent'
        ].some((keyword) => label.includes(keyword));
    }
    categoryHint(category) {
        const icon = (category.icon ?? '').toLowerCase();
        const name = category.name.toLowerCase();
        if (icon.includes('home') || name.includes('logement'))
            return 'Fixed Monthly';
        if (icon.includes('restaurant') || name.includes('food') || name.includes('alimentation'))
            return 'Variable';
        if (icon.includes('directions_car') || name.includes('transport'))
            return 'Commuting';
        if (icon.includes('favorite') || name.includes('sante'))
            return 'Essential';
        if (icon.includes('work') || name.includes('salary') || name.includes('salaire'))
            return 'Primary';
        if (icon.includes('laptop') || name.includes('freelance'))
            return 'Side Hustle';
        if (icon.includes('card_giftcard') || name.includes('gift') || name.includes('cadeau'))
            return 'Occasional';
        return this.activeTab === 'income' ? 'Income Stream' : 'Expense Group';
    }
    static ɵfac = function CategoriesPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CategoriesPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CategoriesPage, selectors: [["app-categories-page"]], decls: 33, vars: 9, consts: [[1, "min-h-screen", "bg-[#FAFAFA]", "text-[#111827]"], [1, "px-6", "lg:px-8", "py-6"], [1, "max-w-6xl", "mx-auto"], [1, "flex", "flex-wrap", "justify-between", "items-end", "gap-4", "mb-8"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "text-[#6B7280]", "mt-1"], [1, "flex", "items-center", "gap-2", "bg-[#5048e5]", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition-all", "shadow-sm", "hover:bg-[#4338ca]", 3, "click"], [1, "material-symbols-outlined", "text-xl"], [1, "text-sm"], [1, "mb-5"], [1, "relative"], [1, "material-symbols-outlined", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-[18px]"], ["type", "text", "placeholder", "Search categories...", 1, "w-full", "rounded-lg", "border", "border-[#E5E7EB]", "bg-white", "pl-10", "pr-3", "py-2.5", "text-sm", "text-slate-800", "focus:outline-none", "focus:ring-2", "focus:ring-[#4F46E5]/20", "focus:border-[#4F46E5]", 3, "ngModelChange", "ngModel"], [1, "border-b", "border-[#E5E7EB]", "mb-8"], [1, "flex", "gap-8"], [1, "pb-4", "text-sm", "border-b-2", "flex", "items-center", "gap-2", "transition-colors", 3, "click", "ngClass"], [1, "text-[10px]", "px-1.5", "py-0.5", "rounded-full", 3, "ngClass"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-[#E5E7EB]", "p-10", "text-center"], [1, "h-40", "rounded-xl", "bg-slate-200", "animate-pulse"], [1, "material-symbols-outlined", "text-5xl", "text-red-300", "mb-3"], [1, "text-slate-600", "font-medium"], [1, "mt-4", "text-sm", "text-[#4F46E5]", "hover:underline", "font-medium", 3, "click"], [1, "bg-white", "border", "border-[#E5E7EB]", "p-5", "rounded-xl", "hover:shadow-md", "transition-shadow", "group", "cursor-pointer"], [1, "border-2", "border-dashed", "border-[#E5E7EB]", "p-5", "rounded-xl", "hover:border-[#4F46E5]/50", "hover:bg-[#4F46E5]/5", "transition-all", "flex", "flex-col", "items-center", "justify-center", "gap-2", "cursor-pointer", "group", "text-[#6B7280]", "hover:text-[#4F46E5]", 3, "click"], [1, "material-symbols-outlined", "text-3xl"], [1, "text-sm", "font-semibold"], [1, "mt-12"], [1, "mt-8", "bg-white", "rounded-xl", "border", "border-[#E5E7EB]", "p-10", "text-center"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "w-10", "h-10", "rounded-lg", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined"], [1, "flex", "items-center"], ["aria-label", "Edit category", 1, "p-1", "rounded-md", "text-slate-300", "group-hover:text-slate-500", "hover:bg-slate-100", "transition-colors", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], ["aria-label", "Delete category", 1, "p-1", "rounded-md", "text-slate-300", "group-hover:text-slate-500", "hover:bg-slate-100", "transition-colors", "disabled:opacity-40", 3, "click", "disabled"], [1, "font-bold", "text-[#111827]", "truncate"], [1, "text-xs", "text-[#6B7280]", "mt-1", "flex", "items-center", "gap-1.5"], [1, "w-2", "h-2", "rounded-full"], [1, "text-lg", "font-bold", "text-[#111827]", "mb-6"], [1, "material-symbols-outlined", "text-4xl", "text-slate-300", "mb-2"], [1, "text-sm", "text-[#6B7280]"], [1, "fixed", "inset-0", "bg-black/20", "z-20", 3, "click"], [1, "fixed", "bottom-8", "right-8", "w-[340px]", "bg-white", "border", "border-[#E5E7EB]", "shadow-2xl", "rounded-xl", "p-6", "z-30"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "font-bold", "text-[#111827]"], [1, "material-symbols-outlined", "text-[#6B7280]", "cursor-pointer", "text-sm", 3, "click"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-bold", "text-[#6B7280]", "uppercase", "mb-1"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Subscriptions", 1, "w-full", "border", "border-[#E5E7EB]", "rounded-lg", "focus:ring-[#4F46E5]", "focus:border-[#4F46E5]", "text-sm"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "text", "formControlName", "icon", "placeholder", "e.g. category", 1, "w-full", "border", "border-[#E5E7EB]", "rounded-lg", "focus:ring-[#4F46E5]", "focus:border-[#4F46E5]", "text-sm"], ["type", "color", "formControlName", "color", 1, "w-full", "h-10", "border", "border-[#E5E7EB]", "rounded-lg"], [1, "flex", "gap-2", "pt-1"], ["type", "submit", 1, "flex-1", "bg-white", "border", "border-[#E5E7EB]", "text-[#111827]", "text-sm", "font-semibold", "py-2", "rounded-lg", "hover:bg-slate-50", "disabled:opacity-60", 3, "disabled"], ["type", "button", 1, "flex-1", "bg-slate-50", "text-[#111827]", "text-sm", "font-semibold", "py-2", "rounded-lg", "border", "border-[#E5E7EB]", 3, "click"]], template: function CategoriesPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "header", 3)(4, "div")(5, "h2", 4);
            i0.ɵɵtext(6, "Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, "Manage and organize your spending and income groups");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 6);
            i0.ɵɵlistener("click", function CategoriesPage_Template_button_click_9_listener() { return ctx.openCreate(); });
            i0.ɵɵelementStart(10, "span", 7);
            i0.ɵɵtext(11, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span", 8);
            i0.ɵɵtext(13, "Add Category");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 9)(15, "div", 10)(16, "span", 11);
            i0.ɵɵtext(17, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function CategoriesPage_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.query, $event) || (ctx.query = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 13)(20, "div", 14)(21, "button", 15);
            i0.ɵɵlistener("click", function CategoriesPage_Template_button_click_21_listener() { return ctx.activeTab = "expenses"; });
            i0.ɵɵtext(22, " Expenses ");
            i0.ɵɵelementStart(23, "span", 16);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "button", 15);
            i0.ɵɵlistener("click", function CategoriesPage_Template_button_click_25_listener() { return ctx.activeTab = "income"; });
            i0.ɵɵtext(26, " Income ");
            i0.ɵɵelementStart(27, "span", 16);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(29, CategoriesPage_Conditional_29_Template, 3, 1, "div", 17)(30, CategoriesPage_Conditional_30_Template, 7, 1, "div", 18)(31, CategoriesPage_Conditional_31_Template, 10, 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(32, CategoriesPage_Conditional_32_Template, 26, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(18);
            i0.ɵɵtwoWayProperty("ngModel", ctx.query);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.activeTab === "expenses" ? "font-bold border-[#4F46E5] text-[#4F46E5]" : "border-transparent font-medium text-[#6B7280]");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.activeTab === "expenses" ? "bg-[#4F46E5]/10 text-[#4F46E5]" : "bg-slate-100 text-[#6B7280]");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.expenseCategories.length, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.activeTab === "income" ? "font-bold border-[#4F46E5] text-[#4F46E5]" : "border-transparent font-medium text-[#6B7280]");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.activeTab === "income" ? "bg-[#4F46E5]/10 text-[#4F46E5]" : "bg-slate-100 text-[#6B7280]");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.incomeCategories.length, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading ? 29 : ctx.error ? 30 : 31);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.showForm ? 32 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName], styles: [".material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriesPage, [{
        type: Component,
        args: [{ selector: 'app-categories-page', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: "<div class=\"min-h-screen bg-[#FAFAFA] text-[#111827]\">\n  <main class=\"px-6 lg:px-8 py-6\">\n    <div class=\"max-w-6xl mx-auto\">\n      <header class=\"flex flex-wrap justify-between items-end gap-4 mb-8\">\n        <div>\n          <h2 class=\"text-3xl font-extrabold tracking-tight\">Categories</h2>\n          <p class=\"text-[#6B7280] mt-1\">Manage and organize your spending and income groups</p>\n        </div>\n        <button\n          (click)=\"openCreate()\"\n          class=\"flex items-center gap-2 bg-[#5048e5] text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-sm hover:bg-[#4338ca]\"\n        >\n          <span class=\"material-symbols-outlined text-xl\">add</span>\n          <span class=\"text-sm\">Add Category</span>\n        </button>\n      </header>\n\n      <div class=\"mb-5\">\n        <div class=\"relative\">\n          <span class=\"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]\">search</span>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"query\"\n            placeholder=\"Search categories...\"\n            class=\"w-full rounded-lg border border-[#E5E7EB] bg-white pl-10 pr-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]\"\n          />\n        </div>\n      </div>\n\n      <div class=\"border-b border-[#E5E7EB] mb-8\">\n        <div class=\"flex gap-8\">\n          <button\n            (click)=\"activeTab = 'expenses'\"\n            class=\"pb-4 text-sm border-b-2 flex items-center gap-2 transition-colors\"\n            [ngClass]=\"activeTab === 'expenses'\n              ? 'font-bold border-[#4F46E5] text-[#4F46E5]'\n              : 'border-transparent font-medium text-[#6B7280]'\"\n          >\n            Expenses\n            <span\n              class=\"text-[10px] px-1.5 py-0.5 rounded-full\"\n              [ngClass]=\"activeTab === 'expenses'\n                ? 'bg-[#4F46E5]/10 text-[#4F46E5]'\n                : 'bg-slate-100 text-[#6B7280]'\"\n            >\n              {{ expenseCategories.length }}\n            </span>\n          </button>\n\n          <button\n            (click)=\"activeTab = 'income'\"\n            class=\"pb-4 text-sm border-b-2 flex items-center gap-2 transition-colors\"\n            [ngClass]=\"activeTab === 'income'\n              ? 'font-bold border-[#4F46E5] text-[#4F46E5]'\n              : 'border-transparent font-medium text-[#6B7280]'\"\n          >\n            Income\n            <span\n              class=\"text-[10px] px-1.5 py-0.5 rounded-full\"\n              [ngClass]=\"activeTab === 'income'\n                ? 'bg-[#4F46E5]/10 text-[#4F46E5]'\n                : 'bg-slate-100 text-[#6B7280]'\"\n            >\n              {{ incomeCategories.length }}\n            </span>\n          </button>\n        </div>\n      </div>\n\n      @if (loading) {\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4\">\n          @for (i of [1,2,3,4,5,6,7,8]; track i) {\n            <div class=\"h-40 rounded-xl bg-slate-200 animate-pulse\"></div>\n          }\n        </div>\n      } @else if (error) {\n        <div class=\"bg-white rounded-xl border border-[#E5E7EB] p-10 text-center\">\n          <span class=\"material-symbols-outlined text-5xl text-red-300 mb-3\">error_outline</span>\n          <p class=\"text-slate-600 font-medium\">{{ error }}</p>\n          <button (click)=\"loadCategories()\" class=\"mt-4 text-sm text-[#4F46E5] hover:underline font-medium\">\n            Retry\n          </button>\n        </div>\n      } @else {\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4\">\n          @for (category of filteredCategories; track trackById($index, category)) {\n            <article class=\"bg-white border border-[#E5E7EB] p-5 rounded-xl hover:shadow-md transition-shadow group cursor-pointer\">\n              <div class=\"flex justify-between items-start mb-4\">\n                <div\n                  class=\"w-10 h-10 rounded-lg flex items-center justify-center\"\n                  [style.background-color]=\"(category.color || '#4F46E5') + '1A'\"\n                  [style.color]=\"category.color || '#4F46E5'\"\n                >\n                  <span class=\"material-symbols-outlined\">{{ category.icon || 'category' }}</span>\n                </div>\n\n                <div class=\"flex items-center\">\n                  <button\n                    (click)=\"openEdit(category); $event.stopPropagation()\"\n                    class=\"p-1 rounded-md text-slate-300 group-hover:text-slate-500 hover:bg-slate-100 transition-colors\"\n                    aria-label=\"Edit category\"\n                  >\n                    <span class=\"material-symbols-outlined text-[18px]\">edit</span>\n                  </button>\n                  <button\n                    (click)=\"deleteCategory(category); $event.stopPropagation()\"\n                    [disabled]=\"category.isDefault\"\n                    class=\"p-1 rounded-md text-slate-300 group-hover:text-slate-500 hover:bg-slate-100 transition-colors disabled:opacity-40\"\n                    aria-label=\"Delete category\"\n                  >\n                    <span class=\"material-symbols-outlined text-[18px]\">more_vert</span>\n                  </button>\n                </div>\n              </div>\n\n              <h3 class=\"font-bold text-[#111827] truncate\">{{ category.name }}</h3>\n              <p class=\"text-xs text-[#6B7280] mt-1 flex items-center gap-1.5\">\n                <span class=\"w-2 h-2 rounded-full\" [style.background-color]=\"category.color || '#4F46E5'\"></span>\n                {{ categoryHint(category) }}\n              </p>\n            </article>\n          }\n\n          <button\n            (click)=\"openCreate()\"\n            class=\"border-2 border-dashed border-[#E5E7EB] p-5 rounded-xl hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/5 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group text-[#6B7280] hover:text-[#4F46E5]\"\n          >\n            <span class=\"material-symbols-outlined text-3xl\">add_circle</span>\n            <span class=\"text-sm font-semibold\">New Category</span>\n          </button>\n        </div>\n\n        @if (activeTab === 'income') {\n          <div class=\"mt-12\">\n            <h3 class=\"text-lg font-bold text-[#111827] mb-6\">Income Categories</h3>\n          </div>\n        }\n\n        @if (filteredCategories.length === 0) {\n          <div class=\"mt-8 bg-white rounded-xl border border-[#E5E7EB] p-10 text-center\">\n            <span class=\"material-symbols-outlined text-4xl text-slate-300 mb-2\">category</span>\n            <p class=\"text-sm text-[#6B7280]\">No categories in this section.</p>\n          </div>\n        }\n      }\n    </div>\n  </main>\n\n  @if (showForm) {\n    <div class=\"fixed inset-0 bg-black/20 z-20\" (click)=\"cancelForm()\"></div>\n    <section class=\"fixed bottom-8 right-8 w-[340px] bg-white border border-[#E5E7EB] shadow-2xl rounded-xl p-6 z-30\">\n      <div class=\"flex justify-between items-center mb-4\">\n        <h4 class=\"font-bold text-[#111827]\">{{ editingCategoryId === null ? 'New Category' : 'Edit Category' }}</h4>\n        <button (click)=\"cancelForm()\" class=\"material-symbols-outlined text-[#6B7280] cursor-pointer text-sm\">close</button>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" class=\"space-y-4\">\n        <div>\n          <label class=\"block text-xs font-bold text-[#6B7280] uppercase mb-1\">Name</label>\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            placeholder=\"e.g. Subscriptions\"\n            class=\"w-full border border-[#E5E7EB] rounded-lg focus:ring-[#4F46E5] focus:border-[#4F46E5] text-sm\"\n          />\n          @if (name.touched && name.invalid) {\n            <p class=\"mt-1 text-xs text-red-500\">Name is required (min 2 chars).</p>\n          }\n        </div>\n\n        <div>\n          <label class=\"block text-xs font-bold text-[#6B7280] uppercase mb-1\">Icon</label>\n          <input\n            type=\"text\"\n            formControlName=\"icon\"\n            placeholder=\"e.g. category\"\n            class=\"w-full border border-[#E5E7EB] rounded-lg focus:ring-[#4F46E5] focus:border-[#4F46E5] text-sm\"\n          />\n        </div>\n\n        <div>\n          <label class=\"block text-xs font-bold text-[#6B7280] uppercase mb-1\">Color</label>\n          <input type=\"color\" formControlName=\"color\" class=\"w-full h-10 border border-[#E5E7EB] rounded-lg\" />\n        </div>\n\n        <div class=\"flex gap-2 pt-1\">\n          <button\n            type=\"submit\"\n            [disabled]=\"saving\"\n            class=\"flex-1 bg-white border border-[#E5E7EB] text-[#111827] text-sm font-semibold py-2 rounded-lg hover:bg-slate-50 disabled:opacity-60\"\n          >\n            {{ saving ? 'Saving...' : 'Save' }}\n          </button>\n          <button\n            type=\"button\"\n            (click)=\"cancelForm()\"\n            class=\"flex-1 bg-slate-50 text-[#111827] text-sm font-semibold py-2 rounded-lg border border-[#E5E7EB]\"\n          >\n            Cancel\n          </button>\n        </div>\n      </form>\n    </section>\n  }\n</div>\n", styles: [".material-symbols-outlined {\n  font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CategoriesPage, { className: "CategoriesPage", filePath: "src/app/features/categories/pages/categories-page/categories-page.ts", lineNumber: 17 }); })();
