export function ActionAddItem(value) {
	console.log('action/item/add -> ', value);
	return {type: 'action/item/add', value}
}
