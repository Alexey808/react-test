import React from 'react';
import WithChild from "./helpers/with-child";
import WithService from "./helpers/with-service";

// const getData = () => {
// 	return [
// 		{id: 0, name: 'name0'},
// 		{id: 1, name: 'name1'},
// 		{id: 2, name: 'name2'}
// 	];
// };

export class HocCompose extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>123</div>
		);
	}
}

const mapComposeToProps = (service) => {} ;


//
// const myComp = compose(
// 	WithService(mapComposeToProps),
// 	// WithChild(renderName),
// )(HocCompose);

export default WithService(HocCompose, mapComposeToProps);

