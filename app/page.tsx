import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const profile = {
  name: 'Chirag Dodiya',
  role: 'Senior Software Engineer',
  summary: 'Senior engineer building reliable, scalable web systems. Focused on TypeScript, React, and cloud-native platforms.',
  location: 'Remote · India',
  links: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle',
    email: 'mailto:chirag@example.com',
  },
  ctas: {
    primary: { href: '#projects', label: 'View Projects' },
    secondary: { href: '#contact', label: 'Contact Me' },
  },
  headline: "I build reliable, scalable web platforms.",
  subheadline: "Senior Software Engineer with 8+ years shipping production apps across Next.js, Node.js, and cloud-native stacks. I care about DX, performance, and impact.",
  projects: [
    {
      title: "Project Alpha",
      description: "A scalable web platform built with Next.js and cloud-native technologies.",
      tags: ["Next.js", "TypeScript", "Cloud"],
      href: "#",
    },
    {
      title: "Project Beta",
      description: "An innovative React-based dashboard with real-time analytics.",
      tags: ["React", "Realtime", "Analytics"],
      href: "#",
    },
    {
      title: "Project Gamma",
      description: "A performance-optimized e-commerce platform.",
      tags: ["Performance", "E-commerce", "TypeScript"],
      href: "#",
    },
  ],
  email: "chirag@example.com",
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar name={profile.name} />
      <main className="flex flex-1 flex-col">
        <HeroSection
          title={profile.headline}
          subtitle={profile.subheadline}
          primaryAction={profile.ctas.primary}
          secondaryAction={profile.ctas.secondary}
        />
        <section id="about" className="container mx-auto max-w-2xl py-16" aria-labelledby="about-title">
          <h2 id="about-title" className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {profile.role}. {profile.subheadline}
          </p>
        </section>

        <section id="projects" className="container mx-auto py-16" aria-labelledby="projects-title">
          <h2 id="projects-title" className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((proj) => (
              <article
                key={proj.title}
                className="rounded-lg border bg-card shadow p-6 flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              >
                <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground leading-snug">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4" aria-label="Project technologies">
                  {proj.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <a
                  href={proj.href}
                  className="mt-auto text-[15px] font-medium underline-offset-4 hover:underline text-primary"
                  aria-label={`${proj.title} project link`}
                >
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto max-w-2xl py-16 flex flex-col items-center text-center" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8 text-base text-muted-foreground max-w-md leading-relaxed">Interested in working together or just want to connect? Reach out via email or LinkedIn.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button asChild>
              <a href={profile.links.email} aria-label="Send email">Email Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
            </Button>
          </div>
        </section>
      </main>

      <style>{`
        main {
          scroll-margin-top: 96px;
        }
        a:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}