import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm text-muted">{description}</p>
      )}
    </div>
  );
}
