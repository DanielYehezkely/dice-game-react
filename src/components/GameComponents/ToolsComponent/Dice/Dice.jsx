import React from "react";

const Dice = ({ value }) => {
  return <img className="dice" src={`/assets/images/dice-${value}.png`} alt="dice" />;
};

export default Dice;