import React from 'react';
import { ShieldCheck, PhoneCall, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          {/* Coluna 1: Marca & Descrição */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logo-lma.png" alt="LMA GÁS" className="h-9 w-auto object-contain" />
              <span className="text-xl font-black text-[#0d1b2e]">
                LMA <span className="text-emerald-600">GÁS</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Sistema de gestão completo para revendas de gás GLP e água mineral. Frente de caixa, aplicativo para entregadores com mapas e cardápio digital próprio sem cobrança de taxas por pedido.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                <ShieldCheck className="size-3.5 text-emerald-600" /> Servidores Cloud 100% Seguros
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#telas" className="hover:text-emerald-600 transition-colors">
                  Telas do Sistema
                </a>
              </li>
              <li>
                <a href="#entregador" className="hover:text-emerald-600 transition-colors">
                  App do Entregador com GPS
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-emerald-600 transition-colors">
                  Cardápio Digital sem Taxa
                </a>
              </li>
              <li>
                <a href="#inativos" className="hover:text-emerald-600 transition-colors">
                  Clientes Inativos (+60d)
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-emerald-600 transition-colors">
                  Planos e Valores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-600 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Funcionalidades */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Módulos do Sistema
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Frente de Caixa (PDV) Rápido</li>
              <li>Gestão de Entregas e Motoboys</li>
              <li>Cardápio Digital Próprio</li>
              <li>Alerta de Clientes Inativos</li>
              <li>Controle de Estoque e Mínimos</li>
              <li>Fechamento Cego de Caixa</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Acesso */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Atendimento &amp; Suporte
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20suporte%20do%20LMA%20G%C3%A1s."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-700 font-bold hover:text-emerald-800"
              >
                <PhoneCall className="size-3.5" />
                WhatsApp: (11) 99999-9999
              </a>
              <div className="text-slate-500">
                Horário comercial: Seg a Sáb, das 08h às 19h
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenTrial}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer text-center"
                >
                  Testar 7 Dias Grátis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>LMA GÁS</strong> • Uma solução <strong>LMA Soluções</strong>. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://gas.lmaapp.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 flex items-center gap-1 text-slate-600 font-medium"
            >
              Acesso ao Sistema <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};