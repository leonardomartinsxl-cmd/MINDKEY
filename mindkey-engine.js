// =============================
// MINDKEY ENGINE — VERSÃO FINAL
// =============================
// Arquivo independente
// Pode ser substituído inteiro
// Não altera HTML existente

// ---------- ESTADO GLOBAL ----------
const MindKey = {
  eixos: {
    eixo1: {
      id: "apego_medo_perda",
      nome: "Apego & Medo de Perda",
      pontuacao: 0,
      max: 60
    },
    eixo2: {
      id: "controle_autoprotecao",
      nome: "Controle & Autoproteção",
      pontuacao: 0,
      max: 60
    },
    eixo3: {
      id: "identidade_regulacao",
      nome: "Identidade & Regulação Emocional",
      pontuacao: 0,
      max: 60
    }
  },

  marcadores: {
    incoerencia_eixo1: false,
    incoerencia_eixo2: false,
    incoerencia_eixo3: false
  }
};

// ---------- FUNÇÕES DE PONTUAÇÃO ----------
function responderPergunta(eixo, pontos) {
  if (!MindKey.eixos[eixo]) return;
  MindKey.eixos[eixo].pontuacao += pontos;
}

// ---------- PERGUNTAS-ESPELHO ----------
function avaliarEspelho(eixo, respostaA, respostaB) {
  if (respostaA !== respostaB) {
    MindKey.marcadores[`incoerencia_${eixo}`] = true;
  }
}

// ---------- NORMALIZAÇÃO ----------
function calcularPercentual(eixo) {
  const e = MindKey.eixos[eixo];
  if (!e) return 0;
  return Math.round((e.pontuacao / e.max) * 100);
}

// ---------- ORDENAÇÃO ----------
function eixosOrdenados() {
  return Object.entries(MindKey.eixos)
    .map(([key, eixo]) => ({
      key,
      nome: eixo.nome,
      percentual: calcularPercentual(key)
    }))
    .sort((a, b) => b.percentual - a.percentual);
}

// ---------- COMBINAÇÃO ----------
function combinacaoAtiva() {
  const ordenados = eixosOrdenados();
  if (!ordenados[0] || !ordenados[1]) return null;
  return `${ordenados[0].key}_${ordenados[1].key}`;
}

// ---------- LEITURAS ----------
const leituras = {
  eixo1(percentual) {
    if (percentual < 35) {
      return `
Você tende a lidar com vínculos de forma relativamente segura.
A possibilidade de perda ou afastamento não domina suas decisões.

Você sente, se importa, mas consegue sustentar a incerteza
sem entrar em estado de alerta constante.

Seu afeto não nasce do medo.
Ele nasce da presença.
      `;
    }

    if (percentual < 70) {
      return `
Você cria vínculos verdadeiros, mas sua mente entra em alerta
quando a estabilidade emocional parece ameaçada.

A incerteza ativa pensamentos, leituras de sinais
e uma necessidade silenciosa de confirmação.

Você não ama em excesso.
Você ama tentando não perder.

O custo disso é uma tensão interna constante
que pode transformar conexão em esforço.
      `;
    }

    return `
No fundo, seu maior medo não é amar —
é não ser escolhido.

Quando surge distância, silêncio ou mudança,
seu sistema emocional entra em urgência.
Você pensa, sente e age tentando garantir o vínculo.

Isso não é carência.
É medo operando em silêncio.

O custo oculto é alto:
exaustão emocional,
perda de espontaneidade
e relações marcadas mais por tensão do que por presença.
    `;
  },

  eixo2: `
Você tende a se proteger emocionalmente para não perder autonomia.
O vínculo é vivido com cautela, controle e racionalização.

Isso reduz conflitos, mas também pode limitar intimidade real.
  `,

  eixo3: `
Você vive emoções com intensidade e sensibilidade.
O desafio não é sentir demais, mas regular sem se perder.
  `,

  combinacoes: {
    eixo1_eixo2: `
Você vive o paradoxo entre querer proximidade
e precisar se proteger para não perder controle.
    `,
    eixo1_eixo3: `
Você sente profundamente, mas oscila entre entrega e medo.
    `,
    eixo2_eixo3: `
Você controla emoções intensas para não ser dominado por elas.
    `
  }
};

// ---------- GERADOR DE RELATÓRIO ----------
function gerarRelatorioFinal() {
  const ordenados = eixosOrdenados();
  const combinacao = combinacaoAtiva();

  const eixoPrincipal = ordenados[0];
  const eixoSecundario = ordenados[1];

  return {
    abertura:
      "Este relatório não define quem você é. Ele revela padrões que se ativam sob vínculo e pressão.",

    eixoPrincipal: {
      nome: eixoPrincipal.nome,
      percentual: eixoPrincipal.percentual,
      leitura:
        typeof leituras[eixoPrincipal.key] === "function"
          ? leituras[eixoPrincipal.key](eixoPrincipal.percentual)
          : leituras[eixoPrincipal.key]
    },

    eixoSecundario: {
      nome: eixoSecundario.nome,
      percentual: eixoSecundario.percentual,
      leitura:
        typeof leituras[eixoSecundario.key] === "function"
          ? leituras[eixoSecundario.key](eixoSecundario.percentual)
          : leituras[eixoSecundario.key]
    },

    leituraCombinada: combinacao
      ? leituras.combinacoes[combinacao]
      : null,

    marcadores: MindKey.marcadores,

    encerramento:
      "Consciência cria espaço. Espaço cria escolha."
  };
}

// ---------- RESET ----------
function resetMindKey() {
  Object.keys(MindKey.eixos).forEach(e => {
    MindKey.eixos[e].pontuacao = 0;
  });

  Object.keys(MindKey.marcadores).forEach(m => {
    MindKey.marcadores[m] = false;
  });
}

// =============================
// FIM DO MINDKEY ENGINE
// =============================
