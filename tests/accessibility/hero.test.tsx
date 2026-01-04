import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Hero } from '@/components/layout/Hero';

/**
 * Accessibility tests for the Hero component.
 *
 * These tests use axe-core to automatically detect common
 * accessibility issues like:
 * - Missing alt text on images
 * - Insufficient color contrast
 * - Invalid ARIA attributes
 * - Missing form labels
 * - Improper heading hierarchy
 */
describe('Hero Component Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Hero />);

    // Run axe accessibility checks
    const results = await axe(container);

    // This will fail if any a11y violations are found
    expect(results).toHaveNoViolations();
  });

  it('should have proper heading hierarchy', () => {
    const { getByRole } = render(<Hero />);

    // Hero should have an h1 as the main heading
    const mainHeading = getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent(/automation.*interface.*design/i);
  });

  it('should have accessible navigation links', () => {
    const { getAllByRole } = render(<Hero />);

    // Check that buttons/links are keyboard accessible
    const links = getAllByRole('link');
    links.forEach((link) => {
      // Links should have discernible text
      expect(link).toHaveAccessibleName();
    });
  });

  it('should have proper section landmark', () => {
    const { container } = render(<Hero />);

    // Hero should be wrapped in a section with aria-labelledby
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('aria-labelledby', 'hero-title');
  });
});