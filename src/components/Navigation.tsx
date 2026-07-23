import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-paper/90 border-b border-ink/[0.07] backdrop-blur-[2px]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            Moiz Amjad
          </span>
          <span className="hidden sm:inline text-[10px] font-medium tracking-[0.2em] uppercase text-terra">
            / DS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-[13px] font-medium text-ink-mid transition-colors hover:text-ink"
            >
              {l.name}
            </a>
          ))}
          <a href="#contact" className="btn-terra !py-2.5 !px-4 text-[13px]">
            Write me
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-ink"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/[0.08] bg-paper px-5 pb-5">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink border-b border-ink/[0.06]"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-terra mt-4 w-full"
          >
            Write me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
