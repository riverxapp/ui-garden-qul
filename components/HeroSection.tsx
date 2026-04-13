import { Button } from "@/components/ui/button";
import { Triangle } from "lucide-react";

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function HeroSection({
  title = "I build reliable, scalable web platforms.",
  subtitle = "Senior Software Engineer with 8+ years shipping production apps across Next.js, Node.js, and cloud-native stacks. I care about DX, performance, and impact.",
  primaryAction = { label: "View Projects", href: "#projects" },
  secondaryAction = { label: "Get in Touch", href: "#contact" },
}: HeroSectionProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-xl text-[28px] font-bold leading-[1.25] tracking-tight sm:text-[36px]">
        {title}
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        {subtitle}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Button asChild className="h-11 gap-2 rounded-lg px-5">
          <a href={primaryAction.href}>
            <Triangle className="h-3.5 w-3.5 fill-current" />
            {primaryAction.label}
          </a>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-lg px-5">
          <a href={secondaryAction.href}>
            {secondaryAction.label}
          </a>
        </Button>
      </div>
    </section>
  );
}