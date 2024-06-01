import React from "react";

import ToolsButton from "./ToolsButton/ToolsButton";
import { buttons } from "../../../data/toolsButtons";
import Dice from "./Dice/Dice";


const ToolsComponent = () => {

  const diceValue = () =>{
    return (Math.floor(Math.random() * 6) + 1)
  }
  
  const newGame = () => {
    window.location.reload()
  }
  
  const buttonActions = {
    'NEW GAME': newGame,
  };
  return (
    <div className="dices-and-btns">
      {buttons.map(button => (
        <ToolsButton
          key={button.name}
          onClick={buttonActions[button.name]}
          name={button.name}
          icon={button.icon}
        />
      ))}
      <Dice diceValue={diceValue()}/>
      <Dice diceValue={diceValue()}/>
    </div>
  )
};

export default ToolsComponent;
