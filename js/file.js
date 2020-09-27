var scoreSum = 0;
var startScore = 0;
var currentScore = 0;
var remainingTiles = 100;
var firstGame = true;
//Json to represent scrabble tiles. Taken and modified from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
var ScrabbleTiles = [];
ScrabbleTiles[0] = {
  "letter": "а",
  "value": 1,
  "original-distribution": 9,
  "numberRemaining": 9,
  "image": "images/letterTiles/Scrabble_Tile_A.jpg"
};
ScrabbleTiles[1] = {
  "letter": "б",
  "value": 3,
  "original-distribution": 7,
  "numberRemaining": 7,
  "image": "images/letterTiles/Scrabble_Tile_B.jpg"
};
ScrabbleTiles[2] = {
  "letter": "с",
  "value": 5,
  "original-distribution": 5,
  "numberRemaining": 5,
  "image": "images/letterTiles/Scrabble_Tile_C.jpg"
};
ScrabbleTiles[3] = {
  "letter": "ч",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_CH.jpg"
};
ScrabbleTiles[4] = {
  "letter": "д",
  "value": 5,
  "original-distribution": 5,
  "numberRemaining": 5,
  "image": "images/letterTiles/Scrabble_Tile_D.jpg"
};
ScrabbleTiles[5] = {
  "letter": "э",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_E.jpg"
};
ScrabbleTiles[6] = {
  "letter": "ә",
  "value": 1,
  "original-distribution": 9,
  "numberRemaining": 9,
  "image": "images/letterTiles/Scrabble_Tile_EH.jpg"
};
ScrabbleTiles[7] = {
  "letter": "ф",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_F.jpg"
};
ScrabbleTiles[8] = {
  "letter": "г",
  "value": 5,
  "original-distribution": 5,
  "numberRemaining": 5,
  "image": "images/letterTiles/Scrabble_Tile_G.jpg"
};
ScrabbleTiles[9] = {
  "letter": "һ",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_H.jpg"
};
ScrabbleTiles[10] = {
  "letter": "и",
  "value": 4,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "images/letterTiles/Scrabble_Tile_I.jpg"
};
ScrabbleTiles[11] = {
  "letter": "й",
  "value": 5,
  "original-distribution": 5,
  "numberRemaining": 5,
  "image": "images/letterTiles/Scrabble_Tile_IKRATKAYA.jpg"
};
ScrabbleTiles[12] = {
  "letter": "ы",
  "value": 4,
  "original-distribution": 7,
  "numberRemaining": 7,
  "image": "images/letterTiles/Scrabble_Tile_IU.jpg"
};
ScrabbleTiles[13] = {
  "letter": "к",
  "value": 3,
  "original-distribution": 7,
  "numberRemaining": 7,
  "image": "images/letterTiles/Scrabble_Tile_K.jpg"
};
ScrabbleTiles[14] = {
  "letter": "л",
  "value": 3,
  "original-distribution": 7,
  "numberRemaining": 7,
  "image": "images/letterTiles/Scrabble_Tile_L.jpg"
};
ScrabbleTiles[15] = {
  "letter": "м",
  "value": 4,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "images/letterTiles/Scrabble_Tile_M.jpg"
};
ScrabbleTiles[16] = {
  "letter": "ь",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_MZ.jpg"
};
ScrabbleTiles[17] = {
  "letter": "н",
  "value": 3,
  "original-distribution": 7,
  "numberRemaining": 7,
  "image": "images/letterTiles/Scrabble_Tile_N.jpg"
};
ScrabbleTiles[18] = {
  "letter": "ң",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_NN.jpg"
};
ScrabbleTiles[19] = {
  "letter": "ө",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_O-.jpg"
};
ScrabbleTiles[20] = {
  "letter": "о",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_O.jpg"
};
ScrabbleTiles[21] = {
  "letter": "п",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_P.jpg"
};
ScrabbleTiles[22] = {
  "letter": "р",
  "value": 4,
  "original-distribution": 6,
  "numberRemaining": 6,
  "image": "images/letterTiles/Scrabble_Tile_R.jpg"
};
ScrabbleTiles[23] = {
  "letter": "ш",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_SH.jpg"
};
ScrabbleTiles[24] = {
  "letter": "щ",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_SHH.jpg"
};
ScrabbleTiles[25] = {
  "letter": "т",
  "value": 5,
  "original-distribution": 5,
  "numberRemaining": 5,
  "image": "images/letterTiles/Scrabble_Tile_T.jpg"
};
ScrabbleTiles[26] = {
  "letter": "ц",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_TS.jpg"
};

