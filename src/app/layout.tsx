import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SkipLinks } from '@/components/accessibility/SkipLinks';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Research Hub - Automation & Interface Design',
  description:
    'Exploring automation levels in personal finance apps and factors influencing direct manipulation vs. agentic AI interface preferences. Research by Krämer and Lauterbach.',
  keywords: [
    'automation',
    'personal finance',
    'budgeting apps',
    'AI interfaces',
    'direct manipulation',
    'user experience',
    'research',
  ],
  authors: [{ name: 'Krämer' }, { name: 'Lauterbach' }],
  openGraph: {
    title: 'Research Hub - Automation & Interface Design',
    description:
      'Exploring automation levels in personal finance apps and interface design preferences.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <SkipLinks />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
