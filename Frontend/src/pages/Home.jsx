import { useState } from 'react'
// import useCreateGame from "../hooks/useCreateGame";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');

  // const { createGame } = useCreateGame();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log("Nom de la partie :", newValue);
  };

  const handlePlayerChange = (playerSetter, playerName) => (e) => {
    const newValue = e.target.value;
    playerSetter(newValue);
    console.log(`${playerName} :`, newValue);
  };

  return (
    <>
      <div>
        <h1>Black Jack</h1>
      </div>
      <div className="home-main-container">
        <label htmlFor="">Nom de la partie :</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

        <label htmlFor="">Joueur 1 :</label>
        <input
          type="text"
          value={player1}
          onChange={handlePlayerChange(setPlayer1, "Joueur 1")}
        />
        
        <label htmlFor="">Joueur 2 :</label>
        <input
          type="text"
          value={player2}
          onChange={handlePlayerChange(setPlayer2, "Joueur 2")}
        />

        <label htmlFor="">Joueur 3 :</label>
        <input
          type="text"
          value={player3}
          onChange={handlePlayerChange(setPlayer3, "Joueur 3")}
        />

        <label htmlFor="">Joueur 4 :</label>
        <input
          type="text"
          value={player4}
          onChange={handlePlayerChange(setPlayer4, "Joueur 4")}
        />

        <button onClick={() => createGame()}>Lancer la partie</button>
      </div>
    </>
  );
}

export default App;
