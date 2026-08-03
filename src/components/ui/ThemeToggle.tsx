"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { easeOut } from "@/lib/motion";
import { runThemeTransition } from "@/lib/theme-transition";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

/** 1 = switching to dark, -1 = switching to light */
type ToggleDirection = 1 | -1;

const iconTransition = { duration: 0.28, ease: easeOut };

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [displayDark, setDisplayDark] = useState(false);
  const [direction, setDirection] = useState<ToggleDirection>(1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const busyRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    setDisplayDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (!mounted || busyRef.current || !buttonRef.current) return;

    // DOM class is the source of truth for the next flip (reliable on first click).
    const currentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme = currentlyDark ? "light" : "dark";
    const nextDirection: ToggleDirection = nextTheme === "dark" ? 1 : -1;

    const rect = buttonRef.current.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    busyRef.current = true;

    // Icon / label update immediately; page wipe syncs next-themes after.
    setDirection(nextDirection);
    setDisplayDark(nextTheme === "dark");

    void runThemeTransition({
      nextTheme,
      originX,
      originY,
      onComplete: () => {
        setTheme(nextTheme);
        busyRef.current = false;
      },
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={displayDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border border-border/80 px-2.5 text-xs text-muted transition-colors duration-200 hover:border-accent/30 hover:text-foreground",
        className
      )}
    >
      <span className="relative inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden">
        {mounted && (
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {displayDark ? (
              <motion.span
                key="sun"
                custom={direction}
                variants={{
                  enter: (dir: ToggleDirection) => ({
                    y: dir === 1 ? -14 : 14,
                    opacity: 0,
                  }),
                  center: { y: 0, opacity: 1 },
                  exit: (dir: ToggleDirection) => ({
                    y: dir === -1 ? -14 : 14,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={iconTransition}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-3.5 w-3.5" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                custom={direction}
                variants={{
                  enter: (dir: ToggleDirection) => ({
                    y: dir === 1 ? -14 : 14,
                    opacity: 0,
                  }),
                  center: { y: 0, opacity: 1 },
                  exit: (dir: ToggleDirection) => ({
                    y: dir === -1 ? -14 : 14,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={iconTransition}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-3.5 w-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </span>

      <span className="hidden sm:inline">{displayDark ? "Light" : "Dark"}</span>
    </button>
  );
}
