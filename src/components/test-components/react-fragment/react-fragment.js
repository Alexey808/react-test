import React from 'react';

const FragmentOne = () => {
	return (
		<React.Fragment>
			<div>one</div>
			<div>one</div>
		</React.Fragment>

	);
};

const FragmentTwo = () => {
	return (
		<>
			<div>two</div>
			<div>two</div>
		</>

	);
};

const TestReactFragment = () => {
	return (
		<div>
			<FragmentOne/>
			<FragmentTwo/>
		</div>
	);
};

export default TestReactFragment;