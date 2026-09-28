---
version: alpha
name: Promptfolio-design-analysis
description: "An ultra-minimal white-canvas portfolio system that behaves more like a precisely typeset CV than a conventional portfolio site — a narrow centered content column, near-black Bricolage Grotesque headings and Inter text, oversized name display, uppercase micro-labels, fine gray rules, and almost no decorative color. Hierarchy comes from scale, spacing, alignment, and density rather than cards or imagery. The persistent contact header, copy-to-clipboard microinteraction, resume-like work rows, text-only project list, and subtle Framer appear/text effects make the site feel fast, editorial, recruiter-friendly, and deliberately machine-readable."

colors:
  primary: "#111111"
  on-primary: "#ffffff"
  ink: "#111111"
  ink-soft: "#2f2f2f"
  body: "#414141"
  muted: "#737373"
  muted-soft: "#9a9a9a"
  canvas: "#ffffff"
  surface-soft: "#f5f5f5"
  surface-soft-active: "#eeeeee"
  hairline: "#ececec"
  hairline-strong: "#dedede"
  inverse-canvas: "#111111"
  inverse-ink: "#ffffff"

typography:
  display-xl:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: 72px
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: -2.8px
  display-lg:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -1.4px
  title-lg:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: -0.25px
  title-md:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 550
    lineHeight: 1.35
    letterSpacing: -0.10px
  body-lg:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: -0.15px
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.05px
  body-sm:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  label-uppercase:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 1.1px
    textTransform: uppercase
  nav-link:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.05px
  button:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  pill: 9999px
  full: 9999px

spacing:
  hair: 1px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  major: 128px

components:
  top-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: 24px 0
    position: sticky
  copy-button:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 10px
  copy-button-copied:
    backgroundColor: "{colors.surface-soft-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    label: Copied!
  hero-profile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 72px 0 0
  profile-eyebrow:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
  profile-meta-row:
    backgroundColor: transparent
    textColor: "{colors.ink-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 56px 0 24px
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
  section-label:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
  about-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 96px 0
  tool-group:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0 0 32px
  work-history-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px 0
  selected-work-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px 0
  project-title:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.none}"
  project-meta:
    backgroundColor: transparent
    textColor: "{colors.ink-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  external-link-arrow:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 96px 0 32px
---

## Overview

Promptfolio is a deliberately reductionist portfolio. It removes nearly every visual device that normally signals “portfolio template” — no hero image, no project thumbnails, no colored feature cards, no gradient surface, no decorative icon system, no floating glass panels. The public page is a **white document-like canvas** with one narrow centered column. It reads closer to a high-end résumé, editorial colophon, or Swiss information sheet than a conventional showcase site.

The central design move is typographic hierarchy. **Bricolage Grotesque** gives the hero name, titles, and section labels a distinct heading voice, while **Inter** keeps supporting statements, body copy, metadata, navigation, and controls calm and readable. The hero name is oversized and tightly tracked; work/project titles are compact semibold; section names collapse into tiny all-caps labels with expanded tracking.

The second defining move is **structural restraint**. A narrow ~760–780px content frame sits inside a full white viewport. Sections are separated by generous vertical intervals and 1px pale gray rules rather than card backgrounds. The About section introduces a left-label/right-content split; the Tools section turns that split into a label + 2×2 tool matrix; Work History and Selected Work then flatten into full-width list rows. The page gets denser as the visitor moves from identity → narrative → capabilities → evidence.

The header is not a conventional navigation bar. It is a persistent **identity/contact rail**: name at left, availability statement, slash divider, email address, and a compact `Copy` pill. The same contact grammar is repeated at the bottom of the page. This means the user is never far from the conversion action — copying the email — without introducing a loud CTA.

The template is built around five CMS collections — Profile, Tools, Work History, Portfolio, and Links — and the creator explicitly positions its semantic structure for recruiters, search engines, and AI content scrapers. That information architecture is part of the UX: content is intentionally plain, explicit, labeled, and machine-readable rather than hidden behind hover-only artwork or ambiguous cards.

