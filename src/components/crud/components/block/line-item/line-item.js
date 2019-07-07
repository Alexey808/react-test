import React from 'react';
import './line-item.css';

const LineItem = ({name, parameter, options, description}) => {
	return (
		<div className='item-container'>
			<div className='item-row'>
				<div className='item'>{name}</div>
				<div className='item'>{parameter}</div>
				<div className='item'>{options}</div>
				<div className='item'>{description}</div>
			</div>
		</div>
	)
};

export default LineItem;