import type { SelectedWorkContent } from "@/types/selected-work";

export const selectedWorkContent: SelectedWorkContent = {
  heading: "Selected Work",
  projects: [
    {
      id: "meyka-ai-stock-research",
      title: "Meyka AI — AI-Powered Stock Research Platform",
      destination: { label: "Live Site", href: "https://meyka.com/" },
      period: "2025–2026",
      description: "Built real-time streaming chatbot experiences, SEO-focused financial pages, and performance improvements with React and Next.js.",
    },
    {
      id: "kaufes-marketplace",
      title: "Kaufes — Swiss Auction & E-Commerce Marketplace",
      destination: { label: "Live Site", href: "https://kaufes.ch/en" },
      period: "2024",
      description: "Built responsive auction and buy-it-now flows with Next.js, React, TypeScript, Tailwind CSS, and Redux, alongside real-time search, secure payments, moderation, verified-user features, and location-based shipping.",
    },
    {
      id: "muslim-and-quran-platform",
      title: "Muslim & Quran — Comprehensive Islamic Platform",
      destination: { label: "Live Site", href: "https://muslimandquran.com/" },
      period: "2023",
      description: "Built a Quran reader with Arabic scripts, translations, recitations, and Tajweed, alongside embeddable widgets, a Qibla Compass, prayer times, and a Zakat Calculator.",
    },
  ],
};
