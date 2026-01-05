'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';

export type FontSize = 'normal' | 'large' | 'larger';
export type ContrastMode = 'normal' | 'high';

interface AccessibilityPreferences {
  fontSize: FontSize;
  contrastMode: ContrastMode;
}

interface AccessibilityContextValue extends AccessibilityPreferences {
  setFontSize: (size: FontSize) => void;
  setContrastMode: (mode: ContrastMode) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleHighContrast: () => void;
  resetPreferences: () => void;
}

const defaultPreferences: AccessibilityPreferences = {
  fontSize: 'normal',
  contrastMode: 'normal',
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const STORAGE_KEY = 'accessibility-preferences';

// Font size scale factors
const fontSizeClasses: Record<FontSize, string> = {
  normal: '',
  large: 'text-scale-large',
  larger: 'text-scale-larger',
};

// Font size order for increment/decrement
const fontSizeOrder: FontSize[] = ['normal', 'large', 'larger'];

// Helper to get initial preferences (runs once during state initialization)
function getInitialPreferences(): AccessibilityPreferences {
  if (typeof window === 'undefined') {
    return defaultPreferences;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<AccessibilityPreferences>;
      return { ...defaultPreferences, ...parsed };
    } catch {
      return defaultPreferences;
    }
  }
  return defaultPreferences;
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(getInitialPreferences);
  const isFirstRender = useRef(true);

  // Save preferences to localStorage when they change (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  // Apply preferences to document
  useEffect(() => {
    const html = document.documentElement;

    // Remove all font size classes first
    Object.values(fontSizeClasses).forEach((cls) => {
      if (cls) html.classList.remove(cls);
    });

    // Add current font size class
    const fontClass = fontSizeClasses[preferences.fontSize];
    if (fontClass) html.classList.add(fontClass);

    // Toggle high contrast mode
    html.classList.toggle('high-contrast', preferences.contrastMode === 'high');

    // Set data attributes for CSS targeting
    html.dataset.fontSize = preferences.fontSize;
    html.dataset.contrast = preferences.contrastMode;
  }, [preferences]);

  const setFontSize = useCallback((size: FontSize) => {
    setPreferences((prev) => ({ ...prev, fontSize: size }));
  }, []);

  const setContrastMode = useCallback((mode: ContrastMode) => {
    setPreferences((prev) => ({ ...prev, contrastMode: mode }));
  }, []);

  const increaseFontSize = useCallback(() => {
    setPreferences((prev) => {
      const currentIndex = fontSizeOrder.indexOf(prev.fontSize);
      const nextIndex = Math.min(currentIndex + 1, fontSizeOrder.length - 1);
      return { ...prev, fontSize: fontSizeOrder[nextIndex] };
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setPreferences((prev) => {
      const currentIndex = fontSizeOrder.indexOf(prev.fontSize);
      const nextIndex = Math.max(currentIndex - 1, 0);
      return { ...prev, fontSize: fontSizeOrder[nextIndex] };
    });
  }, []);

  const toggleHighContrast = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      contrastMode: prev.contrastMode === 'normal' ? 'high' : 'normal',
    }));
  }, []);

  const resetPreferences = useCallback(() => {
    setPreferences(defaultPreferences);
  }, []);

  const value: AccessibilityContextValue = {
    ...preferences,
    setFontSize,
    setContrastMode,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    resetPreferences,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility(): AccessibilityContextValue {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}