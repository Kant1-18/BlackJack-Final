import PlayerTable from "../components/PlayerTable";
import { useState } from "react";
import "./GamePage.css";
import launchDice from "../hooks/launchDice";

export default function GamePage() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ]);

  const [numDice, setNumDice] = useState(1);

  const handleDiceChange = (event) => {
    setNumDice(parseInt(event.target.value));
  };

  const handleLaunchDice = () => {
    launchDice(numDice);
  };


  return (
    <div>
      <h1>Game Page</h1>
      <h3>C'est au tour de Player 1</h3>

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
      <button>Finir le tour</button>

      <PlayerTable players={players} />
    </div>
  );
}