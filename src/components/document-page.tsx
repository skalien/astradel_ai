import Link from "next/link";
import { site } from "@/lib/site";

type DocumentPageProps = {
  current: "privacy" | "support";
  title: string;
  description: string;
  sections: readonly { id: string; label: string }[];
  children: React.ReactNode;
};

export function DocumentPage({ current, title, description, sections, children }: DocumentPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-b border-line py-7 sm:py-9">
        <Link href={site.supportPath} className="text-lg font-semibold tracking-[-0.04em]" aria-label="Astradel — Life Goals support">
          astradel<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Life Goals" className="flex gap-6 text-sm">
          <Link href={site.privacyPath} aria-current={current === "privacy" ? "page" : undefined} className={current === "privacy" ? "font-semibold text-ink underline decoration-accent" : "text-muted hover:text-ink hover:underline"}>Privacy</Link>
          <Link href={site.supportPath} aria-current={current === "support" ? "page" : undefined} className={current === "support" ? "font-semibold text-ink underline decoration-accent" : "text-muted hover:text-ink hover:underline"}>Support</Link>
        </nav>
      </header>
      <main id="main-content">
        <div className="border-b border-line pt-12 pb-10 sm:pt-16 sm:pb-12">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase">Life Goals</p>
          <h1 className="font-serif text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
          {current === "privacy" ? <p className="mt-5 text-xs text-muted">Last updated <time dateTime={site.policyUpdatedISO}>{site.policyUpdated}</time></p> : null}
        </div>
        <div className="grid gap-9 py-10 sm:py-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
          <aside>
            <nav aria-label="On this page" className="lg:sticky lg:top-8">
              <p className="mb-4 text-xs font-semibold tracking-wide text-muted uppercase">On this page</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm lg:flex-col">
                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-muted hover:text-accent hover:underline">{section.label}</a></li>)}
              </ul>
            </nav>
          </aside>
          <article className="document-copy min-w-0 max-w-[72ch]">{children}</article>
        </div>
      </main>
      <footer className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-line py-7 text-xs leading-6 text-muted">
        <p>Life Goals by Astradel</p>
        <div className="flex gap-5">
          <Link href={site.privacyPath} className="hover:text-ink hover:underline">Privacy policy</Link>
          <Link href={site.supportPath} className="hover:text-ink hover:underline">Support</Link>
        </div>
      </footer>
    </div>
  );
}
