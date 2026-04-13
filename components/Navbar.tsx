<html><head></head><body>import { ThemeToggle } from "@/components/theme/theme-toggle";

const brandName = "Panda";

export const Navbar = () =&gt; {
  return (
    <header classname="flex items-center justify-between px-10 pt-8"><nav aria-label="Primary navigation" classname="flex gap-8">
  {links.map((link) =&gt; <a key="{link.href}" href="{link.href}" classname="text-[15px] font-medium hover:underline underline-offset-4 transition-colors" aria-label="{link.label}">
      {link.label}
    </a>)}
</nav>

      <a href="#" classname="text-[22px] font-bold tracking-tight" aria-label="Homepage">{name}</a>
      <themetoggle>
    </themetoggle>import React from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
  name?: string;
}

const defaultLinks: Link[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const defaultName = "Panda";

export const Navbar: React.FC<navbarprops> = ({ links = defaultLinks, name = defaultName }) =&gt; {
  return (
    <header classname="flex items-center justify-between px-10 pt-8">
      <nav aria-label="Primary navigation" classname="flex gap-8">
        {links.map(link =&gt; (
          <a key="{link.href}" href="{link.href}" classname="text-[15px] font-medium hover:underline underline-offset-4 transition-colors" aria-label="{link.label}">
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
};</navbarprops></header>);};</body></html>