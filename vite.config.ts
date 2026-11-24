import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), ...(mode === 'admin-preview' ? [] : [cloudflare()])],
  // `vite build --mode admin-preview`: one self-contained script + stylesheet that the /admin
  // preview pane loads to render the real site pages (see src/admin-preview.tsx).
  ...(mode === 'admin-preview' && {
    publicDir: false,
    define: { 'process.env.NODE_ENV': '"production"' },
    build: {
      // Into public/ (gitignored) so the main `cf build` copies it to /admin like any static file.
      outDir: 'public/admin',
      emptyOutDir: false,
      assetsInlineLimit: Number.MAX_SAFE_INTEGER,
      lib: { entry: 'src/admin-preview.tsx', formats: ['iife' as const], name: 'FangledPreview', fileName: () => 'preview.js', cssFileName: 'preview' },
    },
  }),
}))
