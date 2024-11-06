import { useState } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/Home'
import GamePage from './pages/GamePage'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/GamePage")}>GamePage</button> 
      </li>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </>
  )
}

export default App