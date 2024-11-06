export default function useCreateGame() {

    const createGame = (name, players) => {
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
            .then((response) => {
                return response.json();
            }) 
            .then((response) => {
                console.log(response);
            })
            .catch((reason) => {
                console.error(reason);
            });
    };

    return { createGame };
}