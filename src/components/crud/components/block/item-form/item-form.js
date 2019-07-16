import React from 'react';
import './item-form.css';
import Input from "../../common/input/input";

export default class ItemForm extends React.Component {
	state = {
		nameValue: ''
	};

	onChange = (value) => {
		this.setState({nameValue: value});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.nameValue);
	};

	render() {
		const {onAddItem} = this.props;
		const {nameValue} = this.state;

		// const selected = this.props.items.find((item) => item.id === this.props.selectedItemId) || {};
		// const {name = '', parameter = '', options  = '', description = ''} = selected;

		return(
			<div className={'form-container'}>
				<form className={'form-card'} onSubmit={this.onSubmit}>
					<h2 className={'form-title'}>Item form</h2>
					<div>
						<Input onChange={this.onChange} value={nameValue}/>
					</div>

					<button className={'add-button'} onClick={this.onAddItem}>Add base item</button>
				</form>
			</div>
		);
	}
}