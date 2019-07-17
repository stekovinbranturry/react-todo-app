import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import {
	createGetInitListAction,
	createChangeValueAction,
	createAddItemAction,
	createDeleteItemAction
} from '../actions/actionCreators';

class Todolist extends Component {
	componentDidMount() {
		this.props.handleInitList();
	}

	render() {
		const {
			list,
			inputValue,
			handleValueOnChange,
			handleClickOnButton,
			handleClickOnItem
		} = this.props;

		return (
			<Fragment>
				<div id="input_area">
					<Input
						placeholder="Add a todo item here"
						value={inputValue}
						onChange={handleValueOnChange}
					/>
					<Button type="primary" onClick={handleClickOnButton}>
						Add
					</Button>
				</div>
				<div id="show_area">
					<List
						bordered
						dataSource={list}
						renderItem={(item, index) => (
							<List.Item onClick={() => handleClickOnItem(index)}>
								{item}
							</List.Item>
						)}
					/>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	const { inputValue, list } = state;
	return { inputValue, list };
};

const mapDispatchToProps = dispatch => {
	return {
		handleInitList() {
			const action = createGetInitListAction();
			dispatch(action);
		},
		handleValueOnChange(e) {
			const value = e.target.value;
			const action = createChangeValueAction(value);
			dispatch(action);
		},
		handleClickOnButton() {
			const action = createAddItemAction();
			dispatch(action);
		},
		handleClickOnItem(index) {
			const action = createDeleteItemAction(index);
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todolist);
