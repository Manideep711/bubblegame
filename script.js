var timer=15;
var score=0;
var hitrn=0;
function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn;
}
function makebubble(){
    var clutter="";
for(var i=1;i<=160;i++){
    var rn=Math.floor(Math.random()*10)
    document.querySelector("#pbtm").textContent=rn;
clutter+= `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
   var time =setInterval(function(){
        if(timer>0){

        
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
       clearInterval(time);
       document.querySelector("#pbtm").innerHTML = `<h1 class="game-over">GAME OVER!<h1>`;
    }
    },1000);
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})


getNewHit();
makebubble();
runTimer();

