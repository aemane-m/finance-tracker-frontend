export interface CalendarEvent {
  id: number;
  title: string;
  eventDate: string;       // YYYY-MM-DD
  amount?: number | null;
  color?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCalendarEventRequest {
  title: string;
  eventDate: string;
  amount?: number | null;
  color?: string | null;
  notes?: string | null;
}

export interface UpdateCalendarEventRequest {
  title: string;
  eventDate: string;
  amount?: number | null;
  color?: string | null;
  notes?: string | null;
}

/** A cell in the calendar grid */
export interface CalendarDay {
  date: Date;
  dateStr: string;          // YYYY-MM-DD
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}
