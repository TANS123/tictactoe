var currentPlayer = "O";
var totalTurns = 0;
var endGame = false;


function performLogic(buttonId, tileId) {

  if (endGame === true) {
  return
  }
    add();
  $(buttonId).hide();
  $(tileId).text(currentPlayer);
  return player();
}
function player(ex, oh) {
  if (currentPlayer === 'X') {
  currentPlayer = 'O';
} else {
  currentPlayer = 'X';
}
}
function add() {
  totalTurns = totalTurns+1;
  console.log(totalTurns);
   if (totalTurns === 9) {
     $('h1').text('It\'s a draw!');
      endGame = true;
   }
}

// Implement behavior that will end the game when a player wins. First write a function with 3 parameters of the tileIds, and return if the value of the each of the tileIds are equal to the current player

function tileId (tileA, tileB, tileC) {
  if ($(tileA).val() === $(tileB).val()) {
    endGame = true;
  }
}




$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

