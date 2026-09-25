import { useState, type FormEvent } from 'react'
import Button from './Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Name
          </label>

          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email
          </label>

          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>

          <input
            className="form-control"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+264 81 123 4567"
            autoComplete="tel"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>

          <input
            className="form-control"
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="message">
            Message
          </label>

          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project or enquiry..."
            required
          />
        </div>

        <div className="col-12 d-flex align-items-center gap-3 mt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </Button>

          {status === 'success' && (
            <span className="text-success small">
              Thank you — we&apos;ll be in touch.
            </span>
          )}

          {status === 'error' && (
            <span className="text-danger small">
              Something went wrong. Please try again.
            </span>
          )}
        </div>
      </div>
    </form>
  )
}

