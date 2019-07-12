import React from 'react';
import './item-form.css';
import Input from "../../common/input/input";

export default class ItemForm extends React.Component {

	onChange(e) {
		console.log(e);
	}

	render() {
		const {onAddItem} = this.props;
		const {name, parameter, options, description} = this.props.items[0];

		return(
			<div className={'form-container'}>
				<div className={'form-card'}>
					<h2 className={'form-title'}>Item form</h2>
					<div>
						<Input value={name} change={(e)=>this.onChange(e)}/>
					</div>

					<button className={'add-button'} onClick={() => onAddItem()}>Add base item</button>
				</div>

			</div>
		);
	}
}