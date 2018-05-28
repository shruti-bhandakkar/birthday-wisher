import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Signup from './components/signup.js'

class App extends Component {
  render() {
    return (
      <div className="App">

          <p className="App-intro">
              <Signup />
          </p>
      </div>
    );
  }
}

export default App;
