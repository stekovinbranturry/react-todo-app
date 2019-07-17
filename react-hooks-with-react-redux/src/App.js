import React from 'react';
import { Provider } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { store } from './reducers/reducer';

function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;
