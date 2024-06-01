import React from "react";

import {ErrorMessage, StartGameButton, InstructionsComponent, TargetScoreInput} from '../../components/MenuComponents/index.js'

import './MenuPage.css'


const MenuPage = () => {
  return (
    <div className="menu-box">
      <div className="dice-headline">
        Dice Game <img src="/public/assets/images/dice.png" alt="" />
      </div>
      <InstructionsComponent/>
      <h1>Please select a target score</h1>
      <div className="starter-box">
        <TargetScoreInput/>
        <StartGameButton/>
        <ErrorMessage/> 
      </div>
    </div>
  ) 
};

export default MenuPage;
