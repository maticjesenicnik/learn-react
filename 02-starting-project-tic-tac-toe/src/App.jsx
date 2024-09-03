import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handlePlayerChange = (rowIndex, colIndex) => {
    setActivePlayer(currentlyActivePlayer => {
      return currentlyActivePlayer === "X" ? "O" : "X";
    });

    setGameTurns(previousGameTurns => {
      let currentPlayer = "X";

      if (previousGameTurns.length > 0 && previousGameTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [{ player: currentPlayer, square: { row: rowIndex, col: colIndex } }, ...previousGameTurns];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onPlayerTurn={handlePlayerChange} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
