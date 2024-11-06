export default function useEndTurn() {

    const endTurn = (player) => {
        fetch("http://localhost:8000/api/start_game/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: player,
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

    return { endTurn };
}