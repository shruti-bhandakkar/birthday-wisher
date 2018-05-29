import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            cssClass: 'form-group'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {

        if(this.state.password == this.state.confirmPassword) {
            const payLoad = {
                email: this.state.email,
                password: this.state.password
            }
            console.log(payLoad);
            this.props.callbackfunction(payLoad);
        }
        else {
            // assign error class to confirmPassword
            this.setState ({
                cssClass: "form-group has-error"
            });
        }
        event.preventDefault();
    }

  render() {
    return (
      <div className="App">
          <div className="row">
              <div className="col-md-4">

              </div>

              <div className="col-md-4">
                  <form>
                      <label>Sign Up</label>

                      <div className="form-group">
                          <label for="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" onChange={this.handleInputChange} aria-describedby="Enter Email" placeholder="Email" />
                      </div>

                      <div className="form-group">
                          <label for="password">Password</label>
                          <input type="password" className="form-control" id="password" name="password" onChange={this.handleInputChange} placeholder="Password"/>
                      </div>

                      <div className={this.state.cssClass}>
                          <label for="confirmPassword">Confirm Password</label>
                          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={this.handleInputChange} placeholder="Confirm Password"/>
                      </div>

                      <button type="submit" onClick={(e)=>this.handleSubmit(e)} className="btn btn-primary">Sign Up</button>
                  </form>
              </div>

              <div className="col-md-4">

              </div>
          </div>

      </div>
    );
    }
}

export default Signup;
