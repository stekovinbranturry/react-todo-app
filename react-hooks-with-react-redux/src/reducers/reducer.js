import { Map } from 'immutable';
import { createStore } from 'redux';

const [ADD_TODO, TOGGLE_TODO, REMOVE_TODO] = [
  'ADD_TODO',
  'TOGGLE_TODO',
  'REMOVE_TODO'
];

export const addTodoAction = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const toggleTodoAction = index => ({
  type: TOGGLE_TODO,
  payload: index
});

export const removeTodoAction = index => ({
  type: REMOVE_TODO,
  payload: index
});

export const initState = Map({
  todos: [
    {
      todo: 'Play basketball',
      isComplete: false
    },
    {
      todo: 'Go shooping',
      isComplete: true
    }
  ]
});

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return state.update('todos', todos => [...todos, payload]);
    
    case TOGGLE_TODO: {
      return state.updateIn(['todos', payload, 'isComplete'], isComplete => !isComplete);
    }
    case REMOVE_TODO:
      return state.deleteIn(['todos', payload]);

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
