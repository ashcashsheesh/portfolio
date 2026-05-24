import { academics, sections } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Academics() {
  const { academics: sectionMeta } = sections;

  return (
    <SectionWrapper id="academics" className="border-t border-border/60 py-16 md:py-20">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">GPA</p>
          <p className="mt-2 text-sm text-foreground">{academics.gpa}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            AP Coursework
          </p>
          <ul className="mt-2 space-y-1">
            {academics.apCourses.map((course) => (
              <li key={course} className="text-sm text-muted">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Honors & Awards
          </p>
          <ul className="mt-2 space-y-1">
            {academics.honors.map((honor) => (
              <li key={honor.title} className="text-sm text-muted">
                {honor.title}
                {honor.year && (
                  <span className="text-muted/70"> · {honor.year}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
