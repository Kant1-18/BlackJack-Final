import { useState } from 'react';

export default function useGetPlayers(game_id) {
    const [playersList, setPlayersList] = useState([]);

    const getPlayers = () => {
        fetch("http://localhost:8000/api/get_players/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              game_id: game_id,
              }),
        })
            .then((response) => response.json())
            .then((response) => {
                setPlayersList(response.players);
            })
            .catch((reason) => {
                console.error(reason);
            });

            
    };
    return { getPlayers, playersList };
}