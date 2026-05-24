import Link from "next/link";
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
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20",
    variant === "primary" &&
      "bg-foreground text-background hover:bg-foreground/90",
    variant === "secondary" &&
      "border border-border text-foreground hover:bg-surface",
    variant === "ghost" && "text-muted hover:text-foreground",
    className
  );

  if (external || href.startsWith("http") || href.endsWith(".pdf")) {
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
