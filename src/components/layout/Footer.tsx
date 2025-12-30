export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-surface"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm text-secondary">
              Research Website - Automation &amp; Interface Design
            </p>
            <p className="text-xs text-secondary">
              Built with accessibility, security, and user experience as core
              priorities.
            </p>
          </div>

          <div className="text-sm text-secondary">
            <p>Contributors:</p>
            <ul className="mt-1 list-none">
              <li>Krämer - Automation in Finance Apps</li>
              <li>Lauterbach - Interface Preferences, Development</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-xs text-secondary">
            &copy; {currentYear} Research Project. Created for academic
            purposes.
          </p>
          <p className="mt-2 text-xs text-secondary">
            This website meets WCAG 2.2 AA accessibility standards.
          </p>
        </div>
      </div>
    </footer>
  );
}