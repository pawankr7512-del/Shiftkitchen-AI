# SwiftKitchen AI

Marketing site for SwiftKitchen AI — WhatsApp automation for cloud kitchens, bakeries, sweet shops, and restaurants.

Built with **Next.js** (App Router), **React**, and **Tailwind CSS v4**, exported as a static site for easy deployment on **Vercel**.

## Getting started

```powershell
cd "C:\Users\pawan\Desktop\ShiftKitchen_AI"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are generated in the `out/` folder (`output: "export"`).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel auto-detects Next.js — no extra config needed.
4. Deploy.

Alternatively, connect the `out/` folder after `npm run build` as a static site.

## Project structure

```
src/
  app/           # Next.js App Router (layout, page, styles)
  components/    # Landing page + shadcn/ui components
  assets/        # Images used in the landing page
  lib/           # Utilities
public/          # Favicons and static files
```
