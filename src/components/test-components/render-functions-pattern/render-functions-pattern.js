import React from 'react';
import View from "./view";

export default class RenderFunctionsPattern extends React.Component {
	render() {
		return (
			<div>
				<View data={entityOne()} renderEntities={({id, nameEntityOne, one}) => `${id}|${nameEntityOne}|${one}`}/>
				<View data={entityTwo()} renderEntities={({id, nameEntityTwo, two}) => `${id}|${nameEntityTwo}|${two}`}/>
			</div>
		);
	}
}

const entityOne = () => {
	return [{
		id: 1,
		nameEntityOne: 'entityOne',
		one: 'one'
	}]
};

const entityTwo = () => {
	return [{
		id: 2,
		nameEntityTwo: 'entityTwo',
		two: 'two'
	}]
};