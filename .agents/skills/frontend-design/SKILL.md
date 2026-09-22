---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## This Portfolio's Architecture

When working in this repository, inspect the current route, nearby components, styles, and `git status` before editing. Preserve the existing React 19 + Vite application instead of introducing a second UI system.

- Keep the current atomic organization: `pages` compose routes, `organisms` own page sections, `molecules` render reusable content blocks, `atoms` hold small primitives, and `controllers` contain reusable behavior.
- Keep feature styles in `src/assets/styles`; extend the stylesheet already imported by the component when the feature has one.
- Put reusable content collections and shared links in `src/data`, separate from rendering code.
- Reuse the CSS variables in `src/App.css` and verify both `.body--light` and `.body--dark`. Add feature-scoped variables only when they express a real local concept.
- Reuse the installed stack and Font Awesome 4 already loaded by `index.html`. Do not add UI libraries, CSS-in-JS, Tailwind, or icon packages unless the user requests them or the existing stack cannot reasonably deliver the design.
- Write visible portfolio copy in natural Spanish with correct accents. Do not invent clients, outcomes, metrics, URLs, or project proof. Mark unavailable case studies honestly and keep technology secondary to the work's purpose.
- Preserve responsive behavior at desktop and mobile widths, visible keyboard focus, semantic landmarks, reduced-motion support, and readable contrast.

For visual changes, first identify the page's existing visual language and the specific pattern causing the generic result. Change that pattern deliberately rather than restyling unrelated screens. Validate with `bun run lint` and `bun run build` after implementation.

## Continuity First

For an existing interface, visual continuity outranks novelty. Before proposing a direction, capture the representative screen and write down its observable design contract:

- content width and page alignment;
- font family, heading/body sizes, weights, and line heights;
- spacing rhythm, card padding, radii, borders, and shadows;
- color roles in light and dark mode;
- interaction density and responsive behavior.

Use those values as constraints. Do not introduce a new display typeface, a radically wider layout, an unrelated card language, oversized marketing headlines, or a new aesthetic genre unless the user explicitly requests a broader redesign. A feature page should feel like the next screen of the same product.

When extending this portfolio specifically, use the 540 px centered content column and compact type scale established on the home page unless the content demonstrably needs more room. Reuse the home page's surface cards, 20–24 px radii, blue/teal accent roles, restrained shadows, and inherited Aptos/Segoe UI typography.

## Design Quality

- Make hierarchy clear through spacing, weight, and content order before adding decoration.
- Prefer one context-specific visual idea over collections of gradients, badges, icons, and effects.
- Keep portfolio copy concrete and human. Technology lists should support the project story, not become the main visual concept.
- Avoid repeated equal cards when the content has meaningful hierarchy, but do not break an established narrow-column rhythm simply to look unconventional.
- Motion should clarify hover, focus, or state changes. Keep it subtle and respect reduced-motion preferences.
- Verify the changed page beside the existing home page at the same viewport. If their scales or visual density feel unrelated, iterate before finishing.

The result should feel authored, polished, and native to the current product—not like a standalone design exercise.
