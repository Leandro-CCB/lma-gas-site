import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-gas-900/50 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Perguntas Frequentes sobre o <span className="text-gradient-flame">LMA GÁS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Tudo o que você precisa saber antes de iniciar o seu teste gratuito de 7 dias.
          </p>
        </div>

        {/* Lista Sanfona / Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-gas-950 border border-slate-800/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gas-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                    <HelpCircle className="size-4 text-flame-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-flame-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de Ajuda Personalizada */}
        <div className="mt-12 p-6 rounded-2xl bg-gas-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-extrabold text-sm sm:text-base text-white">
              Ainda tem alguma dúvida específica sobre sua revenda?
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Fale diretamente com nosso especialista pelo WhatsApp agora mesmo.
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20LMA%20G%C3%A1s%20para%20minha%20revenda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
          >
            <PhoneCall className="size-4" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};