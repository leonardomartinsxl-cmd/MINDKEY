const questions=[
"Quando decide algo importante:",
"Sob pressão você:",
"Seu diferencial é:",
"Em grupo você:"
];


const opts=[
["Analisa","Decide rápido","Consulta","Sente"],
["Se fecha","Acelera","Equilibra","Expressa"],
["Visão","Execução","Constância","Comunicação"],
["Observa","Lidera","Apoia","Engaja"]
];


const map=["A","B","C","D"];
const container=document.getElementById("premium-questions");


questions.forEach((q,i)=>{
const div=document.createElement("div");
div.className="q";
div.innerHTML=`<strong>${i+1}.</strong> ${q}<div class="opts">${opts[i].map((o,j)=>`<button class="opt" data-q="${i}" data-v="${map[j]}">${o}</button>`).join("")}</div>`;
container.appendChild(div);
});


document.addEventListener("click",e=>{
if(!e.target.classList.contains("opt"))return;
const q=e.target.dataset.q;
document.querySelectorAll(`.opt[data-q="${q}"]`).forEach(b=>b.classList.remove("selected"));
e.target.classList.add("selected");
});


document.getElementById("take-premium").onclick=()=>{
const score={A:0,B:0,C:0,D:0};
for(let i=0;i<questions.length;i++){
const sel=document.querySelector(`.opt[data-q="${i}"].selected`);
if(!sel){alert("Responda tudo");return;}
score[sel.dataset.v]++;
}
const keys=Object.keys(score).sort((a,b)=>score[b]-score[a]);
const labels={A:"Analítico",B:"Executor",C:"Estável",D:"Influente"};
document.getElementById("premium-report").innerHTML=`<h2>Relatório Premium</h2><p><strong>Primário:</strong> ${labels[keys[0]]}</p><p><strong>Secundário:</strong> ${labels[keys[1]]}</p><pre class="prompt-box">Adapte sua comunicação para este perfil.</pre>`;
};
