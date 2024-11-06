import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');

  const { createGame } = useCreateGame();

  const handleCreateGame = () => {
    createGame(inputValue, [player1, player2, player3, player4]);
    console.log(createGame)
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

        <label>Joueur 1 :</label>
        <input
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />

        <label>Joueur 2 :</label>
        <input
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />

        <label>Joueur 3 :</label>
        <input
          type="text"
          value={player3}
          onChange={(e) => setPlayer3(e.target.value)}
        />

        <label>Joueur 4 :</label>
        <input
          type="text"
          value={player4}
          onChange={(e) => setPlayer4(e.target.value)}
        />

        <button onClick={handleCreateGame}>Lancer la partie</button>
      </div>
    </>
  );
}

export default App;
