import React, { useReducer } from 'react';
import { List, Checkbox, Icon } from 'antd';
import {
  toggleTodoAction,
  removeTodoAction,
  initState,
  reducer
} from '../reducers/reducer';

export default () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { todos } = state;
  const handleClickOnCheckbox = id => {
    dispatch(toggleTodoAction(id));
  };
  const handleClickOnIcon = id => {
    dispatch(removeTodoAction(id));
  };
  return (
    <div id='show_area'>
      <List
        bordered
        dataSource={todos}
        renderItem={item => (
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
                className='delete-icon'
                onClick={handleClickOnIcon.bind(null, item.id)}
                type='delete'
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  );
};
