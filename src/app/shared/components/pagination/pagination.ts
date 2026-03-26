import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

type PageItem = { type: 'page'; value: number } | { type: 'gap' };

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
})
export class PaginationComponent implements OnChanges {
  /** Current page — 0-based  */
  @Input() page = 0;
  /** Total number of pages */
  @Input() totalPages = 0;
  /** Total number of elements (for display) */
  @Input() totalElements = 0;
  /** Page size */
  @Input() size = 20;

  @Output() pageChange = new EventEmitter<number>();

  pages: PageItem[] = [];

  get isFirst(): boolean { return this.page === 0; }
  get isLast(): boolean  { return this.page >= this.totalPages - 1; }

  /** 1-based display range, e.g. "1–20 sur 120" */
  get rangeStart(): number { return this.totalElements === 0 ? 0 : this.page * this.size + 1; }
  get rangeEnd(): number   { return Math.min((this.page + 1) * this.size, this.totalElements); }

  ngOnChanges(): void {
    this.pages = this.buildPages();
  }

  private buildPages(): PageItem[] {
    const total = this.totalPages;
    if (total <= 1) return [];

    const current = this.page;
    const items: PageItem[] = [];
    const addPage = (n: number) => items.push({ type: 'page', value: n });
    const addGap  = ()          => items.push({ type: 'gap' });

    if (total <= 7) {
      for (let i = 0; i < total; i++) addPage(i);
      return items;
    }

    // Always show first 2
    addPage(0);
    addPage(1);

    if (current > 3) addGap();

    // Window around current
    const from = Math.max(2, current - 1);
    const to   = Math.min(total - 3, current + 1);
    for (let i = from; i <= to; i++) addPage(i);

    if (current < total - 4) addGap();

    // Always show last 2
    addPage(total - 2);
    addPage(total - 1);

    return items;
  }

  goTo(p: number): void {
    if (p < 0 || p >= this.totalPages || p === this.page) return;
    this.pageChange.emit(p);
  }

  isPageItem(item: PageItem): item is { type: 'page'; value: number } {
    return item.type === 'page';
  }
}
