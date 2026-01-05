import { ResearchSection } from './ResearchSection';
import { FigmaEmbed } from '../embed/FigmaEmbed';

export function KramerResearch() {
  return (
    <ResearchSection
      id="kramer-research"
      title="Direct Manipulation–Automation Levels in Finance Apps"
      author="Krämer"
      topic="Taxonomy of Automation Levels in Personal Finance Applications"
      className="bg-surface"
    >
      <div className="space-y-8">
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Question</h3>
          <p className="text-base leading-relaxed">
            This research investigates how combinations of user control and system
            knowledge types influence usage autonomy, satisfaction, and financial
            outcomes in finance apps. The central question: <em>What are the
            different direct manipulation–automation levels in finance apps
            currently on the market, and how can they be categorized?</em>
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Strategy</h3>
          <p className="text-base leading-relaxed">
            A systematic literature review was conducted using Google Scholar and
            Research Rabbit with three search terms: (1) direct manipulation vs
            interface agents in finance apps, (2) finance apps agents, and (3)
            finance apps direct manipulation. Papers were filtered through title
            and abstract screening, with related papers identified via citation
            analysis [1][2][3].
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Classification Categories</h3>
          <p className="mb-4 text-base">
            Five conceptual categories were defined for classifying direct
            manipulation/automation levels:
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Agent Visibility/Presence</h4>
              <p className="mt-1 text-sm text-secondary">
                Is there a visible chatbot/avatar in the foreground, or invisible
                background automation (e.g., spam filters)? [1]
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Decision Autonomy</h4>
              <p className="mt-1 text-sm text-secondary">
                Is the system purely advisory (recommendations) or does it
                autonomously execute tasks? [1][3]
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Adaptivity &amp; Learning</h4>
              <p className="mt-1 text-sm text-secondary">
                Is the system rule-based or ML-enabled? Does it use persistent
                user models or session-only personalization? [2][4][5]
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Interaction Style</h4>
              <p className="mt-1 text-sm text-secondary">
                Direct manipulation (pointing, sliders, immediate feedback) vs.
                interface agents (proactive suggestions, monitoring, notifications) [2]
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-medium">Functional Position</h4>
              <p className="mt-1 text-sm text-secondary">
                Client-facing (user interaction, recommendations, chatbots) vs.
                backend-only (fraud detection, risk scoring) [1][3]
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Five-Level Taxonomy</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Level 0: Full Direct Manipulation</h4>
              <p className="mt-1 text-sm text-secondary">
                Visible controls, incremental and reversible actions, immediate
                feedback (sliders, filters, dynamic queries). High predictability;
                user remains the acting agent [2]. <em>Example:</em> Manual chart
                manipulation, point-and-click direct banking interfaces.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Level 1: Assistive Direct Manipulation</h4>
              <p className="mt-1 text-sm text-secondary">
                Primarily direct manipulation, augmented by visible non-executive
                agent functions: recommendations, highlighting, details-on-demand.
                Agents suggest but don&apos;t act autonomously [2][6]. Requires
                transparent, controllable UIs with good explainability.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Level 2: Semi-Autonomous Agents</h4>
              <p className="mt-1 text-sm text-secondary">
                Agents propose actions and execute with user confirmation
                (recommend-and-execute-with-confirmation). Adaptive but always
                with user-in-the-loop control [2][5]. <em>Example:</em> Robo-advisors
                that suggest portfolios and trade only after user approval.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Level 3: Autonomous Executive Agents</h4>
              <p className="mt-1 text-sm text-secondary">
                Agents act independently within defined policies/constraints
                (automatic rebalancing, simple trades). Higher invisibility possible
                but requires monitoring and override capabilities [3][6]. Needs
                strict risk alignment, real-time monitoring, and regulatory compliance.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">Level 4: Multi-Agent Orchestrated Autonomy</h4>
              <p className="mt-1 text-sm text-secondary">
                Multi-agent orchestration with defined roles (Director, Analyst,
                Assistant). Dynamic routing between models, cooperative
                decision-making, adaptive reconfiguration, and self-improvement
                through evaluation [5][7]. <em>Example:</em> FinRobot, multi-agent
                stock prediction systems, orchestrated trading simulations.
              </p>
            </div>
          </div>
        </div>

        <div className="card" id="figma-prototype">
          <h3 className="mb-4 text-xl font-semibold">Interactive Prototypes</h3>
          <p className="mb-6 text-base text-secondary">
            Explore the interactive Figma prototypes demonstrating different
            automation levels in a personal budgeting application. Use keyboard
            navigation or mouse to interact with the prototypes.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="mb-4 text-center text-lg font-medium">Transaction Input</h4>
              <FigmaEmbed
                url="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/make/rBuRLsaU6lRR0iFDhQvRVi/Transaction-input?fullscreen=1&embed=1"
                title="Transaction Input - Personal Budgeting App Prototype"
                description="Demonstrates automation levels for transaction categorization and input."
              />
            </div>
            <div>
              <h4 className="mb-4 text-center text-lg font-medium">Saving Goal Setup</h4>
              <FigmaEmbed
                url="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/make/5x5g7mDDAEGoz2ehOEIZtZ/Saving-Goal-Setup-Prototype?fullscreen=1&embed=1"
                title="Saving Goal Setup - Personal Budgeting App Prototype"
                description="Demonstrates automation levels for setting up and managing savings goals."
              />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Limitations</h3>
          <p className="text-base leading-relaxed">
            The current state of research is limited by challenges in
            interpretability/explainability, real-time adaptation, generalizability,
            and scalability. These remain open research gaps that constrain the
            transition to higher automation levels [3][5].
          </p>
        </div>

        {/* References Section */}
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">References</h3>
          <ol className="list-decimal space-y-2 pl-6 text-sm text-secondary">
            <li id="ref-1">
              Pal, A., Gopi, S., &amp; Lee, K. M. (2023). Fintech Agents: Technologies
              and Theories. <em>Electronics</em>, 12(15), 3301.{' '}
              <a
                href="https://doi.org/10.3390/electronics12153301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.3390/electronics12153301
              </a>
            </li>
            <li id="ref-2">
              Shneiderman, B., &amp; Maes, P. (1997). Direct manipulation vs. interface
              agents. <em>Interactions</em>, 4(6), 42–61.{' '}
              <a
                href="https://doi.org/10.1145/267505.267514"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1145/267505.267514
              </a>
            </li>
            <li id="ref-3">
              Satyadhar, J. (2025). A Literature Review of Gen AI Agents in
              Financial Applications: Models and Implementations.{' '}
              <em>International Journal of Science and Research (IJSR)</em>,
              14(1), 1094–1100.{' '}
              <a
                href="https://dx.doi.org/10.21275/SR25125102816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://dx.doi.org/10.21275/SR25125102816
              </a>
            </li>
            <li id="ref-4">
              Maes, P., &amp; Wexelblat, A. (1996). Interface agents.{' '}
              <em>CHI &apos;96: Conference Companion on Human Factors in Computing
              Systems</em>, New York.{' '}
              <a
                href="https://doi.org/10.1145/257089.257377"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1145/257089.257377
              </a>
            </li>
            <li id="ref-5">
              Yang, H., Zhang, B., Wang, N., Guo, C., Zhang, X., Lin, L., Wang, J.,
              Zhou, T., Guan, M., Zhang, R., &amp; Wang, C. D. (2024). FinRobot: An
              Open-Source AI Agent Platform for Financial Applications using Large
              Language Models (2nd ed.). <em>arXiv</em>.{' '}
              <a
                href="https://doi.org/10.48550/arXiv.2405.14767"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.48550/arXiv.2405.14767
              </a>
            </li>
            <li id="ref-6">
              Lieberman, H. (1997). Autonomous interface agents.{' '}
              <em>CHI &apos;97: Proceedings of the ACM SIGCHI Conference on Human
              Factors in Computing Systems</em>, New York.{' '}
              <a
                href="https://doi.org/10.1145/258549.258592"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1145/258549.258592
              </a>
            </li>
            <li id="ref-7">
              Satyadhar, J. (2025). Review of autonomous systems and collaborative
              AI agent frameworks.{' '}
              <em>International Journal of Science and Research Archive</em>,
              14(2), 961–972.{' '}
              <a
                href="https://doi.org/10.30574/ijsra.2025.14.2.0439"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.30574/ijsra.2025.14.2.0439
              </a>
            </li>
          </ol>
        </div>
      </div>
    </ResearchSection>
  );
}