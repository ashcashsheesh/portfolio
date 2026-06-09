import Link from "next/link";
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
        <Link
          href={`mailto:${personal.email}`}
          className="text-sm text-foreground transition-colors duration-300 hover:text-accent"
        >
          {personal.email}
        </Link>
      </FadeIn>
    </SectionWrapper>
  );
}
