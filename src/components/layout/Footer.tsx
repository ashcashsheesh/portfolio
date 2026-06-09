import Link from "next/link";
import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted sm:flex-row sm:px-8">
        <p>© {year} {personal.name}</p>
        <Link
          href={`mailto:${personal.email}`}
          className="transition-colors duration-300 hover:text-accent"
        >
          {personal.email}
        </Link>
      </div>
    </footer>
  );
}
