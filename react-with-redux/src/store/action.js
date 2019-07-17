// action types
export const [CHANGE_VALUE, ADD_ITEM, DELETE_ITEM] = [
	'CHANGE_VALUE',
	'ADD_ITEM',
	'DELETE_ITEM'
];

// action creators
export const createChangeValue = value => ({ type: CHANGE_VALUE, value });

export const createAddValue = () => ({ type: ADD_ITEM });

export const createDeleteValue = index => ({ type: DELETE_ITEM, index });
