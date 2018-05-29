import React, { Component } from 'react';
import AddContact from './addcontact.js';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inAddForm: false
        }
        this.handleSaveContactAjax = this.handleSaveContactAjax.bind(this);
    }

    addNewContact(event) {
        this.setState({
            inAddForm: true
        });
    }

    handleSaveContactAjax(saveContactPayLoad) {
        // ajax call to post contact data
        axios.post('http://localhost:3000/addContact', saveContactPayLoad).then((response) => {
            console.log(response);
            this.setState({
                inAddForm: false
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div>
                <p>Send greetings Automatically</p>

                { (!this.state.inAddForm) ? <button onClick={(e) => {this.addNewContact(e)}}>Add new Contact</button>:null  }

                { (this.state.inAddForm) ? <AddContact email={this.props.email} saveContactCallBack = {this.handleSaveContactAjax}  /> :null  }

                </div>
        );
    }
}

export default Dashboard;
