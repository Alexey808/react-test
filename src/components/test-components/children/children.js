import React from 'react';

export class WrapperComponent extends React.Component {
	render() {
		const {children} = this.props;
		return (<div>{children} children</div>);
	}
}

export default class Children extends React.Component {
	render () {
		return (
			<div>
				<WrapperComponent>
					{'test'}
				</WrapperComponent>
			</div>
		);
	}

}