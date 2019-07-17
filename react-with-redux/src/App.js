import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import {
	createChangeValue,
	createAddValue,
	createDeleteValue
} from './store/action';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		store.subscribe(this.handleStoreChange);
	}

	handleStoreChange = () => {
		this.setState(store.getState());
	};

	handleValueChange = e => {
		const action = createChangeValue(e.target.value);
		store.dispatch(action);
	};

	handleClickButton = () => {
		if (!this.state.value) {
			return false;
		}
		const action = createAddValue();
		store.dispatch(action);
	};

	handleClickItem = index => {
		const action = createDeleteValue(index);
		store.dispatch(action);
	};

	render() {
		return (
			<Fragment>
				<div id="input_area">
					<Input
						placeholder="Add a todo item here"
						// 为input框添加onChange事件监听value变化，对应action1 CHANGE_VALUE
						onChange={this.handleValueChange}
						// 将输入的value显示在input框里
						value={this.state.value}
					/>
					<Button
						type="primary"
						// 为button绑定onClick事件，对应action2 ADD_ITEM
						onClick={this.handleClickButton}
					>
						Add
					</Button>
				</div>
				<div id="show_area">
					<List
						bordered
						dataSource={this.state.list} // 更改数据来源
						renderItem={(item, index) => (
							// action3： 为每个item绑定onClick事件，并传入index参数，对应action3 DELETE_ITEM
							<List.Item onClick={this.handleClickItem}>{item}</List.Item>
						)}
					/>
				</div>
			</Fragment>
		);
	}
}
