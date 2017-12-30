import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const hasDanger = touched && error ? 'has-danger' : '';

    return (
      <div className={`form-group ${hasDanger}`}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

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
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field label="Content" name="content" component={this.renderField} />
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
  // validate inputs from values
  if (!values.title) {
    // property on errors is name in Field
    errors.title = 'Please enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Please enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Please enter some content!';
  }
  // if errors is empty, form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
