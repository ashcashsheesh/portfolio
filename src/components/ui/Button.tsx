"use client";

import Link from "next/link";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
    variant === "primary" &&
      "bg-foreground text-background hover:bg-foreground/90 hover:shadow-glow",
    variant === "secondary" &&
      "border border-border text-foreground hover:border-accent/40 hover:text-accent",
    variant === "ghost" && "text-muted hover:text-accent",
    className
  );

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={styles}
        onClick={(event) => {
          event.preventDefault();
          scrollToSection(href);
        }}
      >
        {children}
      </a>
    );
  }

  if (external || href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={href.endsWith(".pdf") ? "_blank" : external ? "_blank" : undefined}
        rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
