import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoitems extends Component {
	static propTypes = {
		index: PropTypes.number,
		handleClick: PropTypes.func,
		content: PropTypes.string
	};

	render() {
		// Object destructuring assignment
		const { index, handleClick, content } = this.props;
		return (
			<div key={index} onClick={handleClick}>
				{content}
			</div>
		);
	}
}
