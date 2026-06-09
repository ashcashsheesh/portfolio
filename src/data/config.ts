/**
 * Site configuration — name, email, navigation, and SEO only.
 *
 * For section content, edit:
 *   overview.ts   — About / Overview
 *   experience.ts — Experience entries
 *   projects.ts   — Project cards
 *   academics.ts  — GPA, AP courses, honors
 */

import type { NavLink, SectionMeta } from "./types";

export const personal = {
  name: "Asher Nam",
  subtitle: "Portfolio and selected work.",
  email: "asher.nam@gmail.com",
  /** Path to resume PDF in /public */
  resumeUrl: "/resume.pdf",
};

export const navigation: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#academics" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = navigation.map((link) => link.href.replace("#", ""));

export const sections: Record<"academics" | "contact", SectionMeta> = {
  academics: {
    label: "Academics",
    title: "Coursework & recognition",
  },
  contact: {
    label: "Contact",
    title: "Get in touch",
  },
};

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
