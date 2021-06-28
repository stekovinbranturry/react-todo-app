import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Checkbox, Icon } from 'antd';
import { toggleTodoAction, removeTodoAction } from '../reducers/reducer';

export default () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const todos = state.get('todos');
  console.log('todos :', todos);
  const handleClickOnCheckbox = index => () => {
    dispatch(toggleTodoAction(index));
  };
  const handleClickOnIcon = index => () => {
    dispatch(removeTodoAction(index));
  };
  return (
    <div id='show_area'>
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
                onClick={handleClickOnCheckbox(index)}
              />
              <span>{item.todo}</span>
              <Icon
                className='delete-icon'
                onClick={handleClickOnIcon(index)}
                type='delete'
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  );
};
