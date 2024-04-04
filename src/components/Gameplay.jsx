import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

const Gameplay = () => {
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, seterror] = useState("")
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }


    const rollDice = ()=> {
        if (!selectedNum) {
            seterror("**You Have Not Selected any Number**")
            return;
        }
        
        const randomNum = generateRandomNumber(1, 7);


        setCurrentDice((prev) => randomNum);


        if (selectedNum === randomNum) {
            setScore((prev) => prev + randomNum);
            
        } else {
            setScore((prev) => prev - 2);
            
        }
        setSelectedNum(undefined)

    }

    const resetScore = () => {
        setScore(0);
    }

  return (
      <MainContainer>
          <div className='top_section'>
              
          <TotalScore score={score} />
          <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} seterror={seterror} error={error} />
          </div>

          <RollDice currentDice={currentDice} rollDice={rollDice} resetScore={resetScore} showRules={showRules} setShowRules={setShowRules} />

          <div className="Rules">
              
          {showRules && <Rules className="Rules"/>
          }
          </div>
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main`
padding-top: 40px;
/* padding-left: 20px; */
/* width: 1280px;
height: 151px; */
    .top_section{
        display: flex;
align-items: end;
gap: 593px;
justify-content: space-around;
color: #edeffd;
    }

    .Rules{
        margin-top: -380px;
        margin-left: 30px;
        
    }
`;