'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook that detects user's reduced motion preference.
 *
 * Users can set this preference in their operating system:
 * - macOS: System Preferences → Accessibility → Display → Reduce motion
 * - Windows: Settings → Ease of Access → Display → Show animations
 * - iOS: Settings → Accessibility → Motion → Reduce Motion
 *
 * @returns boolean - true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;

    // Create media query for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes (user might toggle preference while on page)
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}