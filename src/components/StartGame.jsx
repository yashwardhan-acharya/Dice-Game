import React from 'react'
import styled from 'styled-components'


function StartGame({toggle}) {
  return (
      <Container>
          <div>
              
          <img src='/images/dices.png' />
          </div>
          <div className='content'>
              <h1>Dice Game</h1>
              <Button onClick={toggle}>Play Now</Button>
          </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content{
        width: 528px;
        padding: 0;
        /* height: 188px; */
        h1{
            font-size: 96px;
            line-height: normal;
            font-weight: 700;
            margin: 0;
            height: 144px;
            font-family: Poppins;
           
            white-space: nowrap;
            
        }
        display: flex;
            flex-direction: column;
            align-items: flex-end;
    }


`;
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
min-width: 220px;
height: 50px;
padding: 10px 18px;
border-radius: 5px;
background: #202528;
border: none;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;  
cursor: pointer;
box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
    &:hover{
        background-color: #202528;
        box-shadow: none;
    }


`;