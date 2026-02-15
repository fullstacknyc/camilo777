export default function TermsPage() {
  return (
    <div className="page-wrap">
      <section className="panel p-8 sm:p-10">
        <span className="kicker">Legal</span>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Terms of Service</h1>
        <p className="muted mt-4">Last updated: February 15, 2026</p>

        <div className="mt-8 space-y-5">
          <article className="info-card">
            <h2 className="text-xl font-semibold">1. Acceptance</h2>
            <p className="muted mt-2">
              By using this website, you agree to these terms. If you do not agree, please discontinue
              use of the site.
            </p>
          </article>

          <article className="info-card">
            <h2 className="text-xl font-semibold">2. Proper Use</h2>
            <p className="muted mt-2">
              You agree not to misuse the site, interfere with its normal operation, or attempt
              unauthorized access to connected services.
            </p>
          </article>

          <article className="info-card">
            <h2 className="text-xl font-semibold">3. External Links</h2>
            <p className="muted mt-2">
              This website may include links to third-party platforms. Their terms and policies apply
              separately and should be reviewed directly.
            </p>
          </article>

          <article className="info-card">
            <h2 className="text-xl font-semibold">4. Updates</h2>
            <p className="muted mt-2">
              Terms may be revised over time. Continued use after changes are posted means you accept the
              updated terms.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
