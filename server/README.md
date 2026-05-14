# Server (Express) — README

This folder contains a minimal Express server to accept reservation requests and store them in a MySQL database (suitable for XAMPP/local MySQL).

Quick start (local):
1. cd server
2. npm install
3. copy `.env.example` to `.env` and edit if needed
4. Ensure MySQL is running (XAMPP) and the `culinaryhub` database + `reservations` table exist (see root README)
5. npm start

Endpoints
- GET /health -> { ok: true }
- POST /api/reservations -> create a reservation
- GET /api/reservations -> list reservations

Security
- This server is a simple demo. For production, add authentication, validation, and rate-limiting, and do not expose direct DB credentials.
