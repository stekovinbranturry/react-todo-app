import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Divider } from 'antd';
import StoreContext from '../stores/store';

export default observer(() => {
	const store = useContext(StoreContext);
	const { todoCount } = store;

	return (
		<div id="show_area">
			<Divider />
			You have <span style={{ color: 'red' }}>{todoCount}</span> todos has not
			been done!
			<Divider />
		</div>
	);
});
