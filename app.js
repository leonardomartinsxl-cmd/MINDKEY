// app.js - MindKey (static) - free (10) + premium (30)
// Clear, robust and defensive

// ------------------ QUESTIONS ------------------
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

const premiumQuestions = (function(){
  // 30 items (same as earlier). For brevity reuse a mix — full list included.
  const arr = [];
  // social 0-9
  arr.push({id:'p0',text:'Você prefere liderar ou apoiar?',opts:['A - Liderar','B - Apoiar','C - Depende','D - Evito']});
  arr.push({id:'p1',text:'Você evita conflitos?',opts:['A - Raramente','B - Frequentemente','C - Às vezes','D - Depende']});
  arr.push({id:'p2',text:'Você demonstra afeto facilmente?',opts:['A - Sim','B - Não','C - Com poucos','D - Depende']});
  arr.push({id:'p3',text:'Você prefere interações curtas e intensas?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p4',text:'Você procura ser reconhecido?',opts:['A - Sempre','B - Raramente','C - Somente em trabalho','D - Não']});
  arr.push({id:'p5',text:'Você se adapta rapidamente a mudanças?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p6',text:'Você se sente esgotado em ambientes sociais longos?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p7',text:'Você prefere clareza ao receber instruções?',opts:['A - Sim','B - Não','C - Preferências variadas','D - Depende']});
  arr.push({id:'p8',text:'Você costuma iniciar conversas com desconhecidos?',opts:['A - Sim','B - Não','C - Raramente','D - Depende']});
  arr.push({id:'p9',text:'Você costuma manter contato com antigos colegas?',opts:['A - Sim','B - Não','C - Depende','D - Só com alguns']});
  // professional 10-19
  arr.push({id:'p10',text:'Você se considera organizado?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p11',text:'Você gosta de metas agressivas?',opts:['A - Sim','B - Não','C - Só se realista','D - Depende']});
  arr.push({id:'p12',text:'Você prefere rotina ou variedade?',opts:['A - Rotina','B - Variedade','C - Mistura','D - Depende']});
  arr.push({id:'p13',text:'Como lida com prazos apertados?',opts:['A - Planejo','B - Corro','C - Peço ajuda','D - Evito']});
  arr.push({id:'p14',text:'Você busca feedback com frequência?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p15',text:'Você prefere tarefas em equipe ou solo?',opts:['A - Equipe','B - Solo','C - Ambas','D - Depende']});
  arr.push({id:'p16',text:'Você se considera persistente?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p17',text:'Você se sente confortável liderando?',opts:['A - Sim','B - Não','C - Com apoio','D - Depende']});
  arr.push({id:'p18',text:'Você prioriza qualidade ou velocidade?',opts:['A - Qualidade','B - Velocidade','C - Balanceio','D - Depende']});
  arr.push({id:'p19',text:'Você gosta de planos claros antes de começar?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  // personal 20-29
  arr.push({id:'p20',text:'Você demonstra emoções facilmente?',opts:['A - Sim','B - Não','C - Com cautela','D - Depende']});
  arr.push({id:'p21',text:'Você busca proximidade constante?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p22',text:'Você perdoa facilmente?',opts:['A - Sim','B - Não','C - Depende do caso','D - Depende']});
  arr.push({id:'p23',text:'Você se sente seguro em relacionamentos?',opts:['A - Sim','B - Não','C - Às vezes','D - Depende']});
  arr.push({id:'p24',text:'Você prefere resolver problemas conversando?',opts:['A - Sim','B - Não','C - Depende','D - Depende']});
  arr.push({id:'p25',text:'Você mantém suas promessas?',opts:['A - Sempre','B - Raramente','C - Quando possível','D - Depende']});
  arr.push({id:'p26',text:'Você se abre para novas pessoas com facilidade?',opts:['A - Sim','B - Não','C - Aos poucos','D - Depende']});
  arr.push({id:'p27',text:'Você sente necessidade de aprovação social?',opts:['A - Muito','B - Pouco','C - Moderado','D - Depende']});
  arr.push({id:'p28',text:'Você se aceita como é?',opts:['A - Sim','B - Não','C - Em partes','D - Depende']});
  arr.push({id:'p29',text:'Você age mais pela emoção ou razão?',opts:['A - Emoção','B - Razão','C - Ambos','D - Depende']});
  return arr;
})();

// ------------------ HELPERS ------------------
function el(id){ return document.getElementById(id); }

function renderQuestions(list, containerId, prefix){
  const container = el(containerId);
  if(!container) return;
  container.innerHTML = '';
  list.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'q';
    let html = `<div><strong>${idx+1}.</strong> ${q.text}</div><div class="opts">`;
    q.opts.forEach(opt => {
      html += `<button type="button" class="opt" data-q="${(prefix||'q')}${idx}" data-val="${opt.charAt(0)}">${opt}</button>`;
    });
    html += '</div>';
    div.innerHTML = html;
    container.appendChild(div);
  });
  // attach handlers
  container.querySelectorAll('.opt').forEach(o=>{
    o.addEventListener('click', ()=>{
      const q = o.getAttribute('data-q');
      container.querySelectorAll(`.opt[data-q="${q}"]`).forEach(s=>s.classList.remove('selected'));
      o.classList.add('selected');
    });
  });
}

