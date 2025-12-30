export function Hero() {
  return (
    <section
      className="section bg-gradient-to-b from-surface to-background"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Automation &amp; Interface Design Research
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary sm:text-xl">
          Exploring the intersection of automation levels in personal finance
          applications and user preferences for direct manipulation versus
          agentic AI interfaces.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#kramer-research" className="btn btn-primary">
            Explore Automation Research
          </a>
          <a href="#lauterbach-research" className="btn btn-secondary">
            View Interface Factors
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="card text-left">
            <h2 className="text-lg font-semibold">
              Krämer: Automation in Finance
            </h2>
            <p className="mt-2 text-sm text-secondary">
              Research on levels of automation in personal budgeting and finance
              apps, with an interactive Figma prototype demonstration.
            </p>
          </div>

          <div className="card text-left">
            <h2 className="text-lg font-semibold">
              Lauterbach: Interface Preferences
            </h2>
            <p className="mt-2 text-sm text-secondary">
              Analysis of factors influencing user adoption of direct
              manipulation versus agentic AI interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}