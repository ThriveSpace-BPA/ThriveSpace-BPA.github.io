# ThriveSpace BPA

**Prototype website for the BPA Global Marketing Team (500) competition.**

Team: Mithil Gajula, Vikhyat Jilla, Ayush Nanda, Srinesh Toranala
School: Independence High School, Frisco TX
Advisor: Mr. Ryan Schuldt
Event: BPA National Leadership Conference 2026

---

## What This Is

ThriveSpace is a fictional AI-powered mental wellness app created for the BPA Global Marketing Team event. This website serves as a visual and interactive companion to the written marketing plan and oral presentation. It demonstrates the app concept, pricing model, market strategy, and interactive features to judges.

**ThriveSpace is not a real company or real app.** Everything here was built for competition purposes only.

---

## Site Structure

| File | Purpose |
|---|---|
| `index.html` | Homepage with hero, problem statement, features overview, market cards, and testimonials |
| `features.html` | Full breakdown of the four core app features with visual mockups |
| `markets.html` | Deep-dive on India, Japan, and UK market strategy with competitive table |
| `pricing.html` | Freemium model, localized pricing by country, financial projections, and FAQ |
| `about.html` | Mission, values, team bios, HR structure, timeline, and KPIs |
| `demo.html` | Interactive prototype with working mood check-in, meditation player, journal, and AI chat |
| `nav.js` | Shared navigation and footer injected into every page |
| `styles.css` | Global design system: colors, typography, layout utilities, components |

---

## Key Content

### Three Target Markets
- **India** (IN): 250M+ youth aged 12 to 25. Android-first, UPI payments, WhatsApp outreach. Barrier is mental health stigma around competitive exams.
- **Japan** (JP): 15M+ students. Anime-style UI, Konbini payments, LINE outreach. Barrier is cultural expectation of emotional restraint.
- **United Kingdom** (UK): 12M+ teens. NHS complement positioning, TikTok campaigns, university partnerships. Barrier is NHS wait times of 3 to 6 months.

### Pricing Model
- **Free tier**: Guided meditation, mood tracking, journaling, AI chat (10 messages/day). Always free, no credit card.
- **Premium**: $7.99/month or $79.99/year. Unlimited everything plus personalized AI and expert workshops.
- **Add-ons**: Exam Prep Pack ($3.99), Sleep Toolkit ($2.99), 1:1 Virtual Coaching ($14.99/session).
- Localized pricing: India at 199 rupees/month, Japan at 900 yen/month, UK at 5.99 pounds/month with UNiDAYS student discount.

### Financial Projections (Year 1)
- 60,000 total downloads across all three markets
- 15,000 monthly active users
- 5% free-to-premium conversion = 4,000 paying subscribers
- ~$319,960 projected revenue
- LTV:CAC ratio of 15:1 (CAC of $3.15, LTV of $48)
- Break-even projected at 9,000 paid users (Year 2 to 3)
- 15% profit margin target by Year 5

### Marketing Timeline
- **Q1 (Months 1 to 3)**: Localize app, beta test with 3,000 students, produce marketing materials
- **Q2 (Months 4 to 6)**: Public launch, social campaigns, campus events, free trial offers. Target: 25,000 downloads
- **Q3 (Months 7 to 9)**: Analyze data, scale content, push premium adoption to 3.5%
- **Q4 (Months 10 to 12)**: Optimize retention, re-engage inactive users, publish annual report. Target: 60,000 downloads, 5% conversion

---

## Design System

The site uses a custom design system defined in `styles.css`.

**Colors**
- `--green`: #3D8B6E (primary)
- `--green-dark`: #1F5C46 (headers, dark accents)
- `--green-pale`: #EAF5F0 (backgrounds, highlights)
- `--cream`: #FAFAF7 (page background)
- `--charcoal`: #1A1A24 (dark sections, text)
- `--gold`: #C4973A (secondary accent)
- `--rose`: #C4566A (tertiary accent)

**Fonts**
- Headings: Instrument Serif (Google Fonts)
- Body: Plus Jakarta Sans (Google Fonts)

**Key CSS classes**
- `.container`: max-width 1180px, centered, padded
- `.section`: standard vertical padding
- `.eyebrow`: small label pill above section headings
- `.btn`, `.btn-primary`, `.btn-outline`, `.btn-white`: button variants
- `.g2`, `.g3`, `.g4`: two, three, four column grids
- `.card`, `.card-pad`: white card with border and hover shadow
- `.stat-num`, `.stat-label`: large statistic display

---

## Interactive Demo

`demo.html` contains a fully working in-browser prototype with four tabs:

1. **Home**: Mood check-in with six emotion options and an intensity slider. Selecting a mood triggers a personalized recommendation.
2. **Meditate**: Simulated meditation player with progress bar, play/pause, skip controls, and a session list.
3. **Journal**: AI-generated journaling prompts with a live word count and save confirmation. Prompt chips let users switch between themes.
4. **AI Chat**: Keyword-based response system that replies to messages about anxiety, sleep, exam stress, and loneliness. Includes suggestion chips.

The demo runs entirely in the browser with no backend and no real API calls.

---

## Changes Made for Competition Polishing

- Replaced all instances of "GB" with "UK" throughout markets page, country cards, nav, and footer
- Rewrote markets page copy to read naturally rather than as a list of AI-generated bullet points
- Removed em dashes throughout all pages and replaced with natural phrasing
- Fixed competitive table to use clean "Yes/No" language instead of checkmarks mixed with verbose text
- Unified country code styling: IN, JP, UK displayed consistently across all pages
- Barrier and solution boxes redesigned with cleaner typography hierarchy
- Footer link for United Kingdom now correctly points to `markets.html#uk`

---

## How to Run Locally

No build step needed. Open any HTML file directly in a browser, or serve the folder with a simple local server:

```bash
npx serve .
```

Or with Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Competition Notes

Per BPA event rules:
- This site may be used during the presentation to judges but may not be left with them
- No internet access is guaranteed on-site; the site is designed to work fully offline once loaded
- All content follows BPA Copyright and Fair Use Guidelines
- The BPA Release Form is included in the submitted PDF package separately

---

## License

MIT. See `LICENSE` for details.

This is a student competition project. ThriveSpace is a fictional entity created solely for the BPA Global Marketing Team (500) event at the 2026 National Leadership Conference.
