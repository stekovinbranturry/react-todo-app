import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';

export default () => {
  const list = [1, 2, 3];
  return (
    <div id='show_area'>
      <List
        bordered
        dataSource={list}
        renderItem={(item, index) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};
