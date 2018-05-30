import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // need to do something to log user in
  }
 
  render() {
    const { handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
            <Field
            className="form-control"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <Field
            className="form-control"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button className="btn btn-primary" action="submit">Sign in</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signin'
})(Signin);
