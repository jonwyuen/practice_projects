import React, { Component } from 'react';

class Map extends Component {
  // this is a wrapper component, so only want to render this component once
  shouldComponentUpdate() {
    return false;
  }

  // always get called when component receives props
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  // create google map and append to dom
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    // ref used to get direct reference to dom element
    return <div id="map" ref="map" />;
  }
}

export default Map;
