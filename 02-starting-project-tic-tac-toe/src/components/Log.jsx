export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={index}>
          {turn.player} played on row {turn.square.row + 1}, column {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
