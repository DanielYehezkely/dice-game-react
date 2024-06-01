import { useState, useEffect } from "react";

import { diceAudio, winnerAudio } from "../models/audio/audio.js";

export const useGameLogic = (targetScore) => {
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [currentScores, setCurrentScores] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [winner, setWinner] = useState(null);

  const playDiceAudio = () => {
    diceAudio.play();
  };

  const playWinnerAudio = () => {
    winnerAudio.play();
  };

  const rollDice = () => {
    playDiceAudio();
    const newDiceValues = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
    setDiceValues(newDiceValues);
    setCurrentScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentPlayer] += newDiceValues[0] + newDiceValues[1];
      return newScores;
    });
  };

  const checkForWinner = (updatedPlayerScores) => {
    if (updatedPlayerScores[currentPlayer] >= targetScore) {
      setWinner(currentPlayer);
    }
  };

  const holdScore = () => {
    setPlayerScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentPlayer] += currentScores[currentPlayer];
      checkForWinner(newScores);
      return newScores;
    });

    setCurrentScores([0, 0]);
    setCurrentPlayer(prevPlayer => (prevPlayer === 0 ? 1 : 0));
  };

  useEffect(() => {
    if (winner !== null) {
      playWinnerAudio();
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
    rollDice,
    holdScore
  };
};