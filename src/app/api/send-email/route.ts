import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { to, subject, html, from } = body

    const API_KEY = process.env.RESEND_API_KEY
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY' }), { status: 500 })
    }

    if (!to || !subject || !html) {
      return new Response(JSON.stringify({ error: 'Missing required fields: to, subject, html' }), { status: 400 })
    }

    const payload = {
      from: from || 'you@yourdomain.com',
      to,
      subject,
      html,
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    return new Response(JSON.stringify({ status: res.status, data }), { status: res.status })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || String(err) }), { status: 500 })
  }
}
