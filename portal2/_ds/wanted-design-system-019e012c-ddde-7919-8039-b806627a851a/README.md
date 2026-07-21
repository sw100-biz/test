# Wanted Design System

A design system distilled from **Wanted Lab's** public design library — *"Wanted Design System (Community)"* — created by the Wanted product design team and released under **CC BY 4.0**.

Wanted is a Korean career platform (워티드) that runs a portfolio of products: the core **Wanted** job-matching service, **Wanted Space** (for company branding/recruiting pages), **Wanted Gigs** (freelance), **Wanted Agent** (AI hiring tools), and **LaaS** (Login-as-a-Service / OneID). The system is bilingual (Korean primary, English secondary), built mobile-first, and ships with both light and dark themes.

> *"오픈 소스는 우리가 일하는 환경을 더욱 풍요롭고 생산적으로 만들어주는 핵심이라고 믿습니다."*
> "We believe that open source is essential in making our work environment richer and more productive."
> — Wanted Design Team, distributed under CC BY 4.0

## Source materials

- **Primary source:** Wanted Design System (Community) Figma file — mounted as a virtual filesystem in this project. 25 pages, 36 frames, 1310 local components, 1500+ icon variants.
- **Brand site:** wanted.co.kr • wantedlab.com
- Pretendard JP typeface — github.com/orioncactus/pretendard
- Wanted Sans typeface — github.com/wanteddev/wanted-sans (the company's own open-source display face)

The Figma file is **read-only** and is the single source of truth. Where the JSX pseudocode and a screenshot disagreed, JSX values were used.

---

## Index

| File / folder | What it contains |
|---|---|
| `README.md` | This document — context, content + visual foundations, iconography, manifest. |
| `SKILL.md` | Agent-skill metadata; loadable as a Claude Code skill. |
| `colors_and_type.css` | All design tokens — colors (atomic + semantic, light + dark), typography scale, spacing, radii, shadows, grid. |
| `assets/logo/` | Wanted, Wanted Space, Wanted Gigs, LaaS, OneID logos as SVGs. |
| `assets/icons/` | Wanted's 200+ outline/fill icon set (currently substituted, see Iconography). |
| `preview/` | HTML cards rendered in the **Design System** tab — palettes, type specimens, component states. |
| `ui_kits/wanted-web/` | Hi-fi recreation of the Wanted job-discovery web app. |
| `ui_kits/wanted-mobile/` | Hi-fi recreation of the Wanted mobile app (iOS frame). |

---

## Content fundamentals

**Bilingual, Korean-first.** Almost every label has a Korean primary and an English secondary (often shown stacked or side-by-side). Headings frequently pair an English term in display weight with a Korean translation in body weight: *"Looking Forward / 기대하며"*. When designing a Wanted surface, write Korean first, then add an English subtitle if the surface is documentation or marketing.

**Tone: warm-professional, plain, second-person.** Direct address (*"feel free to share your feedback"*), short declarative sentences. No marketing exclamation points; no jargon. Korean uses the `-합니다` polite-formal register consistently.

**Casing.** Section titles are Title Case in English, sentence case otherwise. Korean uses regular orthography. Tokens use `kebab-case-with-camelCase-segments`: `color-semantic-background-elevated-normal`, `color-global-coolNeutral-100`. UI button copy is short and verb-led: "컴포넌트 보기" (View Component), "Apply", "Save".

**No emoji** in product UI. The system relies entirely on its custom icon set (see Iconography). Marketing surfaces occasionally use a single accent illustration but never strings of emoji.

**The vibe** is *Apple HIG meets Toss*: heavy reliance on neutral whites and near-blacks, generous whitespace, one calm primary blue. It feels like a tool, not a campaign. Information density is moderate — comfortable for long reading sessions on mobile.

**Specific copy examples lifted from the file:**
- Section opener: *"파운데이션은 사용자 인터페이스를 그리는 중요한 기반으로, 컬러, 타이포그래피, 아이콘, 그리드 등을 포함합니다."* ("Foundation is the essential base for drawing user interfaces, including color, typography, icons, and grid.")
- Button: *"컴포넌트 보기"* (View Component)
- Empty state / fallback: *"새로운 개선 의견은 언제나 환영합니다."* ("New improvement opinions are always welcome.")

---

## Visual foundations

### Color
Two layers: a **global palette** (11 hues × ~11 steps + neutral and coolNeutral scales) and a **semantic layer** (`primary`, `label`, `background`, `line`, `status`, `interaction`, `static`, `inverse`, `accent`). Product code references semantic tokens only; the palette exists for the system to draw from.

- **Primary blue**: `#0066FF` (`color-global-blue-600`). The single brand colour. Used sparingly — for primary CTAs, links, focused inputs, and the subtle "목차" (table of contents) text style.
- **Foreground**: `#171719` near-black. Pure black is reserved for dividers/rules and rare emphasis.
- **Surfaces**: `#ffffff` is the canvas. Cards sit directly on it with a 1px hairline at `rgba(112,115,124,0.22)`. There is **no card-on-card shadow** in the default skin — borders do all the elevation work, except for popovers/modals which use `--shadow-emphasize`.
- **Status**: green `#00BF40`, red `#FF4242`, orange `#FF9B00` — used for feedback, never decoration.
- **Accent backgrounds**: tinted backgrounds at ~5–8% opacity for badges/callouts. Never a full-saturation fill behind text.

### Type
- **Pretendard JP** is *the* product face — it covers Korean, Japanese, and Latin in one consistent metric. Used at every size from caption (11px) to display (56px). Weights: Regular 400, Medium 500, SemiBold 600, Bold 700.
- **Wanted Sans** is the company's own display face — used sparingly for very large hero numbers and brand wordmarks.
- The scale is a *visually-spaced* ladder, not a strict modular scale: 11→12→13→14→15→16→17→18→20→22→24→28→36→56. Every size has its own letter-spacing tuned tight (negative tracking on display, slightly positive on body).
- Korean line-height is 1.5 for body, 1.33–1.36 for headings. Letter spacing leans slightly negative on headings (`-0.024em`).

### Spacing & layout
- 4px base unit. The most-used values are **16, 24, 32, 48, 64, 128**.
- Three breakpoints: **mobile 4-col / tablet 8-col / desktop 12-col**, with margins 20/32/80px and gutters 16/24/24px.
- Mobile safe-areas are *first-class tokens* (status: 44 iOS / 24 Android; bottom: 34 iOS / 48 Android), surfaced as variables in addition to `env(safe-area-inset-*)`.
- Cards use **32px corner radius and 64px internal padding** at the documentation scale; product UI uses 16/24px radii with 16/20/24px padding.

### Backgrounds, imagery, decoration
- No gradient backgrounds in product UI. Marketing surfaces use **flat blocks of accent colour** (lavender, mint, peach) as section dividers — never gradients.
- No grain, noise, or texture overlays.
- No hand-drawn illustration. When illustration is needed, it's geometric/flat with the brand blue + a single accent.
- Photography is occasionally used in marketing — warm, natural light, real people, no heavy filters.

### Animation, hover, press
- Motion is **subtle and short**. Standard duration ≈ 200ms with `ease-out`. No bounce, no parallax.
- **Hover**: backgrounds lighten by ~4% (neutral surfaces) or shift one shade darker (filled buttons). Outlined buttons fill the border colour at 5% opacity.
- **Press**: filled buttons shift one shade darker again (e.g. blue-600 → blue-700) and slightly compress (scale 0.98). No elaborate ripple.
- **Focus**: 2px outer ring at `--color-primary-normal` with a 2px white inset gap.
- **Transitions** ride `cubic-bezier(0.4, 0, 0.2, 1)`.

### Borders, shadows, transparency
- Borders are 1px hairlines at `rgba(112,115,124,0.22)` — the system's signature seam. They appear on cards, inputs, dividers between rows.
- Shadows are reserved for floating elements: popovers, dropdowns, modals, toasts. Three steps: `emphasize` (popovers), `strong` (modals), `heavy` (toasts).
- Transparency is used in two specific places: (1) the label/foreground scale uses alpha — `rgba(55,56,60,0.61)` etc — so text colour adapts automatically across light/dark, (2) accent backgrounds use 5–18% alpha for a soft tint.
- No backdrop blur in the base system.

### Corner radii
4 → 8 → 12 → 16 → 24 → 32 → full. Buttons are 8 (small) / 12 (medium) / pill (large action). Cards are 16 in product, 32 in documentation. Inputs are 8.

### Cards
A card is **white surface + 1px border + radius 16/24** with no shadow. Internal padding is the card's most expressive value — generous (32–64px) on documentation, tight (16–20px) in product lists.

---

## Iconography

The Wanted icon system is a custom **outline + fill** pair: every icon ships in a no-fill stroke variant and a filled variant (`Fill=False` / `Fill=True`). Strokes are uniform at ~1.5px on a 24px grid; some icons have a `Thick` variant at 2px. Icons live in the Figma library as components named `Name=chevronRightTightSmall, Tight=True, Thick=False, Small=True` etc.

Categories observed:
- **Chrome:** chevron, close, check, plus, minus, more, search
- **Status:** circle, circleFill, circleDot, squareCheck, info, warning
- **Navigation tabs:** recruit, career, social, mypage, menu (each with active/inactive)
- **Brand logos:** Apple / Google / Facebook (auth)
- **Domain:** location, pin, ticket, and ~150 more

**No emoji and no Unicode characters** are used as icons. **No icon font** — every icon is a SVG component. Default colour is `currentColor` so the icon inherits the surrounding text colour.

**Substitution flagged.** The 1500+ Wanted icons live as deeply-nested Figma components; pulling them all out cleanly is a follow-up. For now, this kit substitutes the closest open-source match — **[Lucide](https://lucide.dev)** at 1.5px stroke / 24px grid. Lucide and Wanted's outline icons are nearly indistinguishable for prototyping. UI kits load Lucide from CDN.

> **Action for the user:** if you need the actual Wanted icon SVGs in this project, please flag and I will run a focused export pass against `/1-Theme/components/Name*` — there are too many to copy blind without prioritisation.

---
