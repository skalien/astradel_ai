# Astradel website

- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, Node.js 24+, npm.
- Install with `npm ci`. Preview with `npm run dev`. Validate with `npm run build` and `npm run typecheck`.
- `/life-goals/privacy` and `/life-goals/support` must remain public, readable without JavaScript, and accessible without sign-in. The root redirects to support.
- Keep the site simple, responsive, and accessible. No external fonts, tracking, analytics, forms, or animation dependencies are currently used.
- Shared site information lives in `src/lib/site.ts`. The working public contact is `hello@astradel.ai`.
- Keep privacy statements consistent with the actual Life Goals app. CloudKit sync is not a historical backup; deleting the app does not delete its cloud data. Do not promise developer access to a user's private CloudKit records.
- No production hosting is configured yet. Deployment, domain setup, and the in-app policy link are separate tasks.
- Do not copy personal goal backups from the Life Goals app repository into this website.
