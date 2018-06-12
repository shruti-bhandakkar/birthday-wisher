import React, { Component } from 'react';
import AddContact from './addcontact.js';
import Table from './table';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inAddForm: false,
            tableData: null,
            doneFetching:false
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

    componentDidMount() {
        // get data table data
        axios.get(`http://localhost:3000/getContacts/${this.props.email}`).then((response) => {
            this.setState({
                tableData: response.data,
                doneFetching:true
            });
            console.log(this.state.tableData);
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

                { this.state.doneFetching ?  <Table tableData={this.state.tableData}/> :null }

                </div>
        );
    }
}

export default Dashboard;
