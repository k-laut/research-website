import { ResearchSection } from './ResearchSection';
import { FigmaEmbed } from '../embed/FigmaEmbed';

export function KramerResearch() {
  return (
    <ResearchSection
      id="kramer-research"
      title="Levels of Automation in Personal Budgeting"
      author="Krämer"
      topic="Automation Levels in Personal Budgeting and Finance Apps"
      className="bg-surface"
    >
      <div className="space-y-8">
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Overview</h3>
          <p className="text-base leading-relaxed">
            This research explores different levels of automation in personal
            budgeting and finance applications, analyzing how varying degrees of
            automated features impact user experience, financial decision-making,
            and overall app effectiveness.
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Key Focus Areas</h3>
          <ul className="list-inside list-disc space-y-2 text-base">
            <li>
              <strong>Manual Control:</strong> Traditional budgeting approaches
              where users input and categorize all transactions manually
            </li>
            <li>
              <strong>Semi-Automated:</strong> Systems that suggest categories
              and actions while requiring user confirmation
            </li>
            <li>
              <strong>Fully Automated:</strong> AI-driven systems that
              automatically categorize, analyze, and provide recommendations
            </li>
            <li>
              <strong>Hybrid Approaches:</strong> Combining manual oversight with
              automated assistance for optimal user control
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Methodology</h3>
          <p className="text-base leading-relaxed">
            The research employed a mixed-methods approach combining user studies,
            comparative analysis of existing finance applications, and prototype
            testing. Participants were evaluated across different automation
            levels to measure their confidence, accuracy, and satisfaction with
            personal budgeting tasks.
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Key Findings</h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">User Trust &amp; Automation</h4>
              <p className="mt-2 text-sm text-secondary">
                Users demonstrated higher trust in semi-automated systems that
                provided transparency into decision-making processes, compared to
                fully automated black-box solutions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Learning Curve Considerations</h4>
              <p className="mt-2 text-sm text-secondary">
                Higher automation levels reduced the initial learning curve but
                potentially decreased long-term financial literacy development
                among users.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Customization Preferences</h4>
              <p className="mt-2 text-sm text-secondary">
                Users expressed strong preferences for customizable automation
                levels, allowing them to increase or decrease assistance based on
                their comfort and expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="card" id="figma-prototype">
          <h3 className="mb-4 text-xl font-semibold">Interactive Prototype</h3>
          <p className="mb-6 text-base text-secondary">
            Explore the interactive Figma prototype demonstrating different
            automation levels in a personal budgeting application. Use keyboard
            navigation or mouse to interact with the prototype.
          </p>
          <FigmaEmbed
            url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FexamplePrototype"
            title="Personal Budgeting App Prototype - Automation Levels"
            description="Interactive prototype showing three automation levels: Manual, Semi-Automated, and Fully Automated budgeting interfaces. Navigate through different screens to experience how automation affects user interaction with financial data."
          />
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Implications for Design</h3>
          <p className="text-base leading-relaxed">
            The research suggests that finance app designers should consider
            implementing adjustable automation tiers that adapt to user
            preferences and expertise levels. This approach balances the
            efficiency of automation with the educational value of manual
            engagement, ultimately leading to more effective personal finance
            management tools.
          </p>
        </div>
      </div>
    </ResearchSection>
  );
}