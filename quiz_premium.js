document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("take-premium");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const answers = [];
    for (let i = 0; i < 30; i++) {
      const selected = document.querySelector(`button[data-q="p${i}"].selected`);
      if (!selected) {
        alert("Responda todas as 30 perguntas para gerar seu relatório completo.");
        return;
      }
      answers.push(selected.dataset.val);
    }

    const score = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(a => score[a]++);

    const sorted = Object.keys(score).sort((a, b) => score[b] - score[a]);
    const primaryKey = sorted[0];
    const secondaryKey = sorted[1];

    const profiles = {
      A: {
        label: "Analítico",
        traits: ["Lógico", "Estratégico", "Observador profundo", "Busca entendimento"],
        risks: ["Paralisia por análise", "Dificuldade com decisões rápidas"]
      },
      B: {
        label: "Dominante",
        traits: ["Decisivo", "Orientado a resultados", "Alta liderança", "Ação imediata"],
        risks: ["Impaciência", "Pode soar autoritário"]
      },
      C: {
        label: "Estável",
        traits: ["Leal", "Calmo", "Empático", "Confiável"],
        risks: ["Evita conflitos", "Resistência a mudanças"]
      },
      D: {
        label: "Influente",
        traits: ["Carismático", "Inspirador", "Comunicativo", "Criativo"],
        risks: ["Dispersão", "Foco inconsistente"]
      }
    };

    const primary = profiles[primaryKey];
    const secondary = profiles[secondaryKey];

    const container = document.getElementById("premium-report");
    container.innerHTML = `
      <h2>🔍 Relatório Premium MindKey</h2>

      <div class="premium-block">
        <span class="badge">Perfil Predominante</span>
        <h3>${primary.label}</h3>
        <ul class="premium-list">
          ${primary.traits.map(t => `<li>• ${t}</li>`).join("")}
        </ul>
      </div>

      <div class="premium-block">
        <span class="badge">Perfil Secundário</span>
        <h3>${secondary.label}</h3>
        <ul class="premium-list">
          ${secondary.traits.map(t => `<li>• ${t}</li>`).join("")}
        </ul>
      </div>

      <div class="premium-block">
        <span class="badge">Pontos de Atenção</span>
        <ul class="premium-list">
          ${primary.risks.map(r => `<li>⚠ ${r}</li>`).join("")}
        </ul>
      </div>

      <div class="premium-block">
        <span class="badge">Distribuição Comportamental</span>
        ${Object.keys(score).map(k => `
          <div>
            ${profiles[k].label}
            <div class="progress-bar">
              <div class="progress-fill" style="width:${(score[k]/30)*100}%"></div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="premium-block">
        <span class="badge">Prompt Personalizado para IA</span>
        <pre>
You are an assistant helping a person with this behavioral profile:

Primary profile: ${primary.label}
Secondary profile: ${secondary.label}

Key traits: ${primary.traits.join(", ")}

Communication rules:
- Seja direto
- Evite rodeios
- Traga ações práticas
- Considere meu estilo comportamental ao responder

When I describe a situation, give:
1) What is happening emotionally
2) What the other person likely wants
3) What I should say (exact phrase)
4) My best next action
        </pre>
      </div>

      <a href="quiz_free.html" class="secondary">← Voltar ao teste gratuito</a>
    `;

    container.scrollIntoView({ behavior: "smooth" });
  });
});
