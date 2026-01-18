"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Check if a nav item is active based on pathname or hash
  const isActiveItem = (href: string) => {
    if (href.startsWith("#")) {
      return activeItem === href;
    }
    return pathname === href;
  };

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
        <Link href="/" className="flex items-center rounded-md ring-2 ring-red-800 px-2 bg-teal-300">
          <span className="text-xl md:text-2xl text-brand-teal font-playfair">
            Dayo<span className="text-brand-red font-bold font-playfair">Paints</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide uppercase font-semibold transition-all duration-300 hover:text-brand-red ${
                isActiveItem(item.href) ? "text-red-800 underline font-bold scale-110" : "text-stone-500"
              }`}
            >
              {item.name}
              {isActiveItem(item.href) && (
                <div className="h-0.5 w-full bg-brand-red mt-0.5 animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
          <Link href="#contact">
            <Button className="bg-brand-teal text-white hover:bg-brand-teal/90 font-bold px-6 py-6 rounded-xl shadow-lg hover:shadow-brand-teal/20 transition-all border-none">
                Get a Quote
            </Button>
          </Link>
        </nav>
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-brand-teal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {mobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
            </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border/40 animate-in slide-in-from-top-2 duration-200">
          <nav className="container px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileNavClick}
                className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                  isActiveItem(item.href) 
                    ? "text-brand-red bg-brand-red/10" 
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" onClick={handleMobileNavClick} className="mt-2">
              <Button className="w-full bg-teal-400 text-white hover:bg-brand-teal/90 font-bold py-6 rounded-xl">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
