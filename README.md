# Alvaro De Cubas - Portfolio

Personal portfolio for Wakefield-based game programmer Alvaro De Cubas, focused on console porting and game technology. Recent work includes the Nintendo Switch 2 port of *Red Dead Redemption* and another AAA Switch 2 port.

**Live site:** [decubas.github.io](https://decubas.github.io/)

## Projects

The homepage highlights selected work and links to project pages for:

- Sun Warriors - Unreal Engine game development and visual effects
- Coffee Engine - C++ and OpenGL rendering engine
- Unleveled - procedural dungeon-crawler demo
- Team Squad AI - Unity game AI project

The site also includes an about page, résumé, demos, and smaller programming experiments.

## Preview locally

This is a static site. From the repository root, run:

```sh
python -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000). Homepage styles and scripts load from this checkout; project-page links point to the published site.

## Deployment

GitHub Pages publishes the site from this repository. The homepage is `index.html`; its portfolio-specific styles and menu behavior are in `css/portfolio.css` and `js/portfolio.js`.
