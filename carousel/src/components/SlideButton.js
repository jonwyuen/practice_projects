import React from "react";

const SlideButton = ({ direction, slidePanels }) => {
  return (
    <div>
      <button className="slider-button" onClick={() => slidePanels(direction)}>
        {direction === "left" ? "<-" : "->"}
      </button>
    </div>
  );
};

export default SlideButton;
