import React from 'react';
import './item.table.css';
import LineItem from "../line-item/line-item";

export default class ItemsTable extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const items = this.props.items.map((itemElement) => {
			return (
				<div key={itemElement.id}>
					<LineItem
						name={itemElement.name}
						parameter={itemElement.parameter}
						options={itemElement.options}
						description={itemElement.description}
					/>
				</div>
			);
		});
		return (
			<div className='table-container'>
				<div className='items-table'>
					<h2 className='item-title'>List items</h2>
					<div>
						{items}
					</div>
				</div>
			</div>
		)
	}
}

