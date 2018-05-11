import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Auth extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}
