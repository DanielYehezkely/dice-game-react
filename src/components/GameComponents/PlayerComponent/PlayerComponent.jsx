import React from "react";

import './PlayerComponent.css';

const PlayerComponent = ({ playerName, playerScore, currentScore, isCurrentPlayer }) => {
  return (
    <div className={`player-container ${isCurrentPlayer ? 'current-player' : ''}`}>
      <div className="player-score-box">
        <h1 className="player-name">{playerName}</h1>
        <div className="player-score">{playerScore}</div>
      </div>
      <div className="player-current-box">
        <div className="current-headline">Current</div>
        <div className="current-score">{currentScore}</div>
      </div>
    </div>
  );
};

export default PlayerComponent;