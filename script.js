$(document).ready(function(){
var J = 11;
var Q = 12;
var K = 13;
var A = 14;
var suits = ["S", "H", "C", "D"];
var value = [2,3,4,5,6,7,8,9,10,J,Q,K,A];



fullDeck = [];
shuffledDeck=[];


// Make array of full deck
for (var i=0; i < suits.length; i++) {
  value.forEach(function(value){
    fullDeck.push(value+suits[i]);
    })
  }
$('#btnshf').click (shuffleDeck)












});

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
  console.log(fullDeck);
}
