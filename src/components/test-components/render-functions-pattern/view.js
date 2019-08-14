import React from 'react';

export default class View extends React.Component {
	renderEntities(arr) {
		console.log('2 render entities -> ', arr);
		return arr.map(entity => {
			const {id} = entity;
			const label = this.props.renderEntities(entity);
			return (<div key={id}>{label}</div>);
		});
	}

	render() {
		const { data } = this.props;
		console.log('1 data -> ', data);
		const entities = this.renderEntities(data);
		return (
			<ul>
				{entities}
			</ul>
		)
	}
}