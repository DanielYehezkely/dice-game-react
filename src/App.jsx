import React, { useState } from "react";

import GamePage from "./pages/GamePage/GamePage";
import MenuPage from "./pages/MenuPage/MenuPage";



function App() {

  const [showGamePage, setShowGamePage] = useState(false);
  const [targetScore, setTargetScore] = useState(null);

  const startGame = (score) => {
    setTargetScore(score);
    setShowGamePage(true);
  };

  return (
    <>
      <div className="hero-container">
        {showGamePage ? <GamePage targetScore={targetScore} /> : <MenuPage onStartGame={startGame} />}
      </div>
    </>
  );
}

export default App
