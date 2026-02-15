export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <section className="panel p-8 sm:p-10">
        <span className="kicker">Legal</span>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
        <p className="muted mt-4">Last updated: February 15, 2026</p>

        <div className="mt-8 space-y-5">
          <article className="info-card">
            <h2 className="text-xl font-semibold">Information Collection</h2>
            <p className="muted mt-2">
              This website does not collect personal account data, analytics profiles, or marketing
              identifiers.
            </p>
          </article>

          <article className="info-card">
            <h2 className="text-xl font-semibold">How Information Is Used</h2>
            <p className="muted mt-2">
              Since personal data is not intentionally collected, no personal information is sold,
              shared, or used for advertising.
            </p>
          </article>

          <article className="info-card">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="muted mt-2">Questions about this policy can be sent to:</p>
            <a className="primary-link mt-2" href="mailto:c6m1lo@proton.me">
              c6m1lo@proton.me
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
