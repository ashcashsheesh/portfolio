/**
 * Academics — GPA, AP courses, honors, and awards.
 * EDIT: Update with your actual academic information.
 */

import type { Honor } from "./types";

export const academics = {
  /** Shown subtly — use format you prefer, e.g. "4.0 / 4.0" or "Weighted 4.5" */
  gpa: "4.0 / 4.0",

  /** AP and advanced coursework */
  apCourses: [
    "AP Computer Science A",
    "AP Calculus BC",
    "AP Physics C",
    "AP Statistics",
    "AP English Language",
  ],

  /** Honors, awards, and recognition */
  honors: [
    { title: "National Merit Semifinalist", year: "2025" },
    { title: "Regional Science Fair — 2nd Place", year: "2024" },
    { title: "Dean's List", year: "2023 — 2025" },
  ] satisfies Honor[],
};
