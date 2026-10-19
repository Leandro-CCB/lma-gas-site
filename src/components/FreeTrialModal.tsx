import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState('');
  const [revenda, setRevenda] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [bandeira, setBandeira] = useState('Ultragaz');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !whatsapp) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // Ignora se confetti falhar
    }

    setSubmitted(true);
  };

  const handleGoToSystem = () => {
    window.open('https://gas.lmaapp.com.br', '_blank');
    onClose();
  };

  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${nome}, da revenda ${revenda || 'de Gás'} em ${cidade || 'Brasil'}. Gostaria de ativar meu teste gratuito de 7 dias do LMA Gás (Bandeira: ${bandeira})!`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header com Logo Oficial da LMA */}
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo-lma.png" alt="LMA GÁS" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  7 Dias Grátis • Sem Cartão
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-1">
                  Iniciar Teste do LMA GÁS
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-5">
              Preencha os dados da sua revenda para liberar o seu acesso de demonstração.
            </p>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Seu Nome Completo: <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Roberto Antônio Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Nome da Revenda:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Central Gás e Água"
                    value={revenda}
                    onChange={(e) => setRevenda(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    WhatsApp: <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Cidade / UF:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Franco da Rocha - SP"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Distribuidora:
                  </label>
                  <select
                    value={bandeira}
                    onChange={(e) => setBandeira(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Ultragaz">Ultragaz</option>
                    <option value="Liquigás">Liquigás</option>
                    <option value="Copagaz">Copagaz</option>
                    <option value="Supergasbras">Supergasbras</option>
                    <option value="Consigaz">Consigaz</option>
                    <option value="Nacional Gás">Nacional Gás</option>
                    <option value="Fogás">Fogás</option>
                    <option value="Multimarcas">Revenda Multimarcas</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="size-4 text-emerald-200" />
                  LIBERAR ACESSO DE 7 DIAS GRÁTIS
                  <ArrowRight className="size-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="size-4 text-emerald-600" />
                Sem cartão de crédito • Acesso em nuvem seguro
              </div>
            </form>
          </div>
        ) : (
          /* Sucesso */
          <div className="text-center py-4 space-y-4 animate-fade-in">
            <div className="size-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-2xl font-bold">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#0d1b2e]">
                Tudo pronto, {nome.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Seu acesso para a revenda <strong>{revenda || 'de Gás'}</strong> foi preparado.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-700">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Ambiente de demonstração disponível</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-blue-700">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Aplicativo do Entregador com rotas ativo</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-amber-700">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Cardápio digital próprio configurado para {bandeira}</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleGoToSystem}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>ACESSAR O SISTEMA LMA GÁS</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="size-4 text-emerald-600" />
                Falar com consultor no WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};