import React from "react";

import './InstructionsComponent.css'

const InstructionsComponent = () => {
  return  (
    <>
    <h1>Game Instructions :</h1>
      <ul>
        <li>The game has 2 players, playing in rounds.</li>
        <li>In each turn, a player rolls 2 dice as many times as he wishes.</li>
        <li>Each result will get added to his round’s score.</li>
        <li>
          But if the player rolls a double six all his round’s score gets lost,
          After that, it's the next player’s turn.
        </li>
        <li>
          A player can choose to ‘Hold’, which means that his round’s score gets
          added to his global score. After that, it's the next player's turn.
        </li>
        <li>The first player to reach the target score points wins.</li>
        <li>Target score can be above 50 and under 999.</li>
      </ul>
    </>

  )
};

export default InstructionsComponent;
