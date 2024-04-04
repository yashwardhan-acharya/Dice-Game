import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNum, setSelectedNum ,error ,seterror}) => {
    const arrNum = [1, 2, 3, 4, 5, 6];

    const setNumSelectHandeler = (value) => {
        setSelectedNum(value);
        seterror("");
    }

    
    console.log(selectedNum);
  return (
      <NumberSelectCont>
          <h6>{error}</h6>
          <div className="flex">
              
          {
              arrNum.map((value, i) => (
                  
                  <Box 
                  isSelected={
                      value===  selectedNum 
                    }
                    key={i} onClick={()=>setNumSelectHandeler(value)}> {value} </Box>
                    //   <Box key={i}> {i+1} </Box>
                    ))
                }
          </div>
          <p>Select Number</p>
          
    </NumberSelectCont>
  )
}

export default NumberSelector

const NumberSelectCont = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 30px;

    .flex{
        display: flex;
align-items: flex-start;
gap: 24px;
    }
    p{
        /* color: #000; */
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
    h6{
        color: #ff7782;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
`



const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isSelected ? "transparent" : "#202528"};
    border : 2px dashed ${(props)=> props.isSelected ? " #ff7782" : "none"};
    color :  ${(props)=> props.isSelected ? " #ff7782" : "#edeffd"};
`