// ===============================
// MindKey — Quiz Premium
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("take-premium");
  const container = document.getElementById("premium-report");

  if (!btn || !container) return;

  btn.addEventListener("click", () => {

    // 🔹 Coleta respostas
    const answers = [];
    document.querySelectorAll(".opt.selected").forEach(o => {
      answers.push(o.dataset.val);
    });

    if (answers.length < 30) {
      alert("Responda todas as 30 perguntas.");
      return;
    }

    // 🔹 Contagem DISC
    const score = { A:0, B:0, C:0, D:0 };
    answers.forEach(a => score[a]++);

    const order = Object.keys(score).sort((a,b)=>score[b]-score[a]);
    const primary = order[0];
    const secondary = order[1];

    // 🔹 Gera relatório
    container.innerHTML = generatePremiumReport(primary, secondary, score);
    container.scrollIntoView({ behavior: "smooth" });
  });
});

// ===============================
// RELATÓRIO PREMIUM
// ===============================

function generatePremiumReport(primary, secondary, score) {

  const profiles = {
    A: {
      name: "Analítico",
      traits: "Lógico, estratégico, observador, profundo",
      risks: "Paralisia por análise, frieza emocional",
      love: "Demonstra amor com ações e constância",
      work: "Excelência técnica e visão sistêmica"
    },
    B: {
      name: "Dominante",
      traits: "Direto, rápido, líder nato, decidido",
      risks: "Impulsividade, impaciência",
      love: "Protege e toma iniciativa",
      work: "Entrega resultado e assume comando"
    },
    C: {
      name: "Estável",
      traits: "Leal, calmo, confiável, empático",
      risks: "Evita conflitos, se anula",
      love: "Busca segurança e vínculo profundo",
      work: "Base sólida de qualquer equipe"
    },
    D: {
      name: "Influente",
      traits: "Comunicador, carismático, inspirador",
      risks: "Dispersão, excesso emocional",
      love: "Afeto verbal e entusiasmo",
      work: "Conecta pessoas e ideias"
    }
  };

  const p = profiles[primary];
  const s = profiles[secondary];

  return `
    <h2>🧠 Relatório Premium MindKey</h2>

    <details open>
      <summary>🔹 Perfil Principal — ${p.name}</summary>
      <p><strong>Características:</strong> ${p.traits}</p>
      <p><strong>Pontos de atenção:</strong> ${p.risks}</p>
    </details>

    <details>
      <summary>🔸 Perfil Secundário — ${s.name}</summary>
      <p><strong>Como complementa:</strong> ${s.traits}</p>
    </details>

    <details>
      <summary>❤️ Comportamento Afetivo</summary>
      <p>${p.love}</p>
    </details>

    <details>
      <summary>💼 Comportamento Profissional</summary>
      <p>${p.work}</p>
    </details>

    <details>
      <summary>📊 Distribuição DISC</summary>
      <p>A: ${score.A} | B: ${score.B} | C: ${score.C} | D: ${score.D}</p>
    </details>

    <details>
      <summary>🤖 Prompt Personalizado para IA</summary>
      <pre>
Sou do perfil ${p.name} com secundário ${s.name}.
Adapte suas respostas para ser claro, estratégico e direto.
Quando eu descrever uma situação:
1) Identifique emoções ocultas
2) Explique a dinâmica social
3) Sugira a melhor resposta prática
      </pre>
    </details>
  `;
}
