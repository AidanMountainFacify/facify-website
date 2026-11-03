# FACiFY website

Static marketing site for [facify.io](https://facify.io). Plain HTML and CSS — no build step.

## Structure

```
facify-site/
├── index.html            # The page
├── og-image.png          # Link preview image (1200×630), served at /og-image.png
├── css/
│   └── styles.css        # All site styles
├── assets/
│   └── images/
│       ├── favicon.png
│       ├── logo.png
│       ├── hero.png
│       └── mascot-fred.png
└── vercel.json           # Vercel hosting config
```

Asset paths in `index.html` are root-relative (`/css/...`, `/assets/...`), so preview
the site through a local server rather than by opening the file directly.

## Run locally

Any static server works, for example:

```bash
npx serve .
```

## Deploy

Hosted on Vercel. `vercel.json` tells Vercel there is no framework, install or build
step and that the project root is the output directory, so it overrides any build
settings left over in the Vercel dashboard. Every push to `master` deploys to
production; other branches get preview URLs.

The Open Graph tags point to `https://facify.io/og-image.png`, so link previews
only work once the `facify.io` domain is attached to the Vercel project.
