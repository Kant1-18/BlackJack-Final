export default function launchDice(numberOfDice) {
    let result = 0;

    for (let i = 0; i < numberOfDice; i++) {
        result += Math.floor(Math.random() * 6) + 1;
    }

    return result;
}
