import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-sm text-muted">Life Goals · Astradel</p>
      <h1 className="mt-5 font-serif text-4xl tracking-tight">This page couldn’t be found.</h1>
      <p className="mt-5 leading-7 text-muted">You can find help and contact details on our support page.</p>
      <Link href={site.supportPath} className="mt-7 inline-block text-accent underline">Go to Life Goals support</Link>
    </main>
  );
}
