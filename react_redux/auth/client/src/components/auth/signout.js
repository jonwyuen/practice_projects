import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends Component {
  render() {
    return <div>Signed out</div>;
  }
}

export default connect()(Signout);
