import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const fields = [
  {
    type: 'input',
    name: 'title',
    label: 'Title'
  },
  {
    type: 'input',
    name: 'categories',
    label: 'Categories'
  },
  {
    type: 'textarea',
    name: 'content',
    label: 'Content'
  }
];

// needs to be defined outside of component so that react doesnt redefine renderField as a new component it renders
// variable name must start with capital letter, otherwise react treats it as a HTML tag
const renderField = (Fieldtype, field) => {
  const { meta: { touched, error } } = field;
  const hasDanger = touched && error ? 'has-danger' : '';

  return (
    <div className={`form-group ${hasDanger}`}>
      <label>{field.label}</label>
      <Fieldtype className="form-control" type="text" {...field.input} />
      <div className="text-help">{touched ? error : ''}</div>
    </div>
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

class PostsNew extends Component {
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // handles redux form validation
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        {formFields}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-danger" style={{ marginLeft: '10px' }} to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  fields.forEach(field => {
    // validate inputs from values
    if (!values[field.name])
      // property on errors is name in Field
      errors[field.name] = `Please enter some ${field.name}!`;
  });
  // if errors is empty, form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
