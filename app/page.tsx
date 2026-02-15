export default function HomePage() {
  return (
    <div className="page-wrap">
      <section className="panel p-8 sm:p-10">
        <span className="kicker">Portfolio</span>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Camilo Gomez</h1>
        <p className="muted mt-4 max-w-2xl text-lg">
          Detail-oriented language and AI operations professional focused on annotation quality,
          multilingual communication, and practical automation workflows.
        </p>
        <div className="mt-8 grid-cards">
          <article className="info-card">
            <h2 className="text-xl font-semibold">Core Strengths</h2>
            <p className="muted mt-2">NLP data labeling, medical interpretation, and structured QA.</p>
          </article>
          <article className="info-card">
            <h2 className="text-xl font-semibold">Work Approach</h2>
            <p className="muted mt-2">Reliable execution, clean communication, and measurable outcomes.</p>
          </article>
          <article className="info-card">
            <h2 className="text-xl font-semibold">Current Focus</h2>
            <p className="muted mt-2">Building a polished portfolio and maintaining a clear professional profile.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
