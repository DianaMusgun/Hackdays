import React, { useEffect, useRef } from 'react'

function Landing() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const emojis = ['🍞', '🥐', '🧁', '🍰', '🌾', '✨', '🫙', '🥖']

    const particles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: 16 + Math.random() * 20,
      speed: 0.4 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.4,
      opacity: 0.3 + Math.random() * 0.5,
    }))

    let raf

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        ctx.globalAlpha = p.opacity
        ctx.font = `${p.size}px serif`
        ctx.fillText(p.emoji, p.x, p.y)

        p.y -= p.speed
        p.x += p.drift

        if (p.y < -40) {
          p.y = canvas.height + 40
          p.x = Math.random() * canvas.width
        }
      })

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <style>{`
#home {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(
    ellipse 100% 80% at 50% -10%,
    #FBEAF3 0%,
    #F6E6EF 60%
  );
  padding-top: 80px;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-bg-word {
  position: absolute;
  font-family: 'Georgia', serif;
  font-size: clamp(100px, 18vw, 240px);
  font-weight: 700;
  color: rgba(217,140,179,0.08);
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.02em;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
}

.hero-title {
  font-family: 'Georgia', serif;
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 700;
  line-height: 0.92;
  color: #2A2A2A;
}

.hero-title-italic {
  font-style: italic;
  color: #D98CB3;
  display: block;
}

.hero-subtitle {
  font-family: 'Courier New', monospace;
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: #777;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 16px;
  margin-bottom: 44px;
}

.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-main {
  padding: 15px 40px;
  background: linear-gradient(135deg,#E8AFCF,#D98CB3);
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
}

.btn-main:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(217,140,179,0.35);
}

.btn-ghost {
  padding: 15px 40px;
  background: transparent;
  color: #D98CB3;
  border: 2px solid #D98CB3;
  border-radius: 6px;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #A87C94;
}
`}</style>

      <section id="home">
        <canvas ref={canvasRef} className="hero-canvas" />

        <div className="hero-bg-word">BAKERY</div>

        <div className="hero-content">
          <h1 className="hero-title">
            Hack
            <span className="hero-title-italic">Days</span>
          </h1>

          <p className="hero-subtitle">
            March 21, 2026 · 12 HOURS· TRENT UNIVERSITY
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn-main">Register Now</a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </div>
        </div>

        <div className="hero-scroll">Scroll</div>
      </section>
    </>
  )
}

export default Landing