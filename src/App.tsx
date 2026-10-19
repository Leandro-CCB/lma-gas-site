import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsBar } from './components/BrandsBar';
import { ProblemSolution } from './components/ProblemSolution';
import { RealScreenshots } from './components/RealScreenshots';
import { EntregadorAppSection } from './components/EntregadorAppSection';
import { CardapioDigitalSection } from './components/CardapioDigitalSection';
import { RoiCalculator } from './components/RoiCalculator';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Testimonials } from './components/Testimonials';
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
    <div className="min-h-screen bg-gas-950 text-slate-100 flex flex-col font-sans selection:bg-flame-500 selection:text-white">
      {/* Barra de Navegação */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 1. Hero Section com Showcase Interativo */}
        <Hero onOpenTrial={handleOpenTrial} />

        {/* 2. Barra de Bandeiras Homologadas */}
        <BrandsBar />

        {/* 3. Comparativo de Dores vs Soluções */}
        <ProblemSolution onOpenTrial={handleOpenTrial} />

        {/* 4. PRINTS REAIS E TELAS DO SISTEMA */}
        <RealScreenshots onOpenTrial={handleOpenTrial} />

        {/* 5. APLICATIVO DO ENTREGADOR (Destaque Dedicado) */}
        <EntregadorAppSection onOpenTrial={handleOpenTrial} />

        {/* 6. CARDÁPIO DIGITAL PRÓPRIO (Zero Comissões) */}
        <CardapioDigitalSection onOpenTrial={handleOpenTrial} />

        {/* 7. SIMULADOR DE ECONOMIA E LUCRO (ROI) */}
        <RoiCalculator onOpenTrial={handleOpenTrial} />

        {/* 8. Grade de Todas as Funcionalidades */}
        <FeaturesGrid />

        {/* 9. Depoimentos de Revendedores */}
        <Testimonials />

        {/* 10. Tabela de Planos e Preços */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 11. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 12. Chamada Final de Conversão */}
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* Rodapé Oficial */}
      <Footer onOpenTrial={handleOpenTrial} />

      {/* Modal Interativo de Início de Teste Gratuito */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={handleCloseTrial} />
    </div>
  );
}