**Key Characteristics:**
- Pure white `{colors.canvas}` is the dominant surface from top to bottom; the actual site does not use the dark stage visible around Framer Marketplace preview screenshots.
- Monochrome hierarchy: near-black ink, two gray text levels, pale gray rules, and one soft-gray interactive chip. There is no public-facing brand accent color.
- Bricolage Grotesque is the primary heading family; Inter is the secondary text family. Use variable font files where available.
- A narrow ~768px centered content frame gives the page a résumé/editorial density even on wide monitors.
- Oversized `{typography.display-xl}` name is the only truly large typographic moment; everything below becomes progressively quieter and more data-dense.
- Micro-labels are uppercase with expanded tracking. These labels act as navigational anchors without needing icons or colored tabs.
- The header remains visible while deeper sections are shown in official previews, indicating a sticky/persistent contact bar rather than a one-time masthead.
- The only pill-shaped public control is the email copy action; the rest of the visual system stays square and flat.
- Work history and project evidence are rendered as text-first rows with hairline separators, not cards.
- Project rows expose type, year, and a small northeast arrow (`↗`) on the right, communicating external navigation without adding button chrome.
- The live DOM exposes separate `Copy` and `Copied!` states for the email control.
- Framer's marketplace metadata lists **Appear Effects** and **Text Effects**; motion is present but deliberately subordinate to reading.

## Colors

> Source pages: promptfolio.framer.media (live site), framer.com/marketplace/templates/promptfolio/ (official listing + official preview images), framer.elliotli.dev/template/promptfolio (feature metadata). Hex values below are screen-calibrated reconstructions where the public Framer output does not expose design-token variables directly.

### Brand & Accent

Promptfolio's defining color decision is the absence of a conventional accent. The system is effectively black, white, and gray.