function collectAnswers(prefix, count){
  const answers = [];
  for(let i=0;i<count;i++){
    const qid = (prefix === 'free') ? `q${i}` : `p${i}`;
    const sel = document.querySelector(`.opt[data-q="${qid}"].selected`);
    if(!sel) return null;
    answers.push(sel.getAttribute('data-val'));
  }
  return answers;
}

function scoreAnswers(answers){
  const counts = {A:0,B:0,C:0,D:0};
  answers.forEach(a=>counts[a] = (counts[a]||0)+1);
  const sorted = Object.keys(counts).sort((x,y)=>counts[y]-counts[x]);
  return {counts, primary:sorted[0], secondary:sorted[1]};
}

function labelFor(key){
  const map = {A:'Analítico', B:'Executivo', C:'Estável', D:'Influente'};
  const expl = {
    A:'Você pensa por camadas e busca entender antes de agir.',
    B:'Você age para resolver; resultados te movem.',
    C:'Você valoriza estabilidade e apoio emocional.',
    D:'Você conecta pessoas e inspira com energia.'
  };
  return {label:map[key]||'Desconhecido', explain:expl[key]||''};
}

function buildPrompt(primaryLabel, explanation, breakdown){
  return `Sou do perfil MindKey: ${primaryLabel}.\n\nResumo: ${explanation}\n\nDados rápidos: ${JSON.stringify(breakdown)}\n\nAo conversar comigo, responda considerando meu estilo. Quando eu descrever uma situação, entregue:\n1) O que estou sentindo;\n2) O que motivou a outra pessoa;\n3) Uma frase pronta para eu dizer;\n4) Uma ação prática imediata.\n\nSituação: [descreva aqui]`;
}

// ------------------ DOM READY ------------------
document.addEventListener('DOMContentLoaded', ()=>{
  // render both (if container exists)
  renderQuestions(freeQuestions, 'quiz-questions', 'q');
  renderQuestions(premiumQuestions, 'premium-questions', 'p');

  // FREE submit
  const takeBtn = el('take-quiz');
  if(takeBtn){
    takeBtn.addEventListener('click', ()=>{
      const answers = collectAnswers('free', 10);
      if(!answers){ alert('Por favor responda todas as perguntas (10).'); return; }
      const scored = scoreAnswers(answers);
      const primary = labelFor(scored.primary);
      el('result-primary').textContent = primary.label;
      el('result-explain').textContent = primary.explain;
      el('result-detail').textContent = `Pontuação: A:${scored.counts.A} B:${scored.counts.B} C:${scored.counts.C} D:${scored.counts.D}`;
      el('prompt-area').textContent = buildPrompt(primary.label, primary.explain, scored.counts);
      el('result-box').style.display = 'block';
      el('take-quiz').focus();
      window.scrollTo({top:600,behavior:'smooth'});
    });
  }

  // PREMIUM submit
  const takePrem = el('take-premium');
  if(takePrem){
    takePrem.addEventListener('click', ()=>{
      const answers = collectAnswers('premium', 30);
      if(!answers){ alert('Por favor responda todas as perguntas (30).'); return; }
      const scored = scoreAnswers(answers);
      const primary = labelFor(scored.primary);
      const secondary = labelFor(scored.secondary);
      const summary = `<strong>Perfil:</strong> ${primary.label} (principal) • ${secondary.label} (secundário)<br><strong>Forças:</strong> ${primary.explain}<br><strong>Pontos de atenção:</strong> Reflita sobre situações em que você reage sem analisar.`;
      el('premium-summary').innerHTML = summary;
      el('premium-full').textContent = `Breakdown: ${JSON.stringify(scored.counts)}`;
      el('premium-prompt').textContent = buildPrompt(primary.label, primary.explain, scored.counts) + "\n\nUse este prompt para pedir estratégias detalhadas à IA.";
      el('premium-result').style.display = 'block';
      window.scrollTo({top:600,behavior:'smooth'});
    });
  }

  // copy handlers
  const cp = el('copy-prompt');
  if(cp) cp.addEventListener('click', ()=> {
    const data = el('prompt-area').textContent || '';
    navigator.clipboard?.writeText(data).then(()=>alert('Prompt copiado!')).catch(()=>alert('Não foi possível copiar automaticamente. Selecione e copie manualmente.'));
  });
  const cp2 = el('copy-premium-prompt');
  if(cp2) cp2.addEventListener('click', ()=> {
    const data = el('premium-prompt').textContent || '';
    navigator.clipboard?.writeText(data).then(()=>alert('Prompt copiado!')).catch(()=>alert('Não foi possível copiar automaticamente. Selecione e copie manualmente.'));
  });
});
