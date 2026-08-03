"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { sectionIds } from "@/data";

/** Matches scroll-mt-16 on sections (64px) plus fixed navbar (64px). */
const ACTIVATION_LINE = 64;
const ALIGN_TOLERANCE = 24;

export const HOME_SECTION_ID = "hero";

function isInHeroZone(): boolean {
  const aboutEl = document.getElementById("about");
  if (!aboutEl) return window.scrollY < 48;

  return aboutEl.getBoundingClientRect().top > ACTIVATION_LINE + ALIGN_TOLERANCE;
}

function getActiveSectionFromScroll(): string {
  if (sectionIds.length === 0) return HOME_SECTION_ID;

  if (isInHeroZone()) {
    return HOME_SECTION_ID;
  }

  const scrollBottom = window.innerHeight + window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const lastId = sectionIds[sectionIds.length - 1];
  const lastEl = lastId ? document.getElementById(lastId) : null;

  // Contact is short and often sits above the activation line at the page bottom.
  if (lastEl && scrollBottom >= docHeight - 48) {
    const lastRect = lastEl.getBoundingClientRect();
    if (lastRect.top < window.innerHeight) {
      return lastId;
    }
  }

  // Among sections that have crossed the activation line, pick the one
  // closest to it (the deepest / current section — works when scrolling up or down).
  let current = sectionIds[0];
  let closestTop = -Infinity;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const top = el.getBoundingClientRect().top;
    if (top <= ACTIVATION_LINE + ALIGN_TOLERANCE && top > closestTop) {
      closestTop = top;
      current = id;
    }
  }

  return current;
}

function isSectionAligned(id: string): boolean {
  if (id === HOME_SECTION_ID) {
    return isInHeroZone();
  }

  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top;
  const isLast = id === sectionIds[sectionIds.length - 1];
  const atPageBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;

  if (isLast && atPageBottom) {
    return el.getBoundingClientRect().top < window.innerHeight;
  }

  return Math.abs(top - ACTIVATION_LINE) <= ALIGN_TOLERANCE || top <= ACTIVATION_LINE;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(HOME_SECTION_ID);
  const clickedRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const syncFromScroll = useCallback(() => {
    if (clickedRef.current) {
      setActiveSection(clickedRef.current);
      return;
    }

    setActiveSection(getActiveSectionFromScroll());
  }, []);

  const releaseClickLock = useCallback(() => {
    clickedRef.current = null;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveSection(getActiveSectionFromScroll());
  }, []);

  useEffect(() => {
    syncFromScroll();

    const onScroll = () => syncFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [syncFromScroll]);

  const setActive = useCallback(
    (id: string) => {
      clickedRef.current = id;
      setActiveSection(id);

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const waitForScrollEnd = () => {
        if (isSectionAligned(id)) {
          releaseClickLock();
          return;
        }
        rafRef.current = requestAnimationFrame(waitForScrollEnd);
      };

      rafRef.current = requestAnimationFrame(waitForScrollEnd);

      // Fallback if smooth scroll is interrupted or unsupported.
      timeoutRef.current = setTimeout(releaseClickLock, 2000);
    },
    [releaseClickLock]
  );

  return { activeSection, setActive };
}
