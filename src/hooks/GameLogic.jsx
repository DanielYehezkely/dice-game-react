import { useState, useEffect } from "react";

import { diceAudio, winnerAudio } from "../models/audio/audio.js";

export const useGameLogic = (targetScore) => {
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [currentScores, setCurrentScores] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    diceAudio.play();
    const newDiceValues = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
    setDiceValues(newDiceValues);
    setCurrentScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentPlayer] += newDiceValues[0] + newDiceValues[1];
      return newScores;
    });
  };

  const holdScore = () => {
    setPlayerScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentPlayer] += currentScores[currentPlayer];
      return newScores;
    });

    if (playerScores[currentPlayer] + currentScores[currentPlayer] >= targetScore) {
      setWinner(currentPlayer);
    } else {
      setCurrentScores([0, 0]);
      setCurrentPlayer(prevPlayer => (prevPlayer === 0 ? 1 : 0));
    }
  };

  useEffect(() => {
    if (winner !== null) {
      winnerAudio.play();
      setTimeout(() => {
        alert(`Player ${winner + 1} wins!`);
        window.location.reload();
      }, 1000);
    }
  }, [winner]);

  return {
    playerScores,
    currentScores,
    currentPlayer,
    diceValues,
    winner,
    rollDice,
    holdScore,
    setPlayerScores,
    setCurrentScores,
    setCurrentPlayer,
    setDiceValues,
    setWinner
  };
};