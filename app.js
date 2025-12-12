// app.js — MindKey (Static / GitHub Pages compatible)
// Free Quiz (10) + Premium Quiz (30)
// Full behavioral report + AI prompt generator

// ------------------ QUESTIONS ------------------

const freeQuestions = [
  {text:'Quando algo te irrita, qual sua reação inicial?',opts:['A - Analiso','B - Reajo','C - Silencio','D - Converso']},
  {text:'Como você prefere resolver problemas?',opts:['A - Planejo','B - Agir rápido','C - Dialogo','D - Testo opções']},
  {text:'No grupo, você costuma:',opts:['A - Observar','B - Liderar','C - Apoiar','D - Inspirar']},
  {text:'Em conversas difíceis, você:',opts:['A - Questiona','B - Confronta','C - Evita','D - Busca conexão']},
  {text:'Quando elogiado, você:',opts:['A - Reflete','B - Ri e segue','C - Fica tímido','D - Agradece calorosamente']},
  {text:'Ao decidir, você:',opts:['A - Analisa dados','B - Segue intuição','C - Pede opinião','D - Experimenta']},
  {text:'No trabalho, você prefere:',opts:['A - Rotina','B - Metas','C - Estabilidade','D - Liberdade']},
  {text:'Quando estressado, você:',opts:['A - Se fecha','B - Age mais','C - Procura apoio','D - Pensa sozinho']},
  {text:'Amigos diriam que você é:',opts:['A - Analítico','B - Direto','C - Confiável','D - Carismático']},
  {text:'O que mais te motiva?',opts:['A - Entender','B - Resultado','C - Paz','D - Reconhecimento']}
];

const premiumQuestions = Array.from({length:30},(_,i)=>({
  text:`Pergunta premium ${i+1}`,
  opts:['A - Discordo','B - Concordo','C - Depende','D - Totalmente']
}));

// ------------------ HELPERS ------------------

function el(id){ return document.getElementById(id); }

function renderQuestions(list, containerId, prefix){
  const c = el(containerId);
  if(!c) return;
  c.innerHTML = '';
  list.forEach((q,i)=>{
    const d = document.createElement('div');
    d.className = 'q';
    d.innerHTML = `
      <p><strong>${i+1}.</strong> ${q.text}</p>
      <div class="opts">
        ${q.opts.map(o=>`<button class="opt" data-q="${prefix}${i}" data-v="${o[0]}">${o}</button>`).join('')}
      </div>`;
    c.appendChild(d);
  });
  c.querySelectorAll('.opt').forEach(b=>{
    b.onclick=()=>{
      c.querySelectorAll(`.opt[data-q="${b.dataset.q}"]`).forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
    };
  });
}

function collect(prefix,total){
  const r=[];
  for(let i=0;i<total;i++){
    const s=document.querySelector(`.opt[data-q="${prefix}${i}"].selected`);
    if(!s) return null;
    r.push(s.dataset.v);
  }
  return r;
}

function score(ans){
  const c={A:0,B:0,C:0,D:0};
  ans.forEach(x=>c[x]++);
  const s=Object.keys(c).sort((a,b)=>c[b]-c[a]);
  return {c,primary:s[0],secondary:s[1]};
}

const labels={
  A:'Analítico',
  B:'Dominante',
  C:'Estável',
  D:'Influente'
};

// ------------------ DOM READY ------------------

document.addEventListener('DOMContentLoaded',()=>{

  renderQuestions(freeQuestions,'quiz-questions','f');
  renderQuestions(premiumQuestions,'premium-questions','p');

  // FREE RESULT
  el('take-quiz')?.addEventListener('click',()=>{
    const a=collect('f',10);
    if(!a) return alert('Responda todas as perguntas.');
    const r=score(a);
    el('result-box').style.display='block';
    el('result-primary').textContent=labels[r.primary];
    el('prompt-area').textContent=
`Sou do perfil ${labels[r.primary]} com traços ${labels[r.secondary]}.
Quero respostas diretas, práticas e alinhadas ao meu comportamento.

Situação:
[descreva aqui]`;
    window.scrollTo({top:600,behavior:'smooth'});
  });

  // PREMIUM RESULT
  el('take-premium')?.addEventListener('click',()=>{
    const a=collect('p',30);
    if(!a) return alert('Responda todas as perguntas.');
    const r=score(a);

    el('premium-result').style.display='block';

    el('premium-summary').innerHTML=`
<h3>🧠 Relatório Comportamental Premium</h3>

<p><strong>Perfil predominante:</strong> ${labels[r.primary]}</p>
<p><strong>Perfil secundário:</strong> ${labels[r.secondary]}</p>

<h4>📊 Distribuição DISC</h4>
<p>A:${r.c.A} | B:${r.c.B} | C:${r.c.C} | D:${r.c.D}</p>

<h4>🚀 Como você funciona</h4>
<p>
Você toma decisões rápidas, valoriza clareza e detesta perda de tempo.
Quando alinhado com o ambiente certo, sua performance cresce exponencialmente.
</p>

<h4>⚠️ Pontos de atenção</h4>
<ul>
<li>Impaciência com lentidão</li>
<li>Comunicação excessivamente direta</li>
<li>Dificuldade em desacelerar</li>
</ul>

<h4>❤️ Relacionamentos</h4>
<p>
Você se conecta pela verdade e intensidade. Precisa de liberdade,
mas é extremamente leal quando confia.
</p>
`;

    const advancedPrompt=
`You are my PERSONALIZED STRATEGIC ASSISTANT.

My behavioral profile:
Primary: ${labels[r.primary]}
Secondary: ${labels[r.secondary]}

Rules:
- Be objective
- No fluff
- Bullet points only
- Actionable steps

When I describe a situation:
1. Identify what I feel
2. Identify what the other person feels
3. Give me an exact sentence to say
4. Tell me the best next action

Situation:
[DESCREVA AQUI]`;

    el('premium-prompt').textContent=advancedPrompt;
    window.scrollTo({top:600,behavior:'smooth'});
  });

  el('copy-prompt')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(el('prompt-area').textContent);
    alert('Prompt copiado!');
  });

  el('copy-premium-prompt')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(el('premium-prompt').textContent);
    alert('Prompt premium copiado!');
  });

});
