import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            type: 'birthdate',
            date:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.currentTarget;
        this.setState({
            [target.name]: target.value
        });

        console.log(this.state);
    }

    saveContact(event) {
        const saveContactPayLoad = {
            email: this.props.email,
            contactEmail: this.state.email,
            contactName: this.state.name,
            ocassions: [ {
                type: this.state.type,
                date: this.state.date
            }]
        }

        console.log(saveContactPayLoad);
        this.props.saveContactCallBack(saveContactPayLoad);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">

                </div>

                <div className="col-md-4">
                    <form>
                        <label>Add new Contact</label>

                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={this.handleInputChange}  aria-describedby="Enter Name" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={this.handleInputChange}  aria-describedby="Enter Email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" className="form-control" id="date" name="date" onChange={this.handleInputChange}  placeholder="Date"/>
                        </div>

                        <div>
                            <label >Date Type</label>
                            <select value={this.state.type} name="type" onChange={this.handleInputChange} >
                                <option value="birthdate">Birth Date</option>
                                <option value="anniversary">Anniversary</option>

                            </select>
                        </div>

                        <button type="button" onClick={(e) => {this.saveContact(e)}} className="btn btn-primary">Save Contact</button>
                    </form>
                </div>

                <div className="col-md-4">

                </div>
            </div>
        );
    }
}

export default AddContact;
