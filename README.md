# InfoGuard — Frontend Prototype

This repository contains a Vite + React + Tailwind frontend scaffold for the InfoGuard hackathon project. It uses mock data and a fake service layer to simulate the main user flow: paste a claim → analyze → see trust score, explanation and sources.

How to run locally

1. Install dependencies

   npm install

2. Run dev server

   npm run dev

Notes

- UI uses Tailwind CSS and Lucide icons.
- The mock service is in src/services/factCheckService.js and should be replaced with a real API later.
- This initial commit focuses on the main demo flow (Home → Analyze → Result). Additional pages are scaffolded.
