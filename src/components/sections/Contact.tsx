import { personal, sections } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeIn } from "@/components/ui/Motion";

export function Contact() {
  const { contact: sectionMeta } = sections;

  return (
    <SectionWrapper id="contact" className="border-t border-border/60">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <FadeIn>
        <div className="flex flex-col gap-2 text-sm text-foreground">
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
