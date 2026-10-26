import React, { useState } from 'react';
import { Menu, X, MessageSquare, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0d1b2e]/95 backdrop-blur-md border-b border-white/10 text-white transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo LMA Gás Viva (com glow natural e sem caixa branca colada) */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/logo-lma.png"
              alt="LMA Gás"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(16,185,129,0.55)] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                LMA <span className="text-emerald-400">GÁS</span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium mt-1 leading-tight hidden sm:block">
                Sistema de Gestão para Revendas de Gás e Água
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold text-slate-200">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">
              Início
            </a>
            <a href="#demonstracao" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Teste Ao Vivo</span>
            </a>
            <a href="#recursos" className="hover:text-emerald-400 transition-colors">
              Módulos
            </a>
            <a href="#planos" className="hover:text-emerald-400 transition-colors">
              Planos
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Ações Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://gas.lmaapp.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-100 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <span>Entrar no Sistema</span>
              <ExternalLink className="size-3.5 text-emerald-400" />
            </a>

            <button
              onClick={onOpenTrial}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#06131f] font-black text-xs sm:text-sm shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Sparkles className="size-3.5" />
              <span>Testar 7 Dias Grátis</span>
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#162942] hover:bg-[#1e3656] border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <MessageSquare className="size-3.5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTrial}
              className="text-xs font-black bg-emerald-500 text-[#06131f] px-3 py-2 rounded-xl shadow-xs cursor-pointer"
            >
              Testar Grátis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1b2e] border-b border-white/10 px-4 pt-3 pb-6 space-y-2.5 animate-fade-in shadow-2xl">
          <a
            href="#demonstracao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-emerald-400 flex items-center gap-2"
          >
            <Eye className="size-4" />
            <span>Testar o Sistema Ao Vivo</span>
          </a>
          <a
            href="#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
          >
            Módulos do Sistema
          </a>
          <a
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
          >
            Planos e Valores
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
          >
            Perguntas Frequentes
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 text-center text-sm font-black rounded-xl bg-emerald-500 text-[#06131f] shadow-sm cursor-pointer"
            >
              Criar Conta Grátis (7 Dias)
            </button>
            <a
              href="https://gas.lmaapp.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center gap-2"
            >
              <span>Acessar o Sistema (Login)</span>
              <ExternalLink className="size-4 text-emerald-400" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-emerald-700 text-white flex items-center justify-center gap-2"
            >
              <MessageSquare className="size-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
