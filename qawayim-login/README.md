# Qawayim Login

A modern login page built with **React + Vite + Tailwind CSS**.

The app displays a full-screen background video with a glass-style login panel including:
- Email and password fields
- Password show/hide toggle
- "Forgot Password" and "Sign Up" links (UI only)
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Example value:

```env
VITE_API_URL=http://localhost:3000
```

> Note: `VITE_API_URL` is prepared for API integration and is not yet used by the current UI-only login form.

### 3) Run development server

```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
qawayim-login/
- public/
  - 5.png          # Logo image
  - osama.mp4      # Background video
- src/
  - App.jsx        # Login page UI
  - main.jsx       # App entry point
  - index.css      # Tailwind import + global styles
- .env.example
- tailwind.config.js
- package.json
```

## Notes

- Background assets are loaded from `public/` using root paths (`/5.png`, `/osama.mp4`).
- The current form logs submitted values to the browser console.
- Connect your real authentication API in `src/App.jsx` (`handleSubmit`) when ready.
