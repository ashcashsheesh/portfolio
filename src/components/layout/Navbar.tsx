"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation, personal } from "@/data";
import { HOME_SECTION_ID, useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const navActiveClass =
  "font-medium text-accent shadow-[0_0_16px_-2px_var(--accent-muted)]";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection, setActive } = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setActive(sectionId);
    setMobileOpen(false);
  };

  const showBlur = scrolled || mobileOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Blur layer — isolated from nav content to avoid scroll glitches */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-background/75 backdrop-blur-xl backdrop-saturate-150",
            "transition-opacity duration-300 ease-out",
            showBlur ? "opacity-100" : "opacity-0"
          )}
        />

        <nav
          className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium tracking-tight transition-all duration-200",
              activeSection === HOME_SECTION_ID
                ? navActiveClass
                : "text-foreground hover:text-accent"
            )}
            onClick={(event) => handleNavClick(event, HOME_SECTION_ID)}
          >
            {personal.name}
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, sectionId)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-all duration-200",
                    isActive ? navActiveClass : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-accent md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm md:hidden"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 md:hidden",
          "transition-[opacity,transform] duration-200 ease-out",
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-background/80 backdrop-blur-xl backdrop-saturate-150"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 sm:px-8">
          {navigation.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, sectionId)}
                className={cn(
                  "rounded-md px-4 py-3 text-sm transition-all duration-200",
                  isActive ? navActiveClass : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
