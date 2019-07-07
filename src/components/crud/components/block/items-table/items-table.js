import React from 'react';
import './items-table';
import LineItem from "../line-item/line-item";

export default class ItemsTable extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const {name, parameter, options, description} = this.props.items;
		const items = this.props.items.map((itemElement) => {
			return (
				<div>
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
						<LineItem
							name={name}
							parameter={parameter}
							options={options}
							description={description}
						/>

					</div>
				</div>
			</div>
		)
	}
}

