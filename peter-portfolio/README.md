# Peter Victor Dawis — Modular Portfolio

A responsive, vanilla JavaScript portfolio using Vite. Refactored from the original portfolio without changing its content or visual design.

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Edit content

- `src/data/projects.js`: project cards and descriptions
- `src/data/experience.js`: academic timeline, leadership, interests
- `src/data/skills.js`: skills and technology tags
- `src/sections/`: each website section is a standalone render function
- `src/components/`: reusable navigation, footer, and project card
- `src/styles/`: base design, components, and responsive rules
- `src/main.js`: page composition and event handlers

## Before publishing

- Add a profile image and replace the placeholder in `src/sections/Hero.js`.
- Put your résumé at `public/documents/resume.pdf`.
- Replace placeholder social URLs in `src/sections/Contact.js`.
- Add verified certificates in `src/sections/Certificates.js`.
- The contact form opens an email draft; it does not send messages from a backend.

## Note

The refactor keeps the original content and classes, including mobile navigation and CSS media queries. Project-card content is HTML-escaped through `src/utils/html.js`.
