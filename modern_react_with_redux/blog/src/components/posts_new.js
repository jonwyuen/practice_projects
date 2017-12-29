import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <h3>Create A New Post</h3>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Tags" name="tags" component={this.renderField} />
        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
