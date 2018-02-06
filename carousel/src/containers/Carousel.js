import React, { Component } from 'react';
import Slide from '../components/Slide';
import SliderButton from '../components/SliderButton';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: ['yellow', 'blue', 'green', 'red', 'orange'],
      current: 0,
      next: 0,
      canSlide: true,
    }
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default Carousel;
