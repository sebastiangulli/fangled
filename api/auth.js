// Step 1 of the Decap CMS login: send the editor to GitHub to authorize.
import { randomBytes } from 'node:crypto'

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) return res.status(500).send('GITHUB_CLIENT_ID is not set')

  const state = randomBytes(16).toString('hex')
  const origin = `${req.headers['x-forwarded-proto'] ?? 'https'}://${req.headers.host}`
  const url = new URL('https://github.com/login/oauth/authorize')
  url.search = new URLSearchParams({ client_id: clientId, redirect_uri: `${origin}/api/callback`, scope: 'repo', state }).toString()

  // The state cookie is checked in /api/callback to block forged logins.
  res.setHeader('Set-Cookie', `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=600`)
  res.redirect(302, url.toString())
}
