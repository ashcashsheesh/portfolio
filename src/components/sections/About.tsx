import { overview } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/Motion";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label={overview.label} title={overview.title} />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <StaggerChildren className="space-y-4">
          {overview.paragraphs.map((paragraph, index) => (
            <StaggerItem
              key={index}
              className="text-sm leading-relaxed text-muted sm:text-base"
            >
              {paragraph}
            </StaggerItem>
          ))}
        </StaggerChildren>

        {overview.focusAreas.length > 0 && (
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              Focus
            </p>
            <ul className="flex flex-wrap gap-2">
              {overview.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-accent/40"
                >
                  {area}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </div>
    </SectionWrapper>
  );
}
