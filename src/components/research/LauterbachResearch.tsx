import { ResearchSection } from './ResearchSection';

export function LauterbachResearch() {
  return (
    <ResearchSection
      id="lauterbach-research"
      title="Direct Manipulation vs. Agentic AI Interfaces"
      author="Lauterbach"
      topic="Factors Influencing Adoption of Direct Manipulation vs. Agentic AI Interfaces"
    >
      <div className="space-y-8">
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Overview</h3>
          <p className="text-base leading-relaxed">
            This research synthesizes findings from multiple studies to identify
            the key factors that influence whether users prefer direct manipulation
            interfaces or agentic AI-driven interfaces. The analysis reveals that
            preference is shaped by cultural background, trust disposition,
            financial literacy, cognitive load, and system design characteristics.
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">
            Factors Favoring Direct Manipulation
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Autonomous Behavior Concerns</h4>
              <p className="mt-1 text-sm text-secondary">
                Users may feel threatened if chatbots behave too autonomously.
                The concept of a thinking robot that autonomously generates ideas,
                desires, and expresses needs is unsettling and evokes strong
                feelings of eeriness alongside fascination [7].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Proactive Irrelevant Information</h4>
              <p className="mt-1 text-sm text-secondary">
                When AI proactively provides irrelevant information, it is viewed
                negatively by users [7]. Users prefer systems that provide relevant,
                timely assistance rather than unsolicited suggestions.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Lack of Explanation</h4>
              <p className="mt-1 text-sm text-secondary">
                Users distrust automated aids, even reliable ones, unless an
                explanation for errors is provided [9]. If users are not provided
                with an explanation for the AI&apos;s decisions, they are less likely
                to use it.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Perceived Comparative Advantage</h4>
              <p className="mt-1 text-sm text-secondary">
                Users judge AI against their own perceived skill. If the AI cannot
                prove it is adding value above and beyond what the user can do
                themselves, the user will likely revert to manual control [9].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Cultural Values: Individualism</h4>
              <p className="mt-1 text-sm text-secondary">
                Individualistic cultures (USA, Northern Europe) strongly prefer
                direct manipulation and control, viewing AI as a tool for personal
                goals [1]. Low power distance (egalitarian) societies demand
                transparent justification from AI systems [2].
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">
            Factors Favoring Agentic AI Interfaces
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-medium">Financial Knowledge &amp; Literacy</h4>
              <p className="mt-1 text-sm text-secondary">
                Only individuals with an advanced level of financial literacy are
                more likely to be potential users of robo-advisors [4]. High
                financial knowledge combined with understanding the benefits of
                robo-advisory systems makes adoption more probable [3][4].
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-medium">Cognitive Fatigue</h4>
              <p className="mt-1 text-sm text-secondary">
                Intensive cognitive effort degrades the capacity for self-control
                in economic choices, leading to systematic bias toward immediate
                gains [5]. Under cognitive load, users may prefer delegation to AI.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-medium">High General Trust Disposition</h4>
              <p className="mt-1 text-sm text-secondary">
                Participants who displayed a high level of trust in financial
                assistants also had a higher tendency to trust in general [7].
                No significant differences were found based on age or neuroticism.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-medium">Cultural Values: Collectivism</h4>
              <p className="mt-1 text-sm text-secondary">
                Collectivistic cultures (China, Southeast Asia) accept interface
                agents and AI influence, viewing AI as a collaborative social
                participant [1]. High power distance (hierarchical) societies
                perceive legitimacy from institutional authority and extrapolate
                that onto algorithms [2].
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-medium">Human-in-the-Loop Design</h4>
              <p className="mt-1 text-sm text-secondary">
                Embracing a human-in-the-loop (HITL) model allows AI agents to
                propose actions while humans retain final decision-making,
                balancing automation with oversight. This approach builds trust
                and enhances rather than competes with human expertise [10].
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Trust Calibration</h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">The Trust Spectrum Problem</h4>
              <p className="mt-2 text-sm text-secondary">
                High trust leads to over-reliance on AI systems, while low trust
                leads to disuse [7]. Competence is essential and has a significant
                impact on trust levels. Usefulness is a determining factor in
                intention to use AI banking assistants.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Design Recommendations</h4>
              <p className="mt-2 text-sm text-secondary">
                For low trust users: provide detailed information about the
                assistant&apos;s functions, workings, and calculations to enhance
                understandability and avoid the &quot;black-box&quot; phenomenon [7].
                For high trust users: clarify possible risks to facilitate
                necessary trust calibration and prevent misuse of risky tools.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Key Trust Factors</h4>
              <p className="mt-2 text-sm text-secondary">
                The system must be familiar, reliable, and predictable. Users must
                understand the intention of developers, have general trust, as well
                as specific trust in automation [6]. Explanations of AI predictions
                lead to significantly better user performance [8].
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">
            Framework for Interface Selection
          </h3>
          <p className="mb-4 text-base">
            Based on the research synthesis, the following framework guides when
            each interface paradigm is preferred:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Interface selection framework based on user and context factors
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-3 text-left font-semibold">
                    Factor
                  </th>
                  <th scope="col" className="p-3 text-left font-semibold">
                    Direct Manipulation
                  </th>
                  <th scope="col" className="p-3 text-left font-semibold">
                    Agentic AI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    Culture
                  </th>
                  <td className="p-3 text-secondary">
                    Individualistic, low power distance [1][2]
                  </td>
                  <td className="p-3 text-secondary">
                    Collectivistic, high power distance [1][2]
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    User Skill
                  </th>
                  <td className="p-3 text-secondary">
                    Low perceived AI advantage [9]
                  </td>
                  <td className="p-3 text-secondary">
                    High financial literacy + understanding benefits [3][4]
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    Transparency
                  </th>
                  <td className="p-3 text-secondary">
                    No explanation provided [9]
                  </td>
                  <td className="p-3 text-secondary">
                    Clear explanations, HITL model [8][10]
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="p-3 text-left font-medium">
                    Cognitive State
                  </th>
                  <td className="p-3 text-secondary">
                    Low cognitive load, time available
                  </td>
                  <td className="p-3 text-secondary">
                    High cognitive fatigue [5]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Key Insight</h3>
          <p className="text-base leading-relaxed">
            Whether the assistant acts more or less autonomously may not be the
            primary concern—what matters more is whether the system is generally
            perceived as useful or potentially hazardous [7]. Competence and
            usefulness are the key drivers of adoption, while a developer&apos;s
            benevolent intentions can positively impact trust calibration.
          </p>
        </div>

        {/* References Section */}
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">References</h3>
          <ol className="list-decimal space-y-2 pl-6 text-sm text-secondary">
            <li id="ref-1">
              Li, M., et al. (2024). Cultural differences in AI preferences.{' '}
              <em>CHI &apos;24: Proceedings of the CHI Conference on Human Factors in
              Computing Systems</em>.{' '}
              <a
                href="https://dl.acm.org/doi/10.1145/3613904.3642660"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://dl.acm.org/doi/10.1145/3613904.3642660
              </a>
            </li>
            <li id="ref-2">
              KPMG (2024). Trust in AI: A Global Study.{' '}
              <a
                href="https://kpmg.com/xx/en/our-insights/ai-and-technology/trust-attitudes-and-use-of-ai.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://kpmg.com/xx/en/our-insights/ai-and-technology/trust-attitudes-and-use-of-ai.html
              </a>
            </li>
            <li id="ref-3">
              Lim, K. Y., et al. (2023). Millennials and Robo-Advisory Adoption.{' '}
              <em>Sustainability</em>, 15(7), 6016.{' '}
              <a
                href="https://www.mdpi.com/2071-1050/15/7/6016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.mdpi.com/2071-1050/15/7/6016
              </a>
            </li>
            <li id="ref-4">
              Rossi, A., &amp; Utkus, S. (2022). Financial literacy and
              robo-advising.{' '}
              <em>Finance Research Letters</em>.{' '}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S1544612322002835"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1016/j.frl.2022.102835
              </a>
            </li>
            <li id="ref-5">
              Blain, B., et al. (2016). Neural mechanism of cognitive fatigue.{' '}
              <em>Proceedings of the National Academy of Sciences</em>, 113(33).{' '}
              <a
                href="https://www.pnas.org/doi/10.1073/pnas.1520527113"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1073/pnas.1520527113
              </a>
            </li>
            <li id="ref-6">
              Körber, M. (2019). Theoretical considerations and development of a
              questionnaire to measure trust in automation. <em>ResearchGate</em>.{' '}
              <a
                href="https://www.researchgate.net/publication/323611886"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.researchgate.net/publication/323611886
              </a>
            </li>
            <li id="ref-7">
              Wester, M., et al. (2023). Trust in AI banking assistants.{' '}
              <em>Frontiers in Artificial Intelligence</em>, 6.{' '}
              <a
                href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2023.1241290/full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.3389/frai.2023.1241290
              </a>
            </li>
            <li id="ref-8">
              Chromik, M., &amp; Butz, A. (2022). Educational intervention and AI
              explanations.{' '}
              <em>Computers in Human Behavior</em>.{' '}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0747563222003594"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1016/j.chb.2022.107594
              </a>
            </li>
            <li id="ref-9">
              Yin, M., et al. (2022). Trust and AI performance perception.{' '}
              <em>Frontiers in Artificial Intelligence</em>, 5.{' '}
              <a
                href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2022.891529/full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.3389/frai.2022.891529
              </a>
            </li>
            <li id="ref-10">
              IEEE (2024). Human-in-the-Loop AI Systems.{' '}
              <em>IEEE Transactions</em>.{' '}
              <a
                href="https://ieeexplore.ieee.org/document/11125703"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ieeexplore.ieee.org/document/11125703
              </a>
            </li>
          </ol>
        </div>
      </div>
    </ResearchSection>
  );
}