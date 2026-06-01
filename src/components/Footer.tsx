"use client";
import { Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre Este Site</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Projeto de extensão universitária dedicado à conscientização e
              combate à violência doméstica. Oferecemos informações, recursos e
              apoio para vítimas e comunidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:underline transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#tipos" className="hover:underline transition-colors">
                  Tipos de Violência
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  className="hover:underline transition-colors"
                >
                  Recursos de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:underline transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato e Denúncia</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>
                  Denúncia: <strong>180</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>
                  WhatsApp: <strong>(11) 98765-4321</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>
                  Email: <strong>apoio@vbg.com</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-75">
              © {currentYear} Conscientização e Combate à Violência Doméstica.
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Feito com</span>
              <Heart size={16} className="text-secondary" fill="currentColor" />
              <span>para uma sociedade melhor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
