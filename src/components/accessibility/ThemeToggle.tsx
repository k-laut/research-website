'use client';

import { Moon, Sun } from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

/**
 * Accessible theme toggle button that switches between light and dark modes.
 *
 * Follows WCAG 2.2 AA standards:
 * - 44x44px touch target (2.5.5 Target Size)
 * - role="switch" with aria-checked (4.1.2 Name, Role, Value)
 * - Descriptive aria-label announcing current state
 * - Keyboard accessible (native button)
 * - Visual focus indicator with 3:1 contrast
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useAccessibility();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="touch-target rounded-lg p-2 text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
      aria-label={`Theme: ${isDark ? 'Dark' : 'Light'} mode. Click to switch to ${isDark ? 'light' : 'dark'} mode.`}
      role="switch"
      aria-checked={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
      <span className="sr-only">
        Current theme: {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
