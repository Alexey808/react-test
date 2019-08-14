import React from 'react';
import './property-elements.css';

const Row = ({left, right}) => {
	return (
		<div className={'container-row'}>
			<div className={'left'}>
				{left}
			</div>
			<div className={'right'}>
				{right}
			</div>
		</div>
	);
};

export default class PropertyElements extends React.Component {
	render() {
		return (
			<>
				<Row left={'test1-left'} right={'test1-right'}/>
				<Row left={'test2-left'} right={'test2-right'}/>
				<Row left={'test3-left'} right={'test3-right'}/>
			</>
		);
	}
}