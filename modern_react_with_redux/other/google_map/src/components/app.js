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

  handleClick() {
    this.setState({
      lat: 40.7128,
      lng: -74.0059
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <button onClick={this.handleClick}>New York</button>
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
