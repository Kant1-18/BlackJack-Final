// import PlayerTable from "../components/PlayerTable";
import { useState } from "react";
import "./GamePage.css";
import useLaunchDice from "../hooks/useLaunchDice";
// import endTurn from "../hooks/useEndTurn";
// import {gameName,gameId} from "../hooks/useCreateGame";

export default function GamePage() {
  // const gameName = parsedResponse[0][1];
  // const gameId = parsedResponse[0][0];

  const [numDice, setNumDice] = useState(1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Index du joueur actuel


  const handleDiceChange = (event) => {
    setNumDice(parseInt(event.target.value));
  };

  const { handleLaunchDice } = useLaunchDice(currentPlayerIndex, numDice); 

  // Logique d'appel de la fonction endTurn() si (endTurn === true)
  // if (endTurn) {
  //   endTurn(gameId);
  // }

  // const handleEndTurn = () => {
  //   endTurn(gameId);
  //   // Passer au joueur suivant
  //   setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % filteredPlayers.length);
  // }


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
      {/* <button onClick={handleEndTurn}>Finir le tour</button> */}

      {/* <PlayerTable players={filteredPlayers} /> */}
    </div>
  );
}