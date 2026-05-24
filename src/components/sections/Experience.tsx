import { experience, sections } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Experience() {
  const { experience: sectionMeta } = sections;

  return (
    <SectionWrapper id="experience" className="border-t border-border/60">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <div className="divide-y divide-border">
        {experience.map((entry) => (
          <article
            key={entry.id}
            className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <h3 className="text-sm font-medium text-foreground">{entry.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{entry.organization}</p>
              <p className="mt-2 text-sm text-muted/80">{entry.description}</p>
            </div>
            <p className="text-xs text-muted sm:text-right sm:pt-0.5">{entry.timeframe}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
