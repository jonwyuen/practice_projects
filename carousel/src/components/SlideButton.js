import React from 'react';

const SlideButton = ({ direction, slidePanels }) => {
  <div>
    <button className="slider-button" onClick={slidePanels}>
      {direction}
    </button>
  </div>;
};

export default SlideButton;
