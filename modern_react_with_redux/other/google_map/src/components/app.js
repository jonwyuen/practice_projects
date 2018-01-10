import React, { Component } from 'react';
import Map from './google_map';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Map lat={-34.397} lng={150.644}/>
      </div>
    );
  }
}

export default App;
