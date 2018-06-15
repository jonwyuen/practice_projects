import React, { Component } from "react";
import Panel from "../components/Panel";
import SlideButton from "../components/SlideButton";
import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: ["yellow", "blue", "green", "red", "orange"],
      current: 0,
      next: 0,
      canSlide: true,
      transitionClass: ""
    };
    this.slidePanels = this.slidePanels.bind(this);
  }

  componentDidMount() {
    // add event listener for transition
  }

  componentWillUnmount() {
    // remove event listener
  }

  setCurrent(direction) {
    let newCurrent = this.state.current;
    if (direction === "right") newCurrent++;
    else if (direction === "left") newCurrent--;

    if (newCurrent < 0 || newCurrent >= this.state.slides.length) return false;
    else return newCurrent;
  }

  slidePanels(direction) {
    if (!this.state.canSlide) return;

    let newCurrent = this.setCurrent(direction);
    if (newCurrent === false) return;

    let transitionClass =
      direction === "right" ? " carousel_slide_right" : " carousel_slide_left";
    this.setState({ transitionClass, canSlide: false, next: newCurrent });
  }

  generateCurrentSlides() {
    let currentSlides = [];
    let { current, slides } = this.state;
    for (let i = -1; i < this.props.slidesLimit - 1; ++i) {
      let slideDiv = null;
      let currentSlide = current + i;
      if (currentSlide > -1 || currentSlide < slides.length) {
        let slideColor = slides[currentSlide];
        slideDiv = (
          <div className="carousel_slide">
            <Slide color={slideColor} />
          </div>
        );
      }

      currentSlides.push(slideDiv);
    }

    return currentSlides;
  }

  reset() {
    this.setState({
      current: this.state.next,
      canSlide: true,
      transitionClass: ""
    });
  }

  render() {
    return (
      <div className="carousel_container" ref={el => (this.carousel = el)}>
        <div className={`carousel_slides ${transitionClass}`}>
          {this.generateCurrentSlides()}
        </div>
        <div className="carousel_buttons">
          <SlideButton direction="left" slidePanels={this.slidePanels} />
          <SlideButton direction="right" slidePanels={this.slidePanels} />
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  slidesLimit: 3
};

export default Carousel;
