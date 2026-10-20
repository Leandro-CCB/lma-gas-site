import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesStrip } from './components/FeaturesStrip';
import { SystemPresentation } from './components/SystemPresentation';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'LMA Gás | Sistema de Gestão para Revendas de Gás';
  }, []);

  const handleOpenTrial = () => setTrialModalOpen(true);
  const handleCloseTrial = () => setTrialModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Menu Superior Simplificado */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Conteúdo Comercial */}
      <main className="flex-1">
        {/* 2. Primeira Seção — Apresentação Principal (Hero com Foto Humanizada) */}
        <Hero onOpenTrial={handleOpenTrial} />

        {/* 3. Faixa de 4 Funcionalidades Principais */}
        <FeaturesStrip />

        {/* 4. Apresentação do Sistema: Fotos Operacionais e Telas Reais */}
        <SystemPresentation onOpenTrial={handleOpenTrial} />

        {/* 6. Planos e Preços (Exclusivamente R$ 49,99 e R$ 99,99) + Seção de Confiança */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 7. Dúvidas Frequentes */}
        <FaqSection />

        {/* 8. Chamada Final de Conversão */}
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* 9. Rodapé Discreto com Links e Contato Comercial */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* Modal de Teste Gratuito de 7 Dias */}
      <FreeTrialModal isOpen={trialModalOpen} onClose={handleCloseTrial} />

      {/* Modais de Privacidade e Termos de Uso */}
      <PrivacyTermsModal
        isOpen={privacyModalOpen}
        type="privacy"
        onClose={() => setPrivacyModalOpen(false)}
      />
      <PrivacyTermsModal
        isOpen={termsModalOpen}
        type="terms"
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}