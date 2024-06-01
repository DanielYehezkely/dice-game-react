import React, { useEffect, useState } from "react";

import GamePage from "./pages/GamePage/GamePage";
import MenuPage from "./pages/MenuPage/MenuPage";

import { gameAudio } from "./models/audio/audio";

function App() {
  const [showGamePage, setShowGamePage] = useState(false);
  const [targetScore, setTargetScore] = useState(null);

  const startGame = (score) => {
    setTargetScore(score);
    setShowGamePage(true);
  };

  useEffect(() => {
    if (showGamePage) {
      gameAudio.play()
    }
  }, [showGamePage]);

  return (
    <div className="hero-container">
      {showGamePage ? <GamePage targetScore={targetScore} /> : <MenuPage onStartGame={startGame} />}
    </div>
  );
}

export default App
