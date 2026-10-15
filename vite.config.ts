import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // `vite build --mode admin-preview`: one self-contained script + stylesheet that the /admin
  // preview pane loads to render the real site pages (see src/admin-preview.tsx).
  ...(mode === 'admin-preview' && {
    publicDir: false,
    define: { 'process.env.NODE_ENV': '"production"' },
    build: {
      outDir: 'dist/admin',
      emptyOutDir: false,
      assetsInlineLimit: Number.MAX_SAFE_INTEGER,
      lib: { entry: 'src/admin-preview.tsx', formats: ['iife' as const], name: 'FangledPreview', fileName: () => 'preview.js', cssFileName: 'preview' },
    },
  }),
}))
