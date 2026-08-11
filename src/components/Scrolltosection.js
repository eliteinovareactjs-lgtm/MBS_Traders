// Keep this in sync with the header's height (h-[70px] in Header.jsx).
export const HEADER_OFFSET = 70;

/**
 * Scrolls so the element with the given id lands just below the
 * sticky header, instead of hidden underneath it.
 */
export function scrollToId(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

  window.scrollTo({ top, behavior });
}