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

  generateCurrentSlides() {
    let currentSlides = [];
    let { current, slides } = this.state;
    for (let i = -1; i < this.props.slidesLimit - 1; i++) {
      // -1 0 1
      let slideDiv = null;
      if (current + i > -1 && current < slides.length) {
        
        slideDiv = (
          <div className="carousel_slide">
            <Slide />
          </div>
        )
      }

      currentSlides.push(slideDiv);
    }
    
    return currentSlides;
  }

  render() {
    return(
      <div className="carousel_container">
        <div className="carousel_slides">
          {this.generateCurrentSlides()}
        </div>
        <div className="carousel_buttons">
          <SliderButton />
          <SliderButton />
        </div>
      </div>
    )
  }
}

Carousel.defaultProps = {
  slidesLimit: 3
}

export default Carousel;
