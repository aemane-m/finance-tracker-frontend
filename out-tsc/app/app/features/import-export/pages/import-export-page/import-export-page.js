import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ImportExportService, } from '../../services/import-export.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = ["fileInput"];
const _forTrack0 = ($index, $item) => $item.filename + $item.date;
const _forTrack1 = ($index, $item) => $item.value;
function ImportExportPage_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵlistener("dragover", function ImportExportPage_Conditional_8_Template_div_dragover_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDragOver($event)); })("dragleave", function ImportExportPage_Conditional_8_Template_div_dragleave_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDragLeave()); })("drop", function ImportExportPage_Conditional_8_Template_div_drop_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDrop($event)); });
    i0.ɵɵelementStart(1, "div", 37)(2, "span", 38);
    i0.ɵɵtext(3, "upload_file");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h3", 39);
    i0.ɵɵtext(5, "Upload CSV File");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 40);
    i0.ɵɵtext(7, "Drag and drop your file here, or click to browse from your computer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 41)(9, "button", 42);
    i0.ɵɵlistener("click", function ImportExportPage_Conditional_8_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openFilePicker()); });
    i0.ɵɵtext(10, "Select File");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 43);
    i0.ɵɵtext(12, "Use Template");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 44);
    i0.ɵɵtext(14, "Max file size: 50MB");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("border-slate-300", !ctx_r2.isDragging)("border-[#5048e5]/50", ctx_r2.isDragging)("bg-[#5048e5]/5", ctx_r2.isDragging);
} }
function ImportExportPage_Conditional_9_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵlistener("click", function ImportExportPage_Conditional_9_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.clearFile()); });
    i0.ɵɵelementStart(1, "span", 55);
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function ImportExportPage_Conditional_9_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "button", 56);
    i0.ɵɵlistener("click", function ImportExportPage_Conditional_9_Conditional_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.uploadFile()); });
    i0.ɵɵelementStart(2, "span", 55);
    i0.ɵɵtext(3, "upload");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Import ");
    i0.ɵɵelementEnd()();
} }
function ImportExportPage_Conditional_9_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 57);
    i0.ɵɵelement(2, "circle", 58)(3, "path", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Importing... ");
    i0.ɵɵelementEnd();
} }
function ImportExportPage_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 45)(2, "div", 46)(3, "span", 47);
    i0.ɵɵtext(4, "description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 48)(6, "p", 49);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 50);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, ImportExportPage_Conditional_9_Conditional_10_Template, 3, 0, "button", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, ImportExportPage_Conditional_9_Conditional_11_Template, 5, 0, "div", 52);
    i0.ɵɵconditionalCreate(12, ImportExportPage_Conditional_9_Conditional_12_Template, 5, 0, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.selectedFile.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatSize(ctx_r2.selectedFile.size));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.importStatus !== "uploading" ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.importStatus === "idle" ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.importStatus === "uploading" ? 12 : -1);
} }
function ImportExportPage_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "span", 60);
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "p", 61);
    i0.ɵɵtext(5, "Import completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 62)(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " records imported");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r2.importResult.imported);
} }
function ImportExportPage_For_32_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1, "Completed");
    i0.ɵɵelementEnd();
} }
function ImportExportPage_For_32_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1, "Processing");
    i0.ɵɵelementEnd();
} }
function ImportExportPage_For_32_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵtext(1, "Failed");
    i0.ɵɵelementEnd();
} }
function ImportExportPage_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 18)(1, "td", 63)(2, "div", 64)(3, "span", 65);
    i0.ɵɵtext(4, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 66);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td", 67);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 67);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 63);
    i0.ɵɵconditionalCreate(13, ImportExportPage_For_32_Conditional_13_Template, 2, 0, "span", 68)(14, ImportExportPage_For_32_Conditional_14_Template, 2, 0, "span", 69)(15, ImportExportPage_For_32_Conditional_15_Template, 2, 0, "span", 70);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(entry_r6.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r6.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 4, (entry_r6.result == null ? null : entry_r6.result.imported) ?? 0));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(entry_r6.status === "completed" ? 13 : entry_r6.status === "processing" ? 14 : 15);
} }
function ImportExportPage_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r7.label);
} }
const DEFAULT_HISTORY = [
    {
        filename: 'customers_q4_final.csv',
        date: 'Oct 24, 2023',
        result: { imported: 12402, skipped: 0, errors: [] },
        status: 'completed',
    },
    {
        filename: 'inventory_sync_01.csv',
        date: 'Oct 22, 2023',
        result: { imported: 4150, skipped: 0, errors: [] },
        status: 'completed',
    },
    {
        filename: 'lead_gen_export_oct.csv',
        date: 'Oct 20, 2023',
        result: { imported: 892, skipped: 0, errors: [] },
        status: 'processing',
    },
    {
        filename: 'temp_legacy_data.csv',
        date: 'Oct 15, 2023',
        result: { imported: 0, skipped: 0, errors: ['Invalid schema'] },
        status: 'failed',
    },
];
export class ImportExportPage {
    service = inject(ImportExportService);
    fileInputRef;
    // ── Import state ────────────────────────────────────────────────────────
    importStatus = 'idle';
    importResult = null;
    selectedFile = null;
    isDragging = false;
    history = [];
    // ── Export state ────────────────────────────────────────────────────────
    exportFormat = 'csv';
    exportRange = '30d';
    exporting = false;
    includeProfiles = true;
    includeTransactions = false;
    includeInventory = true;
    ranges = [
        { value: '30d', label: 'Last 30 Days' },
        { value: '90d', label: 'Last Quarter' },
        { value: 'ytd', label: 'Year to Date' },
        { value: 'all', label: 'All Data' },
    ];
    get displayedHistory() {
        return this.history.length > 0 ? this.history : DEFAULT_HISTORY;
    }
    // ── Drag & drop ─────────────────────────────────────────────────────────
    onDragOver(e) {
        e.preventDefault();
        this.isDragging = true;
    }
    onDragLeave() {
        this.isDragging = false;
    }
    onDrop(e) {
        e.preventDefault();
        this.isDragging = false;
        const file = e.dataTransfer?.files[0];
        if (file)
            this.setFile(file);
    }
    openFilePicker() {
        this.fileInputRef.nativeElement.click();
    }
    onFileSelected(e) {
        const input = e.target;
        const file = input.files?.[0];
        if (file)
            this.setFile(file);
        input.value = '';
    }
    setFile(file) {
        if (!file.name.endsWith('.csv')) {
            Swal.fire({ icon: 'error', title: 'Format invalide', text: 'Seuls les fichiers CSV sont acceptés.', confirmButtonColor: '#5048e5' });
            return;
        }
        this.selectedFile = file;
        this.importStatus = 'idle';
        this.importResult = null;
    }
    clearFile() {
        this.selectedFile = null;
        this.importStatus = 'idle';
        this.importResult = null;
    }
    uploadFile() {
        if (!this.selectedFile)
            return;
        this.importStatus = 'uploading';
        this.service.importCsv(this.selectedFile).subscribe({
            next: result => {
                this.importResult = result;
                this.importStatus = 'success';
                this.history.unshift({
                    filename: this.selectedFile.name,
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                    result,
                    status: 'completed',
                });
                this.selectedFile = null;
            },
            error: () => {
                this.importStatus = 'error';
                this.history.unshift({
                    filename: this.selectedFile.name,
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                    result: null,
                    status: 'failed',
                });
                Swal.fire({ icon: 'error', title: 'Erreur d\'import', text: 'Impossible d\'importer le fichier. Vérifiez son format.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    // ── Export ───────────────────────────────────────────────────────────────
    exportData() {
        this.exporting = true;
        this.service.exportData({ format: this.exportFormat, range: this.exportRange }).subscribe({
            next: blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `transactions_export.${this.exportFormat}`;
                link.click();
                URL.revokeObjectURL(url);
                this.exporting = false;
                Swal.fire({ icon: 'success', title: 'Export téléchargé', timer: 1500, showConfirmButton: false });
            },
            error: () => {
                this.exporting = false;
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de générer l\'export.', confirmButtonColor: '#5048e5' });
            },
        });
    }
    formatSize(bytes) {
        if (bytes < 1024)
            return `${bytes} o`;
        if (bytes < 1024 * 1024)
            return `${(bytes / 1024).toFixed(1)} Ko`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
    }
    static ɵfac = function ImportExportPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportExportPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportExportPage, selectors: [["app-import-export-page"]], viewQuery: function ImportExportPage_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInputRef = _t.first);
        } }, decls: 80, vars: 33, consts: [["fileInput", ""], [1, "min-h-screen", "bg-[#f6f6f8]", "text-slate-900"], [1, "px-6", "lg:px-8", "py-6", "max-w-6xl", "mx-auto", "space-y-8"], [1, "mb-4"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500"], [1, "bg-white", "border-2", "border-dashed", "rounded-xl", "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center", "transition-all", "group", 3, "border-slate-300", "border-[#5048e5]/50", "bg-[#5048e5]/5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5"], [1, "mt-4", "bg-emerald-50", "border", "border-emerald-200", "rounded-xl", "p-5", "flex", "items-start", "gap-4"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-[#5048e5]", "text-sm", "font-medium", "hover:underline"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "overflow-hidden"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-slate-50", "border-b", "border-slate-200"], [1, "px-6", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "lg:col-span-1"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6", "space-y-6"], [1, "space-y-4"], [1, "block", "text-sm", "font-semibold", "mb-2"], [1, "w-full", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "px-3", "py-2", "text-sm", "outline-none", "focus:ring-2", "focus:ring-[#5048e5]", "focus:border-transparent", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", 1, "rounded", "border-slate-300", "text-[#5048e5]", "focus:ring-[#5048e5]", "h-4", "w-4", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-slate-600"], [1, "grid", "grid-cols-2", "gap-2"], [1, "px-3", "py-2", "border-2", "rounded-lg", "text-sm", "font-medium", 3, "click"], [1, "w-full", "py-3", "bg-[#5048e5]", "text-white", "font-bold", "rounded-lg", "flex", "items-center", "justify-center", "gap-2", "hover:bg-[#4338ca]", "shadow-lg", "shadow-[#5048e5]/20", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "material-symbols-outlined"], [1, "pt-4", "border-t", "border-slate-100"], [1, "text-[10px]", "text-slate-400", "text-center", "italic"], ["type", "file", "accept", ".csv", 1, "hidden", 3, "change"], [1, "bg-white", "border-2", "border-dashed", "rounded-xl", "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center", "transition-all", "group", 3, "dragover", "dragleave", "drop"], [1, "size-16", "rounded-full", "bg-[#5048e5]/5", "flex", "items-center", "justify-center", "mb-4", "group-hover:scale-110", "transition-transform"], [1, "material-symbols-outlined", "text-[#5048e5]", "text-3xl"], [1, "text-base", "font-semibold", "mb-1"], [1, "text-sm", "text-slate-500", "mb-6", "max-w-xs"], [1, "flex", "gap-3"], [1, "px-6", "py-2", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition-colors", "shadow-sm", 3, "click"], [1, "px-6", "py-2", "bg-slate-100", "text-slate-700", "text-sm", "font-semibold", "rounded-lg", "hover:bg-slate-200", "transition-colors"], [1, "mt-4", "text-[11px]", "text-slate-400", "uppercase", "tracking-widest", "font-medium"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-xl", "bg-[#5048e5]/10", "flex", "items-center", "justify-center", "shrink-0"], [1, "material-symbols-outlined", "text-[#5048e5]", "text-[22px]"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-slate-900", "truncate"], [1, "text-xs", "text-slate-400", "mt-0.5"], [1, "p-2", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition"], [1, "mt-4", "flex", "justify-end"], [1, "mt-4", "flex", "items-center", "gap-3", "text-sm", "text-slate-500"], [1, "p-2", "text-slate-400", "hover:text-slate-700", "hover:bg-slate-100", "rounded-lg", "transition", 3, "click"], [1, "material-symbols-outlined", "text-[18px]"], [1, "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-[#5048e5]", "text-white", "text-sm", "font-semibold", "rounded-lg", "hover:bg-[#4338ca]", "transition-all", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-4", "w-4", "animate-spin", "text-[#5048e5]"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8z", 1, "opacity-75"], [1, "material-symbols-outlined", "text-emerald-500", "text-2xl", "shrink-0"], [1, "font-semibold", "text-emerald-800"], [1, "text-sm", "text-emerald-700", "mt-0.5"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "material-symbols-outlined", "text-slate-400"], [1, "text-sm", "font-medium"], [1, "px-6", "py-4", "text-sm", "text-slate-500"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-100", "text-emerald-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-amber-100", "text-amber-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-rose-100", "text-rose-800"]], template: function ImportExportPage_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "section")(3, "div", 3)(4, "h2", 4);
            i0.ɵɵtext(5, "Import Data");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 5);
            i0.ɵɵtext(7, "Upload your CSV files to synchronize with the central database.");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, ImportExportPage_Conditional_8_Template, 15, 6, "div", 6);
            i0.ɵɵconditionalCreate(9, ImportExportPage_Conditional_9_Template, 13, 5, "div", 7);
            i0.ɵɵconditionalCreate(10, ImportExportPage_Conditional_10_Template, 10, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9)(12, "section", 10)(13, "div", 11)(14, "h2", 4);
            i0.ɵɵtext(15, "Recent Imports");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 12);
            i0.ɵɵtext(17, "View All");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 13)(19, "table", 14)(20, "thead")(21, "tr", 15)(22, "th", 16);
            i0.ɵɵtext(23, "Filename");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "th", 16);
            i0.ɵɵtext(25, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "th", 16);
            i0.ɵɵtext(27, "Records");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "th", 16);
            i0.ɵɵtext(29, "Status");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "tbody", 17);
            i0.ɵɵrepeaterCreate(31, ImportExportPage_For_32_Template, 16, 6, "tr", 18, _forTrack0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "section", 19)(34, "div", 3)(35, "h2", 4);
            i0.ɵɵtext(36, "Export Data");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 5);
            i0.ɵɵtext(38, "Select parameters to generate a custom data report.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 20)(40, "div", 21)(41, "div")(42, "label", 22);
            i0.ɵɵtext(43, "Data Range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "select", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function ImportExportPage_Template_select_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.exportRange, $event) || (ctx.exportRange = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵrepeaterCreate(45, ImportExportPage_For_46_Template, 2, 2, "option", 24, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div")(48, "label", 22);
            i0.ɵɵtext(49, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 25)(51, "label", 26)(52, "input", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function ImportExportPage_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.includeProfiles, $event) || (ctx.includeProfiles = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span", 28);
            i0.ɵɵtext(54, "Customer Profiles");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "label", 26)(56, "input", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function ImportExportPage_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.includeTransactions, $event) || (ctx.includeTransactions = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "span", 28);
            i0.ɵɵtext(58, "Transaction History");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "label", 26)(60, "input", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function ImportExportPage_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.includeInventory, $event) || (ctx.includeInventory = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "span", 28);
            i0.ɵɵtext(62, "Inventory Status");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "div")(64, "label", 22);
            i0.ɵɵtext(65, "Export Format");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 29)(67, "button", 30);
            i0.ɵɵlistener("click", function ImportExportPage_Template_button_click_67_listener() { return ctx.exportFormat = "csv"; });
            i0.ɵɵtext(68, "CSV");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "button", 30);
            i0.ɵɵlistener("click", function ImportExportPage_Template_button_click_69_listener() { return ctx.exportFormat = "xlsx"; });
            i0.ɵɵtext(70, "XLSX");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(71, "button", 31);
            i0.ɵɵlistener("click", function ImportExportPage_Template_button_click_71_listener() { return ctx.exportData(); });
            i0.ɵɵelementStart(72, "span", 32);
            i0.ɵɵtext(73, "download_for_offline");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "div", 33)(76, "p", 34);
            i0.ɵɵtext(77, "Exports are processed asynchronously and may take several minutes for large datasets.");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(78, "input", 35, 0);
            i0.ɵɵlistener("change", function ImportExportPage_Template_input_change_78_listener($event) { return ctx.onFileSelected($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(!ctx.selectedFile ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.selectedFile ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.importStatus === "success" && ctx.importResult ? 10 : -1);
            i0.ɵɵadvance(21);
            i0.ɵɵrepeater(ctx.displayedHistory);
            i0.ɵɵadvance(13);
            i0.ɵɵtwoWayProperty("ngModel", ctx.exportRange);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.ranges);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.includeProfiles);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.includeTransactions);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.includeInventory);
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("border-[#5048e5]", ctx.exportFormat === "csv")("bg-[#5048e5]", ctx.exportFormat === "csv")("text-white", ctx.exportFormat === "csv")("border-slate-100", ctx.exportFormat !== "csv")("bg-slate-500", ctx.exportFormat !== "csv")("text-white", ctx.exportFormat !== "csv");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("border-[#5048e5]", ctx.exportFormat === "xlsx")("bg-[#5048e5]", ctx.exportFormat === "xlsx")("text-white", ctx.exportFormat === "xlsx")("border-slate-100", ctx.exportFormat !== "xlsx")("bg-slate-500", ctx.exportFormat !== "xlsx")("text-white", ctx.exportFormat !== "xlsx");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.exporting);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.exporting ? "Generating..." : "Generate Export", " ");
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportPage, [{
        type: Component,
        args: [{ selector: 'app-import-export-page', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"min-h-screen bg-[#f6f6f8] text-slate-900\">\n  <div class=\"px-6 lg:px-8 py-6 max-w-6xl mx-auto space-y-8\">\n    <section>\n      <div class=\"mb-4\">\n        <h2 class=\"text-lg font-bold text-slate-900\">Import Data</h2>\n        <p class=\"text-sm text-slate-500\">Upload your CSV files to synchronize with the central database.</p>\n      </div>\n\n      @if (!selectedFile) {\n        <div\n          class=\"bg-white border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center transition-all group\"\n          [class.border-slate-300]=\"!isDragging\"\n          [class.border-[#5048e5]/50]=\"isDragging\"\n          [class.bg-[#5048e5]/5]=\"isDragging\"\n          (dragover)=\"onDragOver($event)\"\n          (dragleave)=\"onDragLeave()\"\n          (drop)=\"onDrop($event)\"\n        >\n          <div class=\"size-16 rounded-full bg-[#5048e5]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform\">\n            <span class=\"material-symbols-outlined text-[#5048e5] text-3xl\">upload_file</span>\n          </div>\n          <h3 class=\"text-base font-semibold mb-1\">Upload CSV File</h3>\n          <p class=\"text-sm text-slate-500 mb-6 max-w-xs\">Drag and drop your file here, or click to browse from your computer</p>\n          <div class=\"flex gap-3\">\n            <button (click)=\"openFilePicker()\" class=\"px-6 py-2 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-colors shadow-sm\">Select File</button>\n            <button class=\"px-6 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors\">Use Template</button>\n          </div>\n          <p class=\"mt-4 text-[11px] text-slate-400 uppercase tracking-widest font-medium\">Max file size: 50MB</p>\n        </div>\n      }\n\n      @if (selectedFile) {\n        <div class=\"bg-white rounded-xl border border-slate-200 p-5\">\n          <div class=\"flex items-center gap-4\">\n            <div class=\"w-12 h-12 rounded-xl bg-[#5048e5]/10 flex items-center justify-center shrink-0\">\n              <span class=\"material-symbols-outlined text-[#5048e5] text-[22px]\">description</span>\n            </div>\n            <div class=\"flex-1 min-w-0\">\n              <p class=\"font-semibold text-slate-900 truncate\">{{ selectedFile.name }}</p>\n              <p class=\"text-xs text-slate-400 mt-0.5\">{{ formatSize(selectedFile.size) }}</p>\n            </div>\n            @if (importStatus !== 'uploading') {\n              <button (click)=\"clearFile()\" class=\"p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition\">\n                <span class=\"material-symbols-outlined text-[18px]\">close</span>\n              </button>\n            }\n          </div>\n\n          @if (importStatus === 'idle') {\n            <div class=\"mt-4 flex justify-end\">\n              <button (click)=\"uploadFile()\" class=\"flex items-center gap-2 px-5 py-2.5 bg-[#5048e5] text-white text-sm font-semibold rounded-lg hover:bg-[#4338ca] transition-all\">\n                <span class=\"material-symbols-outlined text-[18px]\">upload</span>\n                Import\n              </button>\n            </div>\n          }\n\n          @if (importStatus === 'uploading') {\n            <div class=\"mt-4 flex items-center gap-3 text-sm text-slate-500\">\n              <svg class=\"h-4 w-4 animate-spin text-[#5048e5]\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"/>\n                <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8z\"/>\n              </svg>\n              Importing...\n            </div>\n          }\n        </div>\n      }\n\n      @if (importStatus === 'success' && importResult) {\n        <div class=\"mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-4\">\n          <span class=\"material-symbols-outlined text-emerald-500 text-2xl shrink-0\">check_circle</span>\n          <div>\n            <p class=\"font-semibold text-emerald-800\">Import completed</p>\n            <p class=\"text-sm text-emerald-700 mt-0.5\"><strong>{{ importResult.imported }}</strong> records imported</p>\n          </div>\n        </div>\n      }\n    </section>\n\n    <div class=\"grid grid-cols-1 lg:grid-cols-3 gap-8\">\n      <section class=\"lg:col-span-2\">\n        <div class=\"flex items-center justify-between mb-4\">\n          <h2 class=\"text-lg font-bold text-slate-900\">Recent Imports</h2>\n          <button class=\"text-[#5048e5] text-sm font-medium hover:underline\">View All</button>\n        </div>\n\n        <div class=\"bg-white rounded-xl border border-slate-200 overflow-hidden\">\n          <table class=\"w-full text-left border-collapse\">\n            <thead>\n              <tr class=\"bg-slate-50 border-b border-slate-200\">\n                <th class=\"px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider\">Filename</th>\n                <th class=\"px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider\">Date</th>\n                <th class=\"px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider\">Records</th>\n                <th class=\"px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider\">Status</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-slate-100\">\n              @for (entry of displayedHistory; track entry.filename + entry.date) {\n                <tr class=\"hover:bg-slate-50/50 transition-colors\">\n                  <td class=\"px-6 py-4\">\n                    <div class=\"flex items-center gap-3\">\n                      <span class=\"material-symbols-outlined text-slate-400\">description</span>\n                      <span class=\"text-sm font-medium\">{{ entry.filename }}</span>\n                    </div>\n                  </td>\n                  <td class=\"px-6 py-4 text-sm text-slate-500\">{{ entry.date }}</td>\n                  <td class=\"px-6 py-4 text-sm text-slate-500\">{{ entry.result?.imported ?? 0 | number }}</td>\n                  <td class=\"px-6 py-4\">\n                    @if (entry.status === 'completed') {\n                      <span class=\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800\">Completed</span>\n                    } @else if (entry.status === 'processing') {\n                      <span class=\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800\">Processing</span>\n                    } @else {\n                      <span class=\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800\">Failed</span>\n                    }\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n      <section class=\"lg:col-span-1\">\n        <div class=\"mb-4\">\n          <h2 class=\"text-lg font-bold text-slate-900\">Export Data</h2>\n          <p class=\"text-sm text-slate-500\">Select parameters to generate a custom data report.</p>\n        </div>\n\n        <div class=\"bg-white rounded-xl border border-slate-200 p-6 space-y-6\">\n          <div class=\"space-y-4\">\n            <div>\n              <label class=\"block text-sm font-semibold mb-2\">Data Range</label>\n              <select [(ngModel)]=\"exportRange\" class=\"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#5048e5] focus:border-transparent\">\n                @for (r of ranges; track r.value) {\n                  <option [value]=\"r.value\">{{ r.label }}</option>\n                }\n              </select>\n            </div>\n\n            <div>\n              <label class=\"block text-sm font-semibold mb-2\">Category</label>\n              <div class=\"space-y-2\">\n                <label class=\"flex items-center gap-2 cursor-pointer\">\n                  <input [(ngModel)]=\"includeProfiles\" class=\"rounded border-slate-300 text-[#5048e5] focus:ring-[#5048e5] h-4 w-4\" type=\"checkbox\"/>\n                  <span class=\"text-sm text-slate-600\">Customer Profiles</span>\n                </label>\n                <label class=\"flex items-center gap-2 cursor-pointer\">\n                  <input [(ngModel)]=\"includeTransactions\" class=\"rounded border-slate-300 text-[#5048e5] focus:ring-[#5048e5] h-4 w-4\" type=\"checkbox\"/>\n                  <span class=\"text-sm text-slate-600\">Transaction History</span>\n                </label>\n                <label class=\"flex items-center gap-2 cursor-pointer\">\n                  <input [(ngModel)]=\"includeInventory\" class=\"rounded border-slate-300 text-[#5048e5] focus:ring-[#5048e5] h-4 w-4\" type=\"checkbox\"/>\n                  <span class=\"text-sm text-slate-600\">Inventory Status</span>\n                </label>\n              </div>\n            </div>\n\n            <div>\n              <label class=\"block text-sm font-semibold mb-2\">Export Format</label>\n              <div class=\"grid grid-cols-2 gap-2\">\n                <button (click)=\"exportFormat = 'csv'\" class=\"px-3 py-2 border-2 rounded-lg text-sm font-medium\"\n                  [class.border-[#5048e5]]=\"exportFormat === 'csv'\"\n                  [class.bg-[#5048e5]]=\"exportFormat === 'csv'\"\n                  [class.text-white]=\"exportFormat === 'csv'\"\n                  [class.border-slate-100]=\"exportFormat !== 'csv'\"\n                  [class.bg-slate-500]=\"exportFormat !== 'csv'\"\n                  [class.text-white]=\"exportFormat !== 'csv'\"\n                >CSV</button>\n                <button (click)=\"exportFormat = 'xlsx'\" class=\"px-3 py-2 border-2 rounded-lg text-sm font-medium\"\n                  [class.border-[#5048e5]]=\"exportFormat === 'xlsx'\"\n                  [class.bg-[#5048e5]]=\"exportFormat === 'xlsx'\"\n                  [class.text-white]=\"exportFormat === 'xlsx'\"\n                  [class.border-slate-100]=\"exportFormat !== 'xlsx'\"\n                  [class.bg-slate-500]=\"exportFormat !== 'xlsx'\"\n                  [class.text-white]=\"exportFormat !== 'xlsx'\"\n                >XLSX</button>\n              </div>\n            </div>\n          </div>\n\n          <button (click)=\"exportData()\" [disabled]=\"exporting\" class=\"w-full py-3 bg-[#5048e5] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#4338ca] shadow-lg shadow-[#5048e5]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed\">\n            <span class=\"material-symbols-outlined\">download_for_offline</span>\n            {{ exporting ? 'Generating...' : 'Generate Export' }}\n          </button>\n\n          <div class=\"pt-4 border-t border-slate-100\">\n            <p class=\"text-[10px] text-slate-400 text-center italic\">Exports are processed asynchronously and may take several minutes for large datasets.</p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n\n  <input #fileInput type=\"file\" accept=\".csv\" class=\"hidden\" (change)=\"onFileSelected($event)\" />\n</div>\n" }]
    }], null, { fileInputRef: [{
            type: ViewChild,
            args: ['fileInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImportExportPage, { className: "ImportExportPage", filePath: "src/app/features/import-export/pages/import-export-page/import-export-page.ts", lineNumber: 56 }); })();
