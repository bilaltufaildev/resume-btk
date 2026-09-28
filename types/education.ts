export interface EducationDate {
  label: string;
  dateTime: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  start: EducationDate;
  end: EducationDate;
  description: string;
}

export interface EducationContent {
  heading: string;
  entries: EducationEntry[];
}
