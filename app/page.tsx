<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Chirag Dodiya — Senior Software Engineer</title>
    <meta name="description" content="Senior engineer building reliable, scalable web systems. Focused on TypeScript, React, and cloud-native platforms." />
    <style>
      /* Core design tokens (valid CSS) */
      :root{
        --background: hsl(0 0% 100%);
        --foreground: hsl(222.2 84% 4.9%);
        --card: hsl(0 0% 100%);
        --card-foreground: hsl(222.2 84% 4.9%);
        --primary: hsl(222.2 47.4% 11.2%);
        --primary-foreground: hsl(210 40% 98%);
        --muted-foreground: hsl(215.4 16.3% 46.9%);
        --radius: 8px;
      }

      /* Light baseline layout and accessible defaults */
      html,body{height:100%}
      body{
        margin:0;
        font-family: system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
        background:var(--background);
        color:var(--foreground);
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        line-height:1.5;
      }

      .container{width:100%;max-width:1100px;padding:0 1rem;margin:0 auto}
      header[role="banner"]{border-bottom:1px solid rgba(0,0,0,0.06);background:transparent}
      .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 0}
      .brand{font-weight:700;font-size:1.05rem}
      nav ul{list-style:none;margin:0;padding:0;display:flex;gap:0.75rem;align-items:center}
      nav a{color:var(--foreground);text-decoration:none;font-size:0.95rem}
      nav a:focus{outline:3px solid var(--primary-foreground);outline-offset:3px}

      main{min-height:calc(100vh - 64px);display:flex;flex-direction:column}
      .hero{display:flex;flex-direction:column;align-items:flex-start;padding:3.5rem 0}
      .hero h1{margin:0;font-size:clamp(1.5rem,2.8vw,2.4rem);line-height:1.05}
      .hero p{margin:0.75rem 0 1.5rem;color:var(--muted-foreground);max-width:55ch}
      .hero .cta-row{display:flex;gap:0.75rem;flex-wrap:wrap}

      .btn{
        display:inline-flex;align-items:center;justify-content:center;
        padding:0.6rem 0.9rem;border-radius:6px;border:none;cursor:pointer;font-weight:600;
        background:var(--primary);color:var(--primary-foreground);text-decoration:none;
      }
      .btn-outline{
        background:transparent;border:1px solid rgba(0,0,0,0.08);color:var(--foreground)
      }

      section{padding:3rem 0}
      h2{font-size:1.25rem;margin:0 0 1rem}
      .text-muted{color:var(--muted-foreground)}

      /* Projects grid */
      .grid{display:grid;gap:1.5rem}
      @media(min-width:640px){ .grid{grid-template-columns:repeat(2,1fr)} }
      @media(min-width:1024px){ .grid{grid-template-columns:repeat(3,1fr)} }

      .card{
        background:var(--card);color:var(--card-foreground);
        border-radius:var(--radius);padding:1.25rem;border:1px solid rgba(0,0,0,0.06);
        display:flex;flex-direction:column;height:100%;
      }
      .card h3{margin:0 0 0.5rem;font-size:1.05rem}
      .tags{display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem}
      .badge{padding:0.25rem 0.5rem;border-radius:999px;border:1px solid rgba(0,0,0,0.06);font-size:0.8rem;background:transparent}

      footer{border-top:1px solid rgba(0,0,0,0.06);padding:1.25rem 0;text-align:center;color:var(--muted-foreground);font-size:0.95rem}

      /* Focus visible for accessibility */
      a:focus-visible, button:focus-visible{
        outline:3px solid var(--primary);outline-offset:3px;
      }

      /* Small tweaks for center/stacking in contact */
      .contact-center{display:flex;flex-direction:column;align-items:center;text-align:center;gap:1rem}
      .action-row{display:flex;gap:0.75rem;flex-wrap:wrap;justify-content:center}
    </style>
  </head>
  <body>
    <header role="banner" aria-label="Site header">
      <div class="container nav-inner">
        <div class="brand" id="site-name">Chirag Dodiya</div>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <div class="container hero" role="region" aria-labelledby="hero-title">
        <h1 id="hero-title">I build reliable, scalable web platforms.</h1>
        <p class="text-muted">
          Senior Software Engineer with 8+ years shipping production apps across Next.js, Node.js, and cloud-native stacks. I care about DX, performance, and impact.
        </p>
        <div class="cta-row">
          <a class="btn" href="#projects" aria-label="View Projects">View Projects</a>
          <a class="btn btn-outline" href="#contact" aria-label="Contact Me">Contact Me</a>
        </div>
      </div>

      <!-- About -->
      <section id="about" class="container" aria-labelledby="about-title">
        <h2 id="about-title">About Me</h2>
        <p class="text-muted">
          Senior Software Engineer. Senior engineer building reliable, scalable web systems. Focused on TypeScript, React, and cloud-native platforms.
        </p>
      </section>

      <!-- Projects -->
      <section id="projects" class="container" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <div class="grid" role="list" aria-label="Projects list">
          <article class="card" role="listitem" aria-labelledby="proj-alpha-title">
            <h3 id="proj-alpha-title">Project Alpha</h3>
            <p class="text-muted">A scalable web platform built with Next.js and cloud-native technologies.</p>
            <div class="tags" aria-hidden="false" aria-label="Project technologies">
              <span class="badge">Next.js</span>
              <span class="badge">TypeScript</span>
              <span class="badge">Cloud</span>
            </div>
            <a class="btn" href="#" style="margin-top:auto;margin-left:0;margin-top:1rem" aria-label="Project Alpha link">View project</a>
          </article>

          <article class="card" role="listitem" aria-labelledby="proj-beta-title">
            <h3 id="proj-beta-title">Project Beta</h3>
            <p class="text-muted">An innovative React-based dashboard with real-time analytics.</p>
            <div class="tags" aria-hidden="false" aria-label="Project technologies">
              <span class="badge">React</span>
              <span class="badge">Realtime</span>
              <span class="badge">Analytics</span>
            </div>
            <a class="btn" href="#" style="margin-top:auto;margin-left:0;margin-top:1rem" aria-label="Project Beta link">View project</a>
          </article>

          <article class="card" role="listitem" aria-labelledby="proj-gamma-title">
            <h3 id="proj-gamma-title">Project Gamma</h3>
            <p class="text-muted">A performance-optimized e-commerce platform.</p>
            <div class="tags" aria-hidden="false" aria-label="Project technologies">
              <span class="badge">Performance</span>
              <span class="badge">E-commerce</span>
              <span class="badge">TypeScript</span>
            </div>
            <a class="btn" href="#" style="margin-top:auto;margin-left:0;margin-top:1rem" aria-label="Project Gamma link">View project</a>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="container" aria-labelledby="contact-title">
        <div class="contact-center" role="region" aria-labelledby="contact-title">
          <h2 id="contact-title">Get In Touch</h2>
          <p class="text-muted">Interested in working together or just want to connect? Reach out via email or LinkedIn.</p>
          <div class="action-row">
            <a class="btn" href="mailto:chirag@example.com" aria-label="Send email">Email Me</a>
            <a class="btn btn-outline" href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        © <strong>Chirag Dodiya</strong> — Senior Software Engineer • Remote · India
      </div>
    </footer>
  </body>
</html>