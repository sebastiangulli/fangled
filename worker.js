// Decap CMS GitHub login (was api/auth.js + api/callback.js on Vercel). Everything else is static assets.
const COOKIE = 'HttpOnly; Secure; SameSite=Lax; Path=/api'

function auth(req, env) {
  if (!env.GITHUB_CLIENT_ID) return new Response('GITHUB_CLIENT_ID is not set', { status: 500 })
  const { origin } = new URL(req.url)
  const state = [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, '0')).join('')
  const url = new URL('https://github.com/login/oauth/authorize')
  url.search = new URLSearchParams({ client_id: env.GITHUB_CLIENT_ID, redirect_uri: `${origin}/api/callback`, scope: 'repo', state }).toString()
  // The state cookie is checked in /api/callback to block forged logins.
  return new Response(null, { status: 302, headers: { Location: url.toString(), 'Set-Cookie': `oauth_state=${state}; ${COOKIE}; Max-Age=600` } })
}

async function callback(req, env) {
  const { GITHUB_CLIENT_ID: id, GITHUB_CLIENT_SECRET: secret } = env
  if (!id || !secret) return new Response('GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET are not set', { status: 500 })

  const params = new URL(req.url).searchParams
  const code = params.get('code'), state = params.get('state')
  const saved = /(?:^|;\s*)oauth_state=([^;]+)/.exec(req.headers.get('cookie') ?? '')?.[1]
  if (!code || !state || state !== saved) return new Response('Invalid login attempt. Close this window and try again.', { status: 400 })

  const gh = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'fangled-cms' },
    body: JSON.stringify({ client_id: id, client_secret: secret, code }),
  })
  const data = await gh.json()
  const result = data.access_token
    ? ['success', { token: data.access_token, provider: 'github' }]
    : ['error', { message: data.error_description ?? 'GitHub login failed' }]
  const message = `authorization:github:${result[0]}:${JSON.stringify(result[1])}`

  // Decap listens for this message; only answer the page that opened the popup, on our own origin.
  return new Response(`<!doctype html><html><body><script>
(function () {
  var message = ${JSON.stringify(message).replace(/</g, '\\u003c')};
  window.addEventListener('message', function () {
    window.opener.postMessage(message, window.location.origin);
    window.close();
  }, { once: true });
  window.opener.postMessage('authorizing:github', window.location.origin);
})();
</script></body></html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Set-Cookie': `oauth_state=; ${COOKIE}; Max-Age=0` } })
}

export default {
  fetch(req, env) {
    const { pathname } = new URL(req.url)
    if (pathname === '/api/auth') return auth(req, env)
    if (pathname === '/api/callback') return callback(req, env)
    return env.ASSETS.fetch(req)
  },
}
