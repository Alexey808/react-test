import React from 'react';
import HocContextTwo from "./hoc-context-two";

export default class HocContextOne extends React.Component {
	render() {

		return (
			<div>
				<HocContextTwo/>
			</div>
		);
	}
}