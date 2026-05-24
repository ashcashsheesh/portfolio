/** Shared types for portfolio content. */

export type NavLink = {
  label: string;
  href: string;
};

export type SectionMeta = {
  label: string;
  title: string;
  description?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  /** Path under /public — e.g. "/projects/my-project.svg" */
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  timeframe: string;
  /** One short line only */
  description: string;
};

export type Honor = {
  title: string;
  year?: string;
};
