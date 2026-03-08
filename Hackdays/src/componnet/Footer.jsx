import React from 'react'

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #F6E6EF;
          padding: 40px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          border-top: 1px solid #F0D6E3;
        }

        .footer-logo {
          font-family: 'Georgia', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #2A2A2A;
          text-decoration: none;
        }

        .footer-logo span {
          color: #D98CB3;
        }

        .footer-copy {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: #777;
        }

        .footer-links {
          display: flex;
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links a {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: #777;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #D98CB3;
        }

        @media (max-width: 600px) {
          .footer {
            padding: 32px 24px;
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <a href="#home" className="footer-logo">🍞 Hack<span>Days</span></a>

        <p className="footer-copy">
          © 2025 Hack Days · Built at Trent University
        </p>

        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#">Code of Conduct</a></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer