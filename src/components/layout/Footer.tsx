import Link from "next/link";
import { personal, social } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted sm:flex-row sm:px-8">
        <p>© {year} {personal.name}</p>
        <div className="flex items-center gap-6">
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
          <Link
            href={`mailto:${social.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
