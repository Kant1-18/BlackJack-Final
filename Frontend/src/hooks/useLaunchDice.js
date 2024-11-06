export default function useLaunchDice() {

    const launchDice = (currentPlayerID,diceNumber) => {
        fetch("http://localhost:8000/api/launch_dice/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player_id: currentPlayerID,
                game_id: diceNumber,
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
