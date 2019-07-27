import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Checkbox, Icon } from 'antd';
import StoreContext from '../stores/store';

export default observer(() => {
	const store = useContext(StoreContext);
	const { todos, toggleTodo, removeTodo } = store;

	const handleClickOnCheckbox = id => {
		toggleTodo(id);
	};
	const handleClickOnIcon = id => {
		removeTodo(id);
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
});
