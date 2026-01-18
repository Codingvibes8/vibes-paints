"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeItem, setActiveItem] = useState("");
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden">
             <Image
              src="/logo.png"
              alt="NellyPaints Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden md:inline-block font-bold text-xl md:text-2xl text-brand-teal font-playfair">
            Nelly
                <span className="text-brand-red" >Paints</span>
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
            <Button variant="ghost" size="icon" className="text-brand-teal">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
            </Button>
        </div>
      </div>
    </header>
  );
}
