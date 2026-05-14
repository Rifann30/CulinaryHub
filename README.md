# CulinaryHub — Demo Project (Commit-ready)

This repository contains a complete scaffold for CulinaryHub — a premium demo website for cafes, restaurants, and F&B agencies. It is built with React, Vite, TypeScript and includes UI, motion, map and booking integrations using Supabase and Firebase (client demos).

Contents:
- React + Vite + TypeScript app
- Tailwind CSS
- Framer Motion, GSAP, Lenis
- Swiper, React Parallax
- Leaflet for maps
- Supabase & Firebase client examples for reservation demo
- README with deployment steps and integration checklists
- Styleguide tokens + draft Figma spec in /docs

Quickstart
1. Clone or download this repo.
2. Copy `.env.example` to `.env` and fill your Supabase and Firebase credentials.
3. Install deps: `npm install`
4. Run dev server: `npm run dev`

Deploy (Vercel)
1. Create a Vercel project and connect to this GitHub repository.
2. Set Environment Variables in Vercel (Production):
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID
3. Set Build Command: `npm run build` and Output Directory: `dist` (Vite default)
4. Deploy — Vercel will build and publish the app.

Supabase Integration Checklist
- [ ] Create a Supabase project at https://app.supabase.com
- [ ] Create table `reservations` using `scripts/seed_supabase.sql` (run in SQL editor)
- [ ] Add RLS policies / API keys appropriately. For demo, client-side anon key is used; for production, implement server-side functions.
- [ ] Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env` (local) and in Vercel Environment Variables.
- [ ] (Optional) Add triggers or functions to send booking confirmations.

Firebase Integration Checklist
- [ ] Create Firebase project and enable Firestore
- [ ] Configure Firestore rules (see `scripts/firebase.rules`) and deploy rules
- [ ] Add Firebase config values to `.env` and Vercel environment variables
- [ ] For production, use Firebase Authentication and server-side rules to protect data

Security Note
- Never commit secret keys to the repository. Use environment variables.
- For production booking systems, never rely solely on client-side anon keys. Use server-side endpoints to handle sensitive operations and enforce business rules.

Styleguide & Figma
- See `/docs/styleguide` for color tokens, spacing scale, and typography tokens.
- See `/docs/figma_spec.md` for a draft Figma spec and export instructions.

Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally

Support
If you want, I can also:
- Create a PR with labels & checklist
- Seed Supabase for you (if you provide service credentials securely)
- Connect Vercel (if you grant the deployment access)

