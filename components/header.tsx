"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Produtos", href: "#vitrine" },
  { name: "SOS Churrasco", href: "#sos" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/images/logo-isolado.png"
              alt="Donato's Conveniência"
              className="h-10 w-auto lg:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#0f172a] transition-colors hover:text-[#fc7e14]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="h-11 bg-[#fc7e14] px-6 font-semibold text-white hover:bg-[#e56c00]"
            >
              <a href="/obrigado">
                <Phone className="mr-2 h-4 w-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#0f172a]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0f172a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-[#e2e8f0] bg-white py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-[#0f172a] transition-colors hover:text-[#fc7e14]"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 h-11 w-full bg-[#fc7e14] font-semibold text-white hover:bg-[#e56c00]"
              >
                <a href="/obrigado">Fale Conosco</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
