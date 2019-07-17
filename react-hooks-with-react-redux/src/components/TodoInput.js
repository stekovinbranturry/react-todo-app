import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { addTodoAction } from '../reducers/reducer';

export default () => {
	const [todo, setTodo] = useState('');
	const dispatch = useDispatch();
	const onSubmit = e => {
		e.preventDefault();
		if (!todo) return;
		dispatch(
			addTodoAction({
				id: uuid(),
				todo,
				isComplete: false
			})
		);
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
};
