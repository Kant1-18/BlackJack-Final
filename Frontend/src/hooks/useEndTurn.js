export default function useEndTurn() {

    const endTurn = (gameId) => {
        fetch("http://localhost:8000/api/end_turn/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                game_id: gameId,
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