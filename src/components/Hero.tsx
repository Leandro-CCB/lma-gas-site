import React from 'react';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const scrollToDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-4 pb-8 sm:pt-6 sm:pb-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Imagem Oficial enviada pelo Chefe — Sem recriação, utilizando a imagem exata */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <img
            src="/images/hero-banner-oficial.jpg"
            alt="LMA Gás - Sistema para Revenda de Gás: Sua revenda de gás mais organizada, do pedido à entrega"
            className="w-full h-auto block"
            loading="eager"
          />

          {/* Área clicável mapeada para o botão 'Testar 7 Dias Grátis' */}
          <button
            type="button"
            onClick={onOpenTrial}
            className="absolute left-[0%] top-[65%] w-[26%] h-[15%] cursor-pointer opacity-0"
            title="Testar 7 Dias Grátis"
            aria-label="Testar 7 Dias Grátis"
          />

          {/* Área clicável mapeada para o botão 'Ver Demonstração' */}
          <button
            type="button"
            onClick={scrollToDemo}
            className="absolute left-[27%] top-[65%] w-[26%] h-[15%] cursor-pointer opacity-0"
            title="Ver Demonstração"
            aria-label="Ver Demonstração"
          />
        </div>
      </div>
    </section>
  );
};
