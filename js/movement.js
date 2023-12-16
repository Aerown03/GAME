function startCounter(){
    var movementText;
    movement++;
    movementText = movement;

if (movement > level[levelActual].movementMax && !modeRelax) {
    gameOver();
    return;
}

    if(movement < 10){
        movementText = "0" + movement;
    }
    document.querySelector("#mov").innerText = movement;
}

function maxCounter(){
    var movementMaxText = levels[levelActual].movementMax;
    if(movementMaxText < 10){
        movementMaxText = "0" + movementMaxText;
    }
    document.querySelector("#mov-total").innerText = movementMaxText;
}
