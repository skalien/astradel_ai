import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/document-page";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Life Goals stores your goals, uses private iCloud sync, and handles data and privacy requests.",
  alternates: { canonical: site.privacyPath },
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information used" },
  { id: "icloud", label: "iCloud & Apple" },
  { id: "retention", label: "Retention & deletion" },
  { id: "support", label: "Support & website" },
  { id: "choices", label: "Your choices" },
  { id: "changes", label: "Policy updates" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPage() {
  return (
    <DocumentPage current="privacy" title="Privacy policy" description="Your goals are personal. Here’s how Life Goals stores and syncs them, and how you stay in control." sections={sections}>
      <section id="overview" aria-labelledby="overview-title">
        <h2 id="overview-title">A little context</h2>
        <p>This policy covers the Life Goals app and its privacy and support pages, provided by Astradel. Life Goals helps you record goals, milestones, and progress. You do not need to create an Astradel account to use it.</p>
        <p><strong>Your goals are stored on your device and, when iCloud is available, synced directly to your private iCloud database using Apple CloudKit.</strong> We do not operate a separate server that receives your goals. We do not include advertising or third-party analytics SDKs in the app, sell your personal information, or use your goals to train AI models.</p>
      </section>
      <section id="information" aria-labelledby="information-title">
        <h2 id="information-title">Information the app uses</h2>
        <ul>
          <li><strong>Goal content:</strong> goal names, categories, progress, milestones, and their order.</li>
          <li><strong>Preferences:</strong> your appearance choice and progress-step settings.</li>
          <li><strong>Sync information:</strong> goal identifiers, change revisions and timestamps, a randomly generated installation identifier, an iCloud-provided user identifier, and deletion markers. These help the app reconcile changes and keep different iCloud accounts separate.</li>
          <li><strong>Local diagnostics:</strong> the latest sync result, time, goal count, and any sync error. These are stored on your device for troubleshooting; the app does not automatically send them to Astradel.</li>
        </ul>
        <p>This information is used to provide the app’s features, save your progress, and synchronize your data. Life Goals does not request access to your contacts, photos, precise location, microphone, or camera.</p>
      </section>
      <section id="icloud" aria-labelledby="icloud-title">
        <h2 id="icloud-title">iCloud sync and Apple services</h2>
        <p>When your device is signed into iCloud and the service is available, Life Goals sends your app data to your private CloudKit database. Other supported installations using the same iCloud account can download it. This is app data in iCloud, not a document in an iCloud Drive folder.</p>
        <p>We do not have routine developer access to the contents of other users’ private CloudKit databases. Apple operates iCloud and processes information needed to deliver that service under its own <a href="https://www.apple.com/legal/privacy/">privacy policy</a> and <a href="https://www.apple.com/legal/internet-services/icloud/">iCloud terms</a>. We do not promise encryption properties beyond those Apple provides.</p>
        <p>Cloud sync requires an internet connection and available iCloud storage. While offline, changes remain on your device until syncing resumes. Signing into a different iCloud account pauses the existing data’s sync to avoid sending one account’s goals into another account.</p>
        <p>Apple handles App Store purchases and payment details; Life Goals does not receive your card details. Apple may provide crash reports and diagnostics according to your device settings and its services. If you use a TestFlight beta, Apple’s <a href="https://testflight.apple.com/">TestFlight privacy information</a> explains the testing information and feedback shared with developers.</p>
      </section>
      <section id="retention" aria-labelledby="retention-title">
        <h2 id="retention-title">Keeping and deleting your data</h2>
        <p>Goal content remains on your device and in iCloud until you delete it or remove the relevant app data. To delete a goal, open its editor, select <strong>Delete goal</strong>, and confirm. Once successfully synced, the deletion is reflected on your other connected installations.</p>
        <p>The sync system can retain minimal identifiers and revision markers for deleted goals so an older copy does not bring them back. These markers do not retain the deleted goal’s title, category, progress, or milestones. Other offline devices can retain their local copies until they reconnect.</p>
        <p><strong>Deleting the app removes its local data but does not automatically delete the iCloud copy.</strong> Reinstalling can download it again. To remove iCloud app data, review Life Goals in Apple’s iCloud storage settings, where available. See <a href="https://support.apple.com/en-au/guide/icloud/mm62d92d6b3e/icloud">Apple’s guidance on third-party app data</a>. An installation that still holds local goals may upload them again when reopened, so remove unwanted goals and let deletions sync before clearing cloud data.</p>
        <p>Sync is not a versioned backup: edits and deletions synchronize too. Copies you export, screenshots you keep, and backups managed by Apple or another service have their own retention settings.</p>
      </section>
      <section id="support" aria-labelledby="support-title">
        <h2 id="support-title">When you contact us or visit this website</h2>
        <p>If you email us, we receive your email address and whatever you choose to send, such as a description of an issue or a screenshot. We use this to answer your request and troubleshoot the problem. Please avoid sending sensitive goal content, passwords, or verification codes.</p>
        <p>Support correspondence may be retained while needed to handle your request, follow-up issues, and applicable legal obligations. You can ask us to delete correspondence; we will explain any information we must retain.</p>
        <p>These pages do not use advertising, analytics scripts, contact forms, or nonessential cookies. The website’s hosting provider processes ordinary web requests, which can include your IP address, browser information, and requested page, to deliver the site and maintain security. No app goal data is sent to this website.</p>
      </section>
      <section id="choices" aria-labelledby="choices-title">
        <h2 id="choices-title">Your choices and privacy requests</h2>
        <p>You can view, edit, and delete your goals in the app and manage iCloud access and storage through Apple’s settings. If iCloud is unavailable, Life Goals continues to use local storage. There is no separate Astradel account to close.</p>
        <p>Depending on where you live, you may have rights to access, correct, delete, or obtain a copy of personal information we hold, object to or restrict processing, or complain to your local privacy authority. Contact us to exercise these rights. We can help with information you sent to us, but cannot retrieve or directly erase your private CloudKit goal records on your behalf.</p>
        <p>Life Goals is not specifically directed at children under 13. We do not knowingly request personal information from children through support. If you believe a child has sent us personal information, contact us so we can address it.</p>
      </section>
      <section id="changes" aria-labelledby="changes-title">
        <h2 id="changes-title">Updates to this policy</h2>
        <p>We may update this policy when the app or its privacy practices change. The date at the top indicates the latest revision. We will provide additional notice when required by applicable law.</p>
      </section>
      <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Questions about privacy?</h2>
        <p>Contact Astradel at <a href={supportMailto("Life Goals privacy question")}>{site.supportEmail}</a>. For help using the app, visit <Link href={site.supportPath}>Life Goals support</Link>.</p>
      </section>
    </DocumentPage>
  );
}
