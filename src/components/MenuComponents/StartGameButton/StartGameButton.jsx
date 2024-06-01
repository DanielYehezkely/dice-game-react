import React from "react";

import './StartGameButton.css'

const StartGameButton = ({onclick}) => {
  return (
    <button
      id="start-game-btn"
      className="btn"
      onClick={onclick}
      >
      Start Game
    </button>
  )
};

export default StartGameButton;
