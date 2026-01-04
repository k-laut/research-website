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
            and overall app effectiveness [1]. The framework builds upon
            Parasuraman et al.&apos;s foundational taxonomy of automation levels [2],
            adapting it specifically for the personal finance domain.
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Key Focus Areas</h3>
          <ul className="list-inside list-disc space-y-2 text-base">
            <li>
              <strong>Manual Control:</strong> Traditional budgeting approaches
              where users input and categorize all transactions manually,
              following established personal finance methodologies [3]
            </li>
            <li>
              <strong>Semi-Automated:</strong> Systems that suggest categories
              and actions while requiring user confirmation, balancing automation
              with user agency [4]
            </li>
            <li>
              <strong>Fully Automated:</strong> AI-driven systems that
              automatically categorize, analyze, and provide recommendations
              based on machine learning algorithms [5]
            </li>
            <li>
              <strong>Hybrid Approaches:</strong> Combining manual oversight with
              automated assistance for optimal user control, as recommended by
              human-AI collaboration research [6]
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Methodology</h3>
          <p className="text-base leading-relaxed">
            The research employed a mixed-methods approach combining user studies,
            comparative analysis of existing finance applications, and prototype
            testing [1]. Participants were evaluated across different automation
            levels to measure their confidence, accuracy, and satisfaction with
            personal budgeting tasks, following established usability evaluation
            frameworks [7].
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
                fully automated black-box solutions [1]. This aligns with research
                on explainable AI and user trust [8].
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Learning Curve Considerations</h4>
              <p className="mt-2 text-sm text-secondary">
                Higher automation levels reduced the initial learning curve but
                potentially decreased long-term financial literacy development
                among users [1], consistent with automation complacency research [9].
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Customization Preferences</h4>
              <p className="mt-2 text-sm text-secondary">
                Users expressed strong preferences for customizable automation
                levels, allowing them to increase or decrease assistance based on
                their comfort and expertise [1], supporting adaptive automation
                design principles [10].
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
            preferences and expertise levels [1]. This approach balances the
            efficiency of automation with the educational value of manual
            engagement, ultimately leading to more effective personal finance
            management tools [11].
          </p>
        </div>

        {/* References Section */}
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">References</h3>
          <ol className="list-decimal space-y-2 pl-6 text-sm text-secondary">
            <li id="ref-1">
              Krämer, S. (2025). Levels of Automation in Personal Budgeting and
              Finance Applications: A User-Centered Design Study.{' '}
              <em>Unpublished research manuscript</em>.
            </li>
            <li id="ref-2">
              Parasuraman, R., Sheridan, T. B., &amp; Wickens, C. D. (2000). A model
              for types and levels of human interaction with automation.{' '}
              <em>IEEE Transactions on Systems, Man, and Cybernetics</em>, 30(3),
              286–297.
            </li>
            <li id="ref-3">
              Ramsey, D. (2013). <em>The Total Money Makeover</em>. Thomas Nelson.
            </li>
            <li id="ref-4">
              Horvitz, E. (1999). Principles of mixed-initiative user interfaces.{' '}
              <em>Proceedings of the SIGCHI Conference on Human Factors in
              Computing Systems</em>, 159–166.
            </li>
            <li id="ref-5">
              Amershi, S., et al. (2019). Guidelines for human-AI interaction.{' '}
              <em>Proceedings of the CHI Conference on Human Factors in Computing
              Systems</em>, 1–13.
            </li>
            <li id="ref-6">
              Shneiderman, B. (2022). <em>Human-Centered AI</em>. Oxford University
              Press.
            </li>
            <li id="ref-7">
              Nielsen, J. (1994). <em>Usability Engineering</em>. Morgan Kaufmann.
            </li>
            <li id="ref-8">
              Ribeiro, M. T., Singh, S., &amp; Guestrin, C. (2016). Why should I trust
              you? Explaining the predictions of any classifier.{' '}
              <em>Proceedings of the ACM SIGKDD International Conference</em>,
              1135–1144.
            </li>
            <li id="ref-9">
              Parasuraman, R., &amp; Manzey, D. H. (2010). Complacency and bias in
              human use of automation.{' '}
              <em>Human Factors</em>, 52(3), 381–410.
            </li>
            <li id="ref-10">
              Oppermann, R. (1994). <em>Adaptive User Support</em>. Lawrence Erlbaum
              Associates.
            </li>
            <li id="ref-11">
              Fernandes, D., Lynch Jr, J. G., &amp; Netemeyer, R. G. (2014). Financial
              literacy, financial education, and downstream financial behaviors.{' '}
              <em>Management Science</em>, 60(8), 1861–1883.
            </li>
          </ol>
        </div>
      </div>
    </ResearchSection>
  );
}