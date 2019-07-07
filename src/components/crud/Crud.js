import React, {Component} from 'react';
import './crud.css';
import LineItem from "./components/block/line-item/line-item";
import ItemTable from "./components/block/items-table/item-table";

const Mok = {
	name: 'Name',
	parameter: 'Parameter',
	options: 'Options',
	description: 'Description'
};



export default class Crud extends React.Component {
	state = {
		isVisible: false
	};

	render() {
		const {isVisible} = this.props;
		return (
			<div>
				<ItemTable items={Mok}/>
			</div>
		);
	}
}