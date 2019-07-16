import React from 'react';
import './input.css';

export default class Input extends React.Component {
	state = {
		valueInput: ''
	};

	changeInput = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		const {value = ''} = this.props;

		return(
			<input className='input' type='text' onChange={this.changeInput} value={value}/>
		);
	}
};