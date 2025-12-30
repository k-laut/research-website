import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResearchSectionProps {
  id: string;
  title: string;
  author: string;
  topic: string;
  children: ReactNode;
  className?: string;
}

export function ResearchSection({
  id,
  title,
  author,
  topic,
  children,
  className,
}: ResearchSectionProps) {
  return (
    <section
      id={id}
      className={cn('section scroll-mt-20', className)}
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2
            id={`${id}-title`}
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-lg text-secondary">
            <span className="font-medium">Author:</span> {author}
          </p>
          <p className="mt-1 text-base text-secondary">
            <span className="font-medium">Topic:</span> {topic}
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground">{children}</div>
      </div>
    </section>
  );
}