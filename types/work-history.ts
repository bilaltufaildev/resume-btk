export interface WorkDate {
  label: string;
  dateTime: string;
}

export interface WorkEndDate {
  label: string;
  dateTime?: string;
}

export interface WorkHistoryEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  start: WorkDate;
  end: WorkEndDate;
  highlights: string[];
}

export interface WorkHistoryContent {
  heading: string;
  entries: WorkHistoryEntry[];
}
