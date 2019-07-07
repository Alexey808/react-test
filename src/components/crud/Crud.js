import React, {Component} from 'react';
import './crud.css';
import LineItem from "./components/block/line-item/line-item";
import ItemsTable from "./components/block/items-table/items-table";
import ItemForm from "./components/block/item-form/item-form";

const Mok = [
	{
		name: 'Name',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		name: 'Name',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		name: 'Name',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
];



export default class Crud extends React.Component {
	state = {
		isVisible: false
	};

	render() {
		const {isVisible} = this.props;
		return (
			<div>
				<ItemsTable items={Mok}/>
				<ItemForm items={Mok}/>
			</div>
		);
	}
}