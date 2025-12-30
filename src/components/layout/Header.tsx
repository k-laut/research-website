'use client';

import { useState, useCallback, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#main-content', label: 'Home' },
  { href: '#kramer-research', label: 'Automation Research' },
  { href: '#lauterbach-research', label: 'Interface Factors' },
  { href: '#figma-prototype', label: 'Prototype' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#main-content"
          className="nav-link text-xl font-bold text-foreground"
          aria-label="Research Website - Home"
        >
          Research Hub
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link touch-target rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="touch-target rounded-lg p-2 text-foreground hover:bg-surface md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <FocusTrap
          focusTrapOptions={{
            allowOutsideClick: true,
            escapeDeactivates: true,
            onDeactivate: closeMenu,
          }}
        >
          <div
            id="mobile-menu"
            className="fixed inset-0 top-16 z-50 bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav
              className="flex flex-col p-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        'nav-link block rounded-lg px-4 py-3 text-lg font-medium',
                        'text-foreground transition-colors',
                        'hover:bg-surface hover:text-primary',
                        'focus-visible:bg-surface'
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </FocusTrap>
      )}
    </header>
  );
}