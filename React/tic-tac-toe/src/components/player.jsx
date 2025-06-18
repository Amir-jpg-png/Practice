
import { useState } from "react"

export default function player({initialName, symbol, isActive, onChangeName}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let buttonContent = "Edit";
  let content = <span className="player-name">{playerName}</span>;

  if(isEditing){
    buttonContent = 'Save';
    content = <input type="text" required value={playerName} onChange={handleSave} />;
  }

  function onEdit(){
    setIsEditing( editing =>!editing);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleSave(event){
    setPlayerName(event.target.value);
  }


  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
        </span>
        <span>
          <button onClick={onEdit}>{buttonContent}</button>
        </span>
      </li>
    )
}