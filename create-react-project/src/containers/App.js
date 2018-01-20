import React, { Component } from 'react';
import InputPreview from '../components/InputPreview';
import { DatePicker } from '../components/DatePicker';
import { connect } from 'react-redux';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  };
  render() {
    const {message} = this.props.messageReducer;
    return (
      <div>
        <InputPreview
          value={message}
          onChange={this._onChange}/>
        <Link to="/about">
          <button>Go to About</button>
        </Link>
        <DatePicker />
      </div>
    );
  }
}

export default connect(state => state)(App);
