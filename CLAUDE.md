# Personal Website

Vite + React site hosted on GitHub Pages. Four pages: Home, Resume, Projects, Hiking.

## How to run
- Dev: `npm run dev`
- Build: `npm run build`
- Deploy to GitHub Pages: `npm run deploy`

## Content editing — start here

| What to change | File |
|---|---|
| Resume (experience, education, skills) | `src/data/resume.js` |
| Projects (title, description, video, link) | `src/data/projects.js` |
| Hiking trips (name, date, description, photos) | `src/data/hiking.js` |
| Your name / tagline | `src/pages/Home.jsx` |
| Colors, font, max-width | CSS variables in `src/index.css` |
| Nav links | `src/components/Nav.jsx` |

## Asset locations
- Project videos: `public/assets/videos/<file>.mp4` → reference as `/assets/videos/<file>.mp4`
- Hiking photos: `public/assets/hiking/<file>.jpg` → reference by filename only in `hiking.js`

## Data schemas

**projects.js** — each entry:
```js
{ title, description, videoSrc, link }
// link is optional
// videoSrc: YouTube embed URL (https://...) or local path (/assets/videos/file.mp4)
```

**hiking.js** — each entry:
```js
{ name, date, description, photos }
// photos: string[] of filenames in public/assets/hiking/
```

**resume.js** — shape:
```js
{ experience: [{ role, company, period, bullets[] }], education: [{ degree, school, year }], skills: [] }
```

## Routing
Uses `HashRouter` (required for GitHub Pages). Routes: `/` `/resume` `/projects` `/hiking`.

## Deployment
`vite.config.js` `base` and `package.json` `homepage` must both match the GitHub repo name.
Currently set to `bencalvert`.
