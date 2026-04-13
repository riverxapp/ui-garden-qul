"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavbarProps = {
  links?: NavLink[];
  name?: string;
};

const defaultName = "YourBrand";
const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  links = defaultLinks,
  name = defaultName,
}: NavbarProps) {
  return (
    <header classname="flex items-center justify-between px-10 pt-8">
      <nav aria-label="Primary navigation" classname="flex gap-8">
        {links.map((link) =&gt; {
          const isExternal = link.external || /^https?:\/\//.test(link.href);
          return isExternal ? (
            <a key="{link.href}" href="{link.href}" target="_blank" rel="noopener noreferrer" classname="text-[15px] font-medium hover:underline underline-offset-4 transition-colors">
              {link.label}
            </a>
          ) : (
            <link key="{link.href}" href="{link.href}" classname="text-[15px] font-medium hover:underline underline-offset-4 transition-colors">
              {link.label}
            
          );
        })}
      </nav>

      <link href="/" aria-label="Homepage" classname="text-[22px] font-bold tracking-tight">
        {name}
      

      <themetoggle>
    </themetoggle></header>
  );
}
