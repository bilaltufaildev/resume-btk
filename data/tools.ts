import type { ToolsContent } from "@/types/tools";

export const toolsContent: ToolsContent = {
  heading: "Technical Skills",
  groups: [
    {
      id: "frontend",
      heading: "Frontend",
      tools: ["Next.js", "React.js", "JavaScript", "TypeScript", "Redux", "jQuery"],
    },
    {
      id: "styling-ui",
      heading: "Styling & UI",
      tools: ["Tailwind CSS", "CSS3", "SCSS", "Material UI", "Ant Design", "Shadcn UI"],
    },
    {
      id: "ai-integration",
      heading: "AI Integration",
      tools: ["LLM APIs", "Streaming Chat UI", "AI Workflow Automation"],
    },
    {
      id: "ai-tools",
      heading: "AI Tools",
      tools: ["Cursor", "Claude Code", "Codex"],
    },
    {
      id: "api-integration",
      heading: "API Integration",
      tools: ["REST APIs", "Third-Party Services", "Webhooks", "Analytics Integration", "WordPress REST API"],
    },
    {
      id: "tools-deployment",
      heading: "Tools & Deployment",
      tools: ["GitHub", "Git CLI", "Docker", "Vercel", "Netlify"],
    },
  ],
};
