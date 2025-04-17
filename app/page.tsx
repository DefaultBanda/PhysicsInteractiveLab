"use client";

/**
 * Home page for the Physics Interactive Lab.
 * Wraps the Src/App.jsx root so both the Next App Router
 * and your existing Vite‑style component tree work together.
 *
 * If you don’t have a src/App.jsx, just replace the import
 * with whatever component (or JSX) you want to show.
 */

import App from "../src/App";   // ← update the path if needed

export default function Home() {
  return <App />;
}
