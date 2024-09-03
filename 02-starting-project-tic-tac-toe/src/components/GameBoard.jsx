import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [playerSymbol, setPlayerSymbol] = useState("X");

  const handlePlayerTurn = (rowIndex, colIndex) => {
    setGameBoard(previousBoardGame => {
      const updatedGameBoard = [...previousBoardGame.map(innerArray => [...innerArray])];
      updatedGameBoard[rowIndex][colIndex] = playerSymbol;
      return updatedGameBoard;
    });

    setPlayerSymbol(previousPlayerSymbol => {
      return previousPlayerSymbol === "X" ? "O" : "X";
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handlePlayerTurn(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
