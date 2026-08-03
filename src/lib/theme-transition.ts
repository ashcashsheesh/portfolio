const DURATION_MS = 900;
const EASING = "ease-out";

type ThemeName = "light" | "dark";

type RunThemeTransitionOptions = {
  nextTheme: ThemeName;
  /** Button center X in viewport coordinates */
  originX: number;
  /** Button center Y in viewport coordinates */
  originY: number;
  /** Called after the wipe finishes (or immediately for reduced-motion / no VT) */
  onComplete: () => void;
};

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function supportsViewTransitions(): boolean {
  return typeof document.startViewTransition === "function";
}

function coverRadius(x: number, y: number): number {
  return Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );
}

const SCROLL_KEYS = new Set([
  " ",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "PageUp",
  "PageDown",
  "Home",
  "End",
]);

/** Freeze scroll so View Transition snapshots stay aligned with the viewport. */
function lockScroll(): () => void {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const { documentElement: html, body } = document;

  const prevHtmlOverflow = html.style.overflow;
  const prevBodyOverflow = body.style.overflow;
  const prevHtmlOverscroll = html.style.overscrollBehavior;
  const prevBodyOverscroll = body.style.overscrollBehavior;

  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  html.style.overscrollBehavior = "none";
  body.style.overscrollBehavior = "none";

  const prevent = (event: Event) => {
    event.preventDefault();
  };

  const preventKey = (event: KeyboardEvent) => {
    if (SCROLL_KEYS.has(event.key)) {
      event.preventDefault();
    }
  };

  const keepPinned = () => {
    if (window.scrollX !== scrollX || window.scrollY !== scrollY) {
      window.scrollTo(scrollX, scrollY);
    }
  };

  window.addEventListener("wheel", prevent, { passive: false });
  window.addEventListener("touchmove", prevent, { passive: false });
  window.addEventListener("keydown", preventKey, { passive: false });
  window.addEventListener("scroll", keepPinned, { passive: true });

  return () => {
    window.removeEventListener("wheel", prevent);
    window.removeEventListener("touchmove", prevent);
    window.removeEventListener("keydown", preventKey);
    window.removeEventListener("scroll", keepPinned);

    html.style.overflow = prevHtmlOverflow;
    body.style.overflow = prevBodyOverflow;
    html.style.overscrollBehavior = prevHtmlOverscroll;
    body.style.overscrollBehavior = prevBodyOverscroll;

    window.scrollTo(scrollX, scrollY);
  };
}

/**
 * Circular theme wipe from (originX, originY).
 * Only toggles `html.dark` inside the view transition — sync React/next-themes in onComplete.
 */
export async function runThemeTransition({
  nextTheme,
  originX,
  originY,
  onComplete,
}: RunThemeTransitionOptions): Promise<void> {
  const root = document.documentElement;
  const wantDark = nextTheme === "dark";

  const applyClass = () => {
    root.classList.toggle("dark", wantDark);
  };

  if (!supportsViewTransitions() || prefersReducedMotion()) {
    applyClass();
    onComplete();
    return;
  }

  const unlockScroll = lockScroll();
  const transition = document.startViewTransition(applyClass);

  try {
    await transition.ready;

    const radius = coverRadius(originX, originY);

    const animation = root.animate(
      {
        clipPath: [
          `circle(0px at ${originX}px ${originY}px)`,
          `circle(${radius}px at ${originX}px ${originY}px)`,
        ],
      },
      {
        duration: DURATION_MS,
        easing: EASING,
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    await Promise.all([transition.finished.catch(() => {}), animation.finished]);
  } catch {
    // Transition aborted or unsupported mid-flight — class already applied.
  } finally {
    unlockScroll();
    onComplete();
  }
}
