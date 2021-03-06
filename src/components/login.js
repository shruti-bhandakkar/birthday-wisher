import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.currentTarget;
    this.setState({
      [target.name]: target.value
    });
  }

  handleClick(event) {
    var payLoad = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.callbackfunction(payLoad);
  }

  render() {
    return (
      <div className="App">
          <div className="row">
              <div className="col-md-4">

              </div>

              <div className="col-md-4">
                  <form>
                      <label>Log In</label>
                      <div className="form-group">
                          <label>Email</label>
                          <input onChange={this.handleInputChange} type="email" className="form-control" id="email" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                          <label >Password</label>
                          <input onChange={this.handleInputChange} name= "password" type="password" className="form-control" id="password" placeholder="Password"/>
                      </div>

                      <button onClick={this.handleClick} type="button" className="btn btn-primary">Log In</button>
                  </form>
              </div>

              <div className="col-md-4">

              </div>

              <div>
            { !this.props.loggedIn && this.props.loggedInEmail ? <p> the username or password is incorrect </p> : null }
          </div>
          </div>

      </div>
    );
    }
}

export default Login;
