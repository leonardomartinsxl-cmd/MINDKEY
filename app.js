/* ========= UTILIDADES ========= */

function getTopProfiles(scores){
  return Object.entries(scores)
    .sort((a,b)=>b[1]-a[1])
    .map(x=>x[0]);
}

/* ========= PERFIS ========= */

const PERFIS = {
  Dominante:{
    descricao:"Você é movido por ação, decisão e resultados.",
    pressao:"Sob pressão, assume controle e acelera.",
    pontoForte:"Liderança e coragem.",
    risco:"Impulsividade e desgaste emocional.",
    recomendacao:"Delegue mais e desacelere decisões críticas."
  },
  Analítico:{
    descricao:"Busca lógica, clareza e entendimento profundo.",
    pressao:"Analisa excessivamente.",
    pontoForte:"Precisão e estratégia.",
    risco:"Procrastinação.",
    recomendacao:"Defina prazos para decidir."
  },
  Relacional:{
    descricao:"Guiado por emoções e empatia.",
    pressao:"Evita conflitos.",
    pontoForte:"Comunicação e conexão.",
    risco:"Falta de limites.",
    recomendacao:"Aprenda a dizer não."
  },
  Adaptável:{
    descricao:"Valoriza liberdade e equilíbrio.",
    pressao:"Se afasta de decisões.",
    pontoForte:"Flexibilidade.",
    risco:"Falta de constância.",
    recomendacao:"Crie rotinas mínimas."
  }
};
