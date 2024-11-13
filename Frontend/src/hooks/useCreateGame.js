import { useNavigate } from 'react-router-dom';

export default function useCreateGame() {
  const navigate = useNavigate();

  const createGame = (name, playerList) => {
    fetch("http://localhost:8000/api/start_game/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        players: playerList,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        const gameId = parsedResponse[0][0];
        navigate(`/GamePage/${gameId}`)
      })
      .catch((reason) => {
        console.error(reason);
      });
  };
  return { createGame }
}