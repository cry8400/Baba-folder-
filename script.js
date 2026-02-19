function openEnvelope(){
let env = document.querySelector(".envelope");
env.classList.add("open");

let music = document.getElementById("bgMusic");
if(music){
music.play().catch(()=>{});
}

setTimeout(()=>{
nextSection("memoriesSection");
},1200);
}

function nextSection(id){
document.querySelectorAll(".section").forEach(sec=>{
sec.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

function yesClicked(){
alert("I Love You Saniya ❤️ - Priyanshu");
}

function moveButton(){
let btn = document.getElementById("noBtn");
let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 50);
btn.style.position = "absolute";
btn.style.left = x + "px";
btn.style.top = y + "px";
}
