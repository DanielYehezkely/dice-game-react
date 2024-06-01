import React from "react";

const Dice = ({diceValue}) => {
  return <img className="dice" src={`/public/assets/images/dice-${diceValue}.png`} alt="dice" />;
};

export default Dice;
