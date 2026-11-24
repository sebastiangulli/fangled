import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  // Andrew Deutsch's account.
  accountId: "b0a07cf64ab6e5a4007057402fbcb2a3",
  worker: defineWorker({
    name: "fangled",
    entrypoint: "./worker.js",
    compatibilityDate: "2026-11-13",
    observability: { enabled: true },
    domains: ["fangledgroup.com", "www.fangledgroup.com"],
    assets: {
      notFoundHandling: "single-page-application",
      runWorkerFirst: ["/api/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      // Decap CMS GitHub OAuth app (was set on Vercel).
      GITHUB_CLIENT_ID: bindings.secret(),
      GITHUB_CLIENT_SECRET: bindings.secret(),
    },
  }),
});
