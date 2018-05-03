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
$('#numRan').text(computerChoice); // ranom number to guess
//
$('#winsDiv').text(wins); // wins
$('#lossesDiv').text(losses); // loses
//
$('#myPoints').text(totalScore); //usernumber



// random() function will pick a random number for the dog icon
function random() {
  return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
// computerRandom will set the random number that the player will have to guess
function computerRandom() {
  return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
// main function
function myFunction(doggyNum){
  // var numberHolder = 0;
  totalScore += doggyNum;
  // console.log('click');
  // console.log(doggyNum);
  console.log('new total is ' + totalScore);
  return totalScore;
}

//when page loads
$(document).ready(function(){
//
  $("#dog1").on("click", function() {
    console.log(dogChoice1);
    myFunction(dogChoice1);
  });
  //
  $("#dog2").on("click", function() {
    console.log(dogChoice2);
      myFunction(dogChoice2);
  });
  //
  $("#dog3").on("click", function() {
    console.log(dogChoice3);
      myFunction(dogChoice3);
  });
  //
  $("#dog4").on("click", function() {
    console.log(dogChoice4);
      myFunction(dogChoice4);
  });

});

