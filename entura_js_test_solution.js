// The following function creates a representation of a players board in a game of battleships
// the width and height of the board are defined using the xLength and yLength arguments
function GameBoard (xLength, yLength) {
	this.tiles = [];
	this.shipCount = 0;

	for (var x = 0; x < xLength; x++) {
		for (var y = 0; y < yLength; y++) {
			if (!this.tiles[x]) this.tiles[x] = [];
			this.tiles[x][y] = 0;
		}
	}
}




function addShip(specifiedLength,  nthNumber, nthList, orientation, board) {
  var SHIP_REPRESENTATION = 1;
  //board.tiles[0][0]=1;
  //board.tiles[0][1]=1;
  //board.tiles[0][2]=1;
  for (var i = 0; i < specifiedLength; i++) {
    if (orientation === 'vertical') {
      board.tiles[(nthList-1)+i][nthNumber-1]  = SHIP_REPRESENTATION;
    } else {
      board.tiles[nthList-1][(nthNumber-1)+i] = SHIP_REPRESENTATION;
    }
  } 
  return board.tiles;
  
  
}
var board1 = new GameBoard(10, 10);
var board2 = new GameBoard(10, 10);
var board3 = new GameBoard(10, 10);
var board4 = new GameBoard(10, 10);

console.log(addShip(3, 1, 1, 'horizontal', board1));
console.log(addShip(5, 1, 1, 'horizontal', board2));
console.log(addShip(5, 2, 3, 'horizontal', board3));
console.log(addShip(5, 2, 3, 'vertical', board4));

// once instantiated as above, board.tiles should be the following representation of the board.
// each 0 represents an empty tile on the board.
//
// [
//  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]


/////////////////////////////////////////


// YOUR TASK:
//
// write a function which adds a new ship of a specified length to the board,
// any tiles which a ship is on should be represented by a non-zero, numerical value.
// Feel free to extend and/or improve the GameBoard object however you feel necessary.
//
// You should spend about 30mins on this task, but feel free to take longer if you wish,
// if you are too pushed for time to complete the task, try to have a good idea in your
// mind of how you might approach the task, and why so we can discuss it during your interview.
//
// Do not spend any time on visualising the data stored in the game board as this is a
// purely Javascript challenge.
