# Wind River Advisory — Website

Next.js 14 website. Deploy to Vercel in ~5 minutes.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. First deploy creates the project; subsequent deploys just run `vercel --prod`.

Or connect the repo to Vercel via the dashboard at vercel.com for automatic deploys on every git push.

## Wiring up the contact form

The form currently logs submissions to the console. To receive emails:

### Option A — Resend (recommended, free tier is generous)

1. Sign up at resend.com and get an API key
2. `npm install resend`
3. Add `RESEND_API_KEY=re_xxxxx` to your Vercel environment variables
4. Uncomment the Resend block in `app/api/contact/route.ts` and set your "to" email

### Option B — Formspree (zero code)

1. Sign up at formspree.io and create a form
2. In `components/ContactForm.tsx`, change the fetch URL:
   ```
   fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
   ```
3. Delete `app/api/contact/route.ts`

## Custom domain

In the Vercel dashboard → your project → Settings → Domains → add `windriveradvisory.com`.
Then update your DNS registrar to point to Vercel's nameservers (they walk you through it).

## Editing content

All site copy lives in `app/page.tsx`. Each section is clearly labeled with a comment.
The design tokens (colors, fonts, spacing) are in `app/globals.css` under `:root`.

## Project structure

```
app/
  globals.css       ← all styles and design tokens
  layout.tsx        ← HTML shell + metadata (title, og tags)
  page.tsx          ← all page sections and content
  api/
    contact/
      route.ts      ← form submission handler
components/
  Nav.tsx           ← sticky navigation
  ContactForm.tsx   ← form with client-side state
```
