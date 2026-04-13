"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export interface NavbarProps {
  links?: NavLink[];
  name?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const defaultName = "YourBrand";

export function Navbar({
  links = defaultLinks,
  name = defaultName,
}: NavbarProps) {
  return (
    <header className="flex items-center justify-between px-10 pt-8">
      <nav aria-label="Primary navigation" className="flex gap-8">
        {links.map((link) => {
          const isExternal = link.external || /^https?:\/\//.test(link.href);
          const baseClass =
            "text-[15px] font-medium hover:underline underline-offset-4 transition-colors";
          return isExternal ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={baseClass}>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/" aria-label="Homepage" className="text-[22px] font-bold tracking-tight">
        {name}
      </Link>

      <ThemeToggle />
    </header>
  );
}

export default Navbar;