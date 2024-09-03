import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./utils/derivatives";
import { PLAYERS } from "./utils/constants";

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onPlayerTurn={handlePlayerTurn} turns={gameTurns} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
