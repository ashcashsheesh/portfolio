/**
 * Academics — GPA, AP courses, honors, and awards.
 * EDIT: Update with your actual academic information.
 */

import type { Honor } from "./types";

export const academics = {
  /** Shown subtly — use format you prefer, e.g. "4.0 / 4.0" or "Weighted 4.5" */
  gpa: "(in progress)",

  /** AP and advanced coursework */
  apCourses: [
    "AP Computer Science Principles",
    "AP World History",
    "AP Pre-Calculus",
    "AP Physics 1",
    "AP United States History",
    "AP Statistics (in progress)",
    "AP Psychology (in progress)",
    "AP Biology (in progress)",
    "AP Calculus BC (in progress)",
  ],

  /** Honors, awards, and recognition */
  honors: [
    { title: "(in progress)", year: "(in progress)" },
  ] satisfies Honor[],
  
};
