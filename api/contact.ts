import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  request: Request,
): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json(
      { error: 'Method not allowed' },
      { status: 405 },
    )
  }

  try {
    const formData = await request.formData()

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Please complete all required fields.' },
        { status: 400 },
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured.')

      return Response.json(
        { error: 'Email service is not configured.' },
        { status: 500 },
      )
    }

    const { error } = await resend.emails.send({
      from: 'Muadifam Website <onboarding@resend.dev>',
      to: ['martha@mgroup.com.na'],
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

        <h3>Message</h3>

        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>

        <hr />

        <p>
          This enquiry was submitted through the Muadifam Enterprises website.
        </p>
      `,
    })

    if (error) {
      console.error(error)

      return Response.json(
        { error: 'Unable to send message.' },
        { status: 500 },
      )
    }

    return Response.json(
      { success: true },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: 'Unable to process your request.' },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

