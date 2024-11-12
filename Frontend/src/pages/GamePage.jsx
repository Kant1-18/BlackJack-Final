import { useState } from "react";
import { useParams } from 'react-router-dom';
import "./GamePage.css";
import PlayerTable from "../components/PlayerTable";
import useLaunchDice from "../hooks/useLaunchDice";
// import endTurn from "../hooks/useEndTurn";
// import {gameName,gameId} from "../hooks/useCreateGame";
//import { playersList } from "../hooks/useCreateGame";

export default function GamePage() {
  const { gameId } = useParams();
  const { launchDice, playersList } = useLaunchDice();

  const [numDice, setNumDice] = useState(1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Index du joueur actuel


  const handleDiceChange = (event) => {
    setNumDice(parseInt(event.target.value));
  };

  const { handleLaunchDice } = useLaunchDice(currentPlayerIndex, numDice);

  //  if (endTurn) {
  //    endTurn(gameId);
  //  }

  //  const handleEndTurn = () => {
  //    endTurn(gameId);
  //    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % filteredPlayers.length);
  //}


  return (
    <div>
      <h1>Game Page</h1>
      {/* <h2>{gameName}</h2>
      <h3>C'est au tour de {filteredPlayers[currentPlayerIndex].name}</h3> */}

      <fieldset>
        <legend>Choisir le nombre de dés à lancer</legend>

        <div>
          <select name="des_selector" id="des-select" onChange={handleDiceChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </fieldset>

      <button onClick={handleLaunchDice}>Lancer les dés</button>
      {/* <button onClick={handleEndTurn}>Finir le tour</button> */ }
      <ul>
        {playersList.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}