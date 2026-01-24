/**
 * Blog API Configuration
 * Centralized place for all environment-dependent settings
 */

const API_BASE = import.meta.env.VITE_BLOG_API_BASE;

// Runtime validation - ensure env var is set
if (!API_BASE) {
  console.error(
    "❌ VITE_BLOG_API_BASE is not defined. Blog API calls will fail.",
    "Expected: VITE_BLOG_API_BASE=/wp-json in .env.local"
  );
  throw new Error(
    "Missing VITE_BLOG_API_BASE environment variable. Check .env.local"
  );
}

// Log for debugging
if (import.meta.env.DEV) {
  console.log("✓ Blog API Base:", API_BASE);
}

export { API_BASE };
export const HERO_COUNT = 5;
export const GRID_PER_PAGE = 9;
