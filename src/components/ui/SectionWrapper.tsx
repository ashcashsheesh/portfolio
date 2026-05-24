import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      <div className={cn("mx-auto max-w-6xl px-6 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
