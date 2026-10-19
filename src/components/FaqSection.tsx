import React, { useState } from 'react';
import { FAQS, WHATSAPP_LINK } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Tire suas dúvidas sobre o <span className="text-emerald-600">LMA GÁS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Respostas diretas para as dúvidas mais comuns dos revendedores de gás e água.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-[#f8fafc] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0d1b2e] flex items-center gap-2.5">
                    <HelpCircle className="size-4 text-emerald-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 animate-fade-in bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm text-[#0d1b2e]">
              Ainda tem alguma dúvida sobre a sua revenda?
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Nossa equipe está disponível no WhatsApp para te ajudar.
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
          >
            <MessageSquare className="size-4" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};