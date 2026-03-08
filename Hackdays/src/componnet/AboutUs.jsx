import React, { useEffect, useRef } from 'react'

function AboutUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        #about {
          background: #F6E6EF;
          padding: 0;
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 { transition-delay: 0.15s; }
        .reveal-delay-2 { transition-delay: 0.3s; }
        .reveal-delay-3 { transition-delay: 0.45s; }

        /* Visual side */

        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 340px;
        }

        .about-loaf {
          font-size: 160px;
          line-height: 1;
          animation: loafBob 5s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(217,140,179,0.18));
          position: relative;
          z-index: 2;
        }

        @keyframes loafBob {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }

        .about-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(217,140,179,0.35);
        }

        .about-ring-1 {
          width: 260px;
          height: 260px;
          animation: spinRing 25s linear infinite;
        }

        .about-ring-2 {
          width: 340px;
          height: 340px;
          animation: spinRing 40s linear infinite reverse;
          border-width: 1px;
          opacity: 0.5;
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Text side */

        .about-label {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #A87C94;
          margin-bottom: 14px;
        }

        .about-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #2A2A2A;
          margin-bottom: 22px;
        }

        .about-title em {
          font-style: italic;
          color: #D98CB3;
        }

        .about-body {
          font-family: 'Georgia', serif;
          font-size: 1rem;
          line-height: 1.85;
          color: #555;
          margin-bottom: 16px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 36px;
        }

        .stat-box {
          background: #FFF7FB;
          border: 1px solid #F0D6E3;
          border-radius: 10px;
          padding: 20px 12px;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .stat-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(217,140,179,0.18);
        }

        .stat-num {
          display: block;
          font-family: 'Georgia', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #D98CB3;
        }

        .stat-lbl {
          display: block;
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #A87C94;
          margin-top: 4px;
        }

        @media (max-width: 860px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 72px 24px;
          }

          .about-visual { min-height: 220px; }

          .about-loaf { font-size: 110px; }

          .about-ring-1 { width: 180px; height: 180px; }

          .about-ring-2 { width: 240px; height: 240px; }
        }
      `}</style>

      <section id="about" ref={sectionRef}>
        <div className="about-inner">

          <div className="about-visual reveal">
            <div className="about-ring about-ring-1" />
            <div className="about-ring about-ring-2" />
            <div className="about-loaf">🍰</div>
          </div>

          <div className="about-text">
            <p className="about-label reveal">// About the Event</p>

            <h2 className="about-title reveal reveal-delay-1">
              Where Code<br />Meets <em>Crust.</em>
            </h2>

            <p className="about-body reveal reveal-delay-1">
              HackDays is our signature 24 hour mini hackathon. This year's theme is <strong>Bakery</strong>
              a celebration of craft, creativity, and the joy of making something from scratch.
            </p>

            <p className="about-body reveal reveal-delay-2">
              Whether you're a sourdough level senior dev or fresh out of the oven,
              there's a spot at the table for you. Build, break, taste, repeat.
            </p>

            <div className="about-stats">

              <div className="stat-box reveal reveal-delay-1">
                <span className="stat-num">24</span>
                <span className="stat-lbl">Hours</span>
              </div>

              <div className="stat-box reveal reveal-delay-2">
                <span className="stat-num">50+</span>
                <span className="stat-lbl">Hackers</span>
              </div>

              <div className="stat-box reveal reveal-delay-2">
                <span className="stat-num">13+</span>
                <span className="stat-lbl">Universities</span>
              </div>

              <div className="stat-box reveal reveal-delay-3">
                <span className="stat-num">$5k</span>
                <span className="stat-lbl">In Prizes</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutUs