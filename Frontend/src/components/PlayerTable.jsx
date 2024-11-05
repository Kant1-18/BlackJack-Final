import PlayerRow from "./PlayerRow";

export default function PlayerTable({ players }) {

    return (
        <table>

            <thead>
                <tr>
                    <th>Id</th>
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