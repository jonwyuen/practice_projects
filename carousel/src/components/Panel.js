import React from "react";
import "./Panel.css";

const Panel = ({ color }) => {
  return <div className="panel" style={{ backgroundColor: `${color}` }} />;
};

export default Panel;
