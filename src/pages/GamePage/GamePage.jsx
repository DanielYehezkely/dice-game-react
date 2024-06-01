import React from "react";

import './GamePage.css'
import PlayerComponent from "../../components/GameComponents/PlayerComponent/PlayerComponent";
import ToolsComponent from "../../components/GameComponents/ToolsComponent/ToolsComponent";

const GamePage = () => {

  return (
    <div className="game-container">
      <PlayerComponent/>
      <PlayerComponent/>
      <ToolsComponent/>
    </div>
  )
};

export default GamePage;
