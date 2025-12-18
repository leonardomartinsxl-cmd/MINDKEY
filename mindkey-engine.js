const MindKey = {

  eixos: {
    emocional: {
      nome: "Emocional",
      leitura: `
Você reage com intensidade emocional.
Sentimentos tendem a surgir antes da análise racional.
Isso traz profundidade, mas pode gerar sobrecarga interna
quando não há espaço para processamento consciente.
      `
    },
    racional: {
      nome: "Racional",
      leitura: `
Você tenta entender antes de sentir.
A mente busca controle e clareza como forma de segurança.
Isso reduz erros, mas pode afastar você da experiência emocional direta.
      `
    },
    acao: {
      nome: "Ação",
      leitura: `
Existe impulso para movimento e decisão.
Você prefere agir a permanecer parado.
Quando equilibrado, gera progresso; em excesso, gera desgaste.
      `
    },
    cautela: {
      nome: "Cautela",
      leitura: `
Você observa antes de agir.
O cuidado evita riscos desnecessários,
mas pode atrasar escolhas importantes.
      `
    }
  }

};

/* =========================
   DADOS SIMULADOS DO QUIZ
   (aqui depois entra localStorage ou backend)
========================= */

function obterProfileUsuario() {
  return {
    emocional: 9,
    racional: 6,
    acao: 8,
    cautela: 4,
    apego: 7,
    autonomia: 6,
    defesa: 7,
    consciencia: 6
  };
}

/* =========================
   CÁLCULOS
========================= */

function calcularPercentual(eixo) {
  const profile = obterProfileUsuario();
  const max = Math.max(
    profile.emocional,
    profile.racional,
    profile.acao,
    profile.cautela
  );
  return Math.round((profile[eixo] / max) * 100);
}

function detectarEixosDominantes() {
  const profile = obterProfileUsuario();
  const eixosBase = ["emocional", "racional", "acao", "cautela"];

  const ordenados = eixosBase
    .map(e => ({
      key: e,
      valor: profile[e],
      percentual: calcularPercentual(e)
    }))
    .sort((a, b) => b.valor - a.valor);

  return ordenados;
}

/* =========================
   CONFLITOS / MARCADORES
========================= */

function detectarMarcadores(profile) {
  return {
    conflitoEmocaoRazao: profile.emocional > 7 && profile.racional > 7,
    impulsoComDefesa: profile.acao > 7 && profile.defesa > 7,
    apegoVsAutonomia: profile.apego > 7 && profile.autonomia > 7,
    conscienciaComDefesa: profile.consciencia > 7 && profile.defesa > 7
  };
}

/* =========================
   LEITURA COMBINADA
========================= */

function gerarLeituraCombinada(principal, secundario) {
  if (!principal || !secundario) return null;

  return `
Quando ${principal.nome} assume o controle
e ${secundario.nome} entra como apoio,
surge um padrão interno específico:
você reage primeiro, entende depois
e só então tenta ajustar o impacto emocional.

Esse ciclo explica por que algumas situações
se repetem mesmo quando você já as compreendeu racionalmente.
  `;
}

/* =========================
   RELATÓRIO FINAL
========================= */

function gerarRelatorioFinal() {
  const profile = obterProfileUsuario();
  const eixosOrdenados = detectarEixosDominantes();

  const eixoPrincipal = {
    ...MindKey.eixos[eixosOrdenados[0].key],
    percentual: eixosOrdenados[0].percentual
  };

  const eixoSecundario = {
    ...MindKey.eixos[eixosOrdenados[1].key],
    percentual: eixosOrdenados[1].percentual
  };

  return {
    eixoPrincipal,
    eixoSecundario,
    leituraCombinada: gerarLeituraCombinada(eixoPrincipal, eixoSecundario),
    marcadores: detectarMarcadores(profile)
  };
}
