<html><head></head>import { ThemeToggle } from "@/components/theme/theme-toggle";

export type NavLink = { label: string; href: string };

export interface NavbarProps {
  links?: NavLink[];
  name?: string;
}

const defaultLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const defaultName = "Panda";

export const Navbar = ({ links = defaultLinks, name = defaultName }: NavbarProps) =&gt; {
  return (
    <header classname="flex items-center justify-between px-10 pt-8">
      <nav aria-label="Primary navigation" classname="flex gap-8">
        {links.map((link) =&gt; (
          <a key="{link.href" ||="" link.label}="" href="{link.href}" classname="text-[15px] font-medium hover:underline underline-offset-4 transition-colors" aria-label="{link.label}">
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#" classname="text-[22px] font-bold tracking-tight" aria-label="Homepage">
        {name}
      </a>

      <themetoggle>
    </themetoggle></header>
  );
};</html>