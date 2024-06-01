import React from "react";

const Dice = ({ value }) => {
  return <img className="dice" src={`/public/assets/images/dice-${value}.png`} alt="dice" />;
};

export default Dice;