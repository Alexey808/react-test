// import React from 'react';
// import HocView from "./hoc-view";
//
// const HocContainer = (ViewComponent, data) => {
// 	return class extends React.Component {
// 		render() {
// 			/* логика и рочее */
// 			const item = {id: 1, name: 'item-name'};
//
// 			return (
// 				<HocItemList>
// 					{ ({name}) => <span>{name}</span>}
// 				</HocItemList>
// 			);
// 		}
// 	}
// };
//
//
// const WithChildFunction = (Wrapper, fn) => {
// 	return (props) => {
// 		return (
// 			<Wrapper {...props}>
// 				{fn}
// 			</Wrapper>
// 		)
// 	}
// };
//
//
//
//
//
// const data = [{id: 1, prop: 'prop1'},{id: 2, prop: 'prop2'},{id: 3, prop: 'prop3'}];
//
//
// export default HocContainer(WithChildFunction(HocView, renderItem), data);