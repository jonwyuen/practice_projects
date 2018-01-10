import React, { Component } from 'react';
import Map from './google_map';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <Map />
      </div>
    )
  }
}

export default App;
