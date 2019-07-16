import React from 'react';
import './crud.css';
import LineItem from "./components/block/line-item/line-item";
import ItemsTable from "./components/block/items-table/items-table";
import ItemForm from "./components/block/item-form/item-form";

const Mok = [
	{
		id: '0a',
		name: 'Name0',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: '1b',
		name: 'Name1',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: '2c',
		name: 'Name2',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
];



export default class Crud extends React.Component {
	state = {
		mokList: [
			this.createItem('item1'),
			this.createItem('item2'),
			this.createItem('item3'),
		],
		selectedItemId: null,
	};

	deleteItem = (id) => {
		const {mokList} = this.state;
		const updateItems = mokList.filter((item) => item.id !== id);
		this.setState({mokList: updateItems});
	};

	addItem = (name) => {
		const newItem = this.createItem(name);
		const updateItems = [...this.state.mokList, newItem];
		this.setState({mokList: updateItems})
	};

	createItem(str) {
		const name =  str.length ? str : 'item';
		return {
			id: Math.random().toString(36).substr(2, 9),
			name: name,
			parameter: 'parameter',
			options: 'options',
			description: 'description'
		};
	};

	selectItem = (id) => {
		this.setState({selectedItemId: id})
	};

	render() {
		const {mokList, selectedItemId} = this.state;
		return (
			<div className='container'>
				<ItemForm items={mokList}
				          onAddItem={this.addItem}
				          selectedItemId={selectedItemId}
				/>
				<ItemsTable items={mokList}
				            onDelete={this.deleteItem}
				            onSelect={this.selectItem}
				/>
			</div>
		);
	}
}