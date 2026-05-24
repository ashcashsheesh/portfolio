# Personal Portfolio — Cognitive Science

A clean, minimal portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed for a high school student applying to college programs in cognitive science — thoughtful, professional, and easy to customize.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
portfolio/
├── public/
│   ├── headshot-placeholder.svg   # Replace with your photo
│   ├── projects/                    # Project thumbnail images
│   └── resume.pdf                   # Add your resume (not included)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Fonts, metadata, theme provider
│   │   ├── page.tsx                 # Main page — assembles all sections
│   │   ├── globals.css              # Colors, theme variables
│   │   └── icon.svg                 # Favicon
│   ├── components/
│   │   ├── layout/                  # Navbar, Footer, Theme, Loading intro
│   │   ├── sections/                # Hero, About, Projects, etc.
│   │   └── ui/                      # Reusable Button, Card, SectionHeader
│   ├── data/                        # ⭐ Edit your content here
│   │   ├── site.ts                  # Name, tagline, links, about text
│   │   ├── achievements.ts          # Awards, GPA, AP classes
│   │   ├── extracurriculars.ts      # Activities & leadership
│   │   ├── projects.ts              # Portfolio projects
│   │   └── interests.ts             # Personal interests
│   ├── hooks/
│   │   └── useActiveSection.ts      # Nav active-state on scroll
│   └── lib/
│       └── utils.ts
└── README.md
```

## Customization guide

### 1. Personal info & links

Edit **`src/data/site.ts`**:

| Field | What to change |
|-------|----------------|
| `name` | Your full name |
| `tagline` | One-sentence personal statement |
| `email`, `linkedin`, `github` | Your contact links |
| `resumeUrl` | Path to resume in `/public` |
| `headshotUrl` | Your headshot (e.g. `/headshot.jpg`) |
| `aboutContent` | About paragraphs and focus areas |

Also update **`src/app/layout.tsx`** metadata (title, description, Open Graph) for SEO.

### 2. Achievements

Edit **`src/data/achievements.ts`**:

- Update `achievements` array with your awards, honors, GPA, competitions
- Update `apClasses` with your coursework

### 3. Extracurriculars

Edit **`src/data/extracurriculars.ts`**:

Each entry has `title`, `role`, `years`, `category`, and an impact-focused `description`.

### 4. Projects (most important)

Edit **`src/data/projects.ts`**:

```ts
{
  id: "my-project",
  title: "Project Name",
  description: "What it does",
  technologies: ["Python", "Next.js"],
  impact: "What you learned or achieved",
  imageUrl: "/projects/my-screenshot.png",
  githubUrl: "https://github.com/...",
  demoUrl: "https://...",      // optional
  featured: true,              // shows in featured grid
}
```

Add images to **`public/projects/`**.

### 5. Interests

Edit **`src/data/interests.ts`** with hobbies that feel authentic to you.

### 6. Images & resume

1. Add **`public/headshot.jpg`** (or `.png`) and update `headshotUrl` in `site.ts`
2. Add **`public/resume.pdf`** for the Resume button
3. Replace project placeholders in **`public/projects/`**

### 7. Colors & typography

- **Colors:** `src/app/globals.css` — CSS variables under `:root` and `.dark`
- **Fonts:** `src/app/layout.tsx` — currently Inter (body) + Newsreader (headings)

### 8. Dark / light mode

Toggle is in the navbar. Theme uses `next-themes` with system default. Config in `src/components/layout/ThemeProvider.tsx`.

## Deploy on Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project** → import your repo
4. Vercel auto-detects Next.js — no extra config needed
5. Click **Deploy**

Your site will be live at `your-project.vercel.app`. Custom domains can be added in Project Settings → Domains.

### CLI alternative

```bash
npm i -g vercel
vercel
```

Follow prompts to link and deploy.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |
## Features

- Responsive layout (mobile + desktop)
- Smooth scrolling & active nav highlighting
- Subtle Framer Motion section animations
- Dark / light mode
- SEO metadata & favicon
- Accessible focus states & reduced-motion support
- Contact form opens your email client (no backend required)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide React](https://lucide.dev/) (icons)

## Tips for college applications

- Keep project descriptions focused on **what you learned**, not buzzwords
- Use the About section in your own voice — admissions readers notice authenticity
- Prioritize 2–3 strong projects over many shallow ones
- Update metadata and Open Graph tags before sharing your link on applications

---

Built to be edited, not admired. Replace placeholder content in `src/data/` and make it yours.

