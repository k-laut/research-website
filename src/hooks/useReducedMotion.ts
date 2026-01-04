'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Gets the current reduced motion preference.
 * Returns false during SSR.
 */
function getSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Server-side snapshot always returns false.
 */
function getServerSnapshot(): boolean {
  return false;
}

/**
 * Subscribes to media query changes.
 */
function subscribe(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

/**
 * Custom hook that detects user's reduced motion preference.
 *
 * Users can set this preference in their operating system:
 * - macOS: System Preferences → Accessibility → Display → Reduce motion
 * - Windows: Settings → Ease of Access → Display → Show animations
 * - iOS: Settings → Accessibility → Motion → Reduce Motion
 *
 * Uses useSyncExternalStore for optimal React 18+ integration.
 *
 * @returns boolean - true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}