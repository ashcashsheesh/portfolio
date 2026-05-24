import { projects, sections } from "@/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Projects() {
  const { projects: sectionMeta } = sections;
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="border-t border-border/60 bg-surface/30">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {other.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {other.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
