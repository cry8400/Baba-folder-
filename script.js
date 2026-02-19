function openEnvelope(){
document.querySelector(".envelope").classList.add("open");
document.getElementById("bgMusic").play();
setTimeout(()=>{
nextSection("memoriesSection");
},1000);
}

function nextSection(id){
document.querySelectorAll(".section").forEach(sec=>sec.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function yesClicked(){
alert("I Love You Saniya ❤️ - Priyanshu");
}

function moveButton(){
let btn = document.getElementById("noBtn");
let x = Math.random()*300;
let y = Math.random()*300;
btn.style.position="absolute";
btn.style.left=x+"px";
btn.style.top=y+"px";
}
