console.log('connected');
// Variable declaration
var wins = 0;
var losses = 0;
//
var dogChoice1 = random();
var dogChoice2 = random();
var dogChoice3 = random();
var dogChoice4 = random();
//
var totalScore = 0;
var computerChoice = computerRandom();
// End of Variable
// ---
// using jquery to display the random number
$('#numRan').text(computerChoice);
//
$('#winsDiv').text(wins);
$('#lossesDiv').text(losses);
//
$('#myPoints').text(totalScore);
//
document.getElementById("user-score").innerHTML = "Total Score: " + "<br>" + totalScore;
document.getElementById("totals").innerHTML = "Wins: " + wins + " " + "Losses: " + losses;


// random() function will pick a random number for the dog icon
function random() {
  return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
// computerRandom will set the random number that the player will have to guess
function computerRandom() {
  return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
//when page loads
$(document).ready(function(){

}