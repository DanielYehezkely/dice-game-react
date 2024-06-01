import React from "react";

import './TargetScoreInput.css'

const TargetScoreInput = ({ value, onChange }) => {
  return (

    <input
      className="target-score-input"
      id="target-score-input"
      type="number"
      placeholder={50}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
};

export default TargetScoreInput;
