import React from "react";

export default function HomePage() {
  return (
    <>
      <style>{`
        header {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .brand {
          font-weight: 700;
          font-size: 1.5rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }
        nav a {
          color: hsl(var(--primary-foreground));
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        nav a:hover,
        nav a:focus {
          color: hsl(var(--secondary-foreground));
          outline-offset: 2px;
        }
        main {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .hero {
          text-align: center;
          margin-bottom: 4rem;
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }
        .text-muted {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        .cta-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.15);
          transition: background-color 0.3s ease;
        }
        .btn:hover,
        .btn:focus {
          background-color: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
          outline-offset: 2px;
        }
        .btn-outline {
          background-color: transparent;
          border: 2px solid hsl(var(--primary));
          color: hsl(var(--primary));
        }
        .btn-outline:hover,
        .btn-outline:focus {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border-color: hsl(var(--primary));
        }
        section {
          margin-bottom: 4rem;
        }
        section h2 {
          font-size: 2rem;
          color: hsl(var(--foreground));
          margin-bottom: 1rem;
        }
        .grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .card {
          background-color: hsl(var(--card));
          border-radius: var(--radius);
          box-shadow: 0 2px 12px rgb(0 0 0 / 0.05);
          padding: 1.5rem;
          color: hsl(var(--card-foreground));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease;
        }
        .card:hover,
        .card:focus-within {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.12);
          outline: none;
        }
        .card h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: hsl(var(--foreground));
        }
        .tags {
          margin: 1rem 0;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .badge {
          background-color: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius);
          font-size: 0.8rem;
          font-weight: 600;
          user-select: none;
        }
        .contact-center {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .action-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        footer {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          text-align: center;
          padding: 1.5rem 1rem;
          font-size: 0.9rem;
          box-shadow: 0 -2px 4px rgb(0 0 0 / 0.1);
        }
        @media (max-width: 640px) {
          .hero h1 {
            font-size: 2rem;
          }
          nav ul {
            gap: 1rem;
          }
          .cta-row {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }
          .action-row {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }
        }
      `}</style>

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