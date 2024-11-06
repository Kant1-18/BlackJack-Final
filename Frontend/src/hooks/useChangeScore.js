export default function useChangeScore() {

    const changeScore = (playerId, newScore) => {
        fetch("http://localhost:8000/api/:playerId/:newScore", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player_id: playerId,
                newScore: newScore,
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

    return { changeScore };
}