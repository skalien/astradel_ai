import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Life Goals, iCloud sync, saved goals, progress, and milestones. Contact hello@astradel.ai.",
  alternates: { canonical: site.supportPath },
};

const sections = [
  { id: "contact", label: "Get in touch" },
  { id: "sync", label: "iCloud & saved goals" },
  { id: "using-life-goals", label: "Using Life Goals" },
  { id: "report-an-issue", label: "Report an issue" },
  { id: "privacy", label: "Privacy" },
] as const;

export default function SupportPage() {
  return (
    <DocumentPage current="support" title="How can we help?" description="Help with Life Goals, your saved progress, and iCloud sync. If you need a hand, we’re an email away." sections={sections}>
      <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Get in touch</h2>
        <p>For questions, bug reports, privacy requests, or feedback about Life Goals, email Astradel.</p>
        <a href={supportMailto()} className="mt-5 inline-flex max-w-full items-center gap-4 rounded-lg border border-line bg-white px-5 py-3 font-medium break-all shadow-[0_1px_2px_#243a3206] hover:border-accent">
          {site.supportEmail}<span aria-hidden="true">↗</span>
        </a>
        <p className="mt-4 text-sm">Your email app will open. You can also copy the address into any email service.</p>
      </section>
      <section id="sync" aria-labelledby="sync-title">
        <h2 id="sync-title">iCloud and your saved goals</h2>
        <details>
          <summary>How are my goals saved?</summary>
          <p>Life Goals saves your goals and progress on your device. When iCloud is available, it also syncs them to your private iCloud account using Apple CloudKit. There is no folder to select, and you do not need an Astradel account.</p>
        </details>
        <details>
          <summary>My goals aren’t appearing on another device. What should I check?</summary>
          <ol>
            <li>Check that both devices use the same Apple Account for iCloud. The account used for App Store purchases can be different.</li>
            <li>Check your internet connection, available iCloud storage, and Life Goals’ iCloud access in Apple’s settings.</li>
            <li>Open Life Goals on the device with your latest goals and keep it in the foreground briefly. Then open it on the other device and allow time for sync.</li>
          </ol>
          <p>If the problem continues, contact us before deleting the app or clearing iCloud data. A recent offline change may exist only on the original device.</p>
        </details>
        <details>
          <summary>Can I use Life Goals offline?</summary>
          <p>Yes. You can view and update locally saved goals without an internet connection. Changes are kept on that device and retried when the app can sync again. Avoid deleting the app before important changes have reached iCloud.</p>
        </details>
        <details>
          <summary>Will my goals return after reinstalling?</summary>
          <p>Goals that successfully reached iCloud can download again after you reinstall and open Life Goals using the same iCloud account. Goals that were only saved locally cannot be recovered from iCloud. Keep the app open with a working connection to allow the download to finish.</p>
        </details>
        <details>
          <summary>What happens if I switch iCloud accounts?</summary>
          <p>Life Goals pauses syncing the existing local data when a different iCloud account is detected, to avoid uploading one person’s goals to another account. Return to the original iCloud account to resume. If you need help moving data, contact us before deleting anything.</p>
        </details>
        <details>
          <summary>Can I undo a deletion or restore an older version?</summary>
          <p>Life Goals does not currently offer an undo, version-history, or backup-restore screen. Deleting a goal also syncs that deletion. If you need help, email us, but we cannot promise recovery or access the contents of your private iCloud database.</p>
        </details>
      </section>
      <section id="using-life-goals" aria-labelledby="using-title">
        <h2 id="using-title">Using Life Goals</h2>
        <details>
          <summary>How do I change progress or add milestones?</summary>
          <p>Use the plus and minus controls on a goal to update progress; holding a control increases the rate. Open the goal’s editor to change its title, category, progress-step size, or milestones. Save to keep your changes.</p>
        </details>
        <details>
          <summary>How do I reorder goals or change the appearance?</summary>
          <p>Open Settings in Life Goals. Use the goal-order controls to rearrange goals, and choose Light, Dark, or System for the appearance. These preferences are saved across launches.</p>
        </details>
        <details>
          <summary>How do I delete a goal or remove my data?</summary>
          <p>Open the goal’s editor, choose Delete goal, and confirm. Allow the deletion to sync to your other devices. Deleting the app alone does not erase its iCloud data. For cloud storage and retention details, read the <Link href={`${site.privacyPath}#retention`}>data deletion section of our privacy policy</Link>.</p>
        </details>
        <details>
          <summary>How do I get help with an App Store charge or refund?</summary>
          <p>Apple handles App Store purchases and refunds. You can review or request a refund at <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>. For an issue with Life Goals itself, contact us at the email above.</p>
        </details>
      </section>
      <section id="report-an-issue" aria-labelledby="report-title">
        <h2 id="report-title">Help us understand the issue</h2>
        <p>When reporting a problem, it helps to include:</p>
        <ul>
          <li>Your iPhone or iPad model and iOS or iPadOS version.</li>
          <li>The Life Goals version, if you know it, and whether you’re using TestFlight.</li>
          <li>What you expected, what happened instead, and the steps to reproduce it.</li>
          <li>A screenshot, if useful, with personal goal content and account details hidden.</li>
        </ul>
        <p>Please never send passwords, Apple verification codes, payment details, or information you do not want to share. We can investigate app behavior without needing access to your Apple Account.</p>
      </section>
      <section id="privacy" aria-labelledby="privacy-title">
        <h2 id="privacy-title">Your privacy matters</h2>
        <p>Learn how local storage, private iCloud sync, diagnostics, and support messages are handled in our <Link href={site.privacyPath}>privacy policy</Link>.</p>
      </section>
    </DocumentPage>
  );
}
