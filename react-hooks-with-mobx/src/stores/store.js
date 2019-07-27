import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import uuid from 'uuid/v4';

class Store {
	@observable todos = [
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
	];

	@action addTodo = todo => (this.todos = [...this.todos, todo]);

	@action toggleTodo = id =>
		(this.todos = this.todos.map(todo =>
			todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
		));

	@action removeTodo = id =>
		(this.todos = this.todos.filter(todo => todo.id !== id));

	@computed get todoCount() {
		return this.todos.filter(todo => !todo.isComplete).length;
	}
}

const StoreContext = createContext(new Store());

export default StoreContext;
