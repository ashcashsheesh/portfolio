/**
 * Portfolio projects — the primary showcase section.
 * EDIT: Add projects with title, short description, tags, links, and thumbnail.
 *
 * Images: place files in /public/projects/ and reference as "/projects/filename.svg"
 */

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "attention-study",
    title: "Attention & Distraction Study",
    description: "Survey research on notification frequency and focus during study sessions.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    imageUrl: "/projects/project-1.svg",
    githubUrl: "https://github.com/your-username/attention-study",
    featured: true,
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    description: "Minimal web app for tracking habits with brief reflection prompts.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/project-2.svg",
    githubUrl: "https://github.com/your-username/habit-tracker",
    demoUrl: "https://your-demo.vercel.app",
    featured: true,
  },
  {
    id: "nlp-sentiment",
    title: "Sentiment Explorer",
    description: "Tool for visualizing sentiment patterns in short text samples.",
    technologies: ["Python", "Hugging Face", "Streamlit"],
    imageUrl: "/projects/project-3.svg",
    githubUrl: "https://github.com/your-username/sentiment-explorer",
    featured: true,
  },
  {
    id: "ux-audit",
    title: "Platform UX Audit",
    description: "Heuristic evaluation and redesign proposal for a learning platform.",
    technologies: ["Figma", "User Research"],
    imageUrl: "/projects/project-4.svg",
    demoUrl: "https://figma.com/file/your-file",
  },
  {
    id: "research-summary",
    title: "Cognitive Load — Summary",
    description: "Concise synthesis of cognitive load theory for instructional design.",
    technologies: ["LaTeX", "Research"],
    imageUrl: "/projects/project-5.svg",
  },
];
