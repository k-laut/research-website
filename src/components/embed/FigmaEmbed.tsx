'use client';

import { useState } from 'react';

interface FigmaEmbedProps {
  url: string;
  title: string;
  description: string;
  /** Display as a phone-sized frame (max 450px width, 800px height) */
  phoneFrame?: boolean;
}

export function FigmaEmbed({ url, title, description, phoneFrame = true }: FigmaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="figma-embed-wrapper">
      <div className="sr-only" aria-live="polite">
        {isLoading && 'Loading Figma prototype...'}
        {hasError && 'Failed to load Figma prototype. Please try again later.'}
        {!isLoading && !hasError && 'Figma prototype loaded successfully.'}
      </div>

      <figure>
        <div
          className={phoneFrame ? 'flex justify-center' : ''}
          role="img"
          aria-label={`Interactive Figma prototype: ${title}`}
        >
          <div
            className={
              phoneFrame
                ? 'relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg'
                : 'figma-container relative'
            }
            style={phoneFrame ? { maxWidth: '450px', height: '800px' } : undefined}
          >
            {isLoading && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-surface"
                aria-hidden="true"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
                  <span className="text-sm text-secondary">Loading prototype...</span>
                </div>
              </div>
            )}

            {hasError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-surface p-4 text-center">
                <div>
                  <p className="mb-2 font-medium text-error">
                    Failed to load prototype
                  </p>
                  <p className="text-sm text-secondary">
                    The Figma embed could not be loaded. Please check your
                    connection or try again later.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary mt-4 inline-flex"
                  >
                    Open in Figma
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={url}
                title={title}
                className="h-full w-full"
                style={phoneFrame ? { height: '800px' } : undefined}
                sandbox="allow-scripts allow-popups allow-same-origin"
                loading="lazy"
                allowFullScreen
                onLoad={handleLoad}
                onError={handleError}
                aria-describedby="figma-description"
              />
            )}
          </div>
        </div>

        <figcaption id="figma-description" className="mt-4 text-center text-sm text-secondary">
          {description}
        </figcaption>
      </figure>

      <div className="mt-4 flex justify-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary text-sm"
        >
          Open in Figma
          <span className="sr-only">(opens in new tab)</span>
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
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}