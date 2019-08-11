import React from 'react';

export class SimpleTestComponent extends React.Component {
	render() {
		const collection = [
			{id: 1, prop: {}},
			{id: 2, prop: {id: 22, prop: 'value22'}},
			{id: 3, prop: {id: 33, prop: {id: 333, prop: 'value333'}}}
		];
		const order = [3,1,2];

		// const result = collection.reduce((result, item, index, initialValue) => {
		// 	return [...result, {item, index, initialValue}];
		// }, []);
		// /**
		//  * [
		//  * 0: {item: {…}, index: 0, initialValue: Array(3)}
		//  * 1: {item: {…}, index: 1, initialValue: Array(3)}
		//  * 2: {item: {…}, index: 2, initialValue: Array(3)}
		//  * ]
		//  */

		const result = collection.reduce((result, currentValue, index, initValues) => {
			const itemIterable = initValues.find((item)=> item.id === order[index]);
			return [...result, { ...itemIterable }];
		}, []);

		console.log(result);

		return(
			<div>test</div>
		);
	}
};
