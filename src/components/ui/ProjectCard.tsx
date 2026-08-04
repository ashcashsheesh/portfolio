"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/types";

const cardClassName =
  "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-accent/30 hover:shadow-card";

function CautionTape() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background/25" />
      <div className="absolute left-1/2 top-1/2 w-[160%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg]">
        <div
          className="border-y-[3px] border-neutral-900 py-2.5 shadow-md"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #facc15 0 14px, #171717 14px 28px)",
          }}
        >
          <div className="bg-yellow-400 py-1.5 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-neutral-900 sm:text-xs">
              Under Construction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {project.underConstruction && <CautionTape />}

      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.imageUrl}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
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

        {project.demoUrl && (
          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors duration-300 group-hover:text-accent">
              <ArrowUpRight className="h-3.5 w-3.5" />
              Visit site
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (project.demoUrl) {
    return (
      <motion.a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cardClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cardClassName}
    >
      {content}
    </motion.article>
  );
}
