import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    
      <RulesContainer>
        <h2>How to play dice game :-</h2>
          <div className="rule">
              <ul>
                  <li>
                    
          <p>Select any number</p>
                  </li>

                  <li>
                      
          <p>Click on dice image</p>
                  </li>
                  <li>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
                      
                  </li>
                  <li>
                      
          <p>if you get wrong guess then 2 point will be dedcuted</p>
                  </li>
              </ul>
        </div>
      </RulesContainer>
    
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #202528;
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 500px;
  height: 200px;
  color: #edeffd;
  border: 2px dashed #7380ec;
  border-radius: 30px;
  h2 {
      color: #edeffd;
    /* color: #000; */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
  }
  .rule {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  p {
    /* color: #000; */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
