import React, { useState, useEffect } from 'react'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Tracks', 'Schedule', 'FAQ', 'Team', 'Contact']

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 48px;

          background: rgba(255,247,251,0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          border-bottom: 1px solid transparent;
          transition: border-color 0.3s, box-shadow 0.3s;
          font-family: 'Georgia', serif;
        }

        .navbar.scrolled {
          border-bottom: 1px solid #F0D6E3;
          box-shadow: 0 4px 24px rgba(217,140,179,0.08);
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2A2A2A;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: -0.02em;
        }

        .nav-logo span {
          color: #D98CB3;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-family: 'Georgia', serif;
          font-size: 0.9rem;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #D98CB3;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .nav-links a:hover {
          color: #2A2A2A;
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .nav-apply {
          padding: 10px 24px;
          background: linear-gradient(135deg,#E8AFCF,#D98CB3);
          color: white;
          border: none;
          border-radius: 6px;
          font-family: 'Georgia', serif;
          font-size: 0.85rem;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.04em;
        }

        .nav-apply:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(217,140,179,0.35);
        }

        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .nav-burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #2A2A2A;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;

          background: rgba(255,247,251,0.96);
          backdrop-filter: blur(18px);

          padding: 24px 32px 32px;
          flex-direction: column;
          gap: 20px;

          border-bottom: 1px solid #F0D6E3;
          z-index: 999;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          font-family: 'Georgia', serif;
          font-size: 1.1rem;
          color: #444;
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid #F0D6E3;
        }

        @media (max-width: 860px) {
          .navbar { padding: 16px 24px; }
          .nav-links, .nav-apply { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo">🍞 Hack<span>Days</span></a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>

        <a href="#contact" className="nav-apply">Apply Now</a>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}

        <a
          href="#contact"
          className="nav-apply"
          style={{ textAlign: 'center', marginTop: 8 }}
          onClick={() => setMenuOpen(false)}
        >
          Apply Now
        </a>
      </div>
    </>
  )
}

export default NavBar