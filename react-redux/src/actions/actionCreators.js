import {
	GET_INIT_LIST,
	INIT_LIST,
	CHANGE_VALUE,
	ADD_ITEM,
	DELETE_ITEM
} from './actionTypes';

export const createGetInitListAction = () => ({ type: GET_INIT_LIST });

export const createInitListAction = value => ({ type: INIT_LIST, value });

export const createChangeValueAction = value => ({ type: CHANGE_VALUE, value });

export const createAddItemAction = () => ({ type: ADD_ITEM });

export const createDeleteItemAction = index => ({ type: DELETE_ITEM, index });
