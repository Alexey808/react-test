import React from 'react';
import HocContextOne from "./hoc-context-one";
import {ContextProvider} from "./hoc-context-provider-consumer";

const data = [{id: 0, name: 'item0'},{id: 1, name: 'item1'},{id: 2, name: 'item2'}];

const HocContext = (props) => {
	return (
		<ContextProvider value={data}>
			<HocContextOne/>
		</ContextProvider>
	);
};

export default HocContext;




