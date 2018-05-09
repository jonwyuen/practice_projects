import React, { Component } from "react";

export default function(ComposedComponent) {
  class Auth extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return Auth;
}
