import React, { Component, Fragment } from 'react';
import Todoitems from './Todoitems';

export default class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			items: []
		};
	}

	handleValueChange = e => {
		const inputValue = e.target.value;
		this.setState(() => ({ inputValue }));
	};
	handleSubmit = () => {
		this.setState(preState => ({
			items: [...preState.items, preState.inputValue],
			inputValue: ''
		}));
	};
	handleDeleteItem = index => {
		this.setState(preState => {
			const items = [...preState.items];
			items.splice(index, 1);
			return { items };
		});
	};
	renderItems() {
		return this.state.items.map((item, index) => {
			return (
				<Todoitems
					key={index}
					content={item}
					handleClick={this.handleDeleteItem}
				/>
			);
		});
	}

	render() {
		return (
			<Fragment>
				<div id="input_area">
					<label htmlFor="content">You can edit your to do item here:</label>
					<textarea
						name="content"
						id="content"
						cols="30"
						rows="5"
						value={this.state.inputValue}
						onChange={this.handleValueChange}
					/>
					<button onClick={this.handleSubmit}>Submit</button>
				</div>
				<div id="content_area">{this.renderItems()}</div>
			</Fragment>
		);
	}
}
