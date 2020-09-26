//        File: /usr/cs/undergrad/2020/yzhu/public_html/js/file.js
//        COMP 4610 Assignment: Scrabble
//        Yinghui Zhu, Umass Lowell Computer Science, yinghui_zhu@student.uml.edu
//        Copy (c) 2019 by Yinghui Zhu. All s reserved.
//        Updated December 18th 2019

//        This file is the javascript for a scrabble game
//        All images taken from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Tiles.html and https://europeisnotdead.com/european-longest-words/

var scoreSum = 0;
var currentScore = 0;
var remainingTiles = 100;

//Json to represent scrabble tiles. Taken and modified from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
var ScrabbleTiles = [];
ScrabbleTiles[0] = {
  "letter": "A",
  "value": 1,
  "original-distribution": 9,
  "numberRemaining": 9,
  "image": "img/scrabble/Scrabble_Tile_A.jpg"
};
ScrabbleTiles[1] = {
  "letter": "B",
  "value": 3,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_B.jpg"
};
ScrabbleTiles[2] = {
  "letter": "C",
  "value": 3,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_C.jpg"
};
ScrabbleTiles[3] = {
  "letter": "D",
  "value": 2,
  "original-distribution": 4,
  "numberRemaining": 4,
  "image": "img/scrabble/Scrabble_Tile_D.jpg"
};
ScrabbleTiles[4] = {
  "letter": "E",
  "value": 1,
  "original-distribution": 12,
  "numberRemaining": 12,
  "image": "img/scrabble/Scrabble_Tile_E.jpg"
};
ScrabbleTiles[5] = {
  "letter": "F",
  "value": 4,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_F.jpg"
};
ScrabbleTiles[6] = {
  "letter": "G",
  "value": 2,
  "original-distribution": 3,
  "numberRemaining": 3,
  "image": "img/scrabble/Scrabble_Tile_G.jpg"
};
ScrabbleTiles[7] = {
  "letter": "H",
  "value": 4,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_H.jpg"
};
ScrabbleTiles[8] = {
  "letter": "I",
  "value": 1,
  "original-distribution": 9,
  "numberRemaining": 9,
  "image": "img/scrabble/Scrabble_Tile_I.jpg"
};
ScrabbleTiles[9] = {
  "letter": "J",
  "value": 8,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "img/scrabble/Scrabble_Tile_J.jpg"
};
ScrabbleTiles[10] = {
  "letter": "K",
  "value": 5,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "img/scrabble/Scrabble_Tile_K.jpg"
};
ScrabbleTiles[11] = {
  "letter": "L",
  "value": 1,
  "original-distribution": 4,
  "numberRemaining": 4,
  "image": "img/scrabble/Scrabble_Tile_L.jpg"
};
ScrabbleTiles[12] = {
  "letter": "M",
  "value": 3,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_M.jpg"
};
ScrabbleTiles[13] = {
  "letter": "N",
  "value": 1,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "img/scrabble/Scrabble_Tile_N.jpg"
};
ScrabbleTiles[14] = {
  "letter": "O",
  "value": 1,
  "original-distribution": 8,
  "numberRemaining": 8,
  "image": "img/scrabble/Scrabble_Tile_O.jpg"
};
ScrabbleTiles[15] = {
  "letter": "P",
  "value": 3,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_P.jpg"
};
ScrabbleTiles[16] = {
  "letter": "Q",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "img/scrabble/Scrabble_Tile_Q.jpg"
};
ScrabbleTiles[17] = {
  "letter": "R",
  "value": 1,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "img/scrabble/Scrabble_Tile_R.jpg"
};
ScrabbleTiles[18] = {
  "letter": "S",
  "value": 1,
  "original-distribution": 4,
  "numberRemaining": 4,
  "image": "img/scrabble/Scrabble_Tile_S.jpg"
};
ScrabbleTiles[19] = {
  "letter": "T",
  "value": 1,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "img/scrabble/Scrabble_Tile_T.jpg"
};
ScrabbleTiles[20] = {
  "letter": "U",
  "value": 1,
  "original-distribution": 4,
  "numberRemaining": 4,
  "image": "img/scrabble/Scrabble_Tile_U.jpg"
};
ScrabbleTiles[21] = {
  "letter": "V",
  "value": 4,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_V.jpg"
};
ScrabbleTiles[22] = {
  "letter": "W",
  "value": 4,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_W.jpg"
};
ScrabbleTiles[23] = {
  "letter": "X",
  "value": 8,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "img/scrabble/Scrabble_Tile_X.jpg"
};
ScrabbleTiles[24] = {
  "letter": "Y",
  "value": 4,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile_Y.jpg"
};
ScrabbleTiles[25] = {
  "letter": "Z",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "img/scrabble/Scrabble_Tile_Z.jpg"
};
ScrabbleTiles[26] = {
  "letter": "_",
  "value": 0,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "img/scrabble/Scrabble_Tile__.jpg"
};


