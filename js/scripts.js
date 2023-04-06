function Player(name){
  this.name = name;
  this.rollScore = 0;
  this.totalScore = 0;
};

function Game(){
  this.players = [player1, player2]
}

let player1 = new Player("player1");
let player2 = new Player("player2");

let newGame = new Game();

function switchPlayers() {};

function hold(event) {};


/////////////////

function diceCalculation(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

function rollDice(event) {
  const currentRoll = diceCalculation();
  console.log(currentRoll);
  logRolls(currentRoll);
  totalRoll += currentRoll;
  console.log("Your Total Points this round " + totalRoll);
};

/////////////////

function startGame(event) {};

window.addEventListener("load", function (){
  document.querySelector("div#startOption").addEventListener("click", startGame);
  document.querySelector("div#rollOption").addEventListener("click", rollDice);
  document.querySelector("div#rollOption").addEventListener("click", hold);
});