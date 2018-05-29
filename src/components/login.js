import React, { Component } from 'react';

class Login extends Component {
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
                          <label for="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" onChange={this.handleInputChange} aria-describedby="Enter Email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                          <label for="password">Password</label>
                          <input type="password" className="form-control" id="password" placeholder="Password"/>
                      </div>

                      <button type="submit" className="btn btn-primary">Log In</button>
                  </form>
              </div>

              <div className="col-md-4">

              </div>
          </div>

      </div>
    );
    }
}

export default Login;
