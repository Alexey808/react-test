import React from 'react';
import { Link } from 'react-router-dom'

export default class ItemPage1 extends React.Component {
	render() {
		return (
			<ul>
				<span>It is ItemPage1</span>
				<li>
					<Link to="/itempage2">Go to ItemPage2</Link>
				</li>
			</ul>
		);
	}
}
