import React from 'react';

export default class ReduxSagaComponent extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<div>
				<h3>{title}</h3>
				<button>Button</button>
			</div>
		);
	}
}
