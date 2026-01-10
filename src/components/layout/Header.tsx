'use client';

const navItems = [
  { href: '#main-content', label: 'Home' },
  { href: '#kramer-research', label: 'Automation Research' },
  { href: '#lauterbach-research', label: 'Interface Factors' },
  { href: '#figma-prototype', label: 'Prototype' },
];

export function Header() {

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

        {/* Navigation */}
        <nav
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
      </div>
    </header>
  );
}