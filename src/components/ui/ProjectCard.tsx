import { ArrowUpRight, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-200 hover:border-foreground/15 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.imageUrl}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-medium text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-auto flex gap-4 pt-5">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                <Code className="h-3.5 w-3.5" />
                Code
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                Live
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
