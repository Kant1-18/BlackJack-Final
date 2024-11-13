import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";
import "./GamePage.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [players, setPlayers] = useState(['']);

  const { createGame } = useCreateGame();

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);

    // Ajoute un nouveau champ si le dernier champ est rempli
    if (index === players.length - 1 && value !== '') {
      setPlayers([...newPlayers, '']);
    }
  };

  const handleCreateGame = () => {
    // Filtre les joueurs vides et envoyer la liste au backend (la liste ne contiendra pas de joueurs vides)
    const filteredPlayers = players.filter((player) => player !== '');
    createGame(inputValue, filteredPlayers);
  };

  return (
    <>
      <div>
        <h1>Black Jack</h1>
      </div>
      <div className="home-main-container">
        <div className="home-players-container">
        <label>Nom de la partie :</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div>
          {players.map((player, index) => (
            <div className="home-players-container" key={index}>
              <label>Joueur {index + 1} :</label>
              <input
                type="text"
                value={player}
                onChange={(e) => handlePlayerChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        <button className='home-creategame-btn' onClick={handleCreateGame}>Lancer la partie</button>
      </div>
    </>
  );
}

export default App;