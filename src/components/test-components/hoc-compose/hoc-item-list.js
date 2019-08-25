import React from 'react';
import HocWithData from "./hoc-with-data";


// export class HocInitComponent extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<HocItemList />
// 			</div>
// 		);
// 	}
// }

const  HocItemList = (props) => {
	debugger
	const {data, children: renderLabel} = props;
	const items = data.map((item) => {
		const {id} = item;
		const label = renderLabel(item);

		return (
			<li key={id}>{label}</li>
		);
	});

	return(
		<div>{items}</div>
	);
};

/**
 * HOC 2
 */
const WithChildFunction = (Wrapper, fn) => {
	return (props) => {
		return (
			<Wrapper {...props}>
				{fn}
			</Wrapper>
		)
	}
};

// const getData = () => {
// 	return [{id: 1, prop: 'prop1'},{id: 2, prop: 'prop2'},{id: 3, prop: 'prop3'}];
// };
function getData() {
	return [{id: 1, prop: 'prop1'},{id: 2, prop: 'prop2'},{id: 3, prop: 'prop3'}];
}
export default HocWithData(HocItemList, getData);
