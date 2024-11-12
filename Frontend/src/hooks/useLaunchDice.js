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
                number_of_dice: diceNumber,
              }),
        })
            .then((response) => response.json())
                //const playerScore = parsedResponse[0];
                // logique de verification du scrore : si > a 21 --> endTurn = true
            .then((data) => {
                console.log(data);
            })
            .catch((reason) => {
                console.error(reason);
            });
    };

    return { launchDice };
}
