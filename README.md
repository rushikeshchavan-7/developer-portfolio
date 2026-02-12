# Rushikesh Chavan — Portfolio

My personal developer portfolio built with React. It showcases my projects, skills, work experience, and education — all in a clean, minimal UI with dark/light mode support.

**Live:** [rushikeshchavan.netlify.app]([https://rushikesh-chavan-portfolio.netlify.app/])

---

## What's inside

- Responsive design that works on desktop, tablet, and mobile
- Dark and light theme with smooth toggle
- Scroll-animated sections using Framer Motion
- Dynamic side navigation with scroll progress tracker
- Project filtering by category (Web, Mobile, ML)
- Project detail modal with team members and links
- Direct email and phone contact cards
- Everything is configurable from a single file (`src/data/siteConfig.js`)

## Tech stack

- **React** — UI framework
- **Styled Components** — styling
- **Framer Motion** — animations
- **MUI Icons** — iconography
- **React Router** — routing

## Getting started

Make sure you have [Node.js](https://nodejs.org/) (v16 or later) installed.

```bash
# clone the repo
git clone https://github.com/rushikeshchavan-7/portfolio.git
cd portfolio

# install dependencies
npm install

# start dev server
npm start
```

The app will open at `http://localhost:3000`.

## Configuration

All content lives in one file: **`src/data/siteConfig.js`**

From there you can:

- **Show/hide sections** — flip any boolean in `sections` to `true` or `false`. The navbar and side navigation update automatically.
- **Edit hero info** — name, tagline, description, stats, buttons, tech stack
- **Add or remove projects** — just push or remove objects from the `projects` array
- **Add or remove experiences/education** — same idea, plain arrays
- **Update contact info** — email, phone, subtitle text
- **Change footer links** — add or remove social links
- **Set default theme** — `"dark"` or `"light"` in `settings.defaultTheme`

Images can be URLs or local paths using `require("../images/photo.jpg")`.

## Build for production

```bash
npm run build
```

This creates an optimized `build/` folder ready to deploy.

## Deploy to Netlify

The easiest way:

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site"** > **"Import an existing project"**
4. Connect your GitHub repo
5. Netlify will auto-detect the settings (build command: `npm run build`, publish directory: `build/`)
6. Click **Deploy**

That's it. Netlify will also auto-deploy every time you push to the main branch.

There's a `netlify.toml` in the root that handles the build config and SPA routing, so you don't need to set anything manually.

## Project structure

```
src/
  components/
    Navbar.jsx            # fixed top navigation
    SideElements.jsx      # scroll progress + neural network decoration
    sections/
      Hero.jsx            # intro section with avatar, stats, buttons
      Skills.jsx          # technologies and tools grid
      Experience.jsx      # work experience cards
      Projects.jsx        # filterable project grid
      Education.jsx       # education timeline
      Contact.jsx         # email and phone cards
      Footer.jsx          # footer with social links
    cards/
      ProjectCard.jsx     # individual project card
    Dialog/
      ProjectDetails.jsx  # project detail modal
  data/
    siteConfig.js         # all content and settings
  images/
    HeroImage.jpg         # default hero avatar
  utils/
    Themes.js             # dark and light theme tokens
  App.js                  # main app with theme provider
  index.js                # entry point
  index.css               # global styles, fonts, scrollbar
```

## License

Feel free to fork and use this as a template for your own portfolio. Just swap out the content in `siteConfig.js` with your own.

---

Built by [Rushikesh Chavan](https://www.linkedin.com/in/rushikesh-chavan-275282211/)
