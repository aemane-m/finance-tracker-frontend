import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, from, concatMap, toArray, map, catchError, of } from 'rxjs';
import { Transaction, CreateTransactionRequest } from '../../transactions/models/transaction.model';
import { TransactionType } from '../../../core/models/common.model';
import { TransactionsService } from '../../transactions/services/transactions.service';

export interface CsvRow {
  date:       string;
  label:      string;
  amount:     number;
  type:       TransactionType;
  categoryId: number;
  note?:      string;
}

export interface ParseResult {
  rows:   CsvRow[];
  errors: string[];
}

export interface ImportSummary {
  imported: number;
  skipped:  number;
  errors:   string[];
}

@Injectable({ providedIn: 'root' })
export class ImportExportService {
  private transactionsService = inject(TransactionsService);

  // ── Export ────────────────────────────────────────────────────────────────

  generateExportBlob(transactions: Transaction[]): Blob {
    const header = 'date,label,amount,type,categoryId,categoryName,note';
    const rows = transactions.map(t => [
      t.date,
      this.escapeCsv(t.label),
      t.amount,
      t.type,
      t.categoryId,
      this.escapeCsv(t.categoryName ?? ''),
      this.escapeCsv(t.note ?? ''),
    ].join(','));
    // BOM UTF-8 pour que Excel l'ouvre correctement
    return new Blob(['\uFEFF' + [header, ...rows].join('\n')], { type: 'text/csv;charset=utf-8;' });
  }

  // ── Import ────────────────────────────────────────────────────────────────

  /**
   * Parse le contenu texte d'un fichier CSV.
   * Colonnes requises : date, label, amount, type, categoryId
   * Colonnes optionnelles : categoryName (ignorée à l'import), note
   *
   * Exemple de ligne valide :
   *   2024-03-15,Courses Lidl,42.50,EXPENSE,3,Alimentation,"Courses du samedi"
   */
  parseCsvContent(content: string): ParseResult {
    const lines = content
      .split('\n')
      .map(l => l.replace(/\r$/, '').trim())
      .filter(l => l.length > 0);

    if (lines.length < 2) {
      return { rows: [], errors: ['Fichier vide ou sans données.'] };
    }

    const headerCols = this.parseCsvLine(lines[0].toLowerCase());
    const idx = {
      date:       headerCols.indexOf('date'),
      label:      headerCols.indexOf('label'),
      amount:     headerCols.indexOf('amount'),
      type:       headerCols.indexOf('type'),
      categoryId: headerCols.indexOf('categoryid'),
      note:       headerCols.indexOf('note'),
    };

    const required: (keyof typeof idx)[] = ['date', 'label', 'amount', 'type', 'categoryId'];
    if (required.some(k => idx[k] === -1)) {
      return {
        rows: [],
        errors: ['En-têtes invalides. Colonnes requises : date, label, amount, type, categoryId'],
      };
    }

    const rows: CsvRow[]   = [];
    const errors: string[] = [];

    for (let i = 1; i < lines.length; i++) {
      const lineNum = i + 1;
      const parts   = this.parseCsvLine(lines[i]);

      if (parts.length < 5) {
        errors.push(`Ligne ${lineNum} : nombre de colonnes insuffisant.`);
        continue;
      }

      const date      = parts[idx.date]?.trim();
      const label     = parts[idx.label]?.trim();
      const amountRaw = parts[idx.amount]?.trim().replace(',', '.');
      const typeRaw   = parts[idx.type]?.trim().toUpperCase();
      const catIdRaw  = parts[idx.categoryId]?.trim();
      const note      = idx.note >= 0 ? parts[idx.note]?.trim() : undefined;

      if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        errors.push(`Ligne ${lineNum} : date invalide (format attendu : YYYY-MM-DD).`);
        continue;
      }
      if (!label) {
        errors.push(`Ligne ${lineNum} : libellé manquant.`);
        continue;
      }
      const amount = parseFloat(amountRaw);
      if (isNaN(amount) || amount <= 0) {
        errors.push(`Ligne ${lineNum} : montant invalide (doit être > 0).`);
        continue;
      }
      if (typeRaw !== 'INCOME' && typeRaw !== 'EXPENSE') {
        errors.push(`Ligne ${lineNum} : type invalide (INCOME ou EXPENSE attendu).`);
        continue;
      }
      const categoryId = parseInt(catIdRaw, 10);
      if (isNaN(categoryId)) {
        errors.push(`Ligne ${lineNum} : categoryId invalide.`);
        continue;
      }

      rows.push({ date, label, amount, type: typeRaw as TransactionType, categoryId, note: note || undefined });
    }

    return { rows, errors };
  }

  /**
   * Envoie chaque ligne au backend séquentiellement.
   * Les erreurs par ligne sont capturées individuellement — un échec
   * n'interrompt pas les lignes suivantes.
   * Retourne directement un ImportSummary complet.
   */
  importRows(rows: CsvRow[]): Observable<ImportSummary> {
    type RowOk  = { ok: true;  tx: Transaction };
    type RowErr = { ok: false; row: CsvRow; message: string };

    return from(rows).pipe(
      concatMap(row => {
        const req: CreateTransactionRequest = {
          date:       row.date,
          label:      row.label,
          amount:     row.amount,
          type:       row.type,
          categoryId: row.categoryId,
          note:       row.note ?? null,
        };
        return this.transactionsService.create(req).pipe(
          map((tx): RowOk  => ({ ok: true, tx })),
          catchError((err: unknown): Observable<RowErr> =>
            of({ ok: false, row, message: this.rowErrorMessage(err, row) })
          ),
        );
      }),
      toArray(),
      map((results): ImportSummary => {
        const created  = results.filter((r): r is RowOk  => r.ok);
        const failures = results.filter((r): r is RowErr => !r.ok);
        return {
          imported: created.length,
          skipped:  failures.length,
          errors:   failures.map(f => `"${f.row.label}" (${f.row.date}) : ${f.message}`),
        };
      }),
    );
  }

  private rowErrorMessage(err: unknown, row: CsvRow): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 404) {
        return `catégorie ${row.categoryId} introuvable — vérifiez l'ID dans /app/categories`;
      }
      if (err.status === 400 || err.status === 422) {
        const msg = (err.error as { message?: string })?.message;
        return msg ?? 'données invalides (400/422)';
      }
      if (err.status === 401 || err.status === 403) {
        return 'non autorisé — reconnectez-vous';
      }
      return `erreur serveur ${err.status}`;
    }
    return 'erreur réseau inconnue';
  }

  // ── CSV helpers ───────────────────────────────────────────────────────────

  private escapeCsv(value: string): string {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  private parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current  = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else { inQuotes = !inQuotes; }
      } else if (ch === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current);
    return result;
  }
}
