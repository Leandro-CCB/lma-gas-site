import React from 'react';
import { ExternalLink, MessageSquare } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          {/* Coluna 1: Marca & Identificação Curta */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logo-lma.png" alt="LMA Gás" className="h-9 w-auto object-contain" />
              <span className="text-xl font-black text-[#0d1b2e]">
                LMA <span className="text-emerald-600">GÁS</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Sistema de Gestão para Revendas de Gás e Água. Controle vendas, entregas, estoque e clientes em um só lugar.
            </p>
          </div>

          {/* Coluna 2: Links de Navegação */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-emerald-600 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-emerald-600 transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-emerald-600 transition-colors">
                  Demonstração
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-emerald-600 transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-600 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Termos e Privacidade */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal &amp; Transparência
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-600 transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-emerald-600 transition-colors cursor-pointer text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <a
                  href="https://gas.lmaapp.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors flex items-center gap-1"
                >
                  Acesso ao Sistema <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Comercial Oficial */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contato Comercial
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-700 font-bold hover:text-emerald-800"
              >
                <MessageSquare className="size-3.5" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <div className="text-slate-500">
                Atendimento em horário comercial
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright Real */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>LMA Gás</strong> • Uma solução desenvolvida por <strong>LMA Soluções</strong>.
          </div>
          <div>
            Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};