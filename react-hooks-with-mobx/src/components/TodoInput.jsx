import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import uuid from 'uuid/v4';
import { Input, Button } from 'antd';
import StoreContext from '../stores/store';

export default observer(() => {
	const store = useContext(StoreContext);
	const { addTodo } = store;
	const [todo, setTodo] = useState('');
	const onSubmit = e => {
		e.preventDefault();
		if (!todo) return;
		addTodo({
			id: uuid(),
			todo,
			isComplete: false
		});
		setTodo('');
	};

	return (
		<div id="input_area">
			<Input
				placeholder="Add a todo here"
				value={todo}
				onChange={e => setTodo(e.target.value)}
			/>
			<Button type="primary" onClick={onSubmit}>
				Add
			</Button>
		</div>
	);
});
