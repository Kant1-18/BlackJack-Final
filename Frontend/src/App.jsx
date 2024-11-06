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
      <button className='home-button' onClick={() => navigate("/")}>Home</button>
      <button className='home-button' onClick={() => navigate("/GamePage")}>Game</button> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </>
  )
}

export default App