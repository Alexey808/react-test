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
		mokList: Mok,
		selected: 0,
	};

	deleteItem = (id) => {
		const {mokList} = this.state;
		const updateItems = mokList.filter((item) => item.id !== id);
		this.setState({mokList: updateItems});
	};

	selectItem = (id) => {
		console.log(id);
		this.setState({selected: id})
	};

	addItem = () => {
		const newItem = {
			id: Math.random().toString(36).substr(2, 9),
			name: 'newItem',
			parameter: 'newParameter',
			options: 'newOptions',
			description: 'newDescription'
		};
		const updateItems = [...this.state.mokList, newItem];
		this.setState({mokList: updateItems})
	};

	render() {
		const {mokList} = this.state;
		return (
			<div className='container'>
				<ItemForm items={mokList}
				          onAddItem={this.addItem}
				/>
				<ItemsTable items={mokList}
				            onDelete={this.deleteItem}
				            onSelect={this.selectItem}
				/>
			</div>
		);
	}
}