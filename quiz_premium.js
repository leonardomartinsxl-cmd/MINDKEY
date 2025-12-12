document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     1️⃣ PERGUNTAS PREMIUM (30)
  =============================== */
  const questions = [
    "Tomo decisões rapidamente",
    "Gosto de liderar grupos",
    "Me incomodo com lentidão",
    "Prefiro ação a discussão",
    "Assumo controle quando necessário",

    "Analiso profundamente antes de agir",
    "Gosto de entender o porquê das coisas",
    "Valorizo lógica e estrutura",
    "Sou crítico com informações rasas",
    "Aprendo observando",

    "Busco harmonia nos ambientes",
    "Evito conflitos diretos",
    "Sou leal às pessoas próximas",
    "Prefiro estabilidade",
    "Gosto de previsibilidade",

    "Me comunico com facilidade",
    "Gosto de ser notado",
    "Tenho energia social alta",
    "Inspiro pessoas",
    "Sou persuasivo",

    "Me adapto bem a mudanças",
    "Fico entediado com rotina",
    "Gosto de novidades",
    "Improviso com facilidade",
    "Tenho criatividade alta",

    "Sou consistente no que começo",
    "Cumpro o que prometo",
    "Tenho foco em longo prazo",
    "Me cobro bastante",
    "Busco evolução constante"
  ];

  const containerQuestions = document.getElementById("premium-questions");
  const btn = document.getElementById("take-premium");
  const containerReport = document.getElementById("premium-report");

  /* ===============================
     2️⃣ RENDERIZA AS 30 PERGUNTAS
  =============================== */
  questions.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "question-card";

    div.innerHTML = `
      <p><strong>${i + 1}.</strong> ${text}</p>
      <div class="options">
        <button data-q="${i}" data-v="A">Discordo</button>
        <button data-q="${i}" data-v="B">Concordo</button>
        <button data-q="${i}" data-v="C">Depende</button>
        <button data-q="${i}" data-v="D">Totalmente</button>
      </div>
    `;

    containerQuestions.appendChild(div);
  });

  document.querySelectorAll(".options button").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q;
      document
        .querySelectorAll(`button[data-q="${q}"]`)
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  /* ===============================
     3️⃣ PERFIS DISC
  =============================== */
  const profiles = {
    A: { label: "Analítico", weight: 1 },
    B: { label: "Dominante", weight: 2 },
    C: { label: "Estável", weight: 3 },
    D: { label: "Influente", weight: 4 }
  };

  /* ===============================
     4️⃣ GERAR RELATÓRIO
  =====================
