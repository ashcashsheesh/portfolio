"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ICON_MS = 300;
const EASING = "ease-in-out";

type ThemeToggleProps = {
  className?: string;
};

function slidePair(
  outgoing: HTMLElement,
  incoming: HTMLElement,
  toDark: boolean
) {
  const outY = toDark ? "-100%" : "100%";
  const inY = toDark ? "100%" : "-100%";

  return [
    outgoing.animate(
      [
        { transform: "translateY(0%)", opacity: 1 },
        { transform: `translateY(${outY})`, opacity: 0 },
      ],
      { duration: ICON_MS, easing: EASING, fill: "forwards" }
    ),
    incoming.animate(
      [
        { transform: `translateY(${inY})`, opacity: 0 },
        { transform: "translateY(0%)", opacity: 1 },
      ],
      { duration: ICON_MS, easing: EASING, fill: "forwards" }
    ),
  ];
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sunRef = useRef<HTMLSpanElement>(null);
  const moonRef = useRef<HTMLSpanElement>(null);
  const lightLabelRef = useRef<HTMLSpanElement>(null);
  const darkLabelRef = useRef<HTMLSpanElement>(null);
  const busyRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const onToggle = () => {
    if (!mounted || busyRef.current) return;

    const sun = sunRef.current;
    const moon = moonRef.current;
    const lightLabel = lightLabelRef.current;
    const darkLabel = darkLabelRef.current;
    if (!sun || !moon || !lightLabel || !darkLabel) return;

    const nextIsDark = !document.documentElement.classList.contains("dark");
    const nextTheme = nextIsDark ? "dark" : "light";

    busyRef.current = true;

    // WAAPI — survives next-themes `disableTransitionOnChange` (kills CSS transitions).
    const outgoingIcon = nextIsDark ? sun : moon;
    const incomingIcon = nextIsDark ? moon : sun;
    const outgoingLabel = nextIsDark ? lightLabel : darkLabel;
    const incomingLabel = nextIsDark ? darkLabel : lightLabel;

    const animations = [
      ...slidePair(outgoingIcon, incomingIcon, nextIsDark),
      ...slidePair(outgoingLabel, incomingLabel, nextIsDark),
    ];

    document.documentElement.classList.toggle("dark", nextIsDark);
    setTheme(nextTheme);

    void Promise.all(animations.map((a) => a.finished))
      .catch(() => {})
      .then(() => {
        for (const anim of animations) {
          anim.commitStyles();
          anim.cancel();
        }
        setIsDark(nextIsDark);
        busyRef.current = false;
      });
  };

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border border-border/80 px-2.5 text-xs text-muted transition-colors duration-200 hover:border-accent/30 hover:text-foreground",
        className
      )}
    >
      <span className="relative inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden">
        <span
          ref={sunRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: isDark ? "translateY(-100%)" : "translateY(0%)",
            opacity: isDark ? 0 : 1,
          }}
        >
          <Sun className="h-3.5 w-3.5" />
        </span>
        <span
          ref={moonRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: isDark ? "translateY(0%)" : "translateY(100%)",
            opacity: isDark ? 1 : 0,
          }}
        >
          <Moon className="h-3.5 w-3.5" />
        </span>
      </span>

      <span className="relative hidden h-4 overflow-hidden sm:inline-block">
        <span className="invisible inline-block" aria-hidden="true">
          Light
        </span>
        <span
          ref={lightLabelRef}
          className="absolute inset-0 flex items-center"
          style={{
            transform: isDark ? "translateY(-100%)" : "translateY(0%)",
            opacity: isDark ? 0 : 1,
          }}
        >
          Light
        </span>
        <span
          ref={darkLabelRef}
          className="absolute inset-0 flex items-center"
          style={{
            transform: isDark ? "translateY(0%)" : "translateY(100%)",
            opacity: isDark ? 1 : 0,
          }}
        >
          Dark
        </span>
      </span>
    </button>
  );
}
