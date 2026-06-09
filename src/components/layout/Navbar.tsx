"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, personal } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

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

  const handleNavClick = () => setMobileOpen(false);
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
          <Link
            href="#hero"
            className="text-sm font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-accent"
            onClick={handleNavClick}
          >
            {personal.name.split(" ")[0]}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "font-medium text-accent"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-accent md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm md:hidden"
          aria-hidden
          onClick={handleNavClick}
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
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "rounded-md px-4 py-3 text-sm transition-colors duration-200",
                  isActive
                    ? "font-medium text-accent"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
