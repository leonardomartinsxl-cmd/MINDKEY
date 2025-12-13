function getResult(){
  return JSON.parse(localStorage.getItem("mindkey_result"));
}

function profileText(profile){
  const map={
    Analítico:{
      title:"Analítico",
      text:"Você possui uma mente estratégica, lógica e orientada à clareza. Busca segurança através do entendimento profundo das situações e tende a se destacar em ambientes que exigem precisão, planejamento e visão de longo prazo."
    },
    Comunicador:{
      title:"Comunicador",
      text:"Seu comportamento é guiado por emoções, conexões humanas e expressão. Você gera impacto através da comunicação, empatia e influência social, sendo essencial em ambientes colaborativos."
    },
    Executor:{
      title:"Executor",
      text:"Você é movido por ação, resultado e liderança. Prefere resolver rápido clarificar depois. Possui energia elevada, tomada de decisão firme e forte presença em momentos críticos."
    },
    Estrategista:{
      title:"Estrategista",
      text:"Você observa antes de agir. Valoriza visão, estrutura e controle do cenário. Costuma enxergar oportunidades antes dos outros e atua melhor quando tem autonomia para pensar."
    }
  };
  return map[profile];
}

function loadReport(){
  const data=getResult();
  if(!data) return;

  document.getElementById("mainProfile").textContent=data.main;
  document.getElementById("secondProfile").textContent=data.secondary;

  const main=profileText(data.main);
  const sec=profileText(data.secondary);

  document.getElementById("report").innerHTML=`
    <div class="soft">
      <h3>Perfil Dominante — ${main.title}</h3>
      <p>${main.text}</p>
    </div>

    <div class="soft">
      <h3>Perfil Secundário — ${sec.title}</h3>
      <p>${sec.text}</p>
    </div>
  `;

  document.getElementById("prompt").textContent=
`Sou uma pessoa com perfil dominante ${main.title} e secundário ${sec.title}.
Quero ajuda para evoluir no campo profissional, emocional e social,
respeitando minha forma natural de pensar, decidir e agir.`;
}
