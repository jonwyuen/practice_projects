import React from 'react';

const SliderButton = ({ direction, handleClick }) => {
  <div>
    <button className="slider-button" onClick={ handleClick }>
      {direction}
    </button>  
  </div>;
};

export default SliderButton;
