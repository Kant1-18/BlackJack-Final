```export default function useCreateGame() {

    const createGame = () => {
        fetch("http://localhost:8000/api/start_game/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "game_name",
                players: ["player1", "player2"],
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

    return {createGame};
}```