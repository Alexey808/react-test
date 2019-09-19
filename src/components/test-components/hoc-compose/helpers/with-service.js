import React from 'react';

const WithService = (Wrapped, mapMethodsToProps) => {
	return (props) => {
		return (
			<div>
				{
					(service) => {
						const serviceProps = mapMethodsToProps(service);

						return (
							//<MyComponent props={props} service={myService}/>
							<Wrapped {...props} {...serviceProps}/>
						)
					}
				}
			</div>
		);
	}
};

export default WithService;
