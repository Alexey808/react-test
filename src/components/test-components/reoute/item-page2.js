import React from 'react';
import {Link} from "react-router-dom";

export default class ItemPage2 extends React.Component {
	render() {
		return (
			<ul>
				<span>It is ItemPage2</span>
				<li>
					<Link to="/itempage1">Go to ItemPage1</Link>
				</li>
			</ul>

		);
	}
}
