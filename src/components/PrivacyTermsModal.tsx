import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-3">
          <Shield className="size-5" />
          <span>{type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}</span>
        </div>

        <h3 className="text-xl font-bold text-[#0d1b2e] mb-4">
          {type === 'privacy' ? 'Política de Privacidade • LMA Gás' : 'Termos de Uso • LMA Gás'}
        </h3>

        {type === 'privacy' ? (
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              O <strong>LMA Gás</strong> valoriza e respeita a privacidade de seus usuários e clientes. Esta política descreve como as informações coletadas durante o uso da plataforma são tratadas.
            </p>
            <h4 className="font-bold text-slate-800">1. Coleta de Informações</h4>
            <p>
              Coletamos apenas as informações necessárias para a criação de conta e operação da revenda de gás, tais como nome, telefone/WhatsApp, nome do estabelecimento e dados operacionais de pedidos inseridos pelo próprio usuário.
            </p>
            <h4 className="font-bold text-slate-800">2. Uso dos Dados</h4>
            <p>
              Os dados são utilizados exclusivamente para permitir a utilização do sistema, controle de vendas, entregas, estoque e suporte técnico. Não comercializamos nem compartilhamos dados com terceiros para fins publicitários.
            </p>
            <h4 className="font-bold text-slate-800">3. Segurança</h4>
            <p>
              Adotamos medidas técnicas adequadas e padrões de mercado em servidores em nuvem seguros para proteger os dados contra acessos não autorizados.
            </p>
            <h4 className="font-bold text-slate-800">4. Seus Direitos</h4>
            <p>
              O titular dos dados pode a qualquer momento solicitar a atualização, correção ou exclusão de suas informações através de nossos canais de atendimento.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Estes Termos de Uso regulam o acesso e utilização da plataforma <strong>LMA Gás</strong> para gestão de revendas de gás e água.
            </p>
            <h4 className="font-bold text-slate-800">1. Período de Teste Gratuito</h4>
            <p>
              O usuário tem direito a 7 (sete) dias de teste gratuito sem necessidade de informar cartão de crédito, com acesso às funcionalidades contratadas no plano de teste.
            </p>
            <h4 className="font-bold text-slate-800">2. Assinatura e Cancelamento</h4>
            <p>
              Os planos do LMA Gás operam em regime de assinatura mensal, sem fidelidade obrigatória. O cancelamento pode ser solicitado a qualquer momento sem incidência de multas rescisórias.
            </p>
            <h4 className="font-bold text-slate-800">3. Responsabilidades</h4>
            <p>
              O usuário é responsável pela veracidade dos dados inseridos e pela correta utilização das credenciais de acesso de sua equipe.
            </p>
            <h4 className="font-bold text-slate-800">4. Suporte</h4>
            <p>
              O suporte técnico é prestado em língua portuguesa através dos canais oficiais informados na plataforma durante o horário comercial.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};