'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useAccessibility, type FontSize } from '@/contexts/AccessibilityContext';

const fontSizeLabels: Record<FontSize, string> = {
  normal: 'Normal',
  large: 'Large (125%)',
  larger: 'Larger (150%)',
};

export function AccessibilityInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    fontSize,
    contrastMode,
    setFontSize,
    toggleHighContrast,
    resetPreferences,
  } = useAccessibility();

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Return focus to trigger button
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  }, []);

  // Handle escape key, body scroll, and initial focus
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    // Focus the close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  // Handle focus trapping manually
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={openModal}
        className="fixed right-4 top-20 z-40 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground shadow-md transition-all hover:bg-background hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-haspopup="dialog"
      >
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="hidden sm:inline">Accessibility Features</span>
          <span className="sm:hidden">A11y</span>
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="presentation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-modal-title"
            aria-describedby="a11y-modal-description"
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2
                  id="a11y-modal-title"
                  className="text-2xl font-bold text-foreground"
                >
                  Accessibility Features
                </h2>
                <p
                  id="a11y-modal-description"
                  className="mt-1 text-sm text-secondary"
                >
                  This website is designed following ISO 9241 and WCAG 2.2 AA
                  guidelines
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="rounded-lg p-2 text-secondary hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close accessibility information"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Controls */}
              <section className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Adjust Display Settings
                </h3>

                <div className="space-y-4">
                  {/* Font Size */}
                  <div>
                    <label
                      htmlFor="font-size-select"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Text Size
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {(['normal', 'large', 'larger'] as FontSize[]).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFontSize(size)}
                          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            fontSize === size
                              ? 'bg-primary text-white'
                              : 'bg-surface text-foreground hover:bg-border'
                          }`}
                          aria-pressed={fontSize === size}
                        >
                          {fontSizeLabels[size]}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-secondary">
                      Current: {fontSizeLabels[fontSize]}
                    </p>
                  </div>

                  {/* High Contrast */}
                  <div>
                    <span className="mb-2 block text-sm font-medium text-foreground">
                      High Contrast Mode
                    </span>
                    <button
                      type="button"
                      onClick={toggleHighContrast}
                      role="switch"
                      aria-checked={contrastMode === 'high'}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                        contrastMode === 'high'
                          ? 'bg-primary'
                          : 'bg-border'
                      }`}
                    >
                      <span className="sr-only">
                        {contrastMode === 'high' ? 'Disable' : 'Enable'} high contrast mode
                      </span>
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
                          contrastMode === 'high' ? 'translate-x-7' : 'translate-x-1'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <p className="mt-2 text-xs text-secondary">
                      {contrastMode === 'high'
                        ? 'High contrast is enabled (black background, yellow text)'
                        : 'Enable for maximum readability'}
                    </p>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetPreferences}
                      className="text-sm font-medium text-secondary underline hover:text-foreground"
                    >
                      Reset to defaults
                    </button>
                  </div>
                </div>

                {/* Live region for announcements */}
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                  Text size: {fontSizeLabels[fontSize]}.
                  High contrast: {contrastMode === 'high' ? 'enabled' : 'disabled'}.
                </div>
              </section>

              {/* Standards */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Standards Compliance
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>WCAG 2.2 Level AA</strong> – Web Content
                      Accessibility Guidelines for perceivable, operable,
                      understandable, and robust content
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>ISO 9241-171</strong> – Guidance on software
                      accessibility for users with disabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>ISO 9241-110</strong> – Interaction principles
                      including controllability and error tolerance
                    </span>
                  </li>
                </ul>
              </section>

              {/* Navigation */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Navigation &amp; Keyboard Access
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Skip Links</strong> – Press Tab on page load to
                      access &quot;Skip to main content&quot; and &quot;Skip to
                      navigation&quot; links
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Full Keyboard Navigation</strong> – All
                      interactive elements are accessible via Tab, Enter, and
                      Escape keys
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Focus Indicators</strong> – Visible focus rings
                      with 3:1 contrast ratio on all interactive elements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Focus Trapping</strong> – Modal dialogs and menus
                      trap focus to prevent losing context
                    </span>
                  </li>
                </ul>
              </section>

              {/* Visual */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Visual Accessibility
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Color Contrast</strong> – Minimum 4.5:1 for
                      normal text, 3:1 for large text (WCAG AA)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Reduced Motion</strong> – Animations respect the
                      &quot;prefers-reduced-motion&quot; system setting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Responsive Design</strong> – Content adapts to
                      all screen sizes without horizontal scrolling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Text Scaling</strong> – Page remains functional
                      at 200% zoom level
                    </span>
                  </li>
                </ul>
              </section>

              {/* Screen Readers */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Screen Reader Support
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Semantic HTML</strong> – Proper use of headings,
                      landmarks, lists, and tables for structure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>ARIA Labels</strong> – Descriptive labels for all
                      interactive elements and regions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Live Regions</strong> – Dynamic content changes
                      are announced to assistive technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Descriptive Links</strong> – All links have
                      meaningful text describing their destination
                    </span>
                  </li>
                </ul>
              </section>

              {/* Touch */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Touch &amp; Mobile Accessibility
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Touch Targets</strong> – Minimum 44×44 CSS pixels
                      for all interactive elements (WCAG 2.2)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                    <span>
                      <strong>Target Spacing</strong> – Adequate spacing
                      between interactive elements to prevent mis-taps
                    </span>
                  </li>
                </ul>
              </section>

              {/* Testing */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Testing &amp; Validation
                </h3>
                <p className="text-sm text-secondary">
                  This website has been tested with:
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  <li className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    axe-core
                  </li>
                  <li className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    Lighthouse
                  </li>
                  <li className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    NVDA
                  </li>
                  <li className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    VoiceOver
                  </li>
                  <li className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    Keyboard-only
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="rounded-lg border border-border bg-surface p-4">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Feedback &amp; Support
                </h3>
                <p className="text-sm text-secondary">
                  If you encounter any accessibility barriers or have
                  suggestions for improvement, please contact us. We are
                  committed to providing an accessible experience for all users.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
