"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-paper/95 backdrop-blur-md shadow-sm py-4"
            : isHome
              ? "bg-transparent py-6"
              : "bg-paper/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`font-display text-2xl md:text-3xl uppercase tracking-wider transition-colors ${
              isScrolled || !isHome
                ? "text-ink hover:text-rust"
                : "text-bone hover:text-rust"
            }`}
          >
            Drew Bordeaux
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 hover:text-rust ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "text-rust"
                    : isScrolled || !isHome
                      ? "text-ink"
                      : "text-bone/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors z-50 ${
              isScrolled || !isHome
                ? "text-ink hover:text-rust"
                : "text-bone hover:text-rust"
            }`}
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-display text-4xl uppercase tracking-wide text-ink hover:text-rust transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
