import { useState } from 'react';

export default function useGetGame() {
    const [gameInfo, setGameInfo] = useState([]);
  
    const getGame = (gameId) => {
      fetch(`http://localhost:8000/api/get_game/${gameId}/`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setGameInfo(response);
        })
        .catch((error) => {
            console.error("Error fetching game info:", error);
        });
    };
    return { getGame, gameInfo };
  }