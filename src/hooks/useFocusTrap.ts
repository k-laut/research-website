'use client';

import { useEffect, useRef, useCallback, RefObject } from 'react';

interface UseFocusTrapOptions {
  /** Whether the focus trap is currently active */
  isActive: boolean;
  /** Callback when escape key is pressed */
  onEscape?: () => void;
  /** Element to return focus to when trap is deactivated */
  returnFocusTo?: RefObject<HTMLElement | null>;
}

/**
 * Custom hook that traps keyboard focus within a container element.
 *
 * Essential for accessibility in modals, dialogs, and dropdown menus.
 * Ensures keyboard users can't accidentally tab out of the component.
 *
 * @param options - Configuration options for the focus trap
 * @returns ref to attach to the container element
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>({
  isActive,
  onEscape,
  returnFocusTo,
}: UseFocusTrapOptions): RefObject<T | null> {
  const containerRef = useRef<T>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Get all focusable elements within container
  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter((el) => el.offsetParent !== null); // Only visible elements
  }, []);

  // Handle tab key navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive || !containerRef.current) return;

      if (event.key === 'Escape' && onEscape) {
        event.preventDefault();
        onEscape();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift+Tab on first element → go to last
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
      // Tab on last element → go to first
      else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    [isActive, onEscape, getFocusableElements]
  );

  useEffect(() => {
    if (isActive) {
      // Store current focus to restore later
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus first focusable element in container
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      // Add keyboard listener
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      // Restore focus when trap is deactivated
      if (isActive) {
        const elementToFocus =
          returnFocusTo?.current || previousActiveElement.current;
        if (elementToFocus && typeof elementToFocus.focus === 'function') {
          elementToFocus.focus();
        }
      }
    };
  }, [isActive, handleKeyDown, getFocusableElements, returnFocusTo]);

  return containerRef;
}