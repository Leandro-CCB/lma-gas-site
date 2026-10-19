import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo LMA Gás + Identificação Curta */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/logo-lma.png"
              alt="LMA Gás"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0d1b2e] leading-none">
                LMA <span className="text-emerald-600">GÁS</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1 leading-tight hidden xs:block">
                Sistema de Gestão para Revendas de Gás e Água
              </span>
            </div>
          </a>

          {/* Menu Desktop Simples */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">
              Início
            </a>
            <a href="#recursos" className="hover:text-emerald-600 transition-colors">
              Recursos
            </a>
            <a href="#planos" className="hover:text-emerald-600 transition-colors">
              Planos
            </a>
            <a href="#contato" className="hover:text-emerald-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* Botões Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <MessageSquare className="size-4" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Botão Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold bg-emerald-600 text-white px-3 py-2 rounded-xl shadow-xs"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
          >
            Início
          </a>
          <a
            href="#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
          >
            Recursos
          </a>
          <a
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
          >
            Planos
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
          >
            Contato
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-slate-900 text-white shadow-sm"
            >
              Testar 7 Dias Grátis
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="size-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};