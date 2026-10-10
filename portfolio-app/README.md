# Ezra Ndinya Ogechi — Personal Portfolio Website
Product Requirements Document Version 1.3 (Final, Hosted on Render), October 2026.

Personal portfolio website for **Ezra Ndinya Ogechi**, Data Scientist and Machine Learning Engineer.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Vanilla CSS & Tailwind**, **KaTeX**, and **Framer Motion**. Features 4 switchable themes, live GitHub commits integration, filterable showcase of 20 projects (13 Data Science + 7 Data Analytics), headline Chana hackathon spotlight, verified certifications and awards, NeuralNest ML course syllabus, 30 free math lessons with interactive SVG graphs, and Formspree contact management.

---

## 🚀 Running Locally

```bash
cd portfolio-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Render Hosting Setup

The website is configured as a **Static Export** running on **Render as a Static Site** (free, always on, instant response without cold starts).

### Next.js Static Export Configuration
- `next.config.ts` has `output: 'export'` and `images: { unoptimized: true }`.
- Build Command: `npm install && npm run build`
- Publish Directory: `out`

### Render Environment Variables
Set these environment variables in your Render Static Site dashboard:
- `NODE_VERSION`: `20` (or `22`)
- `GITHUB_TOKEN`: Read-only GitHub Personal Access Token (for build-time commit & README data fetching)
- `NEXT_PUBLIC_FORMSPREE_CONTACT_URL`: (Optional) Formspree endpoint URL for contact enquiries
- `NEXT_PUBLIC_FORMSPREE_COURSE_URL`: (Optional) Formspree endpoint URL for course registrations

*(Note: Never prefix `GITHUB_TOKEN` with `NEXT_PUBLIC_` so it is never exposed to visitors' browsers).*

---

## 🔄 Automatic Rebuilds & Deploy Hook Workflow

Render rebuilds automatically on every push to `main` of the portfolio repository.

To refresh the site when you push new commits or models to `Ezra-Data/Machine_Learning_Projects` or any analytics repository:
1. Copy your Render **Deploy Hook URL** from your Render static site settings.
2. In your `Machine_Learning_Projects` repository, go to **Settings > Secrets and variables > Actions > New repository secret**.
3. Name it `RENDER_DEPLOY_HOOK` and paste the URL.
4. Add this workflow file `.github/workflows/refresh.yml` to your project repositories:

```yaml
name: Refresh portfolio
on:
  push:
    branches: [main]
  schedule:
    - cron: "0 */6 * * *"
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: curl -fsS -X POST "${{ secrets.RENDER_DEPLOY_HOOK }}"
```

---

## 📁 Content Management Guide (Daily Updates)

Ezra updates the site by editing files in `content/` and pushing to GitHub. Changes deploy in minutes with no code changes:

### 1. Adding or Updating Projects
Create or edit a Markdown file in `content/projects/<slug>.md`:

```markdown
---
title: "Project Title"
slug: "project-slug"
track: "data-science" # or "data-analytics"
category: "Classification" # Classification | Regression | Recommendation | Clustering | NLP | AI Applications | SQL | Power BI | Excel | Python
summary: "One or two sentence concise summary."
tools: ["Python", "Scikit-learn", "Pandas"]
algorithms: ["Random Forest", "Logistic Regression"]
githubPath: "Folder_Inside_Monorepo" # Sub-folder inside Ezra-Data/Machine_Learning_Projects
githubUrl: "" # Or full GitHub repository URL if outside the ML monorepo
demoUrl: "" # Optional link to live web app
result: "" # Key metric or result (leave empty if none)
featured: true # True to feature on home page
order: 1
published: true
---

Detailed write-up covering Problem Statement, Dataset, Approach, Results, and Key Learnings.
```

### 2. Updating Certifications & Recognition
Edit `content/certifications.json`:
```json
[
  {
    "title": "Chana — First Runner-Up",
    "issuer": "Dedan Kimathi University of Technology (DeKUT) Hackathon",
    "date": "2026",
    "type": "award",
    "description": "Awarded First Runner-Up for Chana, an intelligent campus chatbot and navigation system.",
    "projectSlug": "chana",
    "projectName": "Chana",
    "team": "Team WAHENGA",
    "role": "Team Member & ML Developer"
  },
  {
    "title": "Come Build with AI Hackathon (First Edition)",
    "issuer": "GOMYCODE",
    "date": "27 September 2026",
    "type": "participation",
    "description": "Certificate of Participation awarded to Ezra Ndinya Ogechi as a member of Team WAHENGA for project BIA.",
    "file": "/certificates/gomycode-come-build-with-ai-2026.pdf",
    "thumbnail": "/certificates/gomycode-come-build-with-ai-2026.png",
    "team": "Team WAHENGA",
    "projectName": "BIA",
    "verifyUrl": ""
  }
]
```
*(Always label items truthfully according to their issuance: "award" or "participation").*

### 3. Adding Google Play Store Apps
Edit `content/apps.json`. The section and navigation link remain hidden until at least one published app is added.

### 4. Updating the NeuralNest ML Course
Edit `content/course.json` to modify modules, topics, schedule, or prerequisites.

### 5. Managing Free Math Lessons
Lessons live in `content/learn/math/<topic>/<nn-slug>.md`. Each lesson contains frontmatter (`title`, `topic`, `minutes`, `prerequisites`, `summary`) and math content rendered with KaTeX and interactive SVG graphs.

---

## 🎨 Theme System
Four switchable themes with zero-flash persistence:
1. **Midnight Aurora** (`midnight-aurora`) — Deep navy with teal `#2DD4BF` and violet `#8B5CF6`.
2. **Daylight** (`daylight`) — Clean bright minimal with indigo `#4F46E5` and sky blue `#0EA5E9`.
3. **Ember** (`ember`) — Warm charcoal with amber `#F59E0B` and coral `#FB7185`.
4. **Terminal** (`terminal`) — Obsidian hacker with neon green `#22C55E`.

---

## 📱 Verified Contact Channels
- **WhatsApp**: `+254 738 933 046` ([https://wa.me/254738933046](https://wa.me/254738933046))
- **LinkedIn**: [https://www.linkedin.com/in/ezra-ogechi-1a615534a/](https://www.linkedin.com/in/ezra-ogechi-1a615534a/)
- **GitHub**: [https://github.com/Ezra-Data](https://github.com/Ezra-Data)
- **X**: [https://x.com/OgechiEzra](https://x.com/OgechiEzra)
- **TikTok**: [https://www.tiktok.com/@codetointelligence4](https://www.tiktok.com/@codetointelligence4)
- **Reddit**: [https://www.reddit.com/user/Ogechi_Ezra7054/](https://www.reddit.com/user/Ogechi_Ezra7054/)
- **Data Analytics Companion Site**: [https://ezra-wl21.onrender.com/](https://ezra-wl21.onrender.com/)

---

© 2026 Ezra Ndinya Ogechi. All rights reserved.
