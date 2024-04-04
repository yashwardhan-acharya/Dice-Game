import React, { useState } from 'react'
import styled from 'styled-components';
import StartGame from './components/StartGame';
import Gameplay from './components/Gameplay';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); // false means the game is not started
  
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
};
  return (
    <>
      {
        isGameStarted ? <Gameplay />
          : <StartGame toggle={toggleGamePlay}/>
      }
      
     
    </>
  )
}

export default App
