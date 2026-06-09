import { projects, projectsSection } from "@/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerChildren, StaggerItem } from "@/components/ui/Motion";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="border-t border-border/60 bg-surface/40">
      <SectionHeader label={projectsSection.label} title={projectsSection.title} />

      <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerChildren>

      {other.length > 0 && (
        <StaggerChildren className="mt-5 grid gap-5 sm:grid-cols-2">
          {other.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      )}
    </SectionWrapper>
  );
}
