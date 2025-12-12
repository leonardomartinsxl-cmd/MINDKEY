// ===============================
// MindKey — QUIZ PREMIUM (FINAL FUNCIONAL)
// ===============================

const btn = document.getElementById("take-premium");

// ---------- PERFIS ----------
const profiles = {
  A: {
    label: "Analítico",
    traits: ["Lógico", "Estratégico", "Observador", "Detalhista"],
    risks: ["Excesso de cautela", "Demora para decidir"]
  },
  B: {
    label: "Dominante",
    traits: ["Decisivo", "Objetivo", "Focado em resultados", "Líder natural"],
    risks: ["Impaciência", "Pode soar autoritário"]
  },
  C: {
    label: "Estável",
    traits: ["Confiável", "Calmo", "Leal", "Consistente"],
    risks: ["Resistência a mudanças", "Evita conflitos"]
  },
  D: {
    label: "Influente",
    traits: ["Comunicativo", "Inspirador", "Criativo", "Persuasivo"],
    risks: ["Desorganização", "Perda de foco"]
  }
};

// ---------- AÇÃO ----------
btn.addEventListener("click", () => {

  const answers = document.querySelectorAll(".options button.selected");

  if (answers.length < 10) {
    alert("Responda todas as perguntas.");
    return;
  }

  // ---------- SCORE ----------
  const score = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => score[a.dataset.v]++);

  const sorted = Object.keys(score).sort((a, b) => score[b] - score[a]);
  const primary = profiles[sorted[0]];
  const secondary = profiles[sorted[1]];

  // ---------- RELATÓRIO ----------
  const container = document.getElementById("premium-report");

  container.innerHTML = `
    <h2>🔍 Relatório Premium MindKey</h2>

    <details open>
      <summary><strong>Perfil Predominante</strong></summary>
      <p><strong>${primary.label}</strong></p>
      <ul>
        ${primary.traits.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </details>

    <details>
      <summary><strong>Perfil Secundário</strong></summary>
      <p><strong>${secondary.label}</strong></p>
      <ul>
        ${secondary.traits.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </details>

    <details>
      <summary><strong>⚠️ Pontos de Atenção</strong></summary>
      <ul>
        ${primary.risks.map(r => `<li>${r}</li>`).join("")}
      </ul>
    </details>

    <details>
      <summary><strong>📊 Distribuição Comportamental</strong></summary>
      <p>
        Analítico: ${score.A} •
        Dominante: ${score.B} •
        Estável: ${score.C} •
        Influente: ${score.D}
      </p>
    </details>

    <details open>
      <summary><strong>🤖 Prompt Personalizado para IA</strong></summary>
      <pre>
You are an assistant helping a person with the following behavioral profile:

Primary profile: ${primary.label}
Secondary profile: ${secondary.label}

Key traits:
${primary.traits.join(", ")}

Communication rules:
- Seja direto
- Seja estratégico
- Evite rodeios
- Priorize ação e clareza
      </pre>
    </details>
  `;

  container.scrollIntoView({ behavior: "smooth" });
});
