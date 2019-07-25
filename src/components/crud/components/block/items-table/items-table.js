import React from 'react';
import './item.table.css';
import LineItem from "../line-item/line-item";


export default class ItemsTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {onDelete, onSelect} = this.props;
		const items = this.props.items.map((itemElement) => {
			return (
				<div key={itemElement.id} className="line-container">
					<LineItem
						name={itemElement.name}
						parameter={itemElement.parameter}
						options={itemElement.options}
						description={itemElement.description}
					/>
					<div className="edit-item" onClick={() => onSelect(itemElement.id)}>e</div>
					<div className="delete-item" onClick={() => onDelete(itemElement.id)}>x</div>
				</div>
			);
		});
		return (
			<div className="table-container">
				<div className="items-table">
					<h2 className="title">List items</h2>
					<div className='title-table'>
						{/* <div>Name</div>
						<div>Parameter</div>
						<div>Options</div>
						<div>Description</div> */}
					</div>
					<div>
						{items}
					</div>
				</div>
			</div>
		)
	}
}

