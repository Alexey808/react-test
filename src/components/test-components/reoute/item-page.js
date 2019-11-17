import React from 'react';

export default class ItemPage extends React.Component {
	render() {
		const { id } = this.props;
		return (
			<div>It is ItemPage, with props.id = {id}</div>
		);
	}
}


