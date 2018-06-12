import React, { Component } from 'react';
// import $ from 'jquery';
// import $.DataTable from 'datatable.net';
import axios from 'axios';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Table extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tableData: null,
			tableDataUpdated: null
		}
	}

	componentDidMount() {		
            console.log(this.state.tableData);
            this.$elem = $(this.elem);
			this.$elem.DataTable({
				data: this.props.tableData,
				 "columns": [
            		{ "data": "contactName" },
            		{ "data": "contactEmail" },
            		{ "data": "date" },
            		{ "data": "type" },
        		]
			});        	
		
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