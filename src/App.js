import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddItem from './actions/AddItem';
import { ItemsForm, ItemsList, ItemsReset } from './containers/'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsForm onSubmit={this.props.submitItem} />
        <ItemsReset />
        <ItemsList />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  submitItem: (formData) => dispatch(AddItem(formData)),
});

export default connect(null, mapDispatchToProps)(App);
