import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit(formProps) {
    this.props.signupUser(formProps, () => {
      this.props.history.push("/feature");
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    // handleSubmit from redux form
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <Field
            className="form-control"
            name="passwordConfirm"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <div>{this.renderAlert()}</div>
        <button className="btn btn-primary" action="submit">
          Sign up
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) errors.email = "Please enter an email";

  if (!formProps.password) errors.password = "Please enter a password";

  if (!formProps.passwordConfirm)
    errors.passwordConfirm = "Please enter a password confirmation";

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup", validate })
)(Signup);
