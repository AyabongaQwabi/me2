import React, { Component } from 'react';
import './style/app.scss';
import { connect } from 'react-redux';
import Home from './components/pages/home';
class App extends Component {
  render() {
    return (
      <div className="App">
      {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
