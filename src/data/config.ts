/**
 * Main site configuration — edit personal info, links, navigation, and section copy here.
 */

import type { NavLink, SectionMeta } from "./types";

// ─── Personal info ───────────────────────────────────────────────────────────
// EDIT: Your name, subtitle, and about text

export const personal = {
  name: "Asher Nam",
  subtitle: "portfolio",
  /** 2–4 concise sentences for the About section */
  about: [
    "I build software and research systems with a focus on clarity and rigor.",
    "Interested in how people learn, decide, and interact with technology.",
    "Currently leading initiatives in engineering, research, and community work.",
  ],
  /** Optional focus tags shown beside About copy */
  focusAreas: [
    "Software",
    "Research",
    "Leadership",
    "Systems Design",
  ],
  email: "asher.nam@gmail.com",
  /** Path to resume PDF in /public */
  resumeUrl: "/resume.pdf",
};

// ─── Social & external links ─────────────────────────────────────────────────
// EDIT: Replace placeholder URLs with your profiles

export const social = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  email: personal.email,
};

// ─── Navigation ──────────────────────────────────────────────────────────────
// EDIT: Add, remove, or reorder nav items (href must match section id)

export const navigation: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#academics" },
  { label: "Contact", href: "#contact" },
];

/** Section IDs used for scroll-spy — derived from navigation */
export const sectionIds = navigation.map((link) => link.href.replace("#", ""));

// ─── Section headers ─────────────────────────────────────────────────────────
// EDIT: Titles and optional descriptions for each section

export const sections: Record<
  "about" | "experience" | "projects" | "academics" | "contact",
  SectionMeta
> = {
  about: {
    label: "About",
    title: "Overview",
  },
  experience: {
    label: "Experience",
    title: "Work & involvement",
  },
  projects: {
    label: "Projects",
    title: "Selected work",
  },
  academics: {
    label: "Academics",
    title: "Coursework & recognition",
  },
  contact: {
    label: "Contact",
    title: "Get in touch",
  },
};

// ─── SEO metadata ────────────────────────────────────────────────────────────
// EDIT: Browser tab title, description, and social preview text

export const seo = {
  title: "Asher Nam",
  titleTemplate: "%s | Asher Nam",
  description:
    "Portfolio of Asher Nam — projects, leadership, and technical work.",
  keywords: ["portfolio", "software", "research", "projects"],
  openGraph: {
    title: "Asher Nam",
    description: "Projects, leadership, and work.",
    locale: "en_US" as const,
  },
};
