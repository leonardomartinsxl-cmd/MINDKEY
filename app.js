/* ===== PERFIS MINDKEY ===== */

const PERFIS = {
  Dominante:{
    descricao:"Você é movido por ação, decisão e resultados. Tem liderança natural e necessidade de controle.",
    pressao:"Sob pressão, tende a assumir tudo sozinho e agir de forma intensa.",
    pontoForte:"Liderança, coragem e rapidez para decidir.",
    risco:"Impulsividade, impaciência e desgaste emocional.",
    recomendacao:"Aprenda a delegar, ouvir mais e pausar antes de decisões críticas."
  },
  Analítico:{
    descricao:"Você busca lógica, clareza e compreensão profunda antes de agir.",
    pressao:"Sob pressão, pode travar analisando demais.",
    pontoForte:"Precisão, estratégia e visão de longo prazo.",
    risco:"Excesso de autocrítica e procrastinação.",
    recomendacao:"Defina prazos claros para decidir e aceite que errar faz parte."
  },
  Relacional:{
    descricao:"Você é guiado por emoções, empatia e vínculos.",
    pressao:"Sob pressão, absorve emoções externas e evita conflitos.",
    pontoForte:"Comunicação, empatia e construção de conexões.",
    risco:"Dependência emocional e dificuldade em impor limites.",
    recomendacao:"Aprenda a dizer não e priorizar suas próprias necessidades."
  },
  Adaptável:{
    descricao:"Você valoriza liberdade, leveza e equilíbrio.",
    pressao:"Sob pressão, pode se afastar ou evitar decisões importantes.",
    pontoForte:"Flexibilidade, criatividade e resiliência.",
    risco:"Falta de constância e comprometimento.",
    recomendacao:"Crie rotinas mínimas e metas claras para manter consistência."
  }
};

/* ===== UTIL ===== */

function getTopProfiles(scores){
  return Object.entries(scores)
    .sort((a,b)=>b[1]-a[1])
    .map(x=>x[0]);
}
