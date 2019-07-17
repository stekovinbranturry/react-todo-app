import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todolist from './components/Todolist';
import store from './reducers/store';
import './index.css';

const App = (
	<Provider store={store}>
		<Todolist />
	</Provider>
);

const root = document.getElementById('root');
ReactDOM.render(App, root);
