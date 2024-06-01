import React, { useState } from "react";

import {ErrorMessage, StartGameButton, InstructionsComponent, TargetScoreInput} from '../../components/MenuComponents/index.js'

import './MenuPage.css'


const MenuPage = ({onStartGame}) => {

  const [targetScore, setTargetScore] = useState('');
  const [error, setError] = useState(false);

  const handleStartGame = () => {
    const score = parseInt(targetScore, 10);
    if (isNaN(score) || score < 50 || score > 999) {
      setError(true);
    } else {
      setError(false);
      onStartGame(score);
    }
  };



  return (
    <div className="menu-box">
      <div className="dice-headline">
        Dice Game <img src="/assets/images/dice.png" alt="" />
      </div>
      <InstructionsComponent/>
      <h1>Please select a target score</h1>
      <div className="starter-box">
        <TargetScoreInput value={targetScore} onChange={setTargetScore}/>
        <StartGameButton onclick={handleStartGame}/>
        { error && <ErrorMessage/> }
      </div>
    </div>
  ) 
};

export default MenuPage;
