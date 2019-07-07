import React from 'react';


export default class Input extends React.Component {
	onChange(e) {
		console.log(this);
	}

	render() {
		const {value} = this.props;

		return(
			<div>
				<input type='text' value={value} onChange={(e) => this.onChange(e)}/>
			</div>
		);
	}
};