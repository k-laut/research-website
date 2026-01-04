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
            This research investigates the psychological, contextual, and
            practical factors that influence whether users prefer direct
            manipulation interfaces or agentic AI-driven interfaces [1]. Building
            on Shneiderman&apos;s foundational work on direct manipulation [2] and
            recent advances in agentic AI systems [3], this study aims to provide
            a framework for understanding when each approach is most effective
            and preferred by users.
          </p>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Interface Paradigms</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="mb-2 font-semibold text-primary">
                Direct Manipulation
              </h4>
              <p className="text-sm text-secondary">
                Interfaces where users directly interact with visual objects,
                receiving immediate feedback [2]. Users maintain full control over
                actions and can see the direct results of their inputs.
              </p>
              <ul className="mt-3 list-inside list-disc text-sm text-secondary">
                <li>Immediate visual feedback</li>
                <li>Direct control over objects</li>
                <li>Reversible actions</li>
                <li>Spatial reasoning engagement</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="mb-2 font-semibold text-primary">
                Agentic AI Interface
              </h4>
              <p className="text-sm text-secondary">
                Interfaces where an AI agent interprets user intent and executes
                complex tasks autonomously [3]. Users delegate actions to the AI,
                which makes decisions on their behalf.
              </p>
              <ul className="mt-3 list-inside list-disc text-sm text-secondary">
                <li>Natural language interaction</li>
                <li>Autonomous task completion</li>
                <li>Intent interpretation</li>
                <li>Complex workflow handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Key Factors Identified</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">1. Task Complexity</h4>
              <p className="mt-1 text-sm text-secondary">
                Simple, well-defined tasks favor direct manipulation, while
                complex, multi-step processes show higher preference for agentic
                AI assistance [1]. This aligns with cognitive load theory [4].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">2. User Expertise</h4>
              <p className="mt-1 text-sm text-secondary">
                Expert users often prefer direct manipulation for precision and
                control, while novice users benefit from AI guidance and
                automation [1], consistent with skill acquisition research [5].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">3. Trust in AI</h4>
              <p className="mt-1 text-sm text-secondary">
                Users with higher AI literacy and positive past experiences show
                greater willingness to delegate to agentic interfaces [1],
                supporting trust calibration models [6].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">4. Consequence Severity</h4>
              <p className="mt-1 text-sm text-secondary">
                High-stakes decisions (financial, medical, legal) strongly favor
                direct manipulation with clear visibility and control [1],
                reflecting risk perception literature [7].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">5. Time Pressure</h4>
              <p className="mt-1 text-sm text-secondary">
                Under time constraints, users show increased acceptance of
                agentic AI interfaces that can complete tasks more quickly [1],
                consistent with decision-making under pressure research [8].
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-medium">6. Learning Goals</h4>
              <p className="mt-1 text-sm text-secondary">
                When users want to learn or understand a process, direct
                manipulation is preferred over delegating to an AI agent [1],
                aligned with constructivist learning theory [9].
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Research Methodology</h3>
          <p className="text-base leading-relaxed">
            The study combined quantitative surveys with qualitative interviews
            across diverse user demographics [1]. Participants were presented with
            various scenarios spanning different domains (productivity, creative
            work, data analysis) and asked to indicate their preferred interface
            approach along with reasoning, following mixed-methods research
            design principles [10].
          </p>
          <div className="mt-4 rounded-lg bg-background p-4">
            <h4 className="font-medium">Study Metrics</h4>
            <ul className="mt-2 grid gap-2 text-sm text-secondary sm:grid-cols-2">
              <li>Perceived control satisfaction</li>
              <li>Task completion confidence</li>
              <li>Error recovery preferences</li>
              <li>Cognitive load assessment [4]</li>
              <li>Trust and transparency ratings [6]</li>
              <li>Long-term adoption likelihood</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">
            Framework for Interface Selection
          </h3>
          <p className="mb-4 text-base">
            Based on the research findings, a decision framework was developed to
            help designers choose appropriate interface paradigms [1]:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Interface selection framework based on task and user
                characteristics
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th
                    scope="col"
                    className="p-3 text-left font-semibold"
                  >
                    Factor
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-left font-semibold"
                  >
                    Direct Manipulation
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-left font-semibold"
                  >
                    Agentic AI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    Task Type
                  </th>
                  <td className="p-3 text-secondary">Simple, visual</td>
                  <td className="p-3 text-secondary">Complex, multi-step</td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    User Goal
                  </th>
                  <td className="p-3 text-secondary">Learning, precision</td>
                  <td className="p-3 text-secondary">Efficiency, delegation</td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-medium">
                    Stakes
                  </th>
                  <td className="p-3 text-secondary">High consequence</td>
                  <td className="p-3 text-secondary">Low to medium</td>
                </tr>
                <tr>
                  <th scope="row" className="p-3 text-left font-medium">
                    Time
                  </th>
                  <td className="p-3 text-secondary">Available</td>
                  <td className="p-3 text-secondary">Constrained</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">Conclusions</h3>
          <p className="text-base leading-relaxed">
            The research concludes that neither direct manipulation nor agentic
            AI interfaces are universally superior [1]. Instead, the optimal approach
            depends on a complex interplay of task characteristics, user
            attributes, and contextual factors. Future interface design should
            consider hybrid approaches that allow users to fluidly transition
            between direct control and AI delegation based on their current needs
            and preferences [11].
          </p>
        </div>

        {/* References Section */}
        <div className="card">
          <h3 className="mb-4 text-xl font-semibold">References</h3>
          <ol className="list-decimal space-y-2 pl-6 text-sm text-secondary">
            <li id="ref-1">
              Lauterbach, K. (2025). Factors Influencing Adoption of Direct
              Manipulation vs. Agentic AI Interfaces: A Mixed-Methods Study.{' '}
              <em>Unpublished research manuscript</em>.
            </li>
            <li id="ref-2">
              Shneiderman, B. (1983). Direct manipulation: A step beyond
              programming languages.{' '}
              <em>IEEE Computer</em>, 16(8), 57–69.
            </li>
            <li id="ref-3">
              Wang, L., et al. (2024). A survey on large language model based
              autonomous agents.{' '}
              <em>Frontiers of Computer Science</em>, 18(6), 1–26.
            </li>
            <li id="ref-4">
              Sweller, J. (1988). Cognitive load during problem solving: Effects
              on learning.{' '}
              <em>Cognitive Science</em>, 12(2), 257–285.
            </li>
            <li id="ref-5">
              Dreyfus, S. E., &amp; Dreyfus, H. L. (1980). A five-stage model of the
              mental activities involved in directed skill acquisition.{' '}
              <em>California University Berkeley Operations Research Center</em>.
            </li>
            <li id="ref-6">
              Lee, J. D., &amp; See, K. A. (2004). Trust in automation: Designing for
              appropriate reliance.{' '}
              <em>Human Factors</em>, 46(1), 50–80.
            </li>
            <li id="ref-7">
              Slovic, P. (1987). Perception of risk.{' '}
              <em>Science</em>, 236(4799), 280–285.
            </li>
            <li id="ref-8">
              Kahneman, D. (2011).{' '}
              <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.
            </li>
            <li id="ref-9">
              Papert, S. (1980).{' '}
              <em>Mindstorms: Children, Computers, and Powerful Ideas</em>.
              Basic Books.
            </li>
            <li id="ref-10">
              Creswell, J. W., &amp; Clark, V. L. P. (2017).{' '}
              <em>Designing and Conducting Mixed Methods Research</em>. SAGE
              Publications.
            </li>
            <li id="ref-11">
              Amershi, S., et al. (2019). Guidelines for human-AI interaction.{' '}
              <em>Proceedings of the CHI Conference on Human Factors in Computing
              Systems</em>, 1–13.
            </li>
          </ol>
        </div>
      </div>
    </ResearchSection>
  );
}