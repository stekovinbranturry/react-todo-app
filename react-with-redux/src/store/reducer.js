import { CHANGE_VALUE, ADD_ITEM, DELETE_ITEM } from './action';

const defaultState = {
	value: '',
	list: []
};

const changeValue = (state, action) => {
	const newState = { ...state };
	newState.value = action.value;
	return newState;
};

const addItem = state => {
	const newState = { ...state };
	newState.list = [...state.list, newState.value];
	newState.value = '';
	return newState;
};

const deleteItem = (state, action) => {
	const newState = { ...state };
	newState.list.splice(action.index, 1);
	return newState;
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_VALUE:
			return changeValue(state, action);
		case ADD_ITEM:
			return addItem(state, action);
		case DELETE_ITEM:
			return deleteItem(state, action);
		default:
			return state;
	}
};
