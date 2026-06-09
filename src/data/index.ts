/**
 * Data barrel — import from "@/data" in components.
 *
 * Edit content in:
 *   config.ts      — name, email, navigation, SEO
 *   overview.ts    — About / Overview section
 *   experience.ts  — Experience section & entries
 *   projects.ts    — Projects section & cards
 *   academics.ts   — GPA, AP courses, honors
 */

export { personal, navigation, sectionIds, sections, seo } from "./config";
export { overview } from "./overview";
export { experience, experienceSection } from "./experience";
export { projects, projectsSection } from "./projects";
export { academics } from "./academics";

export type {
  NavLink,
  SectionMeta,
  Project,
  Experience,
  Honor,
} from "./types";
