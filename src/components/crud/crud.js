import React from 'react';
import './crud.css';
import LineItem from "./components/block/line-item/line-item";
import ItemsTable from "./components/block/items-table/items-table";
import ItemForm from "./components/block/item-form/item-form";
import Search from './components/block/search/search';
import Filters from './components/block/filters/filters';

const Mok = [
	{
		id: '0a',
		name: 'Name0',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: '1a',
		name: 'Name1',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: '2a',
		name: 'Name2',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
	{
		id: '2b',
		name: 'Name22',
		parameter: 'Parameter',
		options: 'Options',
		description: 'Description'
	},
];



export default class Crud extends React.Component {
	state = {
		baseCollection: [
			this.createItem('item1'),
			this.createItem('item2'),
			this.createItem('item22', true),
			this.createItem('item3'),
		],
		viewCollection: [],
		selectedItemId: null,
	};

	componentDidMount() {
		const {baseCollection} = this.state;
		this.setState({
			viewCollection: baseCollection
		});
	}

	deleteItem = (id) => {
		const {baseCollection} = this.state;
		const updateItems = baseCollection.filter((item) => item.id !== id);
		this.updateCollections(updateItems);
	};

	addItem = (name) => {
		const newItem = this.createItem(name);
		const updateItems = [...this.state.baseCollection, newItem];
		this.updateCollections(updateItems);
	};

	updateCollections(value) {
		this.setState({
			baseCollection: value,
			viewCollection: value
		});
	}

	createItem(nameItem, parameter = false) {
		const name =  nameItem.length ? nameItem : 'item';
		return {
			id: Math.random().toString(36).substr(2, 9),
			name,
			parameter,
			options: 'options',
			description: 'description'
		};
	};

	selectItem = (id) => {
		this.setState({selectedItemId: id})
	};

	updateViewCollection = (value) => {
		console.log('updateViewCollection', value);
		this.setState({
			viewCollection: value
		})
	}

	// changeFilter(change) {
	// 	console.log(change);
	// }

	render() {
		const {baseCollection, viewCollection, selectedItemId} = this.state;
		return (
			<div className='container'>
				<ItemForm items={viewCollection}
				          onAddItem={this.addItem}
				          selectedItemId={selectedItemId}
				/>
				<Search items={baseCollection} change={this.updateViewCollection}/>
				<Filters collection={baseCollection} changeFilter={this.updateViewCollection}/>
				<ItemsTable items={viewCollection}
				            onDelete={this.deleteItem}
				            onSelect={this.selectItem}
				/>
			</div>
		);
	}
}