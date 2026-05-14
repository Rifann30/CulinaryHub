# CulinaryHub — Demo Project (Commit-ready)

This repository contains a complete scaffold for CulinaryHub — a premium demo website for cafes, restaurants, and F&B agencies. It is built with React, Vite, TypeScript and includes UI, motion, map and booking integrations using Supabase and Firebase (client demos). Additionally, a lightweight Express server is included to support local MySQL (XAMPP) development.

Contents:
- React + Vite + TypeScript app
- Tailwind CSS
- Framer Motion, GSAP, Lenis
- Swiper, React Parallax
- Leaflet for maps
- Supabase & Firebase client examples for reservation demo
- Lightweight Express server for local MySQL (server/index.js)
- README with deployment steps and integration checklists
- Styleguide tokens + draft Figma spec in /docs

Quickstart (frontend)
1. Clone or download this repo.
2. Copy `.env.example` to `.env` and fill your Supabase, Firebase and API credentials.
3. Install deps for frontend: `npm install`
4. Run dev server (frontend): `npm run dev`

Run server (local MySQL with XAMPP)
1. Ensure XAMPP MySQL is running and create database & table (see below).
2. cd server
   npm install
   cp .env.example .env && edit .env if needed
   npm start
3. Server will run at http://localhost:4000 and expose endpoints:
   - GET /health
   - POST /api/reservations
   - GET /api/reservations

MySQL schema (phpMyAdmin / MySQL console)

CREATE DATABASE IF NOT EXISTS culinaryhub;
USE culinaryhub;

CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  guests INT NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Deploy (Vercel)
1. Create a Vercel project and connect to this GitHub repository.
2. If you plan to use the local Express server in production, you need to deploy it separately (e.g., as a Node server on Render, Railway, or a VPS). Vercel is best for frontend — serverless functions can be used for APIs.
3. Set Environment Variables in Vercel (Production & Preview):
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID
   - (If using remote API) VITE_API_URL
4. Build Command: npm run build
   Output Directory: dist
5. Deploy — Vercel will build and publish the app.

Server notes
- The included Express server is a minimal demo for local development with MySQL.
- Do not expose local database credentials publicly.
- For production, use a managed DB and secure server endpoints with authentication and rate limiting.

