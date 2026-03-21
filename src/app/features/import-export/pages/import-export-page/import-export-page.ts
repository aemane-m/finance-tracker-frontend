import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

import { ImportExportService, ImportSummary } from '../../services/import-export.service';
import { TransactionsService } from '../../../transactions/services/transactions.service';

type ImportStatus  = 'idle' | 'uploading' | 'success' | 'error';
type ExportMode    = 'all' | 'current-month' | 'last-month' | 'last-3-months' | 'custom';

@Component({
  selector: 'app-import-export-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './import-export-page.html',
  styleUrl: './import-export-page.scss',
})
export class ImportExportPage {
  private service             = inject(ImportExportService);
  private transactionsService = inject(TransactionsService);

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  // ── Import ────────────────────────────────────────────────────────────────
  importStatus: ImportStatus        = 'idle';
  importResult: ImportSummary | null = null;
  selectedFile: File | null         = null;
  isDragging                        = false;

  // ── Export ────────────────────────────────────────────────────────────────
  exporting      = false;
  exportMode: ExportMode = 'all';
  exportStartDate = '';
  exportEndDate   = '';

  readonly exportModes: { value: ExportMode; label: string; icon: string }[] = [
    { value: 'all',           label: 'Tout l\'historique', icon: 'all_inclusive'  },
    { value: 'current-month', label: 'Ce mois',            icon: 'calendar_month' },
    { value: 'last-month',    label: 'Mois précédent',     icon: 'history'        },
    { value: 'last-3-months', label: '3 derniers mois',    icon: 'date_range'     },
    { value: 'custom',        label: 'Personnalisé',        icon: 'tune'           },
  ];

  get isCustomRangeInvalid(): boolean {
    return this.exportMode === 'custom' && (!this.exportStartDate || !this.exportEndDate);
  }

  get exportPeriodLabel(): string {
    const now = dayjs();
    switch (this.exportMode) {
      case 'current-month':  return `${now.format('MMMM YYYY')}`;
      case 'last-month':     return `${now.subtract(1, 'month').format('MMMM YYYY')}`;
      case 'last-3-months':  return `${now.subtract(3, 'month').format('MMM')} – ${now.format('MMM YYYY')}`;
      case 'custom': {
        if (!this.exportStartDate || !this.exportEndDate) return 'Sélectionner une plage';
        return `${this.exportStartDate} → ${this.exportEndDate}`;
      }
      default: return 'Toutes les transactions';
    }
  }

  private getExportRange(): { startDate?: string; endDate?: string } {
    const now = dayjs();
    switch (this.exportMode) {
      case 'current-month':
        return {
          startDate: now.startOf('month').format('YYYY-MM-DD'),
          endDate:   now.format('YYYY-MM-DD'),
        };
      case 'last-month': {
        const prev = now.subtract(1, 'month');
        return {
          startDate: prev.startOf('month').format('YYYY-MM-DD'),
          endDate:   prev.endOf('month').format('YYYY-MM-DD'),
        };
      }
      case 'last-3-months':
        return {
          startDate: now.subtract(3, 'month').startOf('month').format('YYYY-MM-DD'),
          endDate:   now.format('YYYY-MM-DD'),
        };
      case 'custom':
        return { startDate: this.exportStartDate, endDate: this.exportEndDate };
      default:
        return {};
    }
  }

  // ── Drag & drop ───────────────────────────────────────────────────────────

  onDragOver(e: DragEvent): void { e.preventDefault(); this.isDragging = true; }
  onDragLeave(): void            { this.isDragging = false; }

  onDrop(e: DragEvent): void {
    e.preventDefault();
    this.isDragging = false;
    const file = e.dataTransfer?.files[0];
    if (file) this.setFile(file);
  }

  openFilePicker(): void { this.fileInputRef.nativeElement.click(); }

  onFileSelected(e: Event): void {
    const input = e.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (file) this.setFile(file);
    input.value = '';
  }

  private setFile(file: File): void {
    if (!file.name.toLowerCase().endsWith('.csv')) {
      Swal.fire({ icon: 'error', title: 'Format invalide', text: 'Seuls les fichiers CSV sont acceptés.', confirmButtonColor: '#0f766e' });
      return;
    }
    this.selectedFile = file;
    this.importStatus = 'idle';
    this.importResult = null;
  }

  clearFile(): void {
    this.selectedFile = null;
    this.importStatus = 'idle';
    this.importResult = null;
  }

  // ── Import ────────────────────────────────────────────────────────────────

  uploadFile(): void {
    if (!this.selectedFile) return;
    this.importStatus = 'uploading';

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      const { rows, errors } = this.service.parseCsvContent(content);

      if (rows.length === 0) {
        this.importStatus = 'error';
        this.importResult = { imported: 0, skipped: errors.length, errors };
        return;
      }

      this.service.importRows(rows).subscribe({
        next: result => {
          // Fusionner les erreurs CSV (parse) avec les erreurs HTTP (envoi)
          const allErrors = [...errors, ...result.errors];
          this.importResult = {
            imported: result.imported,
            skipped:  errors.length + result.skipped,
            errors:   allErrors,
          };
          this.importStatus = result.imported > 0 ? 'success' : 'error';
          this.selectedFile = null;

          if (result.imported > 0) {
            Swal.fire({
              icon: 'success',
              title: `${result.imported} transaction(s) importée(s)`,
              text:  result.skipped > 0 ? `${result.skipped} ligne(s) ignorée(s) — voir le détail ci-dessous.` : undefined,
              timer: result.skipped > 0 ? undefined : 2000,
              showConfirmButton: result.skipped > 0,
              confirmButtonColor: '#0f766e',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Aucune transaction importée',
              text:  'Toutes les lignes ont échoué — consultez le détail des erreurs.',
              confirmButtonColor: '#0f766e',
            });
          }
        },
        error: () => {
          this.importStatus = 'error';
          this.importResult = { imported: 0, skipped: 0, errors: ['Erreur réseau inattendue lors de l\'import.'] };
          Swal.fire({ icon: 'error', title: 'Erreur d\'import', text: 'Impossible de joindre le serveur.', confirmButtonColor: '#0f766e' });
        },
      });
    };
    reader.readAsText(this.selectedFile, 'utf-8');
  }

  // ── Export ────────────────────────────────────────────────────────────────

  exportData(): void {
    if (this.isCustomRangeInvalid) return;

    this.exporting = true;
    const range = this.getExportRange();

    const obs = (range.startDate || range.endDate)
      ? this.transactionsService.search(range, 0, 10000)
      : this.transactionsService.getAll(0, 10000);

    obs.subscribe({
      next: page => {
        if (page.content.length === 0) {
          this.exporting = false;
          Swal.fire({ icon: 'info', title: 'Aucune transaction', text: 'Aucune transaction trouvée pour cette période.', confirmButtonColor: '#0f766e' });
          return;
        }

        const blob = this.service.generateExportBlob(page.content);
        const url  = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const suffix = range.startDate ? `${range.startDate}_${range.endDate}` : 'complet';
        link.href     = url;
        link.download = `transactions_${suffix}.csv`;
        link.click();
        URL.revokeObjectURL(url);
        this.exporting = false;
        Swal.fire({ icon: 'success', title: `${page.content.length} transaction(s) exportée(s)`, timer: 1800, showConfirmButton: false });
      },
      error: () => {
        this.exporting = false;
        Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de générer l\'export.', confirmButtonColor: '#0f766e' });
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
}
