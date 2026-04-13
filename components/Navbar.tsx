import { ThemeToggle } from "@/components/theme/theme-toggle";

const brandName = "Panda";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 pt-8"><nav aria-label="Main" className="flex gap-8">
  {links.map((link) => <a key={link.href} href={link.href} className="text-[15px] font-medium hover:underline underline-offset-4 transition-colors" aria-label={link.label}>
      {link.label}
    </a>)}
</nav>

      <a href="#" className="text-[22px] font-bold tracking-tight" aria-label="Homepage">{name}</a>
      <ThemeToggle />
    </header>);};