const questions=[
"Quando algo te irrita, você reage mais com:",
"No trabalho você se destaca por:",
"Em conflitos você tende a:",
"Sua principal motivação é:"
];


const options=[
["Lógica","Ação","Silêncio","Emoção"],
["Análise","Execução","Apoio","Inspiração"],
["Questionar","Confrontar","Evitar","Dialogar"],
["Entender","Vencer","Harmonia","Reconhecimento"]
];


const map=["A","B","C","D"];
const container=document.getElementById("questions");


questions.forEach((q,i)=>{
const div=document.createElement("div");
div.className="q";
div.innerHTML=`<strong>${i+1}.</strong> ${q}<div class="opts">${options[i].map((o,j)=>`<button class="opt" data-q="${i}" data-v="${map[j]}">${o}</button>`).join("")}</div>`;
container.appendChild(div);
});


document.addEventListener("click",e=>{
if(!e.target.classList.contains("opt"))return;
const q=e.target.dataset.q;
document.querySelectorAll(`.opt[data-q="${q}"]`).forEach(b=>b.classList.remove("selected"));
e.target.classList.add("selected");
});


document.getElementById("finish").onclick=()=>{
const score={A:0,B:0,C:0,D:0};
for(let i=0;i<questions.length;i++){
const sel=document.querySelector(`.opt[data-q="${i}"].selected`);
if(!sel){alert("Responda tudo");return;}
score[sel.dataset.v]++;
}
const main=Object.keys(score).sort((a,b)=>score[b]-score[a])[0];
const labels={A:"Analítico",B:"Executor",C:"Estável",D:"Influente"};
const box=document.getElementById("result");
box.innerHTML=`<h2>${labels[main]}</h2><p class="small">Este é seu perfil predominante.</p><a href="quiz_premium.html" class="btn">Ver relatório completo</a>`;
box.style.display="block";
box.scrollIntoView({behavior:"smooth"});
};