function getPremiumReport(profileKey) {
  const reports = {

    A: {
      title: "🧠 Perfil Analítico — O Estrategista",
      essence: "Você enxerga padrões onde outros veem caos. Sua mente busca lógica, coerência e profundidade antes de qualquer ação.",
      strengths: [
        "Pensamento crítico elevado",
        "Alta capacidade de análise",
        "Decisões bem fundamentadas"
      ],
      risks: [
        "Excesso de análise antes de agir",
        "Autocrítica intensa",
        "Dificuldade com improviso"
      ],
      work: "Ambientes estruturados, com clareza de critérios e autonomia intelectual, potencializam seu desempenho.",
      relationships: "Você demonstra cuidado por consistência e lealdade. Prefere profundidade à intensidade.",
      direction: [
        "Ação também gera clareza",
        "Nem tudo precisa estar perfeito para começar",
        "Confie mais no processo"
      ]
    },

    B: {
      title: "🔥 Perfil Executivo — O Executor",
      essence: "Você foi feito para decidir rápido, agir com firmeza e avançar. Ambiguidade e lentidão drenam sua energia.",
      strengths: [
        "Decisão rápida",
        "Alta tolerância à pressão",
        "Foco extremo em resultado"
      ],
      risks: [
        "Impaciência com pessoas",
        "Comunicação excessivamente direta",
        "Ignorar sinais emocionais"
      ],
      work: "Você precisa de desafios, metas claras e liberdade para agir sem microgestão.",
      relationships: "Demonstra afeto por ação e proteção. Pode parecer frio quando está focado.",
      direction: [
        "Explique seu ritmo às pessoas",
        "Escutar acelera mais do que impor",
        "Nem todo atraso é incompetência"
      ]
    },

    C: {
      title: "🌱 Perfil Estável — O Sustentador",
      essence: "Você busca harmonia, segurança e vínculos verdadeiros. Valoriza constância mais do que impacto imediato.",
      strengths: [
        "Lealdade profunda",
        "Escuta ativa",
        "Estabilidade emocional"
      ],
      risks: [
        "Evitar conflitos necessários",
        "Colocar os outros antes de si",
        "Resistência a mudanças"
      ],
      work: "Ambientes colaborativos e previsíveis fazem você entregar seu melhor.",
      relationships: "Você ama com constância e presença. Rupturas te afetam profundamente.",
      direction: [
        "Conflito não é rejeição",
        "Dizer não também é autocuidado",
        "Mudança pode ser proteção"
      ]
    },

    D: {
      title: "✨ Perfil Influente — O Conector",
      essence: "Você vive da troca de ideias, pessoas e energia. Seu brilho surge quando está sendo visto e ouvido.",
      strengths: [
        "Comunicação natural",
        "Criatividade elevada",
        "Capacidade de inspirar"
      ],
      risks: [
        "Dispersão",
        "Dificuldade em finalizar",
        "Busca excessiva por validação"
      ],
      work: "Ambientes criativos, dinâmicos e sociais potencializam sua performance.",
      relationships: "Você se conecta rápido e intensamente, mas sente quando não é reconhecido.",
      direction: [
        "Constância cria autoridade",
        "Menos promessas, mais entregas",
        "Valide-se antes de buscar aplauso"
      ]
    }
  };

  return reports[profileKey];
}

function renderPremiumReport(profileKey) {
  const data = getPremiumReport(profileKey);
  if (!data) return;

  document.getElementById("premium-report").innerHTML = `
    <h2>${data.title}</h2>

    <details open>
      <summary>🧠 Essência</summary>
      <p>${data.essence}</p>
    </details>

    <details>
      <summary>💪 Forças</summary>
      <ul>${data.strengths.map(i => `<li>${i}</li>`).join("")}</ul>
    </details>

    <details>
      <summary>⚠️ Pontos de Atenção</summary>
      <ul>${data.risks.map(i => `<li>${i}</li>`).join("")}</ul>
    </details>

    <details>
      <summary>💼 Trabalho</summary>
      <p>${data.work}</p>
    </details>

    <details>
      <summary>❤️ Relacionamentos</summary>
      <p>${data.relationships}</p>
    </details>

    <details>
      <summary>🧭 Direção Prática</summary>
      <ul>${data.direction.map(i => `<li>${i}</li>`).join("")}</ul>
    </details>
  `;
}
