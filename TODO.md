# TODO

Known deferred work. Nothing here is a bug in what's shipped — these are
things we consciously put off.

## Before the site goes live

### Wire up the contact form
`src/components/ContactSection.jsx` currently fakes a successful submit —
`handleSubmit` sets `submitted` to `true` without sending anything. Right
now that's harmless because nothing is deployed, but it must not ship as
is: it would tell people we'd received a demo request when we hadn't.

Plan is Resend on Vercel (the app is already hosted there):
- `api/demo-request.js` as a Vercel serverless function — the API key can
  never live in client code, and a Vite SPA has no server of its own.
- `RESEND_API_KEY` in Vercel's environment variables, not in this repo.
- Verify the facify.io domain in Resend (SPF + DKIM DNS records). **This
  is the long-lead item** and is independent of deploying the site, so it
  can be started at any time.
- The form needs real states: async submit, a pending state, and an error
  path. It currently has no way to fail.
- A public unauthenticated endpoint will attract bots — add a honeypot
  field and basic rate limiting.

### SEO
`index.html` has a title, a description and a favicon, and nothing else.
Missing: Open Graph and Twitter card tags, a canonical URL, `robots.txt`,
`sitemap.xml`, and structured data.

Open Graph matters most in the short term: pasting the URL into LinkedIn,
Slack or an email currently renders a bare link with no title, image or
description, and that's how most people will first meet the site.

Also note the site is a client-rendered SPA, so crawlers that don't run
JavaScript see an empty `<div id="root">`. Build-time prerendering would
fix that and is straightforward for a site this size.

### Deployment
Nothing is deployed. Plan is a separate Vercel project pointed at this
repo, on `facify.io` / `www.facify.io`, with the app staying on
`app.facify.io`.

## Housekeeping

### The unrouted pages need a dark pass
`src/pages/{About,Blog,BlogPost,Contact,Features,Help,Pricing}.jsx` are
preserved but not routed. They were written against the old light theme
and still carry `bg-white` and `border-black/*` utilities, so they would
render dark-on-dark if restored as is. See the note in `src/App.jsx`.

### Placeholder content
`src/data/help.js` and `src/data/posts.js` are stubs, not real content.
They only matter if the Help Center or Blog is restored.
