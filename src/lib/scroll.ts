export function scrollToSection(sectionId: string) {
  const id = sectionId.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
  return true;
}
