
# levired — Portfolio

A responsive portfolio with hover and scroll animations. Edited in Visual Studio Code, preview with Live Server.

Files included
- index.html — homepage with hero, projects, about, contact
- project-case-study.html — separate case study page
- styles.css — responsive, accessible styles and animations
- script.js — nav, scroll reveal, small interactions
- .gitignore

Getting started in VS Code
 Install the "Live Server" extension (Ritwick Dey) for instant local preview.
 Right-click `index.html` and choose "Open with Live Server" (or run it from the status bar).

Recommended VS Code extensions
- Live Server
- Prettier (formatting)
- HTML/CSS/JS language support (built-in)
- GitLens (optional)

Editing notes
- Replace "resume.pdf" with your actual resume file in the project root.

2. On GitHub, open the repo → Settings → Pages (or "Pages" in the left sidebar).
3. Set Source to the `main` branch and the root folder (/). Save.
4. GitHub will provide a link like https://<your-user>.github.io/<your-repo>/ — it may take a minute.

Optional: Use the gh-pages branch and an npm script (if you add a build step later).

Performance & accessibility tips
- Optimize images (export @2x only where needed, or use WebP).
- Run Lighthouse in Chrome devtools and aim for >80 performance score.
- Use proper ALT text for all images and ensure color contrast >= 4.5:1 for body text.

Customizations to consider
- Add a CSS variables theme and toggle light/dark mode.
- Integrate Netlify Forms, Formspree, or a serverless function for contact submissions.
- Swap to a static site generator (Eleventy, Next.js) if you want Markdown-driven case studies.
