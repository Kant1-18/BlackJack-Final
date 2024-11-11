import { useNavigate } from 'react-router-dom';
import { playersList } from './globals';

export default function useCreateGame() {
  const navigate = useNavigate(); // Initialiser navigate dans le hook

  const createGame = (name, filteredPlayers) => {
    fetch("http://localhost:8000/api/start_game/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        players: filteredPlayers,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const parsedResponse = JSON.parse(response); // Convertir la chaîne en tableau
        const gameId = parsedResponse[0][0];
        const playersList = parsedResponse[1];
        console.log(playersList);
        navigate(`/GamePage/${gameId}`)
      })
      .catch((reason) => {
        console.error(reason);
      });
  };

  return { createGame };
}
