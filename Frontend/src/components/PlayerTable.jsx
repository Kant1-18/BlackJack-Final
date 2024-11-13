// Les composants ne sont pas directement fonctionnels puisque nous avons gérés les lignes autrement
// Même si nous étions passé par les composants, notre problème aurait été le même.


import PropTypes from 'prop-types';
import PlayerRow from './PlayerRow';

function PlayerTable({ listplayers }) {
    return (
        <table>
            <thead>
                <tr>
                    <tr>ID</tr>
                    <th>Nom du joueur</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {listplayers.map((player, index) => (
                    <PlayerRow 
                        key={index} 
                        playerID={player[0]}
                        playerName={player[1]} 
                        playerScore={player[2]} 
                    />
                ))}
            </tbody>
        </table>
    );
}

// Validation des props
PlayerTable.propTypes = {
    listplayers: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        )
    ).isRequired,
};

export default PlayerTable;















// import PlayerRow from "./PlayerRow";
// import "../pages/GamePage.css";
// import PropTypes from 'prop-types';

// export default function PlayerTable({ players }) {

//     return (
//         <table>

//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Score</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {players?.map((player) => (
//                     <PlayerRow key={player.id} player={player} />
//                 ))}
//             </tbody>

//         </table>
//     );
// }


// PlayerTable.propTypes = {
//     players: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         score: PropTypes.number,
//         })
//     ),
// };