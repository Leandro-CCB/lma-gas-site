import React, { useState } from 'react';
import {
  Flame,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Truck,
  ShoppingCart,
  Users,
  Package,
  Clock,
  MapPin,
  ExternalLink,
  ChevronRight,
  PhoneCall,
  Check,
  Zap,
} from 'lucide-react';
import { HERO_DATA } from '../data/content';
import type { TabScreen } from '../types';

interface HeroProps {
  onOpenTrial: () => void;
  onSelectScreenTab?: (tab: TabScreen) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<TabScreen>('dashboard');

  return (
    <section className="relative pt-6 pb-20 sm:pt-10 sm:pb-28 overflow-hidden">
      {/* Luzes de Fundo (Backlight Glows) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-flame-600/20 via-cyan-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-[-10%] w-[400px] h-[400px] bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-40 left-[-10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge & Prova Social */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gas-900/90 border border-flame-500/30 text-flame-300 text-xs sm:text-sm font-semibold shadow-glow-orange mb-6 animate-pulse-subtle">
            <span className="flex h-2 w-2 rounded-full bg-flame-500 animate-ping" />
            <Flame className="size-4 text-amber-400 fill-amber-400" />
            <span>{HERO_DATA.badge}</span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
            Aumente o lucro da sua revenda,{' '}
            <span className="text-gradient-flame">zere a perda de vasilhames</span>{' '}
            e automatize suas entregas.
          </h1>

          {/* Subtítulo Convincente */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
            {HERO_DATA.subheadline}
          </p>

          {/* Bullet Points de Segurança */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
            {HERO_DATA.bulletPoints.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* Chamadas para Ação (CTAs Principais) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenTrial}
              className="relative group overflow-hidden rounded-xl p-px font-bold text-base cursor-pointer shadow-glow-orange hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-flame-500 via-amber-400 to-flame-600 animate-shimmer" />
              <span className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-[11px] bg-gradient-to-r from-flame-600 via-flame-600 to-flame-700 text-white font-extrabold shadow-lg">
                <Sparkles className="size-5 text-amber-300" />
                INICIAR TESTE GRÁTIS DE 7 DIAS
                <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20LMA%20G%C3%A1s%20e%20fazer%20uma%20demonstra%C3%A7%C3%A3o%20para%20minha%20revenda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-700 hover:border-emerald-500/60 bg-gas-900/80 hover:bg-emerald-950/20 text-slate-200 hover:text-emerald-300 font-semibold text-sm sm:text-base transition-all duration-200"
            >
              <PhoneCall className="size-4 text-emerald-400" />
              Falar no WhatsApp
            </a>

            <a
              href="#telas"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-gas-900/40 text-slate-300 hover:text-cyan-300 font-semibold text-sm sm:text-base transition-all"
            >
              Ver Prints Reais
              <ChevronRight className="size-4" />
            </a>
          </div>

          {/* Números & Métricas de Impacto */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full text-left">
            {HERO_DATA.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-flame-500/30 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-flame group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                  {stat.hint}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHOWCASE INTERATIVO DO SOFTWARE EM TELA CHEIA ── */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              💻 Degustação Interativa
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
              Explore o LMA GÁS funcionando na prática
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Clique nas abas abaixo para ver como o sistema organiza cada ponto da sua revenda.
            </p>
          </div>

          {/* Abas do Monitor */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-4">
            {[
              { id: 'dashboard', label: '📊 Dashboard Executivo', color: 'text-amber-400' },
              { id: 'pdv', label: '⚡ PDV & Televendas (10s)', color: 'text-flame-400' },
              { id: 'entregador', label: '🛵 App do Entregador', color: 'text-cyan-400' },
              { id: 'cardapio', label: '🍕 Cardápio Digital (0% Taxa)', color: 'text-emerald-400' },
              { id: 'vasilhames', label: '🛡️ Controle de Vasilhames', color: 'text-purple-400' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabScreen)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gas-800 text-white border border-flame-500/50 shadow-glow-orange scale-102'
                    : 'bg-gas-900/60 text-slate-400 hover:text-slate-200 hover:bg-gas-800/60 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Moldura de Janela de Sistema Moderno (Mac/Retina Glass) */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-gas-950 border border-slate-700/70 shadow-2xl overflow-hidden">
            {/* Top Bar da Janela */}
            <div className="bg-gas-900/90 rounded-t-xl sm:rounded-t-2xl px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  https://gas.lmaapp.com.br/{activeTab}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Sistema Online &amp; Sincronizado
                </span>
              </div>
            </div>

            {/* Conteúdo Dinâmico da Aba Ativa */}
            <div className="bg-gas-950 p-4 sm:p-6 min-h-[380px] sm:min-h-[460px] rounded-b-xl sm:rounded-b-2xl">
              {/* 1. ABA DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>🐴</span> LMA GÁS • Visão Geral da Revenda
                      </h3>
                      <p className="text-xs text-slate-400">
                        Revenda Modelo • Bertoni Distribuidora • Segunda-feira, Operação em tempo real
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-flame-500/10 border border-flame-500/30 text-flame-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        🔥 142 Botijões Hoje
                      </span>
                      <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        R$ 15.620,00
                      </span>
                    </div>
                  </div>

                  {/* KPIs Bento Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-[11px] font-medium text-slate-400">P13 Residencial</div>
                      <div className="text-xl font-extrabold text-white mt-1">118 un</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">+14% vs meta dia</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-[11px] font-medium text-slate-400">P45 Comercial</div>
                      <div className="text-xl font-extrabold text-cyan-400 mt-1">14 un</div>
                      <div className="text-[10px] text-cyan-300 mt-0.5">3 restaurantes atendidos</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-[11px] font-medium text-slate-400">Água Mineral 20L</div>
                      <div className="text-xl font-extrabold text-blue-400 mt-1">46 galões</div>
                      <div className="text-[10px] text-blue-300 mt-0.5">Ticket combo ativo</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-[11px] font-medium text-slate-400">Vasilhames Vazios</div>
                      <div className="text-xl font-extrabold text-amber-400 mt-1">142 recolhidos</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">100% de conferência</div>
                    </div>
                  </div>

                  {/* Gráfico Simulado & Entregas Ativas */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-2">
                    <div className="lg:col-span-2 p-4 rounded-xl bg-gas-900/90 border border-slate-800">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-200">
                          Curva de Vendas por Hora do Dia
                        </span>
                        <span className="text-[11px] font-mono text-cyan-400">
                          Pico: 11h30 e 17h45
                        </span>
                      </div>
                      {/* Barras dinâmicas em CSS */}
                      <div className="h-28 flex items-end justify-between gap-1.5 pt-4">
                        {[
                          { h: '30%', hora: '08h' },
                          { h: '55%', hora: '09h' },
                          { h: '75%', hora: '10h' },
                          { h: '95%', hora: '11h' },
                          { h: '100%', hora: '12h' },
                          { h: '65%', hora: '13h' },
                          { h: '50%', hora: '14h' },
                          { h: '70%', hora: '15h' },
                          { h: '85%', hora: '16h' },
                          { h: '90%', hora: '17h' },
                          { h: '60%', hora: '18h' },
                          { h: '40%', hora: '19h' },
                        ].map((b, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              style={{ height: b.h }}
                              className="w-full rounded-t-md bg-gradient-to-t from-cyan-600 via-flame-500 to-amber-400 transition-all hover:brightness-125"
                            />
                            <span className="text-[9px] font-mono text-slate-500">{b.hora}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gas-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-slate-200 mb-2 flex items-center justify-between">
                        <span>🛵 Motoboys em Campo</span>
                        <span className="text-[10px] text-emerald-400 font-bold">4 em rota</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded-lg bg-gas-950/70 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-200">Carlos Moto 01</div>
                            <div className="text-[10px] text-slate-400">Jd. Progresso • 3 entregas</div>
                          </div>
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                            Em rota (12 min)
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-gas-950/70 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-200">Leandro Moto 02</div>
                            <div className="text-[10px] text-slate-400">Centro • 2 entregas</div>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Entregue (PIX)
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-gas-950/70 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-200">Fábio Moto 03</div>
                            <div className="text-[10px] text-slate-400">Vila dos Bandeirantes</div>
                          </div>
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                            Portaria (Carregando)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. ABA PDV & TELEVENDAS */}
              {activeTab === 'pdv' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Zap className="size-4 text-flame-400" />
                        PDV &amp; Televendas • Lançamento Instantâneo (10 segundos)
                      </h3>
                      <p className="text-xs text-slate-400">
                        Atenda a ligação, selecione o cliente e despache para o entregador com 1 toque.
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-flame-500/20 text-flame-300 px-2 py-1 rounded border border-flame-500/40">
                      Pedido #1084
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 space-y-3">
                      {/* Busca rápida */}
                      <div className="p-3 rounded-xl bg-gas-900 border border-cyan-500/30 flex items-center gap-2">
                        <PhoneCall className="size-4 text-cyan-400 animate-pulse" />
                        <div className="flex-1">
                          <div className="text-[10px] text-cyan-300 font-bold uppercase">
                            Identificação por Telefone / BINA
                          </div>
                          <div className="text-sm font-semibold text-white">
                            (11) 98765-4321 • Maria Aparecida Santos
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Cliente VIP (Última compra há 42 dias)
                        </span>
                      </div>

                      {/* Endereço pré-preenchido */}
                      <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-400 font-medium mb-1">
                          <MapPin className="size-3.5 text-flame-400" />
                          <span>Endereço de Entrega Cadastrado:</span>
                        </div>
                        <div className="font-semibold text-slate-100">
                          Rua das Palmeiras, 142 • Apto 32B • Jd. São Paulo • Franco da Rocha - SP
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          Ponto de ref: Próximo à Padaria Nova Estrela • Portão de grade branca
                        </div>
                      </div>

                      {/* Produtos Selecionados */}
                      <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 space-y-2">
                        <div className="text-xs font-bold text-slate-300">Itens do Pedido</div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-gas-950 border border-slate-800 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🔥</span>
                            <div>
                              <div className="font-bold text-white">1x Botijão de Gás P13 (Ultragaz)</div>
                              <div className="text-[10px] text-slate-400">Troca com vasilhame vazio</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-400">R$ 115,00</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-gas-950 border border-slate-800 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">💧</span>
                            <div>
                              <div className="font-bold text-white">1x Galão de Água Mineral 20L (Lindoya)</div>
                              <div className="text-[10px] text-slate-400">Retornável</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-cyan-400">R$ 16,00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Coluna de Fechamento */}
                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-slate-300">Forma de Pagamento</div>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          <div className="p-2 rounded bg-gas-950 border border-emerald-500/40 text-center font-bold text-emerald-300">
                            PIX na Entrega
                          </div>
                          <div className="p-2 rounded bg-gas-950/60 border border-slate-800 text-center text-slate-400">
                            Cartão Máquina
                          </div>
                          <div className="p-2 rounded bg-gas-950/60 border border-slate-800 text-center text-slate-400">
                            Dinheiro (Troco)
                          </div>
                          <div className="p-2 rounded bg-gas-950/60 border border-slate-800 text-center text-slate-400">
                            Faturado / Convênio
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-gas-950 border border-slate-800">
                          <div className="text-[11px] text-slate-400">Atribuir Entregador:</div>
                          <div className="font-bold text-sm text-cyan-400 mt-0.5">
                            Carlos Moto 01 (Livre há 3 min)
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>Subtotal:</span>
                            <span>R$ 131,00</span>
                          </div>
                          <div className="flex justify-between text-base font-extrabold text-white mt-1">
                            <span>Total Pedido:</span>
                            <span className="text-emerald-400">R$ 131,00</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenTrial}
                        className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-flame-600 to-amber-600 text-white font-extrabold text-xs shadow-glow-orange cursor-pointer hover:scale-102 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Truck className="size-4" />
                        DESPACHAR PEDIDO AGORA
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. ABA APP DO ENTREGADOR */}
              {activeTab === 'entregador' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Truck className="size-4 text-cyan-400" />
                        Aplicativo do Entregador • Direto no Smartphone
                      </h3>
                      <p className="text-xs text-slate-400">
                        O entregador não precisa baixar nada da Play Store: funciona via link no navegador do celular!
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded">
                      GPS Ativo
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Mockup do Celular do Entregador */}
                    <div className="max-w-[280px] mx-auto md:mx-0 w-full rounded-2xl bg-slate-900 border-2 border-slate-700 p-3 shadow-xl">
                      <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
                      <div className="bg-gas-950 rounded-xl p-2.5 space-y-2 text-xs">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                          <span className="font-bold text-white">Minhas Entregas (3)</span>
                          <span className="text-[10px] text-cyan-400">Carlos Moto 01</span>
                        </div>

                        {/* Cartão de Pedido 1 */}
                        <div className="p-2.5 rounded-lg bg-gas-900 border border-flame-500/40 space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-white text-xs">#1084 • Maria Aparecida</span>
                            <span className="text-[9px] font-bold text-flame-400 bg-flame-500/10 px-1 py-0.2 rounded">
                              EM ROTA
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-300">
                            Rua das Palmeiras, 142 - Jd. São Paulo
                          </div>
                          <div className="text-[10px] font-bold text-emerald-400">
                            1x P13 Ultragaz + 1x Água 20L • R$ 131,00
                          </div>
                          <div className="pt-1.5 flex gap-1.5">
                            <button className="flex-1 py-1 rounded bg-cyan-600 text-[10px] font-bold text-white flex items-center justify-center gap-1">
                              <MapPin className="size-2.5" /> Abrir Waze
                            </button>
                            <button className="flex-1 py-1 rounded bg-emerald-600 text-[10px] font-bold text-white flex items-center justify-center gap-1">
                              <Check className="size-2.5" /> Entregue
                            </button>
                          </div>
                        </div>

                        {/* Cartão de Pedido 2 */}
                        <div className="p-2 rounded-lg bg-gas-900/60 border border-slate-800 text-[10px] space-y-1">
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-300">#1083 • Padaria Estrela</span>
                            <span className="text-slate-500">Aguardando</span>
                          </div>
                          <div className="text-slate-400">Av. Liberdade, 890 • 2x P45</div>
                        </div>
                      </div>
                    </div>

                    {/* Explicação das Vantagens do App */}
                    <div className="md:col-span-2 space-y-3 flex flex-col justify-center">
                      <div className="p-3 rounded-xl bg-gas-900/80 border border-slate-800">
                        <div className="font-bold text-sm text-cyan-300 flex items-center gap-1.5">
                          <MapPin className="size-4" /> Roteirização Inteligente &amp; Economia de Gasolina
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          O entregador clica em um botão e o Waze ou Google Maps traça o trajeto mais rápido, desviando do trânsito e reduzindo o gasto de combustível da moto em até 25%.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-gas-900/80 border border-slate-800">
                        <div className="font-bold text-sm text-emerald-300 flex items-center gap-1.5">
                          <ShieldCheck className="size-4" /> Acerto de Vasilhames &amp; Zero Furos de Caixa
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Ao dar baixa no pedido, o aplicativo obriga o entregador a confirmar se recebeu o botijão vazio e a forma de pagamento exata (PIX, dinheiro ou cartão). A prestação de contas no final do dia é instantânea.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-gas-900/80 border border-slate-800">
                        <div className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="size-4" /> Comissão Automática por Botijão
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Se você paga comissão por botijão entregue para o motoboy, o sistema calcula na hora a comissão do dia de cada entregador, eliminando discussões e desconfianças.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. ABA CARDÁPIO DIGITAL */}
              {activeTab === 'cardapio' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <ShoppingCart className="size-4 text-emerald-400" />
                        Cardápio Digital Próprio • Seus Clientes Pedem Direto Pelo WhatsApp
                      </h3>
                      <p className="text-xs text-slate-400">
                        Economize até R$ 2.400,00 por mês parando de pagar comissões abusivas de 15% a 25% para o iFood e Zé Delivery!
                      </p>
                    </div>
                    <span className="text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                      0% de Taxa
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Visual do Cardápio para o Cliente Final */}
                    <div className="p-3 rounded-xl bg-white text-slate-900 shadow-md space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                        <span className="text-xl">🔥</span>
                        <div>
                          <div className="font-extrabold text-sm text-orange-600">BERTONI GÁS EXPRESS</div>
                          <div className="text-[10px] text-slate-500">Entrega rápida de 20 a 35 min • Franco da Rocha</div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs text-slate-900">Botijão P13 Ultragaz</div>
                          <div className="text-[10px] text-slate-500">Troca pelo vasilhame vazio</div>
                          <div className="text-xs font-bold text-orange-600 mt-0.5">R$ 115,00</div>
                        </div>
                        <button className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                          + Pedir
                        </button>
                      </div>

                      <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs text-slate-900">Galão 20L Água Lindoya</div>
                          <div className="text-[10px] text-slate-500">Retornável</div>
                          <div className="text-xs font-bold text-cyan-600 mt-0.5">R$ 16,00</div>
                        </div>
                        <button className="bg-cyan-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                          + Pedir
                        </button>
                      </div>

                      <div className="pt-2 text-center">
                        <span className="text-[10px] text-slate-400 font-medium">
                          ⚡ Pedido finalizado direto no WhatsApp da sua revenda
                        </span>
                      </div>
                    </div>

                    {/* Vantagens Comerciais */}
                    <div className="md:col-span-2 space-y-2.5 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                        <div className="font-bold text-sm text-emerald-400">
                          💰 100% do Dinheiro Fica na Sua Conta
                        </div>
                        <p className="mt-1">
                          Em aplicativos de terceiros, a cada R$ 10.000 vendidos você deixa R$ 1.500 a R$ 2.500 em taxas. Com o LMA Gás, a mensalidade é fixa e todo o faturamento vai direto para você.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                        <div className="font-bold text-sm text-cyan-400">
                          🎨 Personalizado com a Sua Bandeira
                        </div>
                        <p className="mt-1">
                          O cardápio adota automaticamente as cores e logotipo da sua distribuidora (Ultragaz, Liquigás, Copagaz, Supergasbras, Consigaz, Nacional ou Multimarca), passando máxima confiança ao consumidor.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                        <div className="font-bold text-sm text-amber-400">
                          🔊 Alerta Sonoro no Balcão
                        </div>
                        <p className="mt-1">
                          Quando o cliente pede pelo link, toca um som especial no computador da sua revenda e a comanda já fica pronta para despachar para o motoboy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. ABA CONTROLE DE VASILHAMES */}
              {activeTab === 'vasilhames' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Package className="size-4 text-purple-400" />
                        Controle de Vasilhames, Cheios, Vazios e Comodatos
                      </h3>
                      <p className="text-xs text-slate-400">
                        Cada vasilhame P13 custa mais de R$ 200,00 e o P45 mais de R$ 600,00. O LMA Gás protege o seu patrimônio.
                      </p>
                    </div>
                    <span className="text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded">
                      Auditoria Rigorosa
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-slate-400">Portaria (Cheios)</div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">380 un</div>
                      <div className="text-[10px] text-slate-500">Prontos para venda</div>
                    </div>
                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-slate-400">Portaria (Vazios)</div>
                      <div className="text-xl font-bold text-amber-400 mt-1">195 un</div>
                      <div className="text-[10px] text-slate-500">Aguardando recarga</div>
                    </div>
                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-slate-400">Em Trânsito (Motos)</div>
                      <div className="text-xl font-bold text-cyan-400 mt-1">34 un</div>
                      <div className="text-[10px] text-cyan-300">Distribuídos em 4 rotas</div>
                    </div>
                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="text-slate-400">Comodatos Ativos</div>
                      <div className="text-xl font-bold text-purple-400 mt-1">28 clientes</div>
                      <div className="text-[10px] text-purple-300">Contratos oficiais em PDF</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-white text-sm">
                        📄 Emissão de Contratos de Comodato Oficiais em PDF
                      </div>
                      <p className="text-slate-400 mt-0.5">
                        Empresta cilindros P45 ou botijões para padarias e restaurantes? O LMA Gás gera o contrato jurídico completo com cláusulas de zelo, multa e foro.
                      </p>
                    </div>
                    <button
                      onClick={onOpenTrial}
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white font-bold whitespace-nowrap cursor-pointer hover:bg-purple-500 transition-colors"
                    >
                      Ver Modelo de Comodato
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};