var cards = [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13];
var player = [];
var computer = [];
//var til at gemme deal knap når der trykkes på den. skal indtil videre stå til false, men når APP køre skla den stå som true.
var buttonHider = true;

//function der deler cards array op i 2 lige store bunker men blandet. den skjuler også "deal" knap
function dealer() {
  if (buttonHider == true){
    document.getElementById('deal').style.visibility = 'hidden';
    buttonHider = false;
  }
  for (var i = 0; i <= 25; i++) {
    let random = Math.floor(Math.random() * cards.length);
    player.push(cards[random]);
    cards.splice(random, 1);
    random = Math.floor(Math.random() * cards.length);
    computer.push(cards[random]);
    cards.splice(random, 1);
  }
}

//variabler til at holde spillernes nye kortene
var newPlayerCards = [];
var newComputerCards = [];
//function der sætter billeder af kort ind, tager 2 input af spillerkort og computerkort. 
function showCard(playerCard, computerCard) {
  document.getElementById('playercardpic').src = playerCard.image;
  document.getElementById('computercardpic').src = computerCard.image;
}
//function der holde værdien af kortene op imod hinanden og assigner point.
//assigner også de vundne til to nye arrays som så bruges istedet for org. array.
function getCard() {
  var playerCard = player[0];
  var computerCard = computer[0];
  showCard(playerCard, computerCard);
}
function compareCards(){
  if (true) {

  }
}
