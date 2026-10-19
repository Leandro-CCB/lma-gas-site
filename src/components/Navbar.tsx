import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner de Oferta */}
      <div className="bg-[#101f34] text-white text-xs sm:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2 relative z-50">
        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          TESTE GRÁTIS DE 7 DIAS:
        </span>
        <span className="text-slate-200 hidden sm:inline">
          Experimente todas as ferramentas na sua revenda sem precisar de cartão de crédito!
        </span>
        <button
          onClick={onOpenTrial}
          className="underline font-bold text-emerald-400 hover:text-emerald-300 ml-1 cursor-pointer transition-colors"
        >
          Começar Agora
        </button>
      </div>

      {/* Header Principal em Tema Claro */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Oficial LMA */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                <img
                  src="/logo-lma.png"
                  alt="LMA GÁS"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0d1b2e]">
                    LMA <span className="text-emerald-600">GÁS</span>
                  </span>
                  <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    ERP
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                  Gestão Inteligente de Gás &amp; Água
                </span>
              </div>
            </a>

            {/* Links do Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#telas" className="hover:text-emerald-600 transition-colors">
                Telas do Sistema
              </a>
              <a href="#entregador" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                App Entregador
                <span className="bg-blue-50 text-blue-700 text-[10px] px-1.5 py-0.2 rounded font-bold border border-blue-200">
                  GPS
                </span>
              </a>
              <a href="#cardapio" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                Cardápio Digital
                <span className="bg-emerald-50 text-emerald-700 text-[10px] px-1.5 py-0.2 rounded font-bold border border-emerald-200">
                  0% Taxa
                </span>
              </a>
              <a href="#inativos" className="hover:text-emerald-600 transition-colors">
                Clientes Inativos (+60d)
              </a>
              <a href="#planos" className="hover:text-emerald-600 transition-colors">
                Planos
              </a>
              <a href="#faq" className="hover:text-emerald-600 transition-colors">
                Dúvidas
              </a>
            </nav>

            {/* Ações Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://gas.lmaapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0d1b2e] px-3.5 py-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white transition-all flex items-center gap-1.5"
              >
                Entrar no Sistema
                <ExternalLink className="size-3.5 opacity-60" />
              </a>

              <button
                onClick={onOpenTrial}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Sparkles className="size-4 text-emerald-200" />
                Testar 7 Dias Grátis
                <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenTrial}
                className="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-lg shadow-sm"
              >
                Testar Grátis
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 mt-2 space-y-2.5 shadow-md animate-fade-in">
            <a
              href="#telas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Telas do Sistema
            </a>
            <a
              href="#entregador"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Aplicativo do Entregador com GPS
            </a>
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Cardápio Digital sem Comissões
            </a>
            <a
              href="#inativos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Alerta de Clientes Inativos (+60d)
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Planos &amp; Preços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="https://gas.lmaapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-slate-100 text-slate-800 border border-slate-300"
              >
                Acessar Login do Sistema
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-3 text-center text-sm font-bold rounded-lg bg-emerald-600 text-white shadow-md"
              >
                Iniciar Teste Gratuito de 7 Dias
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};