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
  tieCards=[];

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
  $('#playerwarzone, #compwarzone').hide();
  pCard = playerCards.shift();
  cCard = compCards.shift();
  $('#playercardup').css("background-image", "url('images/cards/"+ pCard +".png')");
  $('#compcardup').css("background-image", "url('images/cards/"+ cCard +".png')");
  if (parseInt(pCard) > parseInt(cCard)){
    $('#winnerstatus h3').html("Player Wins");
    $('#winnerstatus').fadeIn('slow');
    $('#winnerstatus').fadeOut('slow');
    playerCards.push(pCard);
    playerCards.push(cCard);
    playerRemaining -=1;
    playerRemaining += 2;
    compRemaining -=1;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);

  } else if (parseInt(cCard) > parseInt(pCard)){
    $('#winnerstatus h3').html("Computer Wins");
    $('#winnerstatus').fadeIn('slow');
    $('#winnerstatus').fadeOut('slow');
    compCards.push(pCard);
    compCards.push(cCard);
    compRemaining -=1;
    compRemaining +=2;
    playerRemaining -=1;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);
  } else {
    return tiebreaker(pCard,cCard);
  };
  console.log("Player Remaining: "+ playerRemaining, " Computer Remaining: "+ compRemaining)
  console.log(compCards);
  console.log(playerCards);
};
// function to compare card value
// player with the higher cards wins, card will be pushed to the back of winner's array
// if tie, then "I declare war" and open 3 more cards and compare the 3rd card
// set counter -3 for both player/ comp
// clear cards after pushing to winner's array

function tiebreaker(pFirstCard,cFirstCard){
  alert("We have a tie. \n THIS MEANS WAR!!!");
  var compWarCards = compCards.splice(0,3);
  var playerWarCards = playerCards.splice(0,3);
  var hiddenWarCards = compWarCards.concat(playerWarCards);
  console.log(hiddenWarCards);
  cLastWarCard = compCards.shift();
  pLastWarCard = playerCards.shift();
  $('#compwarcard').html(cLastWarCard);
  $('#playerwarcard').html(pLastWarCard);

  $('#playerwarzone, #compwarzone').css('display','block');

  if (parseInt(pLastWarCard) > parseInt(cLastWarCard)){
    $('#winnerstatus h3').html("Player Wins");
    $('#winnerstatus').fadeIn('slow');
    $('#winnerstatus').fadeOut('slow');
    playerCards = playerCards.concat(hiddenWarCards);
    playerCards.push(pLastWarCard, cLastWarCard, pFirstCard, cFirstCard);
    playerRemaining -=5;
    playerRemaining +=10;
    compRemaining -=5;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);
  } else if (parseInt(cLastWarCard) > parseInt(pLastWarCard)){
    $('#winnerstatus h3').html("Computer Wins");
    $('#winnerstatus').fadeIn('slow');
    $('#winnerstatus').fadeOut('slow');
    compCards = compCards.concat(hiddenWarCards);
    compCards.push(pLastWarCard, cLastWarCard, pFirstCard, cFirstCard);
    compRemaining -=5;
    compRemaining += 10;
    playerRemaining -=5;
    $('#plcount').html(playerRemaining);
    $('#cpcount').html(compRemaining);
  }

// spit out 3 cards from each player into tieCards array
// place all 10 cards (inluding "tie" cards) into pot array
// winner will get all 10 cards into their array

};



function shuffleDeck(){
  $('#playerwarzone, #compwarzone').hide();
  $('#playercardup').html(' ');
  $('#compcardup').html(' ');
  var i, k;
  var temp;
  // credit: http://www.brainjar.com/js/cards/default2.asp
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
