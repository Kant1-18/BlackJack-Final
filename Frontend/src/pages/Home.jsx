import { useState } from 'react'
import useCreateGame from "../hooks/useCreateGame";


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('');
  const { createGame } = useCreateGame();

  
    const toto = (value) => {
        console.log(value)
        setInputValue(value)
    }

  return (
    <>
      <div>
        <h1>Black Jack</h1>
      </div>
      <div class="home-main-container">
        <label htmlFor="">Nom de la partie :</label>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => {
                console.log
                setInputValue(e.target.value)
            }}
        />

        <label htmlFor="">Joueur 1 :</label>
        <input type="text" />
        <label htmlFor="">Joueur 2 :</label>
        <input type="text" />
        <label htmlFor="">Joueur 3 :</label>
        <input type="text" />
        <label htmlFor="">Joueur 4 :</label>
        <input type="text" />

        <button onClick={() => createGame()}>Lancer la partie</button>

        
      </div>
    </>
  )
}

export default App