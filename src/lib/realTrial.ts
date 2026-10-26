// Integração pública do cadastro de Teste Grátis de 7 dias do LMA Gás (gas.lmaapp.com.br)
const SUPABASE_URL = "https://bvijihrulhxagnvqudaw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aWppaHJ1bGh4YWdudnF1ZGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MjYwOTgsImV4cCI6MjA5NzUwMjA5OH0.1XVsA684DU4j8sZ1Ajr7yd1i7SU0mxQeTbC5z9WQIp0";

export interface RealTrialInput {
  nomeUsuario: string;
  nomeEmpresa: string;
  email: string;
  senha: string;
  telefone?: string;
  cidade?: string;
  bandeira?: string;
}

export interface RealTrialResult {
  ok: boolean;
  erro?: string;
  slug?: string;
  tenantId?: string;
}

export async function criarContaTesteReal(input: RealTrialInput): Promise<RealTrialResult> {
  try {
    // 1. Cria o usuário no Supabase Auth (autoconfirm ativo)
    const signUpRes = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        email: input.email.trim(),
        password: input.senha,
        data: {
          nome: input.nomeUsuario.trim(),
          empresa: input.nomeEmpresa.trim(),
        },
      }),
    });

    const signUpData = await signUpRes.json();
    if (!signUpRes.ok) {
      const msg =
        signUpData?.msg ||
        signUpData?.error_description ||
        signUpData?.message ||
        "Não foi possível criar a conta. Verifique se este e-mail já está cadastrado.";
      if (msg.toLowerCase().includes("already registered")) {
        return { ok: false, erro: "Este e-mail já possui cadastro no LMA Gás. Clique em 'Acessar o Sistema' para fazer login." };
      }
      return { ok: false, erro: msg };
    }

    const userId = signUpData?.user?.id || signUpData?.id;
    const accessToken = signUpData?.access_token || SUPABASE_ANON_KEY;

    if (!userId) {
      return { ok: false, erro: "Não foi possível obter a identificação do usuário." };
    }

    // 2. Chama a função RPC oficial registrar_tenant (cria tenant com 7 dias de teste + vínculo admin)
    const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/registrar_tenant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        p_nome_empresa: input.nomeEmpresa.trim() || "Minha Revenda de Gás",
        p_nome_usuario: input.nomeUsuario.trim(),
        p_user_id: userId,
      }),
    });

    const rpcData = await rpcRes.json().catch(() => ({}));
    if (!rpcRes.ok) {
      return {
        ok: false,
        erro: rpcData?.message || "Conta criada, mas houve um erro ao configurar a revenda.",
      };
    }

    // 3. Atualiza telefone/email do tenant e cadastra produtos iniciais de exemplo se houver sessão ativa
    if (signUpData?.access_token && rpcData?.tenant_id) {
      const authHeaders = {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${signUpData.access_token}`,
        Prefer: "return=minimal",
      };

      if (input.telefone) {
        await fetch(`${SUPABASE_URL}/rest/v1/gas_tenants?id=eq.${rpcData.tenant_id}`, {
          method: "PATCH",
          headers: authHeaders,
          body: JSON.stringify({
            telefone: input.telefone.trim(),
            email: input.email.trim(),
          }),
        }).catch(() => null);
      }
    }

    return {
      ok: true,
      slug: rpcData?.slug,
      tenantId: rpcData?.tenant_id,
    };
  } catch (err: any) {
    return {
      ok: false,
      erro: err?.message || "Erro de conexão ao criar conta de teste.",
    };
  }
}
