import Link from "next/link";
import { personal, sections, social } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Contact() {
  const { contact: sectionMeta } = sections;

  return (
    <SectionWrapper id="contact" className="border-t border-border/60">
      <SectionHeader label={sectionMeta.label} title={sectionMeta.title} />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={`mailto:${personal.email}`}
          className="text-sm text-foreground transition-colors hover:text-muted"
        >
          {personal.email}
        </Link>

        <div className="flex gap-6 text-sm text-muted">
          <Link
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
