import React from 'react';
import HocWithData from "./hoc-with-data";

function getData1() {
	return [{id: 1, name: 'name-1'},{id: 2, name: 'name-2'},{id: 3, name: 'name-3'}];
}
function getData2() {
	return [{id: 1, name: 'name_1'},{id: 2, name: 'name_2'},{id: 3, name: 'name_3'}];
}


export class HocInitComponent extends React.Component {
	render() {
		return (
			<div>
				<RenderItems getData={getData2}>
					{(item) => item.name}
				</RenderItems>
			</div>
		);
	}
}


export class RenderItems extends React.Component {
	renderItems(items) {
		return items.map((item) => {
			const {id} = item;
			const label = this.props.children(item);
			return (
				<li key={id}>{label}</li>
			);
		})
	}
	render() {
		debugger;
		const {getData} = this.props;
		const items = getData();
		const renderedItems = this.renderItems(items);
		return (
			<ul>
				{renderedItems}
			</ul>
		);
	}
}
export default HocWithData(RenderItems, getData2);


// const  HocItemList = (props) => {
// 	return(
// 		<div>
// 			<RenderItems props={props}/>
// 		</div>
// 	);
// };

/**
 * HOC 2
 */
// const WithChildFunction = (Wrapper, fn) => {
// 	return (props) => {
// 		return (
// 			<Wrapper {...props}>
// 				{fn}
// 			</Wrapper>
// 		)
// 	}
// };

// const getData = () => {
// 	return [{id: 1, prop: 'prop1'},{id: 2, prop: 'prop2'},{id: 3, prop: 'prop3'}];
// };

// export default HocWithData(HocItemList, getData);
