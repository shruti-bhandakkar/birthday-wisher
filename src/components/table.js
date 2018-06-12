import React, { Component } from 'react';
// import $ from 'jquery';
// import $.DataTable from 'datatable.net';
import axios from 'axios';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Table extends Component {

	constructor(props) {
		super(props);
		console.log(this.props.email);
		this.state = {
			tableData: null
		}
	}

	componentDidMount() {

		// get data table data
        axios.get(`http://localhost:3000/getContacts/${this.props.email}`).then((response) => {
            this.setState({
                tableData: response.data[0]
            });
            console.log(this.state.tableData);
            this.$elem = $(this.elem);
			this.$elem.DataTable({
				data: response.data[0],
			});
        }).catch((err) => {
            console.error(err);
        });

		console.log(this.elem);
		
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div> 
				<table ref={elem => this.elem = elem}> 
					<thead>
            			<tr>
                			<th>contactName</th>
                			<th>contactEmail</th>
                			<th>date</th>
                			<th>type</th>
                		
           			 	</tr>
        			</thead>
        			<tbody>
        			</tbody>
				</table> 
			</div>
		)
	}
}

export default Table;