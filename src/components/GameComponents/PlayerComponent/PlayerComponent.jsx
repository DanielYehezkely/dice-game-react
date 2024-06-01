import React from "react";

import './PlayerComponent.css'

const PlayerComponent = () => {
  return (
    <>
      <div className="player-container">
        <div className="player-score-box">
          <h1 className="player-name">p</h1>
          <div className="player-score">0</div>
        </div>
      <div className="player-current-box">
        <div className="current-headline">p</div>
        <div className="current-score">1</div>
      </div>
      </div>
    </>
  ) 
};

export default PlayerComponent;
