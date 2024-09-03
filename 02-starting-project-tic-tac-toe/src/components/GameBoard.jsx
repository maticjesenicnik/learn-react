const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onPlayerTurn, turns }) {
  let gameBoard = initialGameBoard;

  turns.forEach(turn => {
    const { player, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onPlayerTurn(rowIndex, colIndex)} disabled={playerSymbol}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
