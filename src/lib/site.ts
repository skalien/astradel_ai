export const site = {
  name: "Astradel",
  appName: "Life Goals",
  origin: "https://astradel.ai",
  supportEmail: "hello@astradel.ai",
  privacyPath: "/life-goals/privacy",
  supportPath: "/life-goals/support",
  policyUpdated: "31 October 2026",
  policyUpdatedISO: "2026-10-31",
} as const;

export function supportMailto(subject = "Life Goals support") {
  return `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`;
}
