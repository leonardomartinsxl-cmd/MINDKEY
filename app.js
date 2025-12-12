// app.js - handles free quiz (10) and premium (30) in static mode

// FREE QUIZ QUESTIONS (10)
const freeQuestions = [
  {id:'q0',text:'Quando algo te irrita, qual sua reação inicial?',opts:['A - Analiso','B - Reajo','C - Silencio','D - Converso']},
  {id:'q1',text:'Como você prefere resolver problemas?',opts:['A - Planejo','B - Agir rápido','C - Dialogo','D - Testo opções']},
  {id:'q2',text:'No grupo, você costuma:',opts:['A - Observar','B - Liderar','C - Apoiar','D - Inspirar']},
  {id:'q3',text:'Em conversas difíceis, você:',opts:['A - Questiona','B - Confronta','C - Evita','D - Busca conexao']},
  {id:'q4',text:'Quando elogiado, você:',opts:['A - Reflete','B - Ri e segue','C - Fica tímido','D - Agradece calorosamente']},
  {id:'q5',text:'Ao decidir, você:',opts:['A - Analisa dados','B - Segue intuição','C - Pede opinião','D - Experimenta']},
  {id:'q6',text:'No trabalho, você prefere:',opts:['A - Rotina organizada','B - Metas ambiciosas','C - Ambiente estável','D - Liberdade criativa']},
  {id:'q7',text:'Quando estressado, você:',opts:['A - Fica quieto','B - Fica ativo','C - Procura apoio','D - Se fecha e pensa']},
  {id:'q8',text:'Amigos diriam que você é:',opts:['A - Metódico','B - Direto','C - Confiável','D - Carismático']},
  {id:'q9',text:'O que mais te motiva?',opts:['A - Entendimento','B - Resultado','C - Paz','D - Reconhecimento']}
];

// PREMIUM QUIZ QUESTIONS (30) - suggested, can be edited later
const premiumQuestions = [
  // social (10)
  {id:'p0',text:'Você prefere liderar ou apoiar?',opts:['A - Liderar','B - Apoiar','C - Depende','D - Evito']},
  {id:'p1',text:'Você evita conflitos?',opts:['A - Raramente','B - Frequentemente','C - Às vezes','D - Depende']},
  {id:'p2',text:'Você demonstra afeto facilmente?',opts:['A - Sim','B - Não','C - Com poucos','D - Depende']},
  {id:'p3',text:'Você prefere interações curtas e intensas?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p4',text:'Você procura ser reconhecido?',opts:['A - Sempre','B - Raramente','C - Somente em trabalho','D - Não']},
  {id:'p5',text:'Você se adapta rapidamente a mudanças?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p6',text:'Você se sente esgotado em ambientes sociais longos?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p7',text:'Você prefere clareza ao receber instruções?',opts:['A - Sim','B - Não','C - Preferências variadas','D - Depende']},
  {id:'p8',text:'Você costuma iniciar conversas com desconhecidos?',opts:['A - Sim','B - Não','C - Raramente','D - Depende']},
  {id:'p9',text:'Você costuma manter contato com antigos colegas?',opts:['A - Sim','B - Não','C - Depende','D - Só com alguns']},
  // professional (10)
  {id:'p10',text:'Você se considera organizado?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p11',text:'Você gosta de metas agressivas?',opts:['A - Sim','B - Não','C - Só se realista','D - Depende']},
  {id:'p12',text:'Você prefere rotina ou variedade?',opts:['A - Rotina','B - Variedade','C - Mistura','D - Depende']},
  {id:'p13',text:'Como lida com prazos apertados?',opts:['A - Planejo','B - Corro','C - Peço ajuda','D - Evito']},
  {id:'p14',text:'Você busca feedback com frequência?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p15',text:'Você prefere tarefas em equipe ou solo?',opts:['A - Equipe','B - Solo','C - Ambas','D - Depende']},
  {id:'p16',text:'Você se considera persistente?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p17',text:'Você se sente confortável liderando?',opts:['A - Sim','B - Não','C - Com apoio','D - Depende']},
  {id:'p18',text:'Você prioriza qualidade ou velocidade?',opts:['A - Qualidade','B - Velocidade','C - Balanceio','D - Depende']},
  {id:'p19',text:'Você gosta de planos claros antes de começar?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  // love & personal (10)
  {id:'p20',text:'Você demonstra emoções facilmente?',opts:['A - Sim','B - Não','C - Com cautela','D - Depende']},
  {id:'p21',text:'Você busca proximidade constante?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p22',text:'Você perdoa facilmente?',opts:['A - Sim','B - Não','C - Depende do caso','D - Depende']},
  {id:'p23',text:'Você se sente seguro em relacionamentos?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']},
  {id:'p24',text:'Você prefere resolver problemas conversando?',opts:['A - Sim','B - Não','C - Depende','D - Depende']},
  {id:'p25',text:'Você mantém suas promessas?',opts:['A - Sempre','B - Raramente','C - Quando possível','D - Depende']},
  {id:'p26',text:'Você se abre para novas pessoas com facilidade?',opts:['A - Sim','B - Não','C - Aos poucos','D - Depende']},
  {id:'p27',text:'Você sente necessidade de aprovação social?',opts:['A - Muito','B - Pouco','C - Moderado','D - Depende']},
  {id:'p28',text:'Você se aceita como é?',opts:['A - Sim','B - Não','C - Em partes','D - Depende']},
  {id:'p29',text:'Você age mais pela emoção ou razão?',opts:['A - Emoção','B - Razão','C - Ambos','D - Depende']}
];

