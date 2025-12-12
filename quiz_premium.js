// ===============================
// MINDKEY — QUIZ PREMIUM
// ===============================

// ---------- PERGUNTAS ----------
const premiumQuestions = [
  "Costumo tomar decisões rapidamente",
  "Gosto de liderar pessoas ou projetos",
  "Me sinto desconfortável com lentidão",
  "Prefiro ação a planejamento excessivo",
  "Sou direto, mesmo que pareça duro",
  "Gosto de desafios difíceis",
  "Me adapto rápido a mudanças",
  "Confio mais em mim do que nos outros",
  "Resultados são mais importantes que processos",
  "Gosto de ter controle da situação"
];

// ---------- RENDER ----------
const container = document.getElementById("premium-questions");

premiumQuestions.forEach((text, index) => {
  const div = document.createElement("div");
  div.className = "question";

  div.innerHTML = `
    <p><strong>${index + 1}.</strong> ${text}</p>
    <div class="options">
      <button data-q="${index}" data-v="A">Discordo</button>
      <button data-q="${index}" data-v="B">Concordo</button>
      <button data-q="${index}" data-v="C">Depende</button>
      <button data-q="${index}" data-v="D">Totalmente</button>
    </div>
  `;

  container.appendChild(div);
});

// ---------- SELEÇÃO ----------
document.addEventListener("click", (e) => {
  if (!e.target.matches(".options button")) return;

  const q = e.target.dataset.q;
  document
    .querySelectorAll(`button[data-q="${q}"]`)
    .forEach(b => b.classList.remove("selected"));

  e.target.classList.add("selected");
});

// ---------- GERAR RELATÓRIO ----------
document.getElementById("take-premium").addEventListener("click", () => {
  const answers = document.querySelectorAll(".options button.selected");

  if (answers.length < premiumQuestions.length) {
    alert("Responda todas as perguntas.");
    return;
  }

  const score = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => score[a.dataset.v]++);

  const container = document.getElementById("premium-report");

  container.innerHTML = `
    <h2>Relatório Premium</h2>
    <p><strong>Distribuição:</strong></p>
    <ul>
      <li>Dominância (B): ${score.B}</li>
      <li>Influência (D): ${score.D}</li>
      <li>Estabilidade (C): ${score.C}</li>
      <li>Conformidade (A): ${score.A}</li>
    </ul>

    <p>
      Este relatório indica tendências comportamentais profundas,
      prontas para uso estratégico em decisões, comunicação e liderança.
    </p>
  `;

  container.scrollIntoView({ behavior: "smooth" });
});
