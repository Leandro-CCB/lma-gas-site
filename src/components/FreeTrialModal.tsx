import React, { useState } from 'react';
import { X, Sparkles, Flame, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
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

    // Disparar confetti de celebração
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // Ignorar se confetti falhar
    }

    setSubmitted(true);
  };

  const handleGoToSystem = () => {
    window.open('https://gas.lmaapp.com.br', '_blank');
    onClose();
  };

  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${nome}, da revenda ${revenda || 'de Gás'} em ${cidade || 'Brasil'}. Gostaria de iniciar meu teste gratuito de 7 dias do LMA Gás (Bandeira: ${bandeira})!`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-gas-950 border border-slate-700 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100">
        {/* Glow decorativo */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-flame-500/20 blur-[80px] pointer-events-none rounded-full" />

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-gas-900 text-slate-400 hover:text-white hover:bg-gas-800 transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header do Modal */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="size-10 rounded-xl bg-flame-500/20 border border-flame-500/30 flex items-center justify-center text-flame-400 font-bold">
                <Flame className="size-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-flame-400">
                  Acesso Imediato • 7 Dias Grátis
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Iniciar Demonstração do LMA GÁS
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6">
              Preencha abaixo para liberar seu teste gratuito sem pedir cartão de crédito.
            </p>

            {/* Formulário de Cadastro */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Seu Nome Completo: <span className="text-flame-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Roberto Antônio Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gas-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-flame-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Nome da Revenda:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Bertoni Gás Express"
                    value={revenda}
                    onChange={(e) => setRevenda(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gas-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-flame-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    WhatsApp: <span className="text-flame-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gas-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-flame-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Cidade / UF:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Franco da Rocha - SP"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gas-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-flame-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Bandeira Principal:
                  </label>
                  <select
                    value={bandeira}
                    onChange={(e) => setBandeira(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gas-900 border border-slate-700 text-white focus:outline-none focus:border-flame-500 transition-colors cursor-pointer"
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
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-flame-600 to-amber-600 hover:from-flame-500 hover:to-amber-500 text-white font-extrabold text-sm shadow-glow-orange cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="size-4 text-amber-200" />
                  LIBERAR MEU ACESSO DE 7 DIAS GRÁTIS
                  <ArrowRight className="size-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="size-4 text-emerald-400" />
                Seus dados estão 100% seguros • Sem letras miúdas
              </div>
            </form>
          </div>
        ) : (
          /* Tela de Sucesso */
          <div className="text-center py-4 space-y-5 animate-fade-in">
            <div className="size-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center text-3xl">
              🎉
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Parabéns, {nome.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Seu acesso para a revenda <strong>{revenda || 'de Gás'}</strong> foi pré-aprovado com sucesso!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gas-900 border border-slate-800 text-xs text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Ambiente de demonstração liberado na nuvem</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-cyan-400">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Aplicativo do Entregador habilitado</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-amber-400">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Cardápio Digital configurado para {bandeira}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleGoToSystem}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-flame-600 to-amber-600 text-white font-black text-sm shadow-glow-orange cursor-pointer hover:scale-102 transition-all flex items-center justify-center gap-2"
              >
                <span>🚀 ACESSAR O SISTEMA LMA GÁS AGORA</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 rounded-xl border border-emerald-500/60 bg-emerald-950/30 hover:bg-emerald-950/60 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="size-4 text-emerald-400" />
                Falar com a equipe no WhatsApp para ativar minha revenda
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};