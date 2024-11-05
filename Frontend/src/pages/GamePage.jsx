import PlayerTable from "../components/PlayerTable";
import { useState } from "react";

export default function GamePage() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ]);

  return (
    <div>
      <h1>Game Page</h1>
      <PlayerTable players={players} />
    </div>
  );
}   