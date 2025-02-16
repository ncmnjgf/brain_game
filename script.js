
function makebubble() {
    var cluster = "";
    for (var i = 1; i <= 270; i++) {
        var db = Math.floor(Math.random() * 10)
        cluster += `<div class="bubble">${db}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = cluster;

}

var timer = 60;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over score is ${score} </h1>`;
        }
    }, 1000);
}

var hitnm ;
function getnewhit() {
    hitnm  = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitnm;
}
var score =0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").
addEventListener("click",function(dada){
    var clickednum = Number (dada.target.textContent);//it return string 
    if(clickednum === hitnm){
        increaseScore();
        makebubble();
        getnewhit();
    }
});
runtimer();
getnewhit();
makebubble();

