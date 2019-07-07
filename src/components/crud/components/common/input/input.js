import React from 'react';
import './input.css';

export default class Input extends React.Component {
	onChange(e) {
		console.log(e);
	}

	render() {
		const {value} = this.props;

		return(
			<div>
				<input className='input' type='text' value={value} onChange={(e) => this.onChange(e)}/>
			</div>
		);
	}
};