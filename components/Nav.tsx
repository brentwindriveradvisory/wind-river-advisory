'use client'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-brand">
        <img src="/logo.png" alt="Wind River Advisory" className="nav-logo" />
      </a>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#work">Our work</a></li>
        <li><a href="#tools">What we build</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Start a conversation</a>
    </nav>
  )
}
