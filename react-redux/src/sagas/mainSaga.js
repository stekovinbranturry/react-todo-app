import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from '../actions/actionTypes';
import { createInitListAction } from '../actions/actionCreators';
// worker Saga: will be fired on GET_INIT_LIST actions
function* fetchInitItem() {
	const res = yield axios.get(
		'http://dummy.restapiexample.com/api/v1/employees'
	);
	const data = [res.data[0].employee_name, res.data[1].employee_name];
	const localState = localStorage.getItem('list');
	// if has localStorage, use localStorage to init list, else fetch data from api to init list
	const action = localState
		? createInitListAction(localState.split(','))
		: createInitListAction([...data]);
	yield put(action);
}

/*
  Starts fetchInitItem on each dispatched `GET_INIT_LIST` action.
  Allows concurrent fetches of user.
*/
function* mainSaga() {
	yield takeEvery(GET_INIT_LIST, fetchInitItem);
}

export default mainSaga;
