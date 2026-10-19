import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsBar } from './components/BrandsBar';
import { ProblemSolution } from './components/ProblemSolution';
import { RealScreenshots } from './components/RealScreenshots';
import { EntregadorAppSection } from './components/EntregadorAppSection';
import { CardapioDigitalSection } from './components/CardapioDigitalSection';
import { ClientesInativosSection } from './components/ClientesInativosSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const handleOpenTrial = () => setTrialModalOpen(true);
  const handleCloseTrial = () => setTrialModalOpen(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#101a2c] flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero com Showcase Interativo */}
        <Hero onOpenTrial={handleOpenTrial} />

        {/* 2. Marcas e Distribuidoras Homologadas */}
        <BrandsBar />

        {/* 3. Dores vs Soluções Reais */}
        <ProblemSolution onOpenTrial={handleOpenTrial} />

        {/* 4. Telas Reais do Sistema (Dashboard, Nova Venda, Entregas, Clientes, Cardápio, Caixa) */}
        <RealScreenshots onOpenTrial={handleOpenTrial} />

        {/* 5. Vantagens do Aplicativo do Entregador com Rotas GPS */}
        <EntregadorAppSection onOpenTrial={handleOpenTrial} />

        {/* 6. Cardápio Digital Próprio com 0% de Taxa */}
        <CardapioDigitalSection onOpenTrial={handleOpenTrial} />

        {/* 7. Alerta de Clientes Inativos (+60 e +90 dias sem comprar) */}
        <ClientesInativosSection onOpenTrial={handleOpenTrial} />

        {/* 8. Planos e Valores Transparentes */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 9. Perguntas Frequentes */}
        <FaqSection />

        {/* 10. Chamada Final de Conversão */}
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* Rodapé Oficial */}
      <Footer onOpenTrial={handleOpenTrial} />

      {/* Modal de Teste Gratuito de 7 Dias */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={handleCloseTrial} />
    </div>
  );
}