ScrabbleTiles[27] = {
  "letter": "ъ",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_TZ.jpg"
};

ScrabbleTiles[28] = {
  "letter": "у",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_U.jpg"
};

ScrabbleTiles[29] = {
  "letter": "ү",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_UU.jpg"
};

ScrabbleTiles[30] = {
  "letter": "в",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_V.jpg"
};

ScrabbleTiles[31] = {
  "letter": "х",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_X.jpg"
};

ScrabbleTiles[32] = {
  "letter": "я",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_YA.jpg"
};

ScrabbleTiles[33] = {
  "letter": "е",
  "value": 2,
  "original-distribution": 8,
  "numberRemaining": 8,
  "image": "images/letterTiles/Scrabble_Tile_YEH.jpg"
};

ScrabbleTiles[34] = {
  "letter": "ю",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "/images/letterTiles/Scrabble_Tile_YU.jpg"
};

ScrabbleTiles[35] = {
  "letter": "з",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_Z.jpg"
};

ScrabbleTiles[36] = {
  "letter": "ж",
  "value": 10,
  "original-distribution": 1,
  "numberRemaining": 1,
  "image": "images/letterTiles/Scrabble_Tile_ZH.jpg"
};

ScrabbleTiles[37] = {
  "letter": "җ",
  "value": 8,
  "original-distribution": 2,
  "numberRemaining": 2,
  "image": "images/letterTiles/Scrabble_Tile_ZHH.jpg"
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
      if ($(this).hasClass("occupied") || $(ui.draggable).hasClass("fixed")) {
        $(ui.draggable).draggable("option", "revert", true);
        $(ui.draggable)[0].classList.remove("played", "doubleLetterScore", "doubleWordScore", "tripleLetterScore", "tripleWordScore", "fiixed");
      } else {
      	var letter = String($(ui.draggable)[0].getAttribute('letter'));
      	var score = parseInt($(ui.draggable)[0].getAttribute('score'));
        collectWord(letter);
        startScore = startScore + score;
        if (checkWord() == true){
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
          // //Update the score for the current word dynamically
          $(ui.draggable).addClass("fixed");
          calculateScore(event, ui, false);
          word = "";
        }




        //Otherwise track which tile it was placed on
        // $(this).addClass("occupied");
        // $(ui.draggable).addClass("played");
        // if ($(this)[0].classList.contains('doubleLetter')) {
        //   $(ui.draggable).addClass("doubleLetterScore");
        // }
        // if ($(this)[0].classList.contains('doubleWord')) {
        //   $(ui.draggable).addClass("doubleWordScore");
        // }
        // if ($(this)[0].classList.contains('tripleLetter')) {
        //   $(ui.draggable).addClass("tripleLetterScore");
        // }
        // if ($(this)[0].classList.contains('tripleWord')) {
        //   $(ui.draggable).addClass("tripleWordScore");
        // }
        // calculateScore(event, ui, false);
        
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

word = "";

function collectWord(letter, score){
	if (word == ""){
		startScore = 0;
	}
	word+= letter; 
   
}

function checkWord(){
  for (wordFromDic in tatar_dict){
    if(word===tatar_dict[wordFromDic]){
      return true;
    }
    else{
      return false;
    }
  }  
}


//Function to calculate Score. Boolean argument removeTile for if the calculation is on a tile being  on the board or being removed from the board.
function calculateScore(event, ui, removedTile) {

  var tileScore = parseInt($(ui.draggable)[0].getAttribute('score'));
  startScore = startScore + tileScore;
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
        currentScore = currentScore + 2 * tileScore ;
      } else if ($(ui.draggable)[0].classList.contains('tripleLetterScore')) {
        currentScore = currentScore + 3 * tileScore;
      } else if ($(ui.draggable)[0].classList.contains('doubleWordScore')) {
        currentScore = (currentScore + tileScore) * 2;
      } else if ($(ui.draggable)[0].classList.contains('tripleWordScore')) {
        currentScore = (currentScore + tileScore) * 3;
      } else {
        currentScore = currentScore + tileScore ;
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
  if (firstGame == true){
  	var tileNumber = [13,12,0,11,35,10,25,0,15,8];
  	firstGame = false;
  	var loopSentinel = Math.min(hand.length, remainingTiles);
  	for (var i = 0; i < loopSentinel; i++) {
    	if (ScrabbleTiles[tileNumber[i]].numberRemaining != 0) {

      		//GIves tile new image
      
      		hand[i].style.backgroundImage = "url(" + ScrabbleTiles[tileNumber[i]].image + ")";
      		//resets position of tile
      		hand[i].style.left = null;
      		hand[i].style.right = null;
      		hand[i].style.top = null;
      		hand[i].style.bottom = null;
      		hand[i].setAttribute('score', ScrabbleTiles[tileNumber[i]].value);
      		hand[i].setAttribute('letter', ScrabbleTiles[tileNumber[i]].letter)
      		ScrabbleTiles[tileNumber[i]].numberRemaining--;
      		remainingTiles--;
      		}
      	}		
  	
  }else{

  		var loopSentinel = Math.min(hand.length, remainingTiles);
  		for (var i = 0; i < loopSentinel; i++) {

    	//Choose a random letter to assign
    	var tileNumber = Math.floor(Math.random() * 27)
    	if (ScrabbleTiles[tileNumber].numberRemaining != 0) {

      	//GIves tile new image
      
        hand[i].style.backgroundImage = "url(" + ScrabbleTiles[tileNumber].image + ")";

      	//resets position of tile
        hand[i].style.left = null;
        hand[i].style.right = null;
        hand[i].style.top = null;
        hand[i].style.bottom = null;

        hand[i].setAttribute('score', ScrabbleTiles[tileNumber].value);
      	hand[i].setAttribute('letter', ScrabbleTiles[tileNumber].letter)
      	ScrabbleTiles[tileNumber].numberRemaining--;
      	remainingTiles--;
    	} else {
      	//If the random function chose a letter that is no longer in the bag, do over
      		i--;
    		}
    	}	
    }	
};

//Function for when starting a new round i.e. clear the board, draw new tiles out of the bag, and save total score
function newRound(){
  startGame = false;
  dealTiles(false);
  scoreSum = scoreSum + currentScore;
  currentScore = 0;
  enterScores();
}

//Function to handle updating scores
function enterScores(){
  document.getElementById("currentScore").innerHTML = startScore;
  document.getElementById("totalScore").innerHTML = scoreSum;
}

//Function to reset the array when tiles are removed from the board and put back into the bag
function resetBag() {
  ScrabbleTiles[0] = {
    "letter": "а",
    "value": 1,
    "original-distribution": 9,
    "numberRemaining": 9,
    "image": "images/letterTiles/Scrabble_Tile_A.jpg"
  };
  ScrabbleTiles[1] = {
    "letter": "б",
    "value": 3,
    "original-distribution": 7,
    "numberRemaining": 7,
    "image": "images/letterTiles/Scrabble_Tile_B.jpg"
  };
  ScrabbleTiles[2] = {
    "letter": "с",
    "value": 5,
    "original-distribution": 5,
    "numberRemaining": 5,
    "image": "images/letterTiles/Scrabble_Tile_C.jpg"
  };
  ScrabbleTiles[3] = {
    "letter": "ч",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_CH.jpg"
  };
  ScrabbleTiles[4] = {
    "letter": "д",
    "value": 5,
    "original-distribution": 5,
    "numberRemaining": 5,
    "image": "images/letterTiles/Scrabble_Tile_D.jpg"
  };
  ScrabbleTiles[5] = {
    "letter": "э",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_E.jpg"
  };
  ScrabbleTiles[6] = {
    "letter": "ә",
    "value": 1,
    "original-distribution": 9,
    "numberRemaining": 9,
    "image": "images/letterTiles/Scrabble_Tile_EH.jpg"
  };
  ScrabbleTiles[7] = {
    "letter": "ф",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_F.jpg"
  };
  ScrabbleTiles[8] = {
    "letter": "г",
    "value": 5,
    "original-distribution": 5,
    "numberRemaining": 5,
    "image": "images/letterTiles/Scrabble_Tile_G.jpg"
  };
  ScrabbleTiles[9] = {
    "letter": "һ",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_H.jpg"
  };
  ScrabbleTiles[10] = {
    "letter": "и",
    "value": 4,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "images/letterTiles/Scrabble_Tile_I.jpg"
  };
  ScrabbleTiles[11] = {
    "letter": "й",
    "value": 5,
    "original-distribution": 5,
    "numberRemaining": 5,
    "image": "images/letterTiles/Scrabble_Tile_IKRATKAYA.jpg"
  };
  ScrabbleTiles[12] = {
    "letter": "ы",
    "value": 4,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "images/letterTiles/Scrabble_Tile_IU.jpg"
  };
  ScrabbleTiles[13] = {
    "letter": "к",
    "value": 3,
    "original-distribution": 7,
    "numberRemaining": 7,
    "image": "images/letterTiles/Scrabble_Tile_K.jpg"
  };
  ScrabbleTiles[14] = {
    "letter": "л",
    "value": 3,
    "original-distribution": 7,
    "numberRemaining": 7,
    "image": "images/letterTiles/Scrabble_Tile_L.jpg"
  };
  ScrabbleTiles[15] = {
    "letter": "м",
    "value": 4,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "images/letterTiles/Scrabble_Tile_M.jpg"
  };
  ScrabbleTiles[16] = {
    "letter": "ь",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_MZ.jpg"
  };
  ScrabbleTiles[17] = {
    "letter": "н",
    "value": 3,
    "original-distribution": 7,
    "numberRemaining": 7,
    "image": "images/letterTiles/Scrabble_Tile_N.jpg"
  };
  ScrabbleTiles[18] = {
    "letter": "ң",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_NN.jpg"
  };
  ScrabbleTiles[19] = {
    "letter": "ө",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_O-.jpg"
  };
  ScrabbleTiles[20] = {
    "letter": "о",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_O.jpg"
  };
  ScrabbleTiles[21] = {
    "letter": "п",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_P.jpg"
  };
  ScrabbleTiles[22] = {
    "letter": "р",
    "value": 4,
    "original-distribution": 6,
    "numberRemaining": 6,
    "image": "images/letterTiles/Scrabble_Tile_R.jpg"
  };
  ScrabbleTiles[23] = {
    "letter": "ш",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_SH.jpg"
  };
  ScrabbleTiles[24] = {
    "letter": "щ",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_SHH.jpg"
  };
  ScrabbleTiles[25] = {
    "letter": "т",
    "value": 5,
    "original-distribution": 5,
    "numberRemaining": 5,
    "image": "images/letterTiles/Scrabble_Tile_T.jpg"
  };
  ScrabbleTiles[26] = {
    "letter": "ц",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_TS.jpg"
  };
  
  ScrabbleTiles[27] = {
    "letter": "ъ",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_TZ.jpg"
  };
  
  ScrabbleTiles[28] = {
    "letter": "у",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_U.jpg"
  };
  
  ScrabbleTiles[29] = {
    "letter": "ү",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_UU.jpg"
  };
  
  ScrabbleTiles[30] = {
    "letter": "в",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_V.jpg"
  };
  
  ScrabbleTiles[31] = {
    "letter": "х",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_X.jpg"
  };
  
  ScrabbleTiles[32] = {
    "letter": "я",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_YA.jpg"
  };
  
  ScrabbleTiles[33] = {
    "letter": "е",
    "value": 2,
    "original-distribution": 8,
    "numberRemaining": 8,
    "image": "images/letterTiles/Scrabble_Tile_YEH.jpg"
  };
  
  ScrabbleTiles[34] = {
    "letter": "ю",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_YU.jpg"
  };
  
  ScrabbleTiles[35] = {
    "letter": "з",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_Z.jpg"
  };
  
  ScrabbleTiles[36] = {
    "letter": "ж",
    "value": 10,
    "original-distribution": 1,
    "numberRemaining": 1,
    "image": "images/letterTiles/Scrabble_Tile_ZH.jpg"
  };
  
  ScrabbleTiles[37] = {
    "letter": "җ",
    "value": 8,
    "original-distribution": 2,
    "numberRemaining": 2,
    "image": "images/letterTiles/Scrabble_Tile_ZHH.jpg"
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
