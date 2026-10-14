// Step 2 of the Decap CMS login: trade GitHub's code for a token and hand it to the /admin window that opened this popup.
export default async function handler(req, res) {
  const { GITHUB_CLIENT_ID: id, GITHUB_CLIENT_SECRET: secret } = process.env
  if (!id || !secret) return res.status(500).send('GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET are not set')

  const { code, state } = req.query
  const saved = /(?:^|;\s*)oauth_state=([^;]+)/.exec(req.headers.cookie ?? '')?.[1]
  if (!code || !state || state !== saved) return res.status(400).send('Invalid login attempt. Close this window and try again.')

  const gh = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: id, client_secret: secret, code }),
  })
  const data = await gh.json()
  const result = data.access_token
    ? ['success', { token: data.access_token, provider: 'github' }]
    : ['error', { message: data.error_description ?? 'GitHub login failed' }]
  const message = `authorization:github:${result[0]}:${JSON.stringify(result[1])}`

  // Decap listens for this message; only answer the page that opened the popup, on our own origin.
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Set-Cookie', 'oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=0')
  res.send(`<!doctype html><html><body><script>
(function () {
  var message = ${JSON.stringify(message).replace(/</g, '\u003c')};
  window.addEventListener('message', function () {
    window.opener.postMessage(message, window.location.origin);
    window.close();
  }, { once: true });
  window.opener.postMessage('authorizing:github', window.location.origin);
})();
</script></body></html>`)
}
