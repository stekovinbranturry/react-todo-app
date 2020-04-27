import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class MobxStateTest extends React.Component {
  @observable first = 1;
  @observable second = 2;

  componentDidUpdate() {
    console.log('+++++++ mobx update ++++++++');
  }

  updateFirst = () => {
    this.first++;
    console.log('first', this.first);
  };

  updateSecond = () => {
    this.second++;
    console.log('second', this.second);
  };

  add = () => {
    this.updateFirst();
    this.updateSecond();
  };

  render() {
    return (
      <div>
        <div>First: {this.first}</div>
        <div>Second: {this.second}</div>
        <button onClick={this.add}>+ 1</button>
      </div>
    );
  }
}

export default MobxStateTest;
