import React from 'react';
import HocContextData from "./hoc-context-data";

const HocContextTwo = ({data}) => {
		const viewItems = data.map((item) => {
			return (
				<div key={item.id}>
					{item.name}
				</div>
			);
		});

		return <div>{viewItems}</div>;
};

export default HocContextData(HocContextTwo);