export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const { password } = req.body || {};
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return res.status(500).json({ ok: false, message: 'Admin password not configured on the server.' });
  }

  if (typeof password !== 'string' || password.trim() !== expectedPassword) {
    return res.status(401).json({ ok: false, message: 'Incorrect password.' });
  }

  return res.status(200).json({ ok: true, message: 'Authenticated' });
}
