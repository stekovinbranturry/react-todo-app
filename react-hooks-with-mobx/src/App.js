import React, { Fragment } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import TodoCount from './components/TodoCount.jsx';

function App() {
	return (
		<Fragment>
			<TodoInput />
			<TodoList />
			<TodoCount />
		</Fragment>
	);
}

export default App;
