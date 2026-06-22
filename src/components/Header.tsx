"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    handleLinkClick();

    if (sectionId === "") {
      window.history.pushState(null, "", "#");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      window.history.pushState(null, "", `#${sectionId}`);

      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">VD</span>
          </div>
          <span className="hidden md:inline font-bold text-primary text-lg">
            Violência Doméstica
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            onClick={(e) => handleSectionClick(e, "")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleSectionClick(e, "sobre")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Sobre
          </a>
          <a
            href="#tipos"
            onClick={(e) => handleSectionClick(e, "tipos")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Tipos de Violência
          </a>
          <a
            href="#recursos"
            onClick={(e) => handleSectionClick(e, "recursos")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Recursos
          </a>
          <a
            href="#contato"
            onClick={(e) => handleSectionClick(e, "contato")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Contato
          </a>
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
            <a
              href="#"
              onClick={(e) => handleSectionClick(e, "")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleSectionClick(e, "sobre")}
              className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
            >
              Sobre
            </a>
            <a
              href="#tipos"
              onClick={(e) => handleSectionClick(e, "tipos")}
              className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
            >
              Tipos de Violência
            </a>
            <a
              href="#recursos"
              onClick={(e) => handleSectionClick(e, "recursos")}
              className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
            >
              Recursos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleSectionClick(e, "contato")}
              className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
            >
              Contato
            </a>
            <a
              href="tel:180"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={handleLinkClick}
            >
              Denúncia: 180
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
