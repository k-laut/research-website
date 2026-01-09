'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Persona {
  level: number;
  levelName: string;
  name: string;
  age: number;
  role: string;
  location: string;
  motto: string;
  description: string;
  icon: LucideIcon;
}

interface PersonaCardProps {
  persona: Persona;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = persona.icon;

  return (
    <div className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/50">
      {/* Header - always visible */}
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
            <Icon className="h-3 w-3" aria-hidden="true" />
            Level {persona.level}
          </span>
        </div>
        <h4 className="mt-2 font-semibold text-foreground">{persona.name}</h4>
        <p className="text-sm text-secondary">
          {persona.age}, {persona.role}
        </p>
      </div>

      {/* Motto - always visible */}
      <blockquote className="mt-4 border-l-2 border-primary/50 pl-3 text-sm italic text-secondary">
        &ldquo;{persona.motto}&rdquo;
      </blockquote>

      {/* Level description */}
      <p className="mt-3 text-xs text-secondary/80">{persona.levelName}</p>

      {/* Expand/Collapse button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`persona-details-${persona.level}`}
        className="mt-3 flex w-full items-center justify-center gap-1 rounded-md border border-border px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-border hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          </>
        ) : (
          <>
            <span>Read more</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div
          id={`persona-details-${persona.level}`}
          className="mt-4 border-t border-border pt-4"
        >
          <p className="text-sm leading-relaxed text-secondary">
            {persona.description}
          </p>
        </div>
      )}
    </div>
  );
}