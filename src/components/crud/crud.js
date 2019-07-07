import React, {Component} from 'react';
import './crud.css';
import LineItem from "./components/block/line-item/line-item";
import ItemsTable from "./components/block/items-table/items-table";
import ItemForm from "./components/block/item-form/item-form";

const Mok = [
	{
		id: 0,
		name: 'Name0',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: 1,
		name: 'Name1',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: 2,
		name: 'Name2',
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
			<div className='container'>
				<ItemForm items={Mok}/>
				<ItemsTable items={Mok}/>
			</div>
		);
	}
}