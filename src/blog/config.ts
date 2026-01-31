/**
 * Blog API Configuration
 * Centralized place for all environment-dependent settings
 */

// Default to relative path for production (proxied via hosting)
const API_BASE = import.meta.env.VITE_BLOG_API_BASE || "/wp-json";

// Log for debugging
if (import.meta.env.DEV) {
  if (!import.meta.env.VITE_BLOG_API_BASE) {
    console.warn("⚠️ VITE_BLOG_API_BASE not set, using default:", API_BASE);
  } else {
    console.log("✓ Blog API Base:", API_BASE);
  }
}

export { API_BASE };
export const HERO_COUNT = 5;
export const GRID_PER_PAGE = 9;
