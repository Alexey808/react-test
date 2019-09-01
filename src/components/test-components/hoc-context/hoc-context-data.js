import React from 'react';

const HocContextData = (Wrapped) => {
	return (props) => {
		return (
			<HocContextConsumer>
				{
					(data) => {
						return (
							<Wrapped {...props} data={data}/>
						)
					}
				}
			</HocContextConsumer>
		);
	}
};