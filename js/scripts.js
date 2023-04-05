// function Score(player, score) {
//   this.player = player;
//   this.release = release;
// }

// Score.prototype.rollDice = function() {
// let price = 0
// if (this.release === "rush" || this.release === "tenet"){
//   price = price + 8;
// } else {
//   price = price + 10;
// }

// if (this.time === "day"){
//   price = price * 1.5;
// } 

// if (this.age === "senior"){
//   price = price - 2;
// } else if (this.age === "child"){
//   price = price -1;
// } return price;
// };

function diceCalculation(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function rollDice(event) {
  const currentRoll = diceCalculation(1,6);
  return currentRoll;
}

window.addEventListener("load", function (){
  document.querySelector("div#option").addEventListener("click", rollDice);
});