- **Primary / Ink** (`{colors.primary}` / `{colors.ink}` — #111111): Hero name, project titles, tool names, company names, email, links, section labels. Near-black rather than an obviously colored brand tone.
- **On Primary** (`{colors.on-primary}` — #ffffff): Defined for inverse applications, but the inspected public light theme does not use filled near-black primary CTA buttons.
- **No chromatic accent:** Do not introduce blue link color, green buttons, coral highlights, or gradient decoration. Links remain ink-colored and are differentiated structurally.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): Entire public page floor — header, hero, About, Tools, Work History, Selected Work, and footer.
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): The small email `Copy` chip. It is intentionally close to white so the button reads as a utility control, not a conversion CTA.
- **Surface Soft Active** (`{colors.surface-soft-active}` — #eeeeee): Suitable reconstruction for the transient `Copied!` state / pressed feedback while preserving the quiet monochrome hierarchy.
- **Hairline** (`{colors.hairline}` — #ececec): Section dividers, tool-group separators, work/project row separators.
- **Hairline Strong** (`{colors.hairline-strong}` — #dedede): Reserved for places that need a slightly stronger edge, such as sticky-header separation at small viewports.
- **Inverse Canvas / Ink** (`{colors.inverse-canvas}`, `{colors.inverse-ink}`): Utility inverse tokens only. They describe a possible dark variant, not the live Promptfolio page supplied for this extraction.

**Important:** The charcoal/black background and large drop shadow visible in Framer Marketplace showcase images belong to the **Marketplace presentation frame**, not the Promptfolio website. Do not reproduce that dark outer stage as part of the site's design system.

### Text

- **Ink** (`{colors.ink}` — #111111): Identity, headings, labels, primary links.
- **Ink Soft** (`{colors.ink-soft}` — #2f2f2f): Metadata that should still feel active/readable — availability, project type/year, dates.
- **Body** (`{colors.body}` — #414141): About copy, project descriptions, impact bullets.
- **Muted** (`{colors.muted}` — #737373): Current-role sentence, external arrow, de-emphasized metadata.
- **Muted Soft** (`{colors.muted-soft}` — #9a9a9a): Fine-print/copyright-level use only. The site avoids large areas of low-contrast text.

Hierarchy is created with **ink → body → muted**, not with color. Nothing on the public page needs a brand hue to communicate importance.

### Semantic

No public error/success/warning palette is visible on the portfolio itself. The creator's CMS screenshot shows a green status chip inside Framer's editor, but that is **Framer CMS UI**, not part of Promptfolio's visitor-facing design system. Do not extract that editor green into the website palette.

## Typography

### Font Family

- **Bricolage Grotesque** is the primary heading family for display text, project and work titles, and uppercase section/group labels. Fallback: `Arial, sans-serif`.
- **Inter** is the secondary text family for positioning statements, paragraphs, tool lists, metadata, navigation, and button labels. Fallback: `Arial, sans-serif`.
- The two-family pairing retains the restrained hierarchy: use scale, weight, tracking, and case to distinguish roles within each family.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.display-xl}` | 72px | 650 | 0.96 | -2.8px | Hero name (“Luca Marin”) |
| `{typography.display-lg}` | 48px | 600 | 1.00 | -1.4px | Large contact/email treatment if reused in footer or future CTA |
| `{typography.title-lg}` | 18px | 600 | 1.30 | -0.25px | Selected Work project titles |
| `{typography.title-md}` | 15px | 550 | 1.35 | -0.10px | Company + role emphasis, compact subheads |
| `{typography.body-lg}` | 18px | 400 | 1.42 | -0.15px | Hero positioning statement |
| `{typography.body}` | 14px | 400 | 1.55 | -0.05px | About paragraphs, project summaries, work bullets |
| `{typography.body-sm}` | 12px | 400 | 1.50 | 0 | Tool names, secondary rows |
| `{typography.caption}` | 11px | 400 | 1.40 | 0 | Dates, location/languages, project type/year |
| `{typography.label-uppercase}` | 10px | 500 | 1.35 | +1.1px | Section labels and tool-group labels |
| `{typography.nav-link}` | 12px | 400 | 1.25 | -0.05px | Sticky header, socials, email |
| `{typography.button}` | 11px | 500 | 1.0 | 0 | Copy / Copied! utility pill |

The exact production CSS values are not surfaced by the public crawler; the numerical scale above is reconstructed from the official high-resolution marketplace renders. Preserve the **ratios** even if implementation inspection later yields a 1–2px adjustment.

### Principles

- **Two families, clear roles.** Use Bricolage Grotesque for headings and Inter for supporting text; keep the hierarchy precise without adding another typeface.
- **The name is the only oversized statement.** The 72px hero establishes identity immediately; other sections deliberately step down rather than competing with it.
- **Labels are tiny and tracked out.** Uppercase micro-labels make the page feel designed without adding icons, bars, or colored section backgrounds.
- **Body copy is compact, not airy marketing copy.** The About section reads like a thoughtful professional bio; 14px-ish body with ~1.55 line height keeps it dense but legible.
- **Weight is controlled.** The hero and project titles carry 550–650 weight; most running text stays 400. Avoid 800/900 weight because it would make the restrained system feel blunt.
- **Tracking changes with scale.** Large text tightens significantly; micro-labels expand. This opposition is one of the strongest typographic signatures on the page.
- **No uppercase body copy.** Uppercase is reserved for navigational labels and category names.

### Note on Font Loading

Load Bricolage Grotesque and Inter as variable fonts when available so the specified weights render consistently. Keep the fallback stacks above and review line wrapping and tracking when a fallback is used.

## Layout

### Spacing System

- **Base unit:** 4px, expressed mainly as 8/12/16/24/32/48/96/128 intervals.
- **Tokens:** `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px · `{spacing.major}` 128px.
- Header vertical padding is approximately `{spacing.lg}` on desktop.
- Hero begins well below the header — roughly 64–80px of additional air before the uppercase role label.
- Hero title → tagline is tight (~16–20px); tagline → current-role sentence is tighter (~8–12px).
- Current-role line → metadata row opens substantially (~48–56px), creating a second rhythm inside the hero.
- Major section starts use roughly `{spacing.section}` (96px) after a divider or previous dense block.
- Work and project list rows use ~32px vertical padding with 1px hairlines between items.

### Grid & Container

- **Main content max width:** approximately **768px**, centered. This is unusually narrow for a portfolio and is a defining part of the visual identity.
- The header uses the same content width as the body; it does not stretch its internal content to the edges of the viewport.
- Wide desktop gutters are intentionally enormous. The blank white margins are part of the layout, not wasted space.
- **Hero:** single-column for title/copy; metadata row becomes a two-sided flex/grid line with location + language on the left and socials on the right.
- **About:** two-column editorial split. Left column holds the section label; right column holds three paragraphs. Visually, the content side is roughly two-thirds of the available width.
- **Tools:** three-column structure at the outer level — section label column + two equal tool-group columns. The four tool groups form a 2×2 matrix on the right.
- **Work History:** section label above a full-width chronological list. Job header line uses left/right alignment: company + slash + role on the left, date range on the right.
- **Selected Work:** full-width text list. Project title left, project type/year/arrow aligned right, description beneath.
- **Footer:** returns to the same identity/contact system as the top rail, followed by social links and a copyright/template-credit line.

### Whitespace Philosophy

Whitespace is the primary visual material. Promptfolio uses no card fill to create sections; instead, **space creates containment**. A 96px blank band carries more semantic weight than a rounded rectangle would in a conventional SaaS page.

There are three recurring whitespace scales:
1. **Micro** — 4–12px between related metadata fragments (slashes, dates, Copy button, role/status copy).
2. **Content** — 16–32px inside a narrative/list item.
3. **Section** — 96–128px around section transitions.

The narrow column amplifies this. Because there is so much outer white margin, even a 1px divider feels deliberate.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (default) | Pure white surface, no border, no shadow | Entire public page, hero, sections, footer |
| 0.5 (rule) | 1px `{colors.hairline}` | Section boundaries, list-row separators, tool separators |
| 1 (utility) | `{colors.surface-soft}` fill, pill shape, no shadow | `copy-button` only |
| Sticky separation | White surface + optional pale bottom rule when scrolling | Persistent top contact header |

Promptfolio does **not** use conventional elevation. No project card floats above the page; no hero frame casts a shadow; no glass layer sits over the canvas. The reading order is established by typography and whitespace alone.

The strong shadow beneath the white page in Framer Marketplace screenshots is part of Framer's template showcase composition. It must not be interpreted as a site-level box shadow.

### Decorative Depth

- **Hairline rhythm** is the main depth device. A faint horizontal line establishes a new plane without looking like a container.
- **Soft Copy pill** is the only raised-looking utility. Its contrast is intentionally minimal.
- **Northeast arrows** on project rows provide directional energy without illustration.
- **Slash separators (`/`)** are treated like typographic furniture: location/language, social links, company/role, and contact details all use punctuation instead of visual components.
- There are no public-facing images or illustrations on the inspected single-page site. The text itself is the portfolio artifact.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0px | Default — page sections, rows, rules |
| `{rounded.xs}` | 2px | Rare utility edge if needed |
| `{rounded.sm}` | 4px | Small system utility only |
| `{rounded.md}` | 8px | Optional compact feedback surfaces |
| `{rounded.pill}` | 9999px | Email `Copy` / `Copied!` chip |
| `{rounded.full}` | 9999px / 50% | Reserved; no public circular icon buttons observed |

The shape system is intentionally anti-card. If a new component can remain a flat row separated by whitespace/hairlines, it should. Rounded rectangles are not a general visual language here.

### Photography & Illustration Geometry

Promptfolio's public portfolio page is effectively **image-free**. This is not an omission — it is a design strategy.

- No portrait in the hero.
- No tool logos; tools are plain text.
- No company logos in Work History.
- No project thumbnails in Selected Work.
- No decorative illustrations in About.
- No background image or texture.

The Framer Marketplace screenshot showing the CMS editor is documentation of how the template is configured; it is not visitor-facing imagery and should never be recreated as a website section.

## Components

### Top Navigation

**`top-header`** (`{components.top-header}`) — A persistent contact/identity rail rather than a conventional navigation menu.
- Left: personal wordmark/name (`Luca Marin_` in the official render), compact and semibold.
- Right-side cluster: availability statement → slash separator → email address → `copy-button`.
- Uses `{typography.nav-link}` on `{colors.canvas}`.
- Internal width matches the main ~768px container.
- Official screenshots of different scrolled sections retain this header in the same top position, indicating sticky/persistent behavior.
- No “Home / About / Work” nav cluster is shown. The site chooses constant contact access over anchor-navigation chrome.
- A subtle bottom hairline may be introduced at scroll/sticky state; it should stay within `{colors.hairline}` / `{colors.hairline-strong}` and never become a dark border.

### Buttons

**`copy-button`** (`{components.copy-button}`) — The site's only obvious button.
- Background `{colors.surface-soft}`; text `{colors.ink}`; type `{typography.button}`.
- Small pill with ~7px vertical / 10px horizontal padding.
- Label is simply `Copy`.
- Placed immediately after the email address so the action is contextual rather than promotional.
- The control should copy the plain email address to the clipboard; do not copy `mailto:` markup or surrounding text.

**`copy-button-copied`** (`{components.copy-button-copied}`) — Feedback state exposed in the live DOM as `Copied!`.
- Text swaps from `Copy` → `Copied!`.
- Keep the same pill geometry; avoid dramatic success colors or toast notifications.
- The transient state may use `{colors.surface-soft-active}` to make feedback perceptible without breaking the monochrome system.
- Reset to `Copy` after a short delay. Exact production delay is not exposed by the crawler.

Promptfolio does not use a large filled “primary CTA” button. Introducing one would fundamentally change the tone.

### Hero / Profile

**`hero-profile`** (`{components.hero-profile}`) — The identity block.
- Starts with `{components.profile-eyebrow}`: `AI-FIRST PRODUCT DESIGNER`.
- Hero name uses `{typography.display-xl}` and near-black `{colors.ink}`.
- Positioning sentence (“I design products people understand and ship them faster with AI.”) uses `{typography.body-lg}`.
- Current-role/advisory sentence uses a smaller muted style.
- The hierarchy is vertical and left-aligned; no centered marketing hero composition.
- No visual media competes with the name.

**`profile-meta-row`** (`{components.profile-meta-row}`) — The low-contrast band beneath the hero copy.
- Left cluster: `Milan, Italy / English, Italian`.
- Right cluster: `X / LinkedIn / Dribbble / Behance`.
- Slash separators repeat the document/editorial grammar used elsewhere.
- Ends with `{components.divider}`; the same rule token structures list boundaries.
- Social links remain plain text; no social icons are used.

### About

**`about-section`** (`{components.about-section}`) — A label/content split.
- `{components.section-label}` renders `ABOUT` in the left grid column using `{typography.label-uppercase}`.
- Three compact paragraphs sit in the wider right column.
- No heading such as “About Me,” no portrait, no pull quote, no highlighted stats.
- The body text is the visual content; preserve paragraph breaks because they regulate reading density.
- The final sentence covers location/availability, reinforcing conversion intent without a CTA card.

### Tools

**`tool-group`** (`{components.tool-group}`) — One cell in the 2×2 capability matrix.
- Group headings use uppercase micro-label styling: `RESEARCH & DISCOVERY`, `DESIGN & PROTOTYPING`, `SHIPPING & BUILDING`, `WRITING & COMMUNICATION`.
- Each group lists three tools as plain text on separate lines.
- No tool icons, logos, badges, or pills.
- Top-row groups end with individual pale horizontal rules before the lower row, giving the matrix structure without enclosing cards.
- The left section label `TOOLS` occupies its own column, so the matrix begins offset to the right.
- The whole section ends in a wider hairline before Work History.

### Work History

**`work-history-item`** (`{components.work-history-item}`) — Resume-style chronological evidence row.
- Header line left: company name → slash → role title.
- Header line right: start month/year → hyphen → end month/year / `Present`.
- Company name carries stronger emphasis than the role; role remains readable but quieter.
- Three impact statements follow, set as plain running lines rather than icon bullets/cards.
- Items are separated by `{components.divider}`.
- Use specific impact text and numbers when available; the component is designed to reward scannable proof.
- Chronology runs newest → oldest.

The crawler exposes duplicate instances of some Work History content because Framer can render responsive variants in the DOM; the intended visual list is one instance per job, not duplicated rows.

### Selected Work

**`selected-work-row`** (`{components.selected-work-row}`) — Text-only external project link.
- First line: `{components.project-title}` left; `{components.project-meta}` right.
- `{components.project-title}` anchors the row while `{components.project-meta}` carries destination/year. Project meta format: `Type / Year ↗` (e.g., `Behance / 2026 ↗`).
- Description appears beneath in `{typography.body-sm}` / muted body color.
- Full-width pale rule separates rows.
- `{components.external-link-arrow}` is small, thin, and baseline-aligned — never a large icon button.
- The row itself should behave as the interaction target where possible, but the text must remain semantically understandable without hover.
- External destinations include Behance, Dribbble, or a live site; the metadata tells the visitor what will happen before clicking.

### Links & Punctuation

**`text-link`** (`{components.text-link}`) — Plain ink-colored text link.
- Used for email, social profiles, project destinations, and template credit.
- Do not recolor links blue.
- Underline is not part of the default visual treatment in the inspected renders.
- Focus indication should remain accessible in implementation even if not visually shown in the static preview.

**Slash separator** — A recurring non-tokenized typographic separator.
- Use a literal `/` with balanced inline spacing.
- Appears in location/language, socials, contact header, company/role, and project metadata.
- It is a brand-level rhythm device; replacing it with dots, vertical rules, or bullets changes the tone.

### Footer

**`footer`** (`{components.footer}`) — Repeats the identity/contact pattern rather than introducing a new visual language.
- Includes name, availability statement, email, and `copy-button` again.
- Social links repeat: X / LinkedIn / Dribbble / Behance.
- Copyright line (`© 2026 Luca Marin`) closes the content.
- Template credit (`Get Template Free`) appears at the bottom in the live site.
- Creator documentation describes the footer as containing a large email CTA; if the email is promoted at display scale in the actual Framer canvas, use `{typography.display-lg}` while preserving the same monochrome/no-button treatment.
- Footer stays white and flat; there is no dark “closing band.”

### Interaction & Motion

Promptfolio is officially tagged with **Appear Effects** and **Text Effects**. Motion should therefore be documented as part of the design, but it must remain understated enough that the site still reads as a document.

**Observed / source-confirmed interactions:**
- Sticky/persistent header remains accessible while deep sections are presented.
- `Copy` button has a distinct `Copied!` feedback state in the live DOM.
- Project destinations use a northeast external-link arrow (`↗`).
- Social/project links are external hyperlinks.
- Framer marketplace metadata confirms Appear Effects and Text Effects.

**Motion character:**
- Use opacity/short-distance translate reveals, not scale-heavy or springy entrances.
- Stagger may be applied at the row/group level, but should not turn the résumé structure into a showcase animation.
- Hero text can reveal first; section blocks can appear as they enter the viewport.
- Text effects should preserve legibility and semantic DOM text at all times; do not use scramble/glitch effects that conflict with recruiter/AI readability.
- Respect `prefers-reduced-motion` in implementation.

Exact duration, easing curve, delay, and per-element Framer effect settings are not exposed by the public text crawler or marketplace still images; they are intentionally called out again under Known Gaps rather than invented as production facts.

## Do's and Don'ts

### Do

- Keep the public page on `{colors.canvas}` white from top to bottom.
- Cap the primary content frame near 768px; the huge outer margins are essential to the editorial/resume feeling.
- Use Bricolage Grotesque for headings and section labels, and Inter for supporting text. Preserve hierarchy through weight, size, tracking, and case.
- Make the hero name dramatically larger than every other piece of text.
- Keep section labels tiny, uppercase, and letter-spaced.
- Use hairlines and whitespace instead of bordered cards.
- Preserve the left-label/right-content split in About and Tools.
- Keep tools as words, not logo badges.
- Keep work experience outcome-driven and aligned like a résumé: role left, dates right, evidence below.
- Preserve `Type / Year ↗` on Selected Work rows.
- Keep social links textual and separated by slashes.
- Keep the email copy action in both the persistent header and the closing contact/footer context.
- Implement `Copy` → `Copied!` as local feedback inside the same utility pill.
- Preserve semantic HTML/CMS structure; the template is intentionally optimized for human scanning and AI/search parsing.
- Keep motion quiet: appear/text effects should support scan order, never become the main visual event.

### Don't

- Don't add the dark Marketplace preview background or showcase shadow to the real site.
- Don't introduce a colorful accent just because the palette “feels too simple.” The lack of accent is a design decision.
- Don't convert Tools, Work History, or Selected Work into rounded cards.
- Don't add project thumbnails unless deliberately redesigning the system; the live template's text-only evidence is part of its identity.
- Don't use logo icons for tools or social links.
- Don't turn the Copy utility into a large primary button.
- Don't center the hero or About copy. The page is left-aligned and document-like.
- Don't make section labels larger than the content they index.
- Don't over-bold body copy; weight hierarchy is deliberately narrow.
- Don't replace slash separators with pills, dots, or pipes without a strong reason.
- Don't hide project metadata until hover; type/year/destination are visible by default.
- Don't use scroll-jacking, parallax spectacle, or springy card motion. It conflicts with the fast-scanning résumé UX.
- Don't duplicate responsive CMS rows even if the rendered DOM contains hidden desktop/mobile variants.

## Responsive Behavior

### Breakpoints

The exact Framer breakpoint values are not published in the accessible source. The system below reflects the visible desktop composition and Framer's common layout behavior; verify against the remix project before treating breakpoint numbers as production constants.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 810px (reconstructed) | Container becomes fluid with ~20–24px side padding; sticky contact header wraps/reduces; hero 72→44/48px; two-column About collapses; Tools matrix reduces; metadata rows wrap |
| Tablet | 810–1199px (reconstructed) | Narrow centered column remains; hero scales modestly; About label/content split can survive if width permits; Tools may remain 2 columns on content side |
| Desktop | ≥ 1200px (observed composition) | ~768px centered content frame; persistent horizontal contact header; 72px hero; About 2-column split; Tools label + 2×2 matrix; dates/project metadata right-aligned |
| Wide | > 1440px | Content width stays capped; additional viewport width becomes outer white margin rather than stretching lines |

### Touch Targets

- `copy-button` should reach at least ~40px effective tap height on touch layouts even if the desktop visual pill is smaller; increase invisible/outer hit area rather than making the chip visually loud.
- Selected Work rows should use the row as the click target where semantics permit, providing a much larger target than the tiny `↗` glyph.
- Social text links need at least ~44px effective vertical target spacing when they wrap/stack on mobile.
- Do not shrink 10–12px labels further on mobile; preserve readability and use layout collapse instead.

### Collapsing Strategy

- **Top header:** Desktop horizontal rail should wrap into a two-line or stacked contact cluster on narrow screens. Preserve name, email, and Copy action; availability text may move to its own row.
- **Hero:** Keep left alignment. Scale the display name down rather than wrapping it into an awkward three-line lockup.
- **Profile meta:** Location/languages and social links can stack vertically; retain slash grammar within each cluster.
- **About:** Collapse the label/content grid into one column. Keep the uppercase label above the paragraphs with a generous 24–32px gap.
- **Tools:** Collapse outer 3-column structure. A mobile-safe sequence is section label → 2-column group grid → 1-column group grid at the smallest width.
- **Work History:** Dates move below or beside the role header if space is insufficient. Never compress body text to preserve desktop alignment.
- **Selected Work:** Metadata can wrap under the title; keep `Type / Year ↗` together as a compact cluster when possible.
- **Footer:** Stack identity/contact and social clusters; preserve the Copy button next to or directly beneath email.

### Image Behavior

There are no public portfolio images to crop or art-direct. Responsive behavior is almost entirely **typographic and structural**.

- Do not introduce placeholder images to “fill space” on mobile or desktop.
- Marketplace preview imagery and Framer CMS screenshots are documentation assets, not responsive site content.
- Because the experience is text-first, line length and wrapping are the primary responsive concerns. Keep body measure comfortable (~45–70 characters per line).

## Iteration Guide

1. Start every change by identifying whether it belongs to identity (`hero-profile`), information (`about-section`, `tool-group`), evidence (`work-history-item`, `selected-work-row`), or conversion (`top-header`, `copy-button`, `footer`). Do not invent a new visual category unless necessary.
2. Reference YAML component keys directly when iterating — e.g. `{components.copy-button}`, `{components.selected-work-row}`, `{components.tool-group}`.
3. Use `{token.refs}` instead of adding one-off hex values. Promptfolio depends on an extremely small palette; token drift is immediately visible.
4. Protect the ~768px desktop measure. If a new component wants 1100px, question the component before widening the whole site.
5. Default new content to `{typography.body}`. Promote to `{typography.title-lg}` only for evidence titles; use `{typography.label-uppercase}` only for indexing/category labels.
6. Add component states as separate entries (`copy-button-copied`) instead of hiding behavior in prose or scripting arbitrary color changes.
7. Prefer a 1px `{colors.hairline}` plus spacing before reaching for a card container.
8. Keep slash separators and `↗` external-link cues consistent; these tiny glyph conventions carry more identity here than icons would.
9. When adding motion, reuse the same restrained Framer appear/text behavior and verify reduced-motion fallback. Do not invent a second motion language.
10. Run `npx @google/design.md lint PROMPTFOLIO-design.md` after edits. Resolve broken token references and orphaned tokens before extending the system.

## Known Gaps

- The live Framer page is accessible as rendered semantic text and the official high-resolution marketplace preview images are inspectable, but the production page's generated CSS bundle/design-token variable map is not exposed by the available crawler. Therefore the **font sizes, exact gray hexes, container width, and spacing values are screen-calibrated reconstructions**, not falsely claimed source-code constants.
- The Bricolage Grotesque and Inter pairing is a deliberate adaptation of the reference. Review the reconstructed token sizes and tracking with these fonts during implementation because their metrics may change line wrapping.
- Framer/third-party metadata confirms **Appear Effects**, **Text Effects**, and **Variable Fonts**, but the exact animation duration, easing curve, delay, threshold, and element-by-element assignments are not visible in static sources. Those values should be inspected in the remix project before hard-coding motion tokens.
- The live DOM clearly exposes `Copy` and `Copied!` states, but the exact clipboard-feedback reset delay and any text transition effect between those states are not exposed.
- Static sources do not reveal keyboard focus-ring styling. Production implementation should add/retain an accessible focus-visible treatment without introducing a permanent colored accent.
- Exact mobile/tablet breakpoint numbers are not published in the accessible source. The responsive table documents the observed design logic and common Framer breakpoint range; verify the remix project's breakpoints for exact values.
- The official listing says the footer contains a large email CTA, while accessible static page text does not expose its computed font size. `{typography.display-lg}` documents the intended scale relationship rather than claiming a source-extracted pixel value.
- Duplicate Work History and Selected Work text appears in the crawler because Framer can keep breakpoint/variant instances in the DOM. The visual system should render one visible logical item per CMS entry at a time.
- The green “Live” status chip visible in an official CMS-editor screenshot belongs to Framer's editing interface and has intentionally **not** been treated as a Promptfolio public-site semantic color.
- Promptfolio Noir is a separate dark sibling template with the same structural language. Its dark palette is not included here because the user's requested source is the light `promptfolio.framer.media` site.
