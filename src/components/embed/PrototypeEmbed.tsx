'use client';

import { useState } from 'react';

interface PrototypeEmbedProps {
  url: string;
  title: string;
  description: string;
}

export function PrototypeEmbed({ url, title, description }: PrototypeEmbedProps) {
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
    <div className="prototype-embed-wrapper">
      <div className="sr-only" aria-live="polite">
        {isLoading && 'Loading prototype...'}
        {hasError && 'Failed to load prototype. Please try again later.'}
        {!isLoading && !hasError && 'Prototype loaded successfully.'}
      </div>

      <figure>
        <div
          className="flex justify-center"
          role="img"
          aria-label={`Interactive prototype: ${title}`}
        >
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
            style={{ maxWidth: '450px', height: '800px' }}
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
                    The prototype could not be loaded. Please try refreshing the page.
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                src={url}
                title={title}
                className="h-full w-full"
                style={{ height: '800px' }}
                loading="lazy"
                allowFullScreen
                onLoad={handleLoad}
                onError={handleError}
                aria-describedby="prototype-description"
              />
            )}
          </div>
        </div>

        <figcaption id="prototype-description" className="mt-4 text-center text-sm text-secondary">
          {description}
        </figcaption>
      </figure>
    </div>
  );
}