import React from "react";

import ToolsButton from "./ToolsButton/ToolsButton";
import { BUTTONS } from "../../../constants/toolsButtons";
import Dice from "./Dice/Dice";

const ToolsComponent = ({ rollDice, holdScore, newGame, diceValues }) => {
  const buttonActions = {
    'NEW GAME': newGame,
    'ROLL DICE': rollDice,
    'HOLD': holdScore
  };

  return (
    <div className="dices-and-btns">
      {BUTTONS.map(button => (
        <ToolsButton
          key={button.name}
          onClick={buttonActions[button.name]}
          name={button.name}
          icon={button.icon}
        />
      ))}
      <Dice value={diceValues[0]} />
      <Dice value={diceValues[1]} />
    </div>
  );
};

export default ToolsComponent;
