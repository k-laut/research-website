'use client';

import {
  PenLine,
  Lightbulb,
  Scale,
  Bot,
  Network,
} from 'lucide-react';
import { PersonaCard, type Persona } from './PersonaCard';

const personas: Persona[] = [
  {
    level: 0,
    levelName: 'Full Direct Manipulation',
    name: 'Tom',
    age: 41,
    role: 'Controller',
    location: 'Stuttgart',
    motto: 'I want to check and record every transaction myself - without system logic.',
    description:
      'Tom uses finance apps exclusively for manual documentation of his finances. He values complete control and wants to enter, categorize, and evaluate every transaction himself. He rejects automated functions – even suggestions feel intrusive to him. For savings goals, he creates his own spreadsheets and rules that he strictly follows. Tom prefers Autonomy Level 0: no agents, no suggestions, full manual control. He values transparency and predictability, and reacts sensitively to systems that anticipate decisions. Nudges or AI-powered recommendations are a no-go for him – he wants a tool, not a co-thinker.',
    icon: PenLine,
  },
  {
    level: 1,
    levelName: 'Assistive Direct Manipulation with Suggestions',
    name: 'Mira',
    age: 29,
    role: 'Product Manager',
    location: 'Hamburg',
    motto: 'Show me options - but I decide what happens.',
    description:
      'Mira uses finance apps for overview and inspiration. She wants to categorize her expenses herself but is open to optimization suggestions – as long as they are comprehensible and can be turned off. For savings goals like a new bicycle, she likes to see options displayed but decides on the implementation herself. Mira prefers Autonomy Level 1: visible recommendations yes, but no automatic execution. She values transparent interfaces with good explainability and rejects systems that act implicitly. She accepts nudges if they are clearly recognizable as such and don\'t interfere with her freedom of choice.',
    icon: Lightbulb,
  },
  {
    level: 2,
    levelName: 'Semi-Autonomous Agents with Confirmation',
    name: 'Lena',
    age: 34,
    role: 'UX Designer',
    location: 'Berlin',
    motto: 'I want to see recommendations, but I make the decisions about my finances myself.',
    description:
      'Lena uses multiple finance apps but often feels bypassed by automated decisions. She wants budget optimization suggestions but wants to decide herself whether to implement them. For savings goals (e.g., vacation), she\'s open to AI support as long as she retains control. She prefers Autonomy Level 2: recommendations yes, but no automatic execution. She accepts nudges if they are visible and can be turned off.',
    icon: Scale,
  },
  {
    level: 3,
    levelName: 'Autonomous Agent-Based Execution',
    name: 'Jonas',
    age: 36,
    role: 'IT Consultant',
    location: 'Cologne',
    motto: 'If the app acts for me, I want to be able to intervene at any time.',
    description:
      'Jonas uses finance apps to automate routines. He trusts AI agents as long as they operate within defined boundaries and he can intervene at any time. For savings goals like retirement planning or monthly rebalancing, he lets the app act independently – with monitoring and override functionality. Jonas prefers Autonomy Level 3: agents may act, but under clear policies. He expects real-time feedback, transparent decision logic, and regulatory security. Nudges may be implicit as long as they are documented and comprehensible. For him, the app is a co-pilot that works efficiently – but never without consultation.',
    icon: Bot,
  },
  {
    level: 4,
    levelName: 'Multi-Agent Self-Optimizing Automation',
    name: 'Sofia',
    age: 38,
    role: 'Innovation Manager',
    location: 'Munich',
    motto: 'I want a system that knows my goals and improves itself.',
    description:
      'Sofia thinks in scenarios and relies on orchestrated AI agents for financial planning. She uses apps that combine multiple agents with clear roles (e.g., Analyst, Director, Assistant) to optimize complex savings strategies and transaction logic. For goals like property purchase or market simulations, she trusts adaptive systems that self-evaluate and improve. Sofia prefers Autonomy Level 4: self-optimizing agents with dynamic role distribution. She expects scalability, robustness, and enterprise integration. Nudges may adapt to her behavior – as long as they are part of a transparent, learning system.',
    icon: Network,
  },
];

export function PersonasSection() {
  return (
    <div className="card">
      <h3 className="mb-2 text-xl font-semibold">User Personas</h3>
      <p className="mb-6 text-base text-secondary">
        Each automation level is designed for different user preferences and needs.
        Meet the personas that represent each level&apos;s target audience.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {personas.map((persona) => (
          <PersonaCard key={persona.level} persona={persona} />
        ))}
      </div>
    </div>
  );
}