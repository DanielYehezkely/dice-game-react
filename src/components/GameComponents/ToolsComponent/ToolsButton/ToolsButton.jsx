import React from "react";

import './ToolsButton.css'

const ToolsButton = ({onClick, name, icon}) => {
  return <button className="btn" onClick={onClick}>{name} <i className={icon}></i></button>;
};

export default ToolsButton;
