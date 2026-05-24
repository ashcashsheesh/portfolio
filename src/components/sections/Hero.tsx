import { personal, social } from "@/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[85vh] scroll-mt-0 flex-col justify-center pt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {personal.name}
        </h1>
        <p className="mt-4 max-w-md text-base text-muted sm:text-lg">
          {personal.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={personal.resumeUrl} variant="primary" external>
            Resume
          </Button>
          <Button href={social.github} variant="secondary" external>
            GitHub
          </Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
