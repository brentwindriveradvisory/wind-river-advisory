'use client'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-brand">
        <svg width="44" height="24" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="0,52 28,12 44,34 60,6 76,34 92,20 120,52"
            stroke="#1a6b5a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M0,60 Q30,55 60,60 Q90,65 120,60"
            stroke="#1a6b5a"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
        </svg>
        <div className="nav-wordmark">
          <span className="nav-logo-name">Wind River Advisory</span>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#work">Our work</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Start a conversation</a>
    </nav>
  )
}
