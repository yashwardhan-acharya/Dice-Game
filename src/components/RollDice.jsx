import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({
  currentDice,
  rollDice,
  resetScore,
  showRules,
  setShowRules,
}) => {
  return (
    <DiceContainer>
      <div className="Dice">
        <img
          className="dice"
          src={`/images/dice/dice_${currentDice}.png`}
          onClick={rollDice}
        />
        <p>Click On Dice To Roll</p>
      </div>
      <div className="Buttons">
        <button className="btn-1" onClick={resetScore}>
          Reset Score
        </button>
        <button className="btn-2" onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  .Dice {
    width: 245px;
    height: 301px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .dice {
    cursor: pointer;
    width: 245px;
    height: 301px;
  }
  p {
    /* color: #000; */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .Buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    .btn-1 {
      display: flex;
      width: 220px;
      padding: 10px 18px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      border: 1px solid #000;
      /* background: #FFF; */
      color: #000;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      cursor: pointer;

      background-color: transparent;
      border: 2px dashed #7380ec;
      color: #7380ec;
    }
    .btn-2 {
      display: flex;
      width: 220px;
      padding: 10px 18px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      /* background: #000; */
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      cursor: pointer;

      background-color: #202528;
      border: 2px dashed #7380ec;
      color: #7380ec;
    }
  }
`;
