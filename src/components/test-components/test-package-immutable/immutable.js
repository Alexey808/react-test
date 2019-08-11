import React from 'react';
import { Map, List } from 'immutable';

export default class TestPackageImmutable extends React.Component {
	render() {
		const testMap = Map({prop: "testMap"});
		const testList = List([
			Map({id: 1, prop: "prop1"}),
			Map({id: 2, prop: "prop2"}),
			Map({id: 3, prop: "prop3"}),
		]);

		const testListView = testList.map((item) => {
			return (
				<div key={item.get("id")}>{item.get("prop")}</div>
			);
		});

		const myState = Map({
			collection: List([
				Map({id: 1, prop: "prop1"}),
				Map({id: 2, prop: "prop2"}),
				Map({id: 3, prop: "prop3"}),
			])
		});
		const newItem = Map({id: 3, prop: "prop4"});

		console.log(myState);
		const updatedState = myState.get("collection").merge(newItem);
		console.log(
			updatedState,
			updatedState.get("collection")
		);

		return (
			<div className="app">
				{testMap.get("prop")}
				{testListView}
			</div>
		);
	}
}
