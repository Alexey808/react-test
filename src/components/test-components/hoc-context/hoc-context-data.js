import React from 'react';
import {ContextConsumer} from "./hoc-context-provider-consumer";

const HocContextData = (Wrapped, mapMethodsToProps) => {
	return (props) => {
		return (
			<ContextConsumer>
				{
					(service) => {
						const serviceProps = mapMethodsToProps(service);

						return (
							//<MyComponent props={props} service={myService}/>
							<Wrapped {...props} {...serviceProps}/>
						)
					}
				}
			</ContextConsumer>
		);
	}
};

export default HocContextData;