import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export class ItemsForm extends Component {
  submit = (e) => {
    e.preventDefault();
    const { handleSubmit, onSubmit, reset } = this.props;
    handleSubmit(onSubmit)();
    reset();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="content">Item content</label>
        <Field name="content" component="input" type="text" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'item'
})(ItemsForm);
