// ===============================
// MindKey — QUIZ PREMIUM (FINAL)
// ===============================

// ---------- PERGUNTAS PREMIUM (30) ----------
const premiumQuestions = [
  { text: "Quando precisa tomar decisões importantes, você tende a:", opts: ["A - Analisar profundamente", "B - Decidir rápido", "C - Buscar apoio", "D - Seguir a intuição"] },
  { text: "Em situações de pressão, você normalmente:", opts: ["A - Se fecha para pensar", "B - Assume o controle", "C - Mantém equilíbrio", "D - Externaliza emoções"] },
  { text: "No ambiente profissional, você se destaca por:", opts: ["A - Inteligência estratégica", "B - Resultado", "C - Confiabilidade", "D - Comunicação"] },
  { text: "Quando alguém discorda de você:", opts: ["A - Argumenta com lógica", "B - Confronta", "C - Evita conflito", "D - Dialoga"] },
  { text: "Seu ritmo natural é:", opts: ["A - Calculado", "B - Acelerado", "C - Constante", "D - Variável"] },
  { text: "Em grupo, você costuma:", opts: ["A - Observar", "B - Liderar", "C - Apoiar", "D - Engajar"] },
  { text: "Quando algo foge do controle:", opts: ["A - Reanalisa tudo", "B - Age mais forte", "C - Busca estabilidade", "D - Expressa sentimentos"] },
  { text: "Você se sente mais motivado por:", opts: ["A - Clareza", "B - Desafio", "C - Segurança", "D - Reconhecimento"] },
  { text: "Seu maior ponto forte emocional é:", opts: ["A - Racionalidade", "B - Coragem", "C - Empatia", "D - Energia"] },
  { text: "Em decisões pessoais, você:", opts: ["A - Pensa muito", "B - Decide rápido", "C - Consulta pessoas", "D - Segue o coração"] },

  { text: "Quando precisa comunicar algo difícil:", opts: ["A - Organiza bem as palavras", "B - Vai direto", "C - Suaviza", "D - Se expressa bastante"] },
  { text: "Em mudanças inesperadas, você:", opts: ["A - Resiste no início", "B - Se adapta rápido", "C - Precisa de tempo", "D - Se empolga"] },
  { text: "Você prefere ambientes:", opts: ["A - Estruturados", "B - Competitivos", "C - Estáveis", "D - Criativos"] },
  { text: "Quando alguém erra:", opts: ["A - Analisa o motivo", "B - Corrige na hora", "C - Compreende", "D - Incentiva"] },
  { text: "Sua comunicação costuma ser:", opts: ["A - Técnica", "B - Objetiva", "C - Cuidadosa", "D - Envolvente"] },
  { text: "Quando precisa tomar liderança:", opts: ["A - Planeja", "B - Assume", "C - Apoia o grupo", "D - Motiva"] },
  { text: "Em conflitos emocionais, você:", opts: ["A - Se distancia", "B - Confronta", "C - Se cala", "D - Conversa"] },
  { text: "Seu maior medo é:", opts: ["A - Errar", "B - Perder controle", "C - Perder vínculos", "D - Não ser visto"] },
  { text: "Quando elogiado, você:", opts: ["A - Reflete", "B - Aceita e segue", "C - Fica constrangido", "D - Se anima"] },
  { text: "Você se sente mais produtivo quando:", opts: ["A - Tudo está claro", "B - Existe pressão", "C - Há harmonia", "D - Há estímulo"] },

  { text: "Quando falha, você tende a:", opts: ["A - Se cobrar muito", "B - Tentar de novo rápido", "C - Se abalar", "D - Desabafar"] },
  { text: "Sua tomada de decisão é mais:", opts: ["A - Mental", "B - Prática", "C - Relacional", "D - Emocional"] },
  { text: "Em relacionamentos, você valoriza:", opts: ["A - Coerência", "B - Ação", "C - Lealdade", "D - Conexão"] },
  { text: "Quando alguém demora a responder:", opts: ["A - Interpreta", "B - Cobra", "C - Espera", "D - Supõe"] },
  { text: "Seu maior diferencial é:", opts: ["A - Visão", "B - Execução", "C - Constância", "D - Comunicação"] },
  { text: "Você lida melhor com:", opts: ["A - Dados", "B - Desafios", "C - Pessoas", "D - Ideias"] },
  { text: "Quando algo dá certo, você:", opts: ["A - Analisa o porquê", "B - Parte para o próximo", "C - Comemora em silêncio", "D - Compartilha"] },
  { text: "Seu ritmo emocional é:", opts: ["A - Controlado", "B - Intenso", "C - Estável", "D - Oscilante"] },
  { text: "Em decisões rápidas, você:", opts: ["A - Trava", "B - Vai", "C - Hesita", "D - Sente"] },
  { text: "Você se sente mais respeitado quando:", opts: ["A - Reconhecem sua inteligência", "B - Confiam na sua liderança", "C - Valorizam sua presença", "D - Escutam sua voz"] }
];

// ---------- HELPERS ----------
const el = id => document.getElementById(id);

// ---------- RENDER ----------
function renderPremiumQuiz() {
  const container = el("premium-questions");
  if (!container) return;

  container.innerHTML = "";

  premiumQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "q";

    div.innerHTML = `
      <p>${i + 1}. ${q.text}</p>
      <div class="opts">
        ${q.opts.map(opt => {
          const val = opt.charAt(0);
          return `
            <button class="opt" data-q="p${i}" data-val="${val}">
              ${opt}
            </button>
          `;
        }).join("")}
      </div>
    `;

    container.appendChild(div);
  });

  document.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q;
      document
        .querySelectorAll(`.opt[data-q="${q}"]`)
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
}

// ---------- INIT + RELATÓRIO ----------
document.addEventListener("DOMContentLoaded", () => {
  renderPremiumQuiz();

  const btn = el("take-premium");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const answers = [];

    for (let i = 0; i < premiumQuestions.length; i++) {
      const selected = document.querySelector(`.opt[data-q="p${i}"].selected`);
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
      A: { label: "Analítico" },
      B: { label: "Executor" },
      C: { label: "Estável" },
      D: { label: "Influente" }
    };

    const container = el("premium-report");
    container.innerHTML = `
      <h2>🔍 Relatório Premium MindKey</h2>
      <p><strong>Perfil predominante:</strong> ${profiles[primaryKey].label}</p>
      <p><strong>Perfil secundário:</strong> ${profiles[secondaryKey].label}</p>

      <p class="small">
        Distribuição — A:${score.A} • B:${score.B} • C:${score.C} • D:${score.D}
      </p>

      <pre class="prompt-box">
You are assisting a person with this behavioral profile:
Primary: ${profiles[primaryKey].label}
Secondary: ${profiles[secondaryKey].label}

Be direct. Adapt communication. Provide practical actions.
      </pre>
    `;

    container.scrollIntoView({ behavior: "smooth" });
  });
});
