import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Email: </label>
          <input className="form-control" type="text"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <input className="form-control" type="text"/>
        </fieldset>
        <button className="btn btn-primary" action="submit">Sign in</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signin',
  fields: ['email', 'passworfd']
})(Signin);
