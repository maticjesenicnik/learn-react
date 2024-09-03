import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let winner, draw;
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

  gameTurns.forEach(turn => {
    const { player, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    } else if (gameTurns.length === 9) {
      draw = true;
    }
  }

  const handlePlayerTurn = (rowIndex, colIndex) => {
    setGameTurns(previousGameTurns => {
      const currentPlayer = deriveActivePlayer(previousGameTurns);
      const updatedTurns = [{ player: currentPlayer, square: { row: rowIndex, col: colIndex } }, ...previousGameTurns];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (player, name) => {
    setPlayers(previousPlayerNames => {
      return { ...previousPlayerNames, [player]: name };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onPlayerTurn={handlePlayerTurn} turns={gameTurns} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
