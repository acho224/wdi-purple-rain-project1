$(document).ready(function(){
  var J = 11;
  var Q = 12;
  var K = 13;
  var A = 14;
  var suits = ["S", "H", "C", "D"];
  var value = [2,3,4,5,6,7,8,9,10,J,Q,K,A];
  fullDeck = [];
  pot=[]
  playerRemaining=0;
  compRemaining=0;
  compCards=[];
  playerCards=[];

  // Make array of full deck
  for (var i=0; i < suits.length; i++) {
    value.forEach(function(value){
      fullDeck.push(value+suits[i]);
      })
    }
  $('#btnshf').click(shuffleDeck);
  $('#btnnxt').click(compareCards);
  // shuffle cards
  // after shuffling, split the deck in half and push to player/ comp array
  // need a counter for the cards remaining
});


// after splitting cards, set counter to 26 for player and comp
// draw first card (index[0]) from player/ comp array
// set counter -1 for both player/ comp
function compareCards(){
  pCard = playerCards.shift();
  cCard = compCards.shift();
  // potArray.push(pCard, cCard)
  $('#playercardup').html(pCard);
  $('#compcardup').html(cCard);
  if (parseInt(pCard) > parseInt(cCard)){
    playerCards.push(pCard);
    playerCards.push(cCard);
    playerRemaining -=1;
    playerRemaining += 2;
    compRemaining -=1;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);

  } else if (parseInt(cCard) > parseInt(pCard)){
    compCards.push(pCard);
    compCards.push(cCard);
    compRemaining -=1;
    compRemaining +=2;
    playerRemaining -=1;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);
  }
  // else {
  //   return tiebreaker();
  // };

  console.log("Player Remaining: "+ playerRemaining, " Computer Remaining: "+ compRemaining)
  console.log(compCards);
  console.log(playerCards);
};
// function to compare card value
// player with the higher cards wins, card will be pushed to the back of winner's array
// if tie, then "I declare war" and open 3 more cards and compare the 3rd card
// set counter -3 for both player/ comp
// clear cards after pushing to winner's array

function tiebreaker(){
  alert("We have a tie. \n THIS MEANS WAR!!!")
// spit out 3 cards from each player into tie array
// place all 10 cards (inluding "tie" cards) into pot array
// winner will get all 10 cards into their array
// winn
};





function shuffleDeck(){
  var i, k;
  var temp;
  // credit: http:..
  // replace what is currently in position i with what is in position k (randomly chosen), then replace position k with what was in position i (now saved as var temp)
  for (var i=0 ; i < fullDeck.length ; i++){
    var k = Math.floor(Math.random() * fullDeck.length);
    // take each element of the deck array and assign to var temp;
    temp = fullDeck[i];
    fullDeck[i] = fullDeck[k]; // fulldeck[0] = fullDeck[45];
    fullDeck[k] = temp;
  }
  // deal cards to player and computer
  compCards= fullDeck.slice(0,26);
  playerCards=fullDeck.slice(26);
  playerRemaining=26
  compRemaining=26
  console.log("Computer Cards:");
  console.log(compCards);
  console.log("Player Card:");
  console.log(playerCards)
  console.log("Player Remaining: "+ playerRemaining, " Computer Remaining: "+ compRemaining)
  $('#plcount').html(playerRemaining);
  $('#cpcount').html(compRemaining);
}
