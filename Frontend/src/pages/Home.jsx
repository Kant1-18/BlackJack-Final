import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";
import "./GamePage.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [players, setPlayers] = useState(['']); // Initialiser avec un champ vide pour le premier joueur

  const { createGame } = useCreateGame();

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);

    // Ajouter un nouveau champ d'entrée si le dernier champ est rempli
    if (index === players.length - 1 && value !== '') {
      setPlayers([...newPlayers, '']);
    }
  };

  const handleCreateGame = () => {
    // Filtrer les joueurs vides et envoyer la liste au backend
    const filteredPlayers = players.filter((player) => player !== '');
    createGame(inputValue, filteredPlayers);
  };

  return (
    <>
      <div>
        <h1>Black Jack</h1>
      </div>
      <div className="home-main-container">
        <label>Nom de la partie :</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {players.map((player, index) => (
          <div className="home-main-container" key={index}>
            <label>Joueur {index + 1} :</label>
            <input
              type="text"
              value={player}
              onChange={(e) => handlePlayerChange(index, e.target.value)}
            />
          </div>
        ))}

        <button onClick={handleCreateGame}>Lancer la partie</button>
      </div>
    </>
  );
}

export default App;