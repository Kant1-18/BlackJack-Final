export default function useCreateGame() {

    const createGame = (name, players) => {
        fetch("http://localhost:8000/api/start_game/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "coucou",
                players: ["titi", "tata", "toto"],
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