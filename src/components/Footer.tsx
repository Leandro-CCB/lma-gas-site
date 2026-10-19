import React from 'react';
import { Flame, ShieldCheck, PhoneCall, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial }) => {
  return (
    <footer className="bg-gas-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Coluna 1: Marca & Descrição */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-flame-500 to-amber-500 p-0.5 shadow-glow-orange">
                <div className="w-full h-full bg-gas-900 rounded-[10px] flex items-center justify-center">
                  <span className="text-xl leading-none">🐴</span>
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                LMA <span className="text-gradient-flame">GÁS</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              O sistema de gestão mais completo e moderno para revendas de gás GLP e água mineral do Brasil. Tecnologia que organiza sua portaria, controla vasilhames, automatiza entregas e aumenta o seu lucro diário.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
                <ShieldCheck className="size-3.5" /> Servidores Cloud 100% Seguros
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#telas" className="hover:text-flame-400 transition-colors">
                  Prints Reais do Sistema
                </a>
              </li>
              <li>
                <a href="#entregador" className="hover:text-cyan-400 transition-colors">
                  App do Entregador com GPS
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-emerald-400 transition-colors">
                  Cardápio Digital sem Taxas
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Economia
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-flame-400 transition-colors">
                  Planos e Valores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-200 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Funcionalidades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Soluções Especializadas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>PDV &amp; Televendas em 10 Segundos</li>
              <li>Controle de Cheios &amp; Vazios</li>
              <li>Contratos de Comodato em PDF</li>
              <li>CRM &amp; Lembrete de Recompra</li>
              <li>Fechamento Cego de Caixa</li>
              <li>Impressão em Bobina Térmica</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento VIP
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20suporte%20do%20LMA%20G%C3%A1s."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <PhoneCall className="size-3.5" />
                WhatsApp: (11) 99999-9999
              </a>
              <div className="text-slate-400">
                Segunda a Sábado, das 07h às 20h
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenTrial}
                  className="w-full py-2.5 px-3 rounded-lg bg-flame-600 hover:bg-flame-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer text-center"
                >
                  Testar 7 Dias Grátis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright & LMA Soluções */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>LMA GÁS</strong> — Uma solução do ecossistema <strong>LMA Soluções</strong>. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://gas.lmaapp.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              Acesso ao Sistema <ExternalLink className="size-3" />
            </a>
            <span>•</span>
            <span>Feito com dedicação para o revendedor brasileiro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};