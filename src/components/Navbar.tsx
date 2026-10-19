import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, ArrowRight, Menu, X, Sparkles, Phone, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner de Oferta de Lançamento */}
      <div className="bg-gradient-to-r from-flame-700 via-flame-600 to-amber-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 relative z-50 shadow-md">
        <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-ping" />
        <span>🔥 <strong>OFERTA DE LANÇAMENTO:</strong> Teste grátis por 7 dias sem cartão de crédito + Implantação VIP incluída!</span>
        <button
          onClick={onOpenTrial}
          className="hidden md:inline-flex items-center gap-1 underline ml-2 text-white hover:text-amber-200 transition-colors cursor-pointer"
        >
          Garantir Vaga <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gas-950/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo LMA Gás Oficial */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="size-11 sm:size-12 rounded-xl bg-gradient-to-br from-flame-500 via-amber-500 to-cyan-500 p-0.5 shadow-glow-orange group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gas-900 rounded-[10px] flex items-center justify-center">
                    <span className="text-2xl leading-none select-none">🐴</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-flame-600 text-white p-1 rounded-full shadow-lg">
                  <Flame className="size-3 fill-amber-300 text-amber-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-flame-400 transition-colors">
                    LMA <span className="text-gradient-flame">GÁS</span>
                  </span>
                  <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                  Gestão Inteligente de Gás &amp; Água
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
              <a href="#telas" className="hover:text-flame-400 transition-colors">
                Prints do Sistema
              </a>
              <a href="#entregador" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                App Entregador
                <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.2 rounded font-bold">GPS</span>
              </a>
              <a href="#cardapio" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                Cardápio Digital
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-bold">0% Taxa</span>
              </a>
              <a href="#simulador" className="hover:text-amber-400 transition-colors">
                Simulador de Lucro
              </a>
              <a href="#planos" className="hover:text-flame-400 transition-colors">
                Planos
              </a>
              <a href="#faq" className="hover:text-slate-100 transition-colors">
                Dúvidas
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://gas.lmaapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-slate-700/80 hover:border-slate-500 bg-gas-900/60 transition-all flex items-center gap-1.5"
              >
                Entrar no Sistema
                <ExternalLink className="size-3.5 opacity-70" />
              </a>

              <button
                onClick={onOpenTrial}
                className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs sm:text-sm cursor-pointer shadow-glow-orange hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-flame-600 via-amber-500 to-flame-500 animate-shimmer" />
                <span className="relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[11px] bg-gradient-to-r from-flame-600 to-flame-700 text-white font-bold">
                  <Sparkles className="size-4 text-amber-300" />
                  Testar 7 Dias Grátis
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenTrial}
                className="text-xs font-bold bg-flame-600 text-white px-3 py-1.5 rounded-lg shadow-md"
              >
                Testar Grátis
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-gas-900 rounded-lg transition-colors"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gas-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-3 backdrop-blur-xl animate-fade-in">
            <a
              href="#telas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-flame-400"
            >
              Prints Reais do Sistema
            </a>
            <a
              href="#entregador"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Aplicativo do Entregador com GPS
            </a>
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Cardápio Digital sem Comissões
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              Simulador de Economia
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-flame-400"
            >
              Planos &amp; Preços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-400"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="https://gas.lmaapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-gas-900 border border-slate-700 text-slate-200"
              >
                Acessar Login do Sistema
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-3 text-center text-sm font-bold rounded-lg bg-gradient-to-r from-flame-600 to-amber-600 text-white shadow-glow-orange"
              >
                🚀 Iniciar Teste Gratuito de 7 Dias
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};