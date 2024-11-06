import PlayerTable from "../components/PlayerTable";
import { useState } from "react";
import "./GamePage.css";

export default function GamePage() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ]);

  return (
    <div>
      <h1>Game Page</h1>
      <h3>C'est au tour de Player 1</h3>

      <fieldset>
        <legend>Choisir le nombre de dés à lancer</legend>

        <div>
          <input type="radio" id="de1" name="choix_dé" value="1" />
          <label for="de1">1</label>
        </div>
        <div>
          <input type="radio" id="de2" name="choix_dé" value="2" />
          <label for="de2">2</label>
        </div>
        <div>
          <input type="radio" id="de3" name="choix_dé" value="3" />
          <label for="de3">3</label>
        </div>

      </fieldset>

      <button>Lancer les dés</button>
      <button>Finir le tour</button>

      <PlayerTable players={players} />
    </div>
  );
}