$(function() {
  $(".letter").draggable({
    snap: ".board.tile",
    snapMode: "inner",
    snapTolerance: 50,
    revertDuration: 0
  });

  //Taken and modified from https://jqueryui.com/droppable/#accepted-elements and https://jqueryui.com/draggable/#revert
  $(".board").droppable({
    tolerance: "fit",
    drop: function(event, ui) {
      //Remove the revert option that was set when tile was previously dropped on an occupied board tile.
      $(ui.draggable).draggable("option", "revert", false);

      //If tile is dropped on a board piece that is already occupied, revert it's location.
      if ($(this).hasClass("occupied")) {
        $(ui.draggable).draggable("option", "revert", true);
        $(ui.draggable)[0].classList.remove("played", "doubleLetterScore", "doubleWordScore", "tripleLetterScore", "tripleWordScore");
      } else {
        //Otherwise track which tile it was placed on
        $(this).addClass("occupied");
        $(ui.draggable).addClass("played");
        if ($(this)[0].classList.contains('doubleLetter')) {
          $(ui.draggable).addClass("doubleLetterScore");
        }
        if ($(this)[0].classList.contains('doubleWord')) {
          $(ui.draggable).addClass("doubleWordScore");
        }
        if ($(this)[0].classList.contains('tripleLetter')) {
          $(ui.draggable).addClass("tripleLetterScore");
        }
        if ($(this)[0].classList.contains('tripleWord')) {
          $(ui.draggable).addClass("tripleWordScore");
        }
        //Update the score for the current word dynamically
        calculateScore(event, ui, false);
      }
    },
    //When a tile is removed from the board, remove class elements that were added when it was placed, and recalculate score.
    out: function(event, ui) {
      $(this)[0].classList.remove("occupied");
      calculateScore(event, ui, true);
      $(ui.draggable)[0].classList.remove("played", "doubleLetterScore", "doubleWordScore", "tripleLetterScore", "tripleWordScore");
      $(ui.draggable).draggable("option", "revert", false);

    }
  });

  //Deals first hand
  dealTiles(true);
});


//Function to calculate Score. Boolean argument removeTile for if the calculation is on a tile being placed on the board or being removed from the board.
function calculateScore(event, ui, removedTile) {

  var tileScore = parseInt($(ui.draggable)[0].getAttribute('score'));
  if ((ui.draggable)[0].classList.contains('played')) {
    if (removedTile == true) {
      if ($(ui.draggable)[0].classList.contains('doubleLetterScore')) {
        currentScore = currentScore - 2 * tileScore;
      } else if ($(ui.draggable)[0].classList.contains('tripleLetterScore')) {
        currentScore = currentScore - 3 * tileScore;
      } else if ($(ui.draggable)[0].classList.contains('doubleWordScore')) {
        currentScore = (currentScore - tileScore * 2) / 2;
      } else if ($(ui.draggable)[0].classList.contains('tripleWordScore')) {
        currentScore = (currentScore - tileScore * 3) / 3;
      } else {
        currentScore = currentScore - tileScore;
      }
    } else if (removedTile == false) {
      if ($(ui.draggable)[0].classList.contains('doubleLetterScore')) {
        currentScore = currentScore + 2 * tileScore;
      } else if ($(ui.draggable)[0].classList.contains('tripleLetterScore')) {
        currentScore = currentScore + 3 * tileScore;
      } else if ($(ui.draggable)[0].classList.contains('doubleWordScore')) {
        currentScore = (currentScore + tileScore) * 2;
      } else if ($(ui.draggable)[0].classList.contains('tripleWordScore')) {
        currentScore = (currentScore + tileScore) * 3;
      } else {
        currentScore = currentScore + tileScore;
      }
    }
  }

  enterScores();
}


//Function to randomly generate scrabble tiles in player's hand. Boolean argument firstHand for if it's the first hand being dealt or subsequent mulligans.
function dealTiles(firstHand) {
  var hand;

  //If this is the first hand dealt, apply to all tiles. Otherwise, clear and only redeal tiles that are on the board
  if (firstHand == true) {
    hand = document.querySelectorAll('.letter');
  } else if (firstHand == false) {
    hand = document.querySelectorAll('.played')
    var handPlayed = document.getElementsByClassName('played');
    while (handPlayed.length) {
      handPlayed[0].classList.remove("played");
    }
    var board = document.getElementsByClassName("occupied");
    while (board.length) {
      board[0].classList.remove("occupied");
    }
  }

  var loopSentinel = Math.min(hand.length, remainingTiles);
  for (var i = 0; i < loopSentinel; i++) {

    //Choose a random letter to assign
    var tileNumber = Math.floor(Math.random() * 27)
    if (ScrabbleTiles[tileNumber].numberRemaining != 0) {

      //GIves tile new image
      hand[i].style.backgroundImage = "url('images/letterTiles/Scrabble_Tile_" + ScrabbleTiles[tileNumber].letter + ".jpg')";

      //resets position of tile
      hand[i].style.left = null;
      hand[i].style.right = null;
      hand[i].style.top = null;
      hand[i].style.bottom = null;

      hand[i].setAttribute('score', ScrabbleTiles[tileNumber].value);
      ScrabbleTiles[tileNumber].numberRemaining--;
      remainingTiles--;
    } else {
      //If the random function chose a letter that is no longer in the bag, do over
      i--;
    }
  }
};

