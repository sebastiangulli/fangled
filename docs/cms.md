# Editar los textos del sitio (Decap CMS)

Los textos viven en `src/content/*.json`. El panel `/admin` (Decap CMS) los edita y hace commit a `main` en GitHub; Vercel redeploya solo (~1 min).

## Puesta en marcha (una sola vez)

1. **GitHub OAuth App**: GitHub → Settings → Developer settings → OAuth Apps → *New OAuth App*.
   - Homepage URL: la URL de producción (ej. `https://fangledgroup.com`).
   - Authorization callback URL: `https://<tu-dominio>/api/callback`.
   - Copiá el *Client ID* y generá un *Client secret*.
2. **Vercel** → proyecto → Settings → Environment Variables (Production): `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET`. Redeploy.
3. **Acceso de Andrew**: que cree una cuenta gratis en GitHub y agregalo como colaborador (permiso *Write*) en `sebastiangulli/fangled`. Tiene que aceptar la invitación por email.
4. **Merge a `main`**: la config apunta a la rama `main`, así que `/admin` funciona cuando este cambio esté ahí.

Andrew entra en `https://<tu-dominio>/admin` → *Login with GitHub*.

## Guía rápida para Andrew

- **Pages** tiene una entrada por página; **Site-wide** tiene menú, footer, FAQ, datos de contacto y el contenido que se repite en varias páginas.
- Editá el texto, tocá **Publish → Publish now**. El cambio se ve en el sitio en ~1 minuto.
- Las listas (FAQ, servicios, episodios…) permiten agregar, reordenar y borrar. Las que dicen "Fixed at N items" tienen un número fijo de espacios en el diseño.
- Para deshacer un cambio: GitHub → historial del archivo → *Revert* (o pedírselo a Sebastián).
- Imágenes, íconos y la estructura de las páginas no se editan desde acá. Tampoco los datos de ejemplo de las maquetas del Playbook.

## Para desarrolladores

- `src/data/site.ts` adapta los JSON (íconos, `phoneHref`, etc.). Los componentes importan los JSON directo.
- `npm run check:cms` (corre dentro de `npm run build`) falla si `public/admin/config.yml` y los JSON no coinciden campo por campo, o si un JSON no está en la config.
- **Agregar un texto editable**: agregalo al JSON, al `config.yml` (mismo nombre de campo) y usalo en el componente.
- Los íconos se eligen por nombre; si agregás uno, sumalo a `ICONS` en `src/data/site.ts` y a la lista `select` de `config.yml`.
- Local: `/admin` necesita el login de GitHub en un dominio real; en local editá los JSON a mano.
- El dominio de producción está fijo en `base_url` de `public/admin/config.yml`; si cambia el dominio, actualizalo ahí y en la OAuth App.
- **Vista previa en vivo**: el panel derecho de `/admin` renderiza las páginas reales del sitio con el borrador (`src/admin-preview.tsx`, compilado a `dist/admin/preview.js|css` por `vite build --mode admin-preview` dentro de `npm run build`; lo carga `public/admin/register.js`). Los datos derivados deben calcularse en render (funciones como `practices()`), no al importar, para que el preview vea los cambios.
- **Deploys de `main`**: Vercel Hobby no despliega commits de no-miembros (p. ej. Andrew vía el CMS), así que `git.deploymentEnabled.main` está en `false` en `vercel.json` y `.github/workflows/deploy.yml` dispara un Deploy Hook en cada push a `main`. Requiere el secret `VERCEL_DEPLOY_HOOK` en GitHub (Vercel → Settings → Git → Deploy Hooks, rama `main`). Si falla, relanzá el workflow desde la pestaña Actions.
