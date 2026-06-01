"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">VD</span>
          </div>
          <span className="hidden md:inline font-bold text-primary text-lg">
            Violência Doméstica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            href="#sobre"
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#tipos"
            className="text-foreground hover:text-primary transition-colors"
          >
            Tipos de Violência
          </Link>
          <Link
            href="#recursos"
            className="text-foreground hover:text-primary transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="#contato"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* CTA Button */}
        <a
          href="tel:180"
          className="hidden md:inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Denúncia: 180
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Sobre
            </Link>
            <Link
              href="#tipos"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Tipos de Violência
            </Link>
            <Link
              href="#recursos"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Recursos
            </Link>
            <Link
              href="#contato"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Contato
            </Link>
            <a
              href="tel:180"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Denúncia: 180
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