// helper to render questions to a container
function renderQuestions(list, containerId){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'q';
    let html = `<div><strong>${idx+1}.</strong> ${q.text}</div><div class="opts">`;
    q.opts.forEach(opt => {
      html += `<div class="opt" data-q="${q.id}" data-val="${opt.charAt(0)}">${opt}</div>`;
    });
    html += '</div>';
    div.innerHTML = html;
    container.appendChild(div);
  });
  document.querySelectorAll('.opt').forEach(o=>{
    o.addEventListener('click', ()=>{
      const q = o.getAttribute('data-q');
      document.querySelectorAll(`.opt[data-q="${q}"]`).forEach(s=>s.classList.remove('selected'));
      o.classList.add('selected');
    });
  });
}

// collect answers
function collectAnswers(prefix, count){
  const answers = [];
  for(let i=0;i<count;i++){
    const qid = (prefix === 'free') ? 'q'+i : 'p'+i;
    const sel = document.querySelector(`.opt[data-q="${qid}"].selected`);
    if(!sel) return null;
    answers.push(sel.getAttribute('data-val'));
  }
  return answers;
}

// scoring (simple, transparent)
function scoreAnswers(answers){
  const counts = {A:0,B:0,C:0,D:0};
  answers.forEach(a=>counts[a] = (counts[a]||0)+1);
  const sorted = Object.keys(counts).sort((x,y)=>counts[y]-counts[x]);
  return {counts, primary:sorted[0], secondary:sorted[1]};
}

// build human-friendly labels and explanations
function labelFor(key){
  const map = {A:'Analítico', B:'Executivo', C:'Estável', D:'Influente'};
  const expl = {
    A:'Você pensa por camadas e busca entender antes de agir.',
    B:'Você age para resolver; resultados te movem.',
    C:'Você valoriza estabilidade e apoio emocional.',
    D:'Você conecta pessoas e inspira com energia.'
  };
  return {label:map[key],explain:expl[key]};
}

// prompt generator
function buildPrompt(primaryLabel, explanation, breakdown){
  return `Sou do perfil MindKey: ${primaryLabel}.\n\nResumo: ${explanation}\n\nDados rápidos: ${JSON.stringify(breakdown)}\n\nAo conversar comigo, responda considerando meu estilo. Quando eu descrever uma situação, entregue:\n1) O que estou sentindo;\n2) O que motivou a outra pessoa;\n3) Uma frase pronta para eu dizer;\n4) Uma ação prática imediata.\n\nSituação: [descreva aqui]`;
}

// DOM ready actions
document.addEventListener('DOMContentLoaded', ()=>{
  // render free & premium questions
  renderQuestions(freeQuestions, 'quiz-questions');
  renderQuestions(premiumQuestions, 'premium-questions');

  // FREE submit
  const takeBtn = document.getElementById('take-quiz');
  if(takeBtn){
    takeBtn.addEventListener('click', ()=>{
      const answers = collectAnswers('free', 10);
      if(!answers){ alert('Por favor responda todas as perguntas.'); return; }
      const scored = scoreAnswers(answers);
      const primary = labelFor(scored.primary);
      document.getElementById('result-primary').textContent = primary.label;
      document.getElementById('result-explain').textContent = primary.explain;
      document.getElementById('result-detail').textContent = `Pontuação: A:${scored.counts.A} B:${scored.counts.B} C:${scored.counts.C} D:${scored.counts.D}`;
      document.getElementById('prompt-area').textContent = buildPrompt(primary.label, primary.explain, scored.counts);
      document.getElementById('result-box').style.display = 'block';
      window.scrollTo({top:600,behavior:'smooth'});
    });
  }

  // PREMIUM submit
  const takePrem = document.getElementById('take-premium');
  if(takePrem){
    takePrem.addEventListener('click', ()=>{
      const answers = collectAnswers('prem', 30);
      if(!answers){ alert('Por favor responda todas as perguntas.'); return; }
      const scored = scoreAnswers(answers);
      const primary = labelFor(scored.primary);
      const secondary = labelFor(scored.secondary);
      // generate a detailed report (mock)
      const summary = `<strong>Perfil:</strong> ${primary.label} (principal) • ${secondary.label} (secundário)<br><strong>Forças:</strong> ${primary.explain}<br><strong>Pontos de atenção:</strong> Reflita sobre situações em que você reage sem analisar.`;
      document.getElementById('premium-summary').innerHTML = summary;
      document.getElementById('premium-full').textContent = `Breakdown: ${JSON.stringify(scored.counts)}`;
      document.getElementById('premium-prompt').textContent = buildPrompt(primary.label, primary.explain, scored.counts) + "\n\nUse this advanced prompt to ask specific questions about career, relationships, or conflict.";
      document.getElementById('premium-result').style.display = 'block';
      window.scrollTo({top:600,behavior:'smooth'});
    });
  }

  // copy handlers
  const cp = document.getElementById('copy-prompt');
  if(cp) cp.addEventListener('click', ()=> {
    navigator.clipboard.writeText(document.getElementById('prompt-area').textContent).then(()=>alert('Prompt copiado!'));
  });
  const cp2 = document.getElementById('copy-premium-prompt');
  if(cp2) cp2.addEventListener('click', ()=> {
    navigator.clipboard.writeText(document.getElementById('premium-prompt').textContent).then(()=>alert('Prompt copiado!'));
  });
});
