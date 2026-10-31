import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: "Life Goals | Astradel", template: "%s | Life Goals · Astradel" },
  description: "Privacy information and support for Life Goals by Astradel.",
  applicationName: site.appName,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a href="#main-content" className="fixed top-3 left-3 z-50 -translate-y-24 rounded bg-ink px-4 py-3 text-white focus:translate-y-0">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
