"use client";

import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10 md:pt-8">
      {/* Mobile menu button */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:hidden"
      >
        <span className="sr-only">Open main menu</span>
        {menuOpen ? (
          <svg
            className="block h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

      {/* Brand name */}
      <Link
        href="/"
        aria-label="Homepage"
        className="text-[22px] font-bold tracking-tight flex-1 text-center md:text-left md:flex-none"
        onClick={() => setMenuOpen(false)}
      >
        {name}
      </Link>

      {/* Desktop nav */}
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex md:gap-8 md:items-center"
      >
        {links.map((link) => {
          const isExternal =
            link.external || /^https?:\/\//.test(link.href);
          const baseClass =
            "text-[15px] font-medium hover:underline underline-offset-4 transition-colors";
          return isExternal ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
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

      {/* Theme toggle */}
      <div className="ml-4 flex items-center">
        <ThemeToggle />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile primary navigation"
          className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50 flex flex-col px-6 py-4 gap-4"
        >
          {links.map((link) => {
            const isExternal =
              link.external || /^https?:\/\//.test(link.href);
            const baseClass =
              "block w-full text-left text-[15px] font-medium hover:underline underline-offset-4 transition-colors";
            return isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={baseClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={baseClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Navbar;