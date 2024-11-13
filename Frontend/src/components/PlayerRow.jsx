// Les composants ne sont pas directement fonctionnels puisque nous avons gérés les lignes autrement
// Même si nous étions passé par les composants, notre problème aurait été le même.

import PropTypes from 'prop-types';

function PlayerRow({ playerID, playerName, playerScore }) {
    return (
        <tr>
            <td>{playerID}</td>
            <td>{playerName}</td>
            <td>{playerScore}</td>
        </tr>
    );
}

PlayerRow.propTypes = {
    playerID: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
    playerScore: PropTypes.number.isRequired,
};

export default PlayerRow;






// export default function PlayerRow({ player }) {

//     return (
//         <tr>
//             <td>{player[1]}</td>
//             <td>{player[2]}</td> 
//         </tr>
//     )
// }