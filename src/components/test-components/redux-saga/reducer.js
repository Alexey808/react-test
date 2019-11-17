export function ReduxSagaReducer(state, action) {
	switch (action.type) {
		case 'action/item/add':
			return state.set('collection', state.get('collection').push(action.value));
		default: return state;
	}
}
