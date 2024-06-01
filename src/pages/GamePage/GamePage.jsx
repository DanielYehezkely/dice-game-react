import React from "react";

import PlayerComponent from "../../components/GameComponents/PlayerComponent/PlayerComponent";
import ToolsComponent from "../../components/GameComponents/ToolsComponent/ToolsComponent";
import { useGameLogic } from "../../hooks/GameLogic.jsx";

import './GamePage.css';

const GamePage = ({ targetScore }) => {
  const {
    playerScores,
    currentScores,
    currentPlayer,
    diceValues,
    rollDice,
    holdScore,
    winner
  } = useGameLogic(targetScore);

  return (
    <div className="game-container">
      <PlayerComponent
        playerName="Player 1"
        playerScore={playerScores[0]}
        currentScore={currentScores[0]}
        isCurrentPlayer={currentPlayer === 0}
      />
      <PlayerComponent
        playerName="Player 2"
        playerScore={playerScores[1]}
        currentScore={currentScores[1]}
        isCurrentPlayer={currentPlayer === 1}
      />
      <ToolsComponent
        rollDice={rollDice}
        holdScore={holdScore}
        newGame={() => window.location.reload()}
        diceValues={diceValues}
      />
    </div>
  );
};

export default GamePage;