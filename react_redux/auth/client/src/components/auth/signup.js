import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "text"
  },
  {
    name: "password",
    label: "Password",
    type: "password"
  },
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    type: "password"
  }
];

const renderField = (type, field) => {
  const { meta: { touched, error } } = field;
  const hasDanger = touched && error ? "has-danger" : "";

  return (
    <fieldset className={`form-group ${hasDanger}`}>
      <label>{field.label}</label>
      <input className="form-control" type={type} {...field.input} />
      <div className="text-help">{touched ? error : ""}</div>
    </fieldset>
  );
};

const formFields = fields.map(field => (
  <Field
    key={field.name}
    label={field.label}
    name={field.name}
    component={renderField.bind(this, field.type)}
  />
));

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

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {formFields}
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
