import React from 'react';
import HocContextData from "./hoc-context-data";

const HocContextTwo = ({getData}) => {
	const data = getData();
	const viewItems = data.map((item) => {
		return (
			<div key={item.id}>
				{item.name}
			</div>
		);
	});

	return <div>{viewItems}</div>;
};

const mapMethodsToProps = (service) => ({
	getData: service.getData2,
});

export default HocContextData(HocContextTwo, mapMethodsToProps);