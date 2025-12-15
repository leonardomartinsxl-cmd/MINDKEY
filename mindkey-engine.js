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

// ---------- LEITURAS (AJUSTADAS, MESMA ESTRUTURA) ----------
const leituras = {
  eixo1(percentual) {
    if (percentual < 35) {
      return `
Você tende a criar vínculos sem que o medo de perda dite suas ações.
A possibilidade de afastamento existe, mas não domina sua percepção.

Você sente, se importa e se envolve,
mas mantém estabilidade interna mesmo diante da incerteza.

Seu afeto nasce da presença,
não da urgência.
      `;
    }

    if (percentual < 70) {
      return `
Você cria vínculos verdadeiros, mas sua mente entra em alerta
quando a estabilidade emocional parece ameaçada.

A incerteza ativa leituras de sinais,
pensamentos recorrentes
e uma necessidade silenciosa de confirmação.

Você não ama em excesso.
Você ama tentando não perder.

O custo é uma tensão interna constante
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

  eixo2(percentual) {
    if (percentual < 35) {
      return `
Você se sente confortável em vínculos sem precisar
controlar pessoas, situações ou emoções.

A proximidade não é vivida como ameaça.
Você confia na troca
e não sente necessidade de manter vantagem emocional.

O vínculo é espaço, não risco.
      `;
    }

    if (percentual < 70) {
      return `
Você se envolve, mas mantém zonas de proteção emocional.
Quando percebe expectativas, cobrança ou dependência,
sua resposta interna é cautela.

Você racionaliza sentimentos,
controla o ritmo
e regula a proximidade para não se sentir invadido.

O controle aqui não é frieza.
É autoproteção.
      `;
    }

    return `
Para você, o amor ativa um risco central:
perder autonomia.

Quando o vínculo aprofunda,
surgem mecanismos de controle, distanciamento
ou contenção emocional.

Você sente — mas não confia no impacto disso.

O custo oculto é significativo:
dificuldade de intimidade real,
parceiros que sentem distância
e a sensação recorrente de estar
sozinho mesmo acompanhado.
      `;
  },

  eixo3(percentual) {
    if (percentual < 35) {
      return `
Você possui boa capacidade de regular emoções
mesmo em contextos intensos.

Suas reações tendem a ser proporcionais,
e sua identidade se mantém estável
mesmo sob pressão emocional.

Sentir não te desorganiza.
      `;
    }

    if (percentual < 70) {
      return `
Você sente com profundidade,
mas em momentos de tensão
pode oscilar entre controle e impulsividade.

Há consciência emocional,
mas nem sempre estabilidade.

O desafio aqui é sustentar equilíbrio
quando a intensidade aumenta.
      `;
    }

    return `
Suas emoções têm volume alto.
Quando envolvido, você pode se perder no vínculo
ou reagir de forma impulsiva para aliviar tensão interna.

O medo central não é o outro —
é perder a si mesmo.

O custo oculto são relações intensas,
instáveis
e ciclos de aproximação e afastamento.
      `;
  },

  combinacoes: {
    eixo1_eixo2: `
Você vive o conflito entre querer proximidade
e precisar se proteger para não perder controle.

Deseja vínculo,
mas teme o custo emocional dele.
    `,
    eixo1_eixo3: `
Você sente profundamente,
mas oscila entre entrega total
e medo de se perder no vínculo.
    `,
    eixo2_eixo3: `
Você tenta controlar emoções intensas
para não ser dominado por elas,
criando distância interna como defesa.
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
