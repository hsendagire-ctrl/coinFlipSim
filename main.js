// COIN FLIP SIMULATOR

// HTML Variables
let coinBtn = document.getElementById("btn");
let outEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let diceBtn = document.getElementById("diceRoll");
let diceOutEl = document.getElementById("dieOutput");
var dice1stOutcome = document.getElementById("ones-out");
var dice2ndOutcome = document.getElementById("twos-out");
var dice3rdOutcome = document.getElementById("threes-out");
var dice4thOutcome = document.getElementById("fours-out");
var dice5thOutcome = document.getElementById("fives-out");
var dice6thOutcome = document.getElementById("sixes-out");
coinBtn.addEventListener("click", btnClicked);
diceBtn.addEventListener("click", diceRolled);

// Count Variables
let numHeads = 0;
let numTails = 0;
let diceOne = 0;
let diceTwo = 0;
var diceThree = 0;
var diceFour = 0;
var diceFive = 0;
var diceSix = 0;

function btnClicked() {
  // Generate a Random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the coin flip
  if (randNum < 0.5) {
    outEl.innerHTML = "<img src= 'img/heads.png'>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outEl.innerHTML = "<img src= 'img/tails.png'>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

function diceRolled() {
  let randNum = Math.random();
  console.log(randNum);
  console.log(diceOne);

  if (randNum <= 0.1666) {
    diceOutEl.innerHTML = "<img src = 'img/1.png'>";
    diceOne++;
    dice1stOutcome.innerHTML = diceOne;
  } else if (randNum <= 0.3333) {
    diceOutEl.innerHTML = "<img src = 'img/2.png'>";
    diceTwo++;
    dice2ndOutcome.innerHTML = diceTwo;
  } else if (randNum <= 0.5) {
    diceOutEl.innerHTML = "<img src = 'img/3.png'>";
    diceThree++;
    dice3rdOutcome.innerHTML = diceThree;
  } else if (randNum <= 0.6666) {
    diceOutEl.innerHTML = "<img src = 'img/4.png'>";
    diceFour++;
    dice4thOutcome.innerHTML = diceFour;
  } else if (randNum <= 0.8333) {
    diceOutEl.innerHTML = "<img src = 'img/5.png'>";
    diceFive++;
    dice5thOutcome.innerHTML = diceFive;
  } else {
    diceOutEl.innerHTML = "<img src = 'img/6.png'>";
    diceSix++;
    dice6thOutcome.innerHTML = diceSix;
  }
}
