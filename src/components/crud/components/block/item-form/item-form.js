import React from 'react';
import './item-form.css';
import Input from "../../common/input/Input";

export default class ItemForm extends React.Component {

	onChange(e) {
		console.log(e);
	}

	render() {
		const {name, parameter, options, description} = this.props.items;

		return(
			<div>
				<h2>Item form</h2>
				<div>
					<Input value={name} change={(e)=>this.onChange(e)}/>
				</div>
			</div>
		);
	}
}