import React from "react";
import "./SlideButton.css";

const SlideButton = ({ direction, slidePanels }) => {
  return (
    <div>
      <button className="slide_button" onClick={() => slidePanels(direction)}>
        {direction === "left" ? "<--" : "-->"}
      </button>
    </div>
  );
};

export default SlideButton;
