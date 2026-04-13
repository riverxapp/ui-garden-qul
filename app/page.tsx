import React from "react";

export default function HomePage() {
  return (
    <>
      <header role="banner" aria-label="Site header">
        <div className="container nav-inner">
          <div className="brand" id="site-name">
            Chirag Dodiya
          </div>
          <nav aria-label="Main navigation">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  href="https://github.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <div
          className="container hero"
          role="region"
          aria-labelledby="hero-title"
        >
          <h1 id="hero-title">I build reliable, scalable web platforms.</h1>
          <p className="text-muted">
            Senior Software Engineer with 8+ years shipping production apps
            across Next.js, Node.js, and cloud-native stacks. I care about DX,
            performance, and impact.
          </p>
          <div className="cta-row">
            <a className="btn" href="#projects" aria-label="View Projects">
              View Projects
            </a>
            <a className="btn btn-outline" href="#contact" aria-label="Contact Me">
              Contact Me
            </a>
          </div>
        </div>

        {/* About */}
        <section id="about" className="container" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <p className="text-muted">
            Senior Software Engineer. Senior engineer building reliable,
            scalable web systems. Focused on TypeScript, React, and cloud-native
            platforms.
          </p>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="container"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title">Projects</h2>
          <div className="grid" role="list" aria-label="Projects list">
            <article
              className="card"
              role="listitem"
              aria-labelledby="proj-alpha-title"
            >
              <h3 id="proj-alpha-title">Project Alpha</h3>
              <p className="text-muted">
                A scalable web platform built with Next.js and cloud-native
                technologies.
              </p>
              <div
                className="tags"
                aria-hidden="false"
                aria-label="Project technologies"
              >
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Cloud</span>
              </div>
              <a
                className="btn"
                href="#"
                style={{ marginTop: "1rem", marginLeft: 0 }}
                aria-label="Project Alpha link"
              >
                View project
              </a>
            </article>

            <article
              className="card"
              role="listitem"
              aria-labelledby="proj-beta-title"
            >
              <h3 id="proj-beta-title">Project Beta</h3>
              <p className="text-muted">
                An innovative React-based dashboard with real-time analytics.
              </p>
              <div
                className="tags"
                aria-hidden="false"
                aria-label="Project technologies"
              >
                <span className="badge">React</span>
                <span className="badge">Realtime</span>
                <span className="badge">Analytics</span>
              </div>
              <a
                className="btn"
                href="#"
                style={{ marginTop: "1rem", marginLeft: 0 }}
                aria-label="Project Beta link"
              >
                View project
              </a>
            </article>

            <article
              className="card"
              role="listitem"
              aria-labelledby="proj-gamma-title"
            >
              <h3 id="proj-gamma-title">Project Gamma</h3>
              <p className="text-muted">
                A performance-optimized e-commerce platform.
              </p>
              <div
                className="tags"
                aria-hidden="false"
                aria-label="Project technologies"
              >
                <span className="badge">Performance</span>
                <span className="badge">E-commerce</span>
                <span className="badge">TypeScript</span>
              </div>
              <a
                className="btn"
                href="#"
                style={{ marginTop: "1rem", marginLeft: 0 }}
                aria-label="Project Gamma link"
              >
                View project
              </a>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="container"
          aria-labelledby="contact-title"
        >
          <div
            className="contact-center"
            role="region"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title">Get In Touch</h2>
            <p className="text-muted">
              Interested in working together or just want to connect? Reach out
              via email or LinkedIn.
            </p>
            <div className="action-row">
              <a className="btn" href="mailto:chirag@example.com" aria-label="Send email">
                Email Me
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © <strong>Chirag Dodiya</strong> — Senior Software Engineer • Remote · India
        </div>
      </footer>
    </>
  );
}