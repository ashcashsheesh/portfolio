/**
 * Projects section — edit section title and all project cards here.
 *
 * Images: place files in /public/projects/ and set imageUrl to "/projects/filename.svg"
 * demoUrl: live site URL — the whole card opens it in a new tab (omit if none)
 */
  
import type { Project } from "./types";

export const projectsSection = {
  label: "Projects",
  title: "Selected work",
};

export const projects: Project[] = [
  {
    id: "clarity-board",
    title: "Clarity Board",
    description:
      "A browser-based augmentative communication workspace that helps patients recovering from encephalitis or neurological trauma communicate at the bedside using webcam eye-tracking to select large, easy-to-hit tiles.",
    technologies: ["TypeScript", "React", "React Router", "CSS"],
    imageUrl: "/projects/project-1.svg",
    featured: true,
    demoUrl: "https://clarity-board-three.vercel.app/",
  },
  {
    id: "daily-dose-of-god",
    title: "Daily Dose of God",
    description:
      "A calm, daily spiritual companion built with Expo/React Native for mobile and web. Pick how you're feeling — anxious, sad, overwhelmed, and more — and the app surfaces a relevant Scripture, cycling through verses over time so you always get something fresh.",
    technologies: ["Expo", "React Native", "TypeScript"],
    imageUrl: "/projects/project-2.svg",
    featured: true,
    demoUrl: "https://daily-dose-of-god.vercel.app/",
  },
  {
    id: "covenant-apparel",
    title: "Covenant Apparel",
    description:
      "A mission-driven Christian clothing brand where 100% of profits go to churches and gospel-centered ministries. Clean designs, a focused shop, and the UNASHAMED collection — built to glorify God and strengthen the Church rather than chase typical fashion.",
    technologies: ["E-commerce", "Web"],
    imageUrl: "/projects/project-3.svg",
    featured: true,
    demoUrl: "https://covenant-apparel.vercel.app/",
  },
];
