import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
      <Navbar name={profile.name} links={profile.links} />
      <main className="flex flex-1 flex-col">
        <HeroSection title={profile.headline} subtitle={profile.subheadline} primaryAction={{ label: "View Projects", href: "#projects" }} secondaryAction={{ label: "Get in Touch", href: "#contact" }} />
      <section id="about" className="container mx-auto max-w-2xl py-16" aria-label="About">
  <h2 className="text-2xl font-bold mb-4">About</h2>
  <p className="text-base text-muted-foreground">{profile.role}. {profile.subheadline}</p>
</section>

<section id="projects" className="container mx-auto py-16" aria-label="Projects">
  <h2 className="text-2xl font-bold mb-8">Projects</h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {profile.projects.map((proj) => <div key={proj.title} className="rounded-lg border bg-card shadow p-6 flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
        <p className="text-sm mb-4 text-muted-foreground">{proj.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <a href={proj.href} className="mt-auto text-[15px] font-medium underline-offset-4 hover:underline text-primary" aria-label={`${proj.title} project link`}>View project</a>
      </div>)}
  </div>
</section>

<section id="contact" className="container mx-auto max-w-2xl py-16 flex flex-col items-center text-center" aria-label="Contact">
  <h2 className="text-2xl font-bold mb-4">Contact</h2>
  <p className="mb-8 text-base text-muted-foreground">Interested in working together or just want to connect?</p>
  <div className="flex gap-4">
    <Button asChild>
      <a href={`mailto:${profile.email}`} aria-label="Send email">Email Me</a>
    </Button>
    <Button asChild variant="outline">
      <a href="https://www.linkedin.com/in/chiragdodiya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
    </Button>
  </div>
</section>
</main>
    </div>);}