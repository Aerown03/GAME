function gameOver(){
    clearInterval(stopwacth);
    document.querySelector("#gameOver").classList.add("visible");
}

function timeOver(){
    document.querySelector("#timeOver").classList.add("visible");
}
