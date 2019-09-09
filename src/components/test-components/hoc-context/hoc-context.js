import React from 'react';
import HocContextOne from "./hoc-context-one";
import {ContextProvider} from "./hoc-context-provider-consumer";

const data1 = [{id: 0, name: 'item0'},{id: 1, name: 'item1'},{id: 2, name: 'item2'}];
const data2 = [{id: 0, name: 'item-0'},{id: 1, name: 'item-1'},{id: 2, name: 'item-2'}];
const service = {
	getData1: () => data1,
	getData2: () => data2,
};


const HocContext = (props) => {
	return (
		<ContextProvider value={service}>
			<HocContextOne/>
		</ContextProvider>
	);
};

export default HocContext;


/**
 * Контекст в "hoc-context-provider-consumer"
 * Родительский компонент "hoc-context"
 * HOC в "hoc-context-data"
 * Дочерний получающий контекст "hoc-context-two" ("hoc-context-one" промежуточный)
 */




