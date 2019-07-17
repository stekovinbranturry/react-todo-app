import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Checkbox, Icon } from 'antd';
import 'antd/dist/antd.css';
import { toggleTodoAction, removeTodoAction } from '../reducers/reducer';

export default () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	const handleClickOnCheckbox = id => {
		dispatch(toggleTodoAction(id));
	};
	const handleClickOnIcon = id => {
		dispatch(removeTodoAction(id));
	};
	return (
		<div id="show_area">
			<List
				bordered
				dataSource={todos}
				renderItem={(item, index) => (
					<div>
						<List.Item
							style={
								item.isComplete ? { textDecoration: 'line-through' } : null
							}
						>
							<Checkbox
								checked={item.isComplete}
								onClick={handleClickOnCheckbox.bind(null, item.id)}
							/>
							<span>{item.todo}</span>
							<Icon
								className="delete-icon"
								onClick={handleClickOnIcon.bind(null, item.id)}
								type="delete"
							/>
						</List.Item>
					</div>
				)}
			/>
		</div>
	);
};
