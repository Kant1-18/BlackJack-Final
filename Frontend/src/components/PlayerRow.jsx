export default function PlayerRow({ player }) {

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.score}</td>
        </tr>
    )
}