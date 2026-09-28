export interface SelectedWorkDestination {
  label: string;
  href: string;
}

export interface SelectedWorkItem {
  id: string;
  title: string;
  destination: SelectedWorkDestination;
  period: string;
  description: string;
}

export interface SelectedWorkContent {
  heading: string;
  projects: SelectedWorkItem[];
}
