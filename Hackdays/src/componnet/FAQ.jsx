import React, { useState } from 'react'

const faqs = [
  { q: 'Do I need a team to register?', a: 'Nope! You can register solo and find teammates at our team building session on Day 1. Teams of 1 -4 are all welcome.' },
  { q: 'Is it free to participate?', a: '100% free. We cover meals and snacks. All you bring is your laptop, your ideas, and your appetite.' },
  
  { q: 'What experience level is required?', a: 'All levels welcome ' },
  { q: 'Can I start my project before the event?', a: 'No pre built code, but planning and research beforehand is totally fine. All design and development must happen during the 12hrs window.' },
  { q: 'Will there be food? 🍞', a: 'Of course it\'s bakery themed! Expect fresh pastries, artisan sandwiches, and midnight snacks to fuel you through the night.' },
  { q: 'Who can participate?', a: 'Hack Days is open to students and early career developers. You must be 18+ or have guardian permission. All backgrounds and skill sets welcome.' },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <>
      <style>{`
        #faq {
          background: #F6E6EF;
          padding: 0;
        }

        .faq-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 100px 48px;
        }

        .faq-label {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #A87C94;
          margin-bottom: 14px;
        }

        .faq-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #2A2A2A;
          margin-bottom: 52px;
        }

        .faq-title em {
          font-style: italic;
          color: #D98CB3;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faq-item {
          border: 1.5px solid #F0D6E3;
          border-radius: 10px;
          background: #FFF7FB;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .faq-item.open {
          border-color: #D98CB3;
          box-shadow: 0 4px 24px rgba(217,140,179,0.18);
        }

        .faq-question {
          padding: 20px 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          font-family: 'Georgia', serif;
          font-size: 1rem;
          color: #2A2A2A;
          transition: background 0.2s;
          user-select: none;
        }

        .faq-question:hover {
          background: #FBEAF3;
        }

        .faq-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #F6E6EF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 300;
          color: #D98CB3;
          transition: transform 0.35s, background 0.25s;
          line-height: 1;
        }

        .faq-item.open .faq-icon {
          transform: rotate(45deg);
          background: #D98CB3;
          color: white;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, padding 0.3s;
          font-family: 'Georgia', serif;
          font-size: 0.93rem;
          line-height: 1.85;
          color: #555;
          padding: 0 26px;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 0 26px 22px;
        }

        @media (max-width: 860px) {
          .faq-inner {
            padding: 72px 24px;
          }
        }
      `}</style>

      <section id="faq">
        <div className="faq-inner">

          <p className="faq-label">// Questions</p>

          <h2 className="faq-title">
            Got <em>Questions?</em>
          </h2>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIdx === i ? ' open' : ''}`}
              >

                <div
                  className="faq-question"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  {item.q}
                  <div className="faq-icon">+</div>
                </div>

                <div className="faq-answer">{item.a}</div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default FAQ