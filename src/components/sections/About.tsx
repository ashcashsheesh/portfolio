import { personal, sections } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  const { about: sectionMeta } = sections;

  return (
    <SectionWrapper id="about">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {personal.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {personal.focusAreas.length > 0 && (
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Focus
            </p>
            <ul className="flex flex-wrap gap-2">
              {personal.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-border px-3 py-1.5 text-xs text-foreground"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
