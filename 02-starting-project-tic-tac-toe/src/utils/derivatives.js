import { WINNING_COMBINATIONS } from "./winning-combinations";
import { INITIAL_GAME_BOARD } from "./constants";

export const deriveActivePlayer = gameTurns => {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
};

export const deriveWinner = (gameBoard, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};

export const deriveGameBoard = gameTurns => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];

  gameTurns.forEach(turn => {
    const { player, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return gameBoard;
};
