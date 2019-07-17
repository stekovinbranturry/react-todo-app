import { createStore } from 'redux';
import uuid from 'uuid/v4';

const [ADD_TODO, TOGGLE_TODO, REMOVE_TODO] = [
  'ADD_TODO',
  'TOGGLE_TODO',
  'REMOVE_TODO'
];

export const addTodoAction = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodoAction = id => ({
  type: REMOVE_TODO,
  payload: id
});

const initState = {
  todos: [
    {
      id: uuid(),
      todo: 'Play basketball',
      isComplete: false
    },
    {
      id: uuid(),
      todo: 'Go shooping',
      isComplete: true
    }
  ]
};

const addTodo = (state, payload) => ({
  ...state,
  todos: [...state.todos, payload]
});

const toggleTodo = (state, payload) => ({
  ...state,
  todos: state.todos.map(todo =>
    todo.id === payload ? { ...todo, isComplete: !todo.isComplete } : todo
  )
});

const removeTodo = (state, payload) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== payload)
});

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      addTodo(payload);
      break;
    case TOGGLE_TODO:
      toggleTodo(payload);
      break;
    case REMOVE_TODO:
      removeTodo(payload);
      break;
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
