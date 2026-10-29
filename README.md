# ⚡ Abhishek Zirange — Lead AI/ML & Product Engineer Portfolio

> **Production-Grade Personal Portfolio modeled on [kevingarda.dev](https://kevingarda.dev/)**  
> Tailored for **Abhishek Zirange** (8+ Years Experience in Agentic AI, Fortune 50 Marketing Mix Modeling, PySpark, and Computer Vision).  
> **100% Free Hosting on GitHub Pages** with zero external runtime dependencies.

---

## 🌟 Key Features & Design Highlights

1. **Obsidian Space Glassmorphic Design:**
   - Deep obsidian theme (`#06080d`) with floating ambient radial glow orbs and subtle grid overlay.
   - Frosted glass cards (`backdrop-filter: blur(16px)`) with glowing cyan/indigo border micro-interactions.
   - Professional studio portrait asset generated and embedded in the Hero card.

2. **Kevin Garda Signature UX Pattern — Roles & Nested Case Studies:**
   - **Expandable Accordion Cards:** Click any case study to reveal **The Challenge**, **The AI Architecture**, and **Measured Impact**.
   - **Interactive Domain Filter Toolbar:** Filter across `Agentic AI & LLMs`, `Marketing Mix Modeling (MMM)`, `Big Data & PySpark`, `Computer Vision & OCR`, `Telecom Analytics`, and `Distributed Systems`. Roles dynamically filter with real-time counters.

3. **Interactive Live System Architecture Visualizer:**
   - Tab 1: **Fortune 50 Agentic MMM Decision Loop** (LangGraph StateGraph: Gatekeeper &rarr; Modeler &rarr; Econometric Guardrails &rarr; Auto-Tuning).
   - Tab 2: **Distributed Celery Chords Engine** (Fair-share `prefetch_multiplier=1`, worker recycling, Redis locks).
   - Tab 3: **One-Shot Siamese Signature Verification Pipeline** (YOLOv4 Localization &rarr; Twin CNN &rarr; 128-D Euclidean metric space).

4. **Technical Depth & Domain Matrix:**
   - Categorized matrix showing hands-on production years and proficiency levels across all core enterprise domains.

5. **Direct Connect & 1-Click Clipboard Utilities:**
   - 1-click email copy with animated toast notifications.
   - Direct download link to master resume (`./assets/Abhishek_Zirange.pdf`).
   - Quick inquiry email composer with automated mailto formatting.

---

## 🚀 How to Run Locally

You can run this portfolio locally without any installation or build step:

### Option A: Direct Browser Opening
Simply double-click `portfolio/index.html` in your file explorer, or right-click and choose **Open with Browser (Chrome/Edge/Firefox)**.

### Option B: Local Dev Server
If you want to run it on a local HTTP server:
```bash
# Using Node / npx:
npx serve portfolio

# Or using Python:
python -m http.server 8000 --directory portfolio
```
Then visit `http://localhost:8000` or `http://localhost:3000`.

---

## 🌐 How to Host for FREE on GitHub Pages (60 Seconds)

GitHub Pages provides **100% free hosting** with automatic global CDN and free HTTPS/SSL certificates. You have two easy ways to publish:

### Method 1: Dedicated Portfolio URL (Recommended)
This gives you the clean domain `https://<your-username>.github.io/`:

1. On GitHub, create a brand-new public repository named exactly:
   ```text
   <your-github-username>.github.io
   ```
   *(For example: `abhishekzirange.github.io`)*

2. Open your terminal inside this `portfolio` folder and push the code:
   ```bash
   cd "c:\Users\Abhishek\Documents\Abhishek\Interview Preparation\portfolio"
   git init
   git add .
   git commit -m "Initial release of Abhishek Zirange portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```

3. That's it! GitHub automatically deploys your site to `https://<your-github-username>.github.io/` within 60 seconds!

---

### Method 2: Host from your Existing Repository (`Interview-Prep-Suite`)
If you want to host it directly from this current repository:

1. Push your updated repository to GitHub:
   ```bash
   git add portfolio/
   git commit -m "Add production portfolio for Abhishek Zirange"
   git push origin main
   ```

2. On GitHub, go to your repository:
   **Settings &rarr; Pages** (in the left sidebar).

3. Under **Build and deployment**:
   - **Source:** Choose **GitHub Actions** (the included `.github/workflows/deploy.yml` will handle the build automatically).
   - Or choose **Deploy from a branch** &rarr; select `main` &rarr; folder `/portfolio` or `/docs`.

4. Your site will be live at:
   ```text
   https://wethiink.github.io/Interview-Prep-Suite/portfolio/
   ```

---

### Method 3: Using a Custom Domain (e.g. `abhishekzirange.dev`)
1. Buy your domain on Namecheap, Cloudflare, or GoDaddy.
2. In your GitHub repository **Settings &rarr; Pages**, enter your custom domain (e.g. `abhishekzirange.dev`).
3. Point your DNS records (CNAME or A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) to `<your-username>.github.io`.
4. Check **Enforce HTTPS**. GitHub will issue a free SSL certificate automatically!

---

## 📁 Project Structure

```text
portfolio/
├── index.html                 # Semantic HTML5 architecture & structured SEO metadata
├── styles.css                 # Obsidian dark design system, glassmorphism, responsive grid
├── app.js                     # Zero-dependency vanilla JS (filtering, accordions, copy-to-clipboard, tabs)
├── favicon.svg                # Modern electric AZ monogram SVG icon
├── README.md                  # Documentation & GitHub Pages deployment guide
├── assets/
│   ├── avatar.jpg             # High-resolution generated studio portrait of Abhishek
│   └── Abhishek_Zirange.pdf   # Master resume for 1-click download & preview
└── .github/
    └── workflows/
        └── deploy.yml         # Automated GitHub Actions workflow for GitHub Pages CI/CD
```

---

## 🛠️ Customization Guide

- **Update LinkedIn / GitHub links:** Search for `linkedin.com` or `github.com` in `index.html` and replace with your profile URLs.
- **Add a new case study:** Duplicate any `<div class="case-study-item">` block in `index.html`, set the matching `data-domains="..."` tags, and fill in the 3 pillars (Challenge, Architecture, Impact).
- **Edit contact details:** Search for `abhishekzirange@gmail.com` or `+919175438085` in `index.html` to update phone, email, or location.
