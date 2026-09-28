export interface ToolGroup {
  id: string;
  heading: string;
  tools: string[];
}

export interface ToolsContent {
  heading: string;
  groups: ToolGroup[];
}
