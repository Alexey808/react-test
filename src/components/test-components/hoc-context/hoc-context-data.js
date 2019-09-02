import React from 'react';
import {ContextConsumer} from "./hoc-context-provider-consumer";

const HocContextData = (Wrapped) => {
	return (props) => {
		return (
			<ContextConsumer>
				{
					(data) => {
						return (
							<Wrapped {...props} data={data}/>
						)
					}
				}
			</ContextConsumer>
		);
	}
};

export default HocContextData;