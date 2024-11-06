import PlayerRow from "./PlayerRow";
import "../pages/GamePage.css";

export default function PlayerTable({ players }) {

    return (
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody>
                {players?.map((player, index) => (
                    <PlayerRow key={index} player={player} />
                ))}
            </tbody>

        </table>
    );
}