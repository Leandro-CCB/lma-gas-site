import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Store,
  User,
  Phone,
  MapPin,
  Mail,
  Lock,
  ExternalLink,
  AlertCircle,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/content';
import { criarContaTesteReal } from '../lib/realTrial';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [brand, setBrand] = useState('Ultragaz');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [createdSlug, setCreatedSlug] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (password.length < 6) {
      setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);
    const res = await criarContaTesteReal({
      nomeUsuario: name,
      nomeEmpresa: storeName,
      email,
      senha: password,
      telefone: phone,
      cidade: city,
      bandeira: brand,
    });
    setLoading(false);

    if (!res.ok) {
      setErrorMsg(res.erro || 'Não foi possível criar sua conta agora.');
      return;
    }

    setCreatedSlug(res.slug || '');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappSupportUrl = () => {
    const msg =
      `Olá! Acabei de ativar meu teste grátis de 7 dias no *LMA Gás*!\n\n` +
      `*Responsável:* ${name}\n` +
      `*Revenda:* ${storeName} (${brand})\n` +
      `*Cidade:* ${city}\n` +
      `*E-mail de acesso:* ${email}\n` +
      `*WhatsApp:* ${phone}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
              <Sparkles className="size-3.5 text-emerald-600" />
              <span>Ativação Real Imediata • 7 Dias Grátis • Sem Cartão</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0d1b2e] tracking-tight">
              Crie sua Conta Real no <span className="text-emerald-600">LMA GÁS</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Seu ambiente exclusivo é liberado na hora com <strong>7 dias de teste grátis</strong> no sistema oficial (<strong>gas.lmaapp.com.br</strong>).
            </p>

            {errorMsg && (
              <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700 font-semibold">
                <AlertCircle className="size-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Roberto Almeida"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nome da Revenda / Depósito *
                  </label>
                  <div className="relative">
                    <Store className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      placeholder="Ex: Depósito Central Gás"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Cidade / UF *
                  </label>
                  <div className="relative">
                    <MapPin className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Campinas - SP"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Bandeira Principal
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  >
                    <option value="Ultragaz">Ultragaz</option>
                    <option value="Liquigás">Liquigás</option>
                    <option value="Supergasbras">Supergasbras</option>
                    <option value="Nacional Gás">Nacional Gás</option>
                    <option value="Copa Energia">Copa Energia</option>
                    <option value="Consigaz">Consigaz</option>
                    <option value="Multimarcas / Outra">Multimarcas</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-2.5">
                  Credenciais de Acesso ao Sistema (gas.lmaapp.com.br)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Seu E-mail de Login *
                    </label>
                    <div className="relative">
                      <Mail className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Crie uma Senha (mín. 6 dígitos) *
                    </label>
                    <div className="relative">
                      <Lock className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mínimo 6 caracteres"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Criando sua revenda no LMA Gás...</span>
                  </>
                ) : (
                  <>
                    <span>Criar Conta Grátis — Liberar 7 Dias Agora</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                <span>Ativação automática no servidor oficial • Sem cartão de crédito</span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-4 text-center space-y-4">
            <div className="size-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
              <CheckCircle2 className="size-9" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Revenda Criada com Sucesso!
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#0d1b2e]">
                Seus 7 Dias Grátis já estão ativos!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                A revenda <strong>{storeName}</strong> já está configurada no servidor oficial do <strong>LMA Gás</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 max-w-md mx-auto">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Seus Dados de Acesso Oficial:
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Painel do Sistema:</span>
                <a
                  href="https://gas.lmaapp.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  gas.lmaapp.com.br <ExternalLink className="size-3" />
                </a>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">E-mail de Login:</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-bold text-slate-900 flex items-center gap-1 hover:text-emerald-700 cursor-pointer"
                >
                  <span>{email}</span>
                  {copiedEmail ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5 text-slate-400" />}
                </button>
              </div>
              {createdSlug && (
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/70">
                  <span className="text-slate-500">Código da Revenda:</span>
                  <span className="font-mono font-semibold text-slate-700">{createdSlug}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
              <a
                href="https://gas.lmaapp.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <span>Entrar no LMA Gás Agora</span>
                <ExternalLink className="size-4" />
              </a>
              <a
                href={whatsappSupportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Suporte no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
