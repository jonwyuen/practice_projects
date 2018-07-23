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
    this.carousel.addEventListener("transitionend", e => this.reset());
  }

  componentWillUnmount() {
    // remove event listener
    this.carousel.removeEventListener("transitionend", e => this.reset());
  }

  setCurrent(direction) {
    let newCurrent = this.state.current;
    if (direction === "right") newCurrent++;
    else if (direction === "left") newCurrent--;
    // make sure that the new current is in bounds
    if (newCurrent < 0 || newCurrent >= this.state.slides.length) return false;
    return newCurrent;
  }

  slidePanels(direction) {
    if (!this.state.canSlide) return;

    let newCurrent = this.setCurrent(direction);
    if (newCurrent === false) return;

    let transitionClass =
      direction === "right"
        ? " carousel_slides_right"
        : " carousel_slides_left";
    this.setState({ transitionClass, canSlide: false, next: newCurrent });
  }

  generateCurrentSlides() {
    let currentSlides = [];
    let { current, slides } = this.state;
    for (let i = -1; i < this.props.slidesLimit - 1; ++i) {
      let slideDiv = null;
      let currentSlide = current + i;
      if (currentSlide >= 0 || current < slides.length) {
        let slideColor = slides[currentSlide];
        slideDiv = (
          <div className="carousel_slide" key={currentSlide}>
            <Panel color={slideColor} />
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
    let { transitionClass } = this.state;
    return (
      <div className="carousel_container" ref={el => (this.carousel = el)}>
        <div className={`carousel_slides${transitionClass}`}>
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
