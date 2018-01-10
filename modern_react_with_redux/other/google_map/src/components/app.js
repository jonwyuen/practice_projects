import React, { Component } from 'react';
import Map from './google_map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -34.397,
      lng: 150.644
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generateRandomFloat(min, max, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(((max - min) * Math.random() + min) * factor) / factor;
  }

  handleClick() {
    const randomLat =
      this.generateRandomFloat(-90, 90, 5) +
      this.generateRandomFloat(0, 0.00001, 5);
    const randomLng =
      this.generateRandomFloat(-180, 180, 5) +
      this.generateRandomFloat(0, 0.00001, 5);
    this.setState({
      lat: randomLat,
      lng: randomLng
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <button onClick={this.handleClick}>Random Location</button>
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
