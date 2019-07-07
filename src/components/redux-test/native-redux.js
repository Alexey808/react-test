import {createStore} from "redux";

//reducer обновляющий state
const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return ++state;
		default:
			return state;
	}
};
const store = createStore(reducer);

//подписка на обновления
store.subscribe(() => {
	console.log(store.getState());
});

//обновляем store
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});










// reducer
// const reducer = (state = 0, action) => {
// 	switch (action.type) {
// 		case 'INC':
// 			return ++state;
// 		default:
// 			return state;
// 	}
// };
// let state = reducer(undefined, {});
//
// state = reducer(state, {type: 'INC'});
// console.log(state);
//
// state = reducer(state, {type:'INC'});
// console.log(state);