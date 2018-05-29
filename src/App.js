import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Signup from './components/signup.js'
import Login from './components/login.js'
import Dashboard from './components/dashboard.js'
import axios from 'axios';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            loggedIn: false,
            loggedInEmail: null
        }
        this.handleSignUpAjax = this.handleSignUpAjax.bind(this);
    }


    handleButtonClick(event) {
        this.setState({
            selected: event.currentTarget.value
        });
    }

    handleSignUpAjax(payLoad) {
        // ajax call to post data
        axios.post('http://localhost:3000/addUser', payLoad).then((response) => {
            console.log(response);
            this.setState({
                loggedIn: true,
                loggedInEmail: payLoad.email
            });
        }).catch((err) => {
            console.error(err);
        });

    }


  render() {
    return (
      <div className="App">

          <div className="nav">
              { (!this.state.loggedIn )?<button value='signup' onClick = {(e) => this.handleButtonClick(e)}>Sign up</button>:null }
              { (!this.state.loggedIn) ? <button value='login' onClick = {(e) => this.handleButtonClick(e)}>Log In</button>:null  }
              { (this.state.loggedIn) ? <button value='login' onClick = {(e) => this.handleButtonClick(e)}>Log Out</button>:null  }
          </div>

          <p className="App-intro">
              { (!this.state.loggedIn && this.state.selected === 'signup') ? <Signup callbackfunction={this.handleSignUpAjax}/> : null}
              { (!this.state.loggedIn && this.state.selected === 'login') ? <Login /> : null}

          </p>

          <div >
              { (this.state.loggedIn) ? <Dashboard email={this.state.loggedInEmail} /> : null  }

          </div>

      </div>
    );
  }
}

export default App;
