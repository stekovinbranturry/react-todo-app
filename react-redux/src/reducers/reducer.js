import {
	INIT_LIST,
	CHANGE_VALUE,
	ADD_ITEM,
	DELETE_ITEM
} from '../actions/actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

const initList = (state, action) => {
	const newState = { ...state };
	newState.list = action.value;
	return newState;
};

const changeValue = (state, action) => {
	const newState = { ...state };
	newState.inputValue = action.value;
	return newState;
};

const addItem = state => {
	const newState = { ...state };
	const value = newState.inputValue;
	if (value) {
		newState.list = [...newState.list, value];
	}
	localStorage.setItem('list', newState.list);
	newState.inputValue = '';
	return newState;
};

const deleteItem = (state, action) => {
	const newState = { ...state };
	newState.list = [
		...newState.list.slice(0, action.index),
		...newState.list.slice(action.index + 1)
	];
	localStorage.setItem('list', newState.list);
	return newState;
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case INIT_LIST:
			return initList(state, action);
		case CHANGE_VALUE:
			return changeValue(state, action);
		case ADD_ITEM:
			return addItem(state);
		case DELETE_ITEM:
			return deleteItem(state, action);
		default:
			return state;
	}
};
