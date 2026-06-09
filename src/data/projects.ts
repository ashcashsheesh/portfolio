/**
 * Projects section — edit section title and all project cards here.
 *
 * Images: place files in /public/projects/ and set imageUrl to "/projects/filename.svg"
 * demoUrl: optional live demo link (omit if none)
 */
  
import type { Project } from "./types";

export const projectsSection = {
  label: "Projects",
  title: "Selected work",
};

export const projects: Project[] = [
  {
    id: "Clarity Board",
    title: "Clarity Board",
    description:
      "A browser-based augmentative communication workspace that helps patients recovering from encephalitis or neurological trauma communicate at the bedside using webcam eye-tracking to select large, easy-to-hit tiles.",
    technologies: ["TypeScript", "React", "React Router", "CSS"],
    imageUrl: "/projects/project-1.svg",
    featured: true,
  },
];
