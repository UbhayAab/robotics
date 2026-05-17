# Why Robotics, Why Now - Field Notes Vol. 01

A long-form, data-dense essay arguing why **industrial robotics in India** is the right place to spend the next ten years - and why it is not a consumer-app bet, not a humanoid bet, and not an AI-hype bet.

Built as a static React site (no build step - Babel-standalone + UMD React) so it deploys to GitHub Pages with a single push.

---

## Run it locally

The site uses `<script type="text/babel" src="...jsx">` to load JSX at runtime, which requires HTTP (browsers block JSX fetches over `file://`). Pick any of:

**Python (most reliable):**
```
cd robotics
python -m http.server 8000
# open http://localhost:8000
```

**Node:**
```
npx serve .
```

**VS Code:**
Install the "Live Server" extension, right-click `index.html` → Open with Live Server.

Then open the printed URL in Chrome/Edge/Firefox. First load is slow (~3-5s) while Babel compiles the JSX in the browser. Subsequent loads cache.

---

## Deploy to GitHub Pages

```bash
cd robotics
git init
git add .
git commit -m "Field Notes Vol. 01"
gh repo create robotics --public --source=. --push
# OR: create the repo on github.com manually, then:
#   git remote add origin git@github.com:<you>/robotics.git
#   git branch -M main
#   git push -u origin main
```

Then in the repo on github.com:
1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `(root)`
4. Save. Site goes live at `https://<you>.github.io/robotics/` within ~60 seconds.

That's it. No build step, no GitHub Actions needed.

---

## Project layout

```
index.html         - entry (loads JSX via Babel-standalone)
tokens.css         - design tokens + global styles
app.jsx            - top-level <App> + section list + Marquee
lib.jsx            - atoms: Reveal, Counter, Slot, VideoReel, Kpi, Pull, Gloss…
charts.jsx         - AreaChart, BarChart, StackedBars, Donut, Sparkline, DotGrid
sections-1.jsx     - sections 01-06 (Hook → Form factors)
sections-2.jsx     - sections 07-13 (Incumbents → The Bet)
tweaks-panel.jsx   - bottom-right live tweaks panel (dark, accent, motion)
_archive/          - old v1 of the site + research_raw_data.md (kept for reference)
```

---

## Editing

- **All content lives in JSX.** No backend, no CMS. Search the file you want to edit and change strings in place.
- **YouTube embeds**: in any `VideoReel`, set `url: 'https://www.youtube.com/watch?v=...'` on the item. The `Slot` component auto-converts to an embed iframe. Items without a `url` render as a styled placeholder card - useful for "find a better video later" markers.
- **Charts**: data is hard-coded in JSX. Update the arrays directly; the charts re-render.
- **Accent color / dark mode / animation intensity**: use the live tweaks panel bottom-right; or change defaults in `app.jsx` (`TWEAK_DEFAULTS`).
- **Add a new section**: copy an existing section function (e.g. `S04_Manufacturing`), give it a new id, add to `SECTIONS` and `<main>` in `app.jsx`.

---

## Pitch shape (so future-you remembers)

The site argues, in order:
1. **Why now** - capability + cost + demographics + capital + policy + India PLI.
2. **Not consumer** - explicitly rejects consumer robotics for an Indian builder; four-point argument.
3. **Manufacturing is the engine** - Indian density 7 vs Korea 1,220; buyer list; forum complaints; cobot payback math.
4. **Not humanoids** - phase 7, not phase 1; reasoning explicit.
5. **India / Bangalore** - Ati / CynLr / GreyOrange / Addverb case studies; ARTPARK; how to actually probe manufacturers.
6. **The bet (Section 13)** - 60% Bangalore cobot/AMR software-led integrator + RaaS; 30% vertical (pharma / electronics / agri); 10% pick-and-shovel components. Closes with a direct paragraph to Aayush and a 12-month plan.

If the bet changes, the only file that needs major edits is `sections-2.jsx` (section 13). Everything else is supporting evidence.

---

## Sources

Inline citations in `SectionTag source=` props on each section. Aggregated: IFR World Robotics 2024, Inc42 + Tracxn (India), NASSCOM, ARTPARK, MeitY PLI awardee lists, company filings (Symbotic 10-K, Addverb PRs, Reliance AR), founder interviews on YouTube (Brett Adcock, Wang Xingxing, Bharadwaj Amrutur), Bloomberg / The Verge / IEEE Spectrum.

Raw research notes from a prior pass are kept in `_archive/research_raw_data.md`.

---

## Known gaps in v0.5

- Some `VideoReel` items still have no `url` (placeholder cards) - 1X NEO, Mammotion, Roborock, etc. Drop in URLs as you find them.
- Founder photos / logos not embedded (the design uses geometric icons + names, on purpose). If you want logos: add an `<img>` inside each card.
- Mobile layout has been tested for sections; some calculator panels still need a single-column collapse below 820px.
- The "Argue with me" email in the footer is the current Gmail - change in `sections-2.jsx` `S13_Bet` if needed before sharing.
