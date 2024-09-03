import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(editing => !editing);
  const handlePlayerNameChange = event => setPlayerName(event.target.value);

  let playerNameComponent = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameComponent = <input type="text" className="player-name" required value={playerName} onChange={handlePlayerNameChange} />;
  }

  return (
    <li>
      <span className="player">
        {playerNameComponent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