//Function for when starting a new round i.e. clear the board, draw new tiles out of the bag, and save total score
function newRound(){
  dealTiles(false);
  scoreSum = scoreSum + currentScore;
  currentScore = 0;
  enterScores();
}

//Function to handle updating scores
function enterScores(){
  document.getElementById("currentScore").innerHTML = currentScore;
  document.getElementById("totalScore").innerHTML = scoreSum;
}

//Function to reset the array when tiles are removed from the board and put back into the bag
function resetBag() {
  ScrabbleTiles[0] = {
    "letter": "A",
    "value": 1,
    "original-distribution": 9,
    "numberRemaining": 9,
    "image": "img/scrabble/Scrabble_Tile_A.jpg"
  };
  ScrabbleTiles[1] = {
    "letter": "B",
    "value": 3,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_B.jpg"
  };
  ScrabbleTiles[2] = {
    "letter": "C",
    "value": 3,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_C.jpg"
  };
  ScrabbleTiles[3] = {
    "letter": "D",
    "value": 2,
    "original-distribution": 4,
    "numberRemaining": 4,
    "image": "img/scrabble/Scrabble_Tile_D.jpg"
  };
  ScrabbleTiles[4] = {
    "letter": "E",
    "value": 1,
    "original-distribution": 12,
    "numberRemaining": 12,
    "image": "img/scrabble/Scrabble_Tile_E.jpg"
  };
  ScrabbleTiles[5] = {
    "letter": "F",
    "value": 4,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_F.jpg"
  };
  ScrabbleTiles[6] = {
    "letter": "G",
    "value": 2,
    "original-distribution": 3,
    "numberRemaining": 3,
    "image": "img/scrabble/Scrabble_Tile_G.jpg"
  };
  ScrabbleTiles[7] = {
    "letter": "H",
    "value": 4,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_H.jpg"
  };
  ScrabbleTiles[8] = {
    "letter": "I",
    "value": 1,
    "original-distribution": 9,
    "numberRemaining": 9,
    "image": "img/scrabble/Scrabble_Tile_I.jpg"
  };
  ScrabbleTiles[9] = {
    "letter": "J",
    "value": 8,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "img/scrabble/Scrabble_Tile_J.jpg"
  };
  ScrabbleTiles[10] = {
    "letter": "K",
    "value": 5,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "img/scrabble/Scrabble_Tile_K.jpg"
  };
  ScrabbleTiles[11] = {
    "letter": "L",
    "value": 1,
    "original-distribution": 4,
    "numberRemaining": 4,
    "image": "img/scrabble/Scrabble_Tile_L.jpg"
  };
  ScrabbleTiles[12] = {
    "letter": "M",
    "value": 3,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_M.jpg"
  };
  ScrabbleTiles[13] = {
    "letter": "N",
    "value": 1,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "img/scrabble/Scrabble_Tile_N.jpg"
  };
  ScrabbleTiles[14] = {
    "letter": "O",
    "value": 1,
    "original-distribution": 8,
    "numberRemaining": 8,
    "image": "img/scrabble/Scrabble_Tile_O.jpg"
  };
  ScrabbleTiles[15] = {
    "letter": "P",
    "value": 3,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_P.jpg"
  };
  ScrabbleTiles[16] = {
    "letter": "Q",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "img/scrabble/Scrabble_Tile_Q.jpg"
  };
  ScrabbleTiles[17] = {
    "letter": "R",
    "value": 1,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "img/scrabble/Scrabble_Tile_R.jpg"
  };
  ScrabbleTiles[18] = {
    "letter": "S",
    "value": 1,
    "original-distribution": 4,
    "numberRemaining": 4,
    "image": "img/scrabble/Scrabble_Tile_S.jpg"
  };
  ScrabbleTiles[19] = {
    "letter": "T",
    "value": 1,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "img/scrabble/Scrabble_Tile_T.jpg"
  };
  ScrabbleTiles[20] = {
    "letter": "U",
    "value": 1,
    "original-distribution": 4,
    "numberRemaining": 4,
    "image": "img/scrabble/Scrabble_Tile_U.jpg"
  };
  ScrabbleTiles[21] = {
    "letter": "V",
    "value": 4,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_V.jpg"
  };
  ScrabbleTiles[22] = {
    "letter": "W",
    "value": 4,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_W.jpg"
  };
  ScrabbleTiles[23] = {
    "letter": "X",
    "value": 8,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "img/scrabble/Scrabble_Tile_X.jpg"
  };
  ScrabbleTiles[24] = {
    "letter": "Y",
    "value": 4,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_Y.jpg"
  };
  ScrabbleTiles[25] = {
    "letter": "Z",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "img/scrabble/Scrabble_Tile_Z.jpg"
  };
  ScrabbleTiles[26] = {
    "letter": "_",
    "value": 0,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "img/scrabble/Scrabble_Tile_Blank.jpg"
  };
}

//Handles starting a brand new game
function newGame() {
  resetBag();
  dealTiles(true);
  scoreSum = 0;
  currentScore = 0;
  location.reload();
}
