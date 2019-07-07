import React from 'react';
import './item-table';
import LineItem from "../line-item/line-item";

export default class ItemTable extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		const {name, parameter, options, description} = this.props;

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
						<LineItem
							name={name}
							parameter={parameter}
							options={options}
							description={description}
						/>
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

