import React from 'react';

export default class HocCompose extends React.Component {
	render() {
		return(
			<div>
				<Children/>
			</div>
		);
	}
}


export class Children extends React.Component {
	render () {

		const item = {id: 404, prop: 'prop404'};
		return (
			<div>
				<WrapperComponent2 item={item}>
					<ItemDetails id="id" prop="prop"/>
				</WrapperComponent2>
			</div>
		);
	}
}

export class WrapperComponent2 extends React.Component {
	render() {
		const {item} = this.props;
		return(
			<div>
				{
					React.Children.map(this.props.children, (child) => {
						return React.cloneElement(child, {item});
					})
				}
			</div>
		);
	}
}

const ItemDetails = ({item, id, prop}) => {
	return(
		<ul>
			<li>{item[id]}</li>
			<li>{item[prop]}</li>
		</ul>
	);
};