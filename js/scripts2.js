function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function Player(name, roundScore, totalScore, turn) {
  this.name = name;
  this.score = 0;
  this.totalScore = 0;
  this.turn = turn;
}

function diceCalculation(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

totalRoll = 0
function rollDice(event) {
  const currentRoll = diceCalculation();
  console.log(currentRoll);
  logRolls(currentRoll);
  totalRoll += currentRoll;
  console.log("Your Total Points this round " + totalRoll);
};

function logRolls(currentRoll) {
  const li = document.createElement("li");
  li.append(currentRoll);
  let ul = document.querySelector("ul#p1TurnRolls");
  ul.append(li);  
};

function hold(event) {
  document.getElementById("p1Total").innerText = "Player 2 Total Score " + totalRoll;
}

function startGame(event){
  let newGame = new Game(player1, player2);
};

window.addEventListener("load", function (){
  document.querySelector("div#startOption").addEventListener("click", startGame);
  document.querySelector("div#rollOption").addEventListener("click", rollDice);
  document.querySelector("div#holdOption").addEventListener("click", hold);
});