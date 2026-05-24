/**
 * Data barrel — import from "@/data" in components.
 *
 * Edit content in:
 *   config.ts      — name, links, navigation, section titles, SEO
 *   projects.ts    — project cards
 *   experience.ts  — work & involvement entries
 *   academics.ts   — GPA, AP courses, honors
 */

export { personal, social, navigation, sectionIds, sections, seo } from "./config";
export { projects } from "./projects";
export { experience } from "./experience";
export { academics } from "./academics";

export type {
  NavLink,
  SectionMeta,
  Project,
  Experience,
  Honor,
} from "./types";
