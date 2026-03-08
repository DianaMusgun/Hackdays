import React, { useState } from 'react'

function ContactUs() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', topic: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.email || !form.message) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ firstName: '', lastName: '', email: '', topic: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1400)
  }

  return (
    <>
      <style>{`
        #contact {
          background: #F6E6EF;
          padding: 0;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 48px;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        /* Left */

        .contact-label {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #A87C94;
          margin-bottom: 14px;
        }

        .contact-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #2A2A2A;
          margin-bottom: 18px;
        }

        .contact-title em {
          font-style: italic;
          color: #D98CB3;
        }

        .contact-desc {
          font-family: 'Georgia', serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 40px;
        }

        .contact-info-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-info-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 18px;
          border: 1px solid #F0D6E3;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.82rem;
          color: #555;
          text-decoration: none;
          transition: all 0.25s;
          background: #FFF7FB;
        }

        .contact-info-link:hover {
          border-color: #D98CB3;
          color: #2A2A2A;
          background: #FBEAF3;
          transform: translateX(5px);
        }

        .contact-info-link .ci-icon {
          font-size: 1.1rem;
        }

        /* Right — Form */

        .contact-form-wrap {
          background: #FFF7FB;
          border: 1px solid #F0D6E3;
          border-radius: 14px;
          padding: 38px;
        }

        .cf-grid {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .cf-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .cf-group label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A87C94;
        }

        .cf-group input,
        .cf-group textarea,
        .cf-group select {
          background: #FFFFFF;
          border: 1px solid #E6C6D8;
          border-radius: 7px;
          padding: 12px 15px;
          color: #2A2A2A;
          font-family: 'Georgia', serif;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          width: 100%;
          resize: none;
        }

        .cf-group select option {
          background: #FFF7FB;
        }

        .cf-group input::placeholder,
        .cf-group textarea::placeholder {
          color: #999;
        }

        .cf-group input:focus,
        .cf-group textarea:focus,
        .cf-group select:focus {
          border-color: #D98CB3;
          box-shadow: 0 0 0 3px rgba(217,140,179,0.2);
        }

        .cf-submit {
          padding: 15px 32px;
          background: linear-gradient(135deg, #E8AFCF, #D98CB3);
          color: white;
          border: none;
          border-radius: 7px;
          font-family: 'Georgia', serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          transition: all 0.25s;
          letter-spacing: 0.03em;
        }

        .cf-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(217,140,179,0.35);
        }

        .cf-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Toast */

        .contact-toast {
          position: fixed;
          bottom: 32px;
          right: 32px;
          background: #D98CB3;
          color: white;
          font-family: 'Courier New', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 14px 24px;
          border-radius: 8px;
          box-shadow: 0 8px 36px rgba(217,140,179,0.35);
          z-index: 9999;
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.4s;
          pointer-events: none;
        }

        .contact-toast.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 860px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 24px;
          }

          .cf-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="contact">
        <div className="contact-inner">

          <div>
            <p className="contact-label">// Contact Us</p>
            <h2 className="contact-title">Let's <em>Chat.</em></h2>

            <p className="contact-desc">
              Have a question about Hack Days, sponsorship opportunities, or want to volunteer as a mentor?
              We'd love to hear from you.
            </p>

            <div className="contact-info-links">

              <a href="mailto:tcsca@trentu.ca" className="contact-info-link">
                <span className="ci-icon">✉️</span> tcsca@trentu.ca
              </a>

              <a href="#" className="contact-info-link">
                <span className="ci-icon">𝕏</span> @tcsca
              </a>

              <a href="#" className="contact-info-link">
                <span className="ci-icon">📍</span> Trent University, Peterborough, ON
              </a>

            </div>
          </div>

          <div className="contact-form-wrap">

            <div className="cf-grid">

              <div className="cf-row">

                <div className="cf-group">
                  <label>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ada" />
                </div>

                <div className="cf-group">
                  <label>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Lovelace" />
                </div>

              </div>

              <div className="cf-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="ada@example.com" />
              </div>

              <div className="cf-group">
                <label>I'm Interested In…</label>

                <select name="topic" value={form.topic} onChange={handleChange}>
                  <option value="" disabled>Choose a topic</option>
                  <option>Participating as a Hacker</option>
                  <option>Sponsorship & Partnerships</option>
                  <option>Volunteering / Mentoring</option>
                  <option>Press & Media</option>
                  <option>General Question</option>
                </select>

              </div>

              <div className="cf-group">
                <label>Message</label>

                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                />
              </div>

              <button className="cf-submit" onClick={handleSubmit} disabled={sending}>
                {sending ? 'Sending…' : 'Send Message 🧁✨'}
              </button>

            </div>

          </div>

        </div>
      </section>

      <div className={`contact-toast${sent ? ' show' : ''}`}>
        ✓ Message sent! We'll reply soon 🍞
      </div>
    </>
  )
}

export default ContactUs