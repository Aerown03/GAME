let modeRelax = false;
let movement = 0;
let stopwacth;
let cardGroup = [
   ["🦄", "🍦"],
   ["🌈", "👽"],
   ["👾", "🤖", "👹", "👺"],
   ["😘", "😍","😊", "😂"],
   ["😒", "😇","🫡", "😇"],
];

let levelActual = 0;
let levels = [
    {
        cards: cardGroup[0],
        movementMax: 4
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1]),
        movementMax: 10
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1],
            cardGroup[2]),
        movementmMx: 14
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1],
            cardGroup[2],
            cardGroup[3]),
        movementmMx: 25
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1],
            cardGroup[2],
            cardGroup[3],
            cardGroup[4]),
        movementmMx: 60
    }
];