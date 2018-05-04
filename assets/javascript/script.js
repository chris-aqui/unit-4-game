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





// random() function will pick a random number for the dog icon
function random() {
  return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
// computerRandom will set the random number that the player will have to guess
function computerRandom() {
  return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
// main function
function numAdder(doggyNum){
  totalScore += doggyNum;
  console.log('new total is ' + totalScore);
  update();
  compare(computerChoice, totalScore);
  return totalScore;
}

//when page loads
$(document).ready(function(){
  //
  $('#numRan').text(computerChoice); // ranom number to guess
//
$("h1").hover(function(){
  $('#h1Text').text('Puppy Collector!  =] ');
  }, function(){
  $('#h1Text').text('Crystals Collector');
});

//
  $("#dog1").on("click", function() { // when clicked
    console.log('Dog 1: ' + dogChoice1); // console log that
    numAdder(dogChoice1); // call adder function and pass in dog1 num
  });
  //
  $("#dog2").on("click", function() {
    console.log('Dog 2: ' + dogChoice2);
      numAdder(dogChoice2);
  });
  //
  $("#dog3").on("click", function() {
    console.log('Dog 3: ' + dogChoice3);
      numAdder(dogChoice3);
  });
  //
  $("#dog4").on("click", function() {
    console.log('Dog 4: ' + dogChoice4);
      numAdder(dogChoice4);
  });
//
});
//
function update() {
  // using jquery to display the random number
  $('#numRan').text(computerChoice); // ranom number to guess
  //
  $('#winsDiv').text(wins); // wins
  $('#lossesDiv').text(losses); // loses
  //
  $('#myPoints').text(totalScore); //usernumber
}
//
function compare(compNum, playerNum) {
  if(playerNum === compNum){
    wins++;
  } else if (playerNum > compNum){
    losses++;
    reset();// reset
  }
}
//
function reset() {
  // do someting
}
