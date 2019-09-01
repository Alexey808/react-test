import React from 'react';
import HocContextOne from "./hoc-context-one";
import {ContextProvider} from "./hoc-context-provider-consumer";

const data = [{id: 0, name: 'item0'},{id: 1, name: 'item1'},{id: 2, name: 'item2'}];

export default class HocContext extends React.Component {
	render() {

		return (
			<div>
				<ContextProvider data={data}>
					<HocContextOne/>
				</ContextProvider>
			</div>
		);
	}
}

