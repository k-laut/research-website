import { Hero } from '@/components/layout/Hero';
import { KramerResearch } from '@/components/research/KramerResearch';
import { LauterbachResearch } from '@/components/research/LauterbachResearch';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <Hero />
      <KramerResearch />
      <LauterbachResearch />
    </main>
  );
}
