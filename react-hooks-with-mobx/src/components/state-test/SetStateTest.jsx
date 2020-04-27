import React from 'react';

class SetStateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      second: 2,
    };
  }

  componentDidUpdate() {
    console.log('+++++++ setState update ++++++++');
  }

  updateFirst = () => {
    this.setState(
      (prevState) => ({ first: prevState.first + 1 }),
      () => console.log('first', this.state.first)
    );
  };

  updateSecond = () => {
    this.setState(
      (prevState) => ({ second: prevState.second + 1 }),
      () => console.log('second', this.state.second)
    );
  };

  add = () => {
    this.updateFirst();
    this.updateSecond();
  };

  render() {
    return (
      <div>
        <div>First: {this.state.first}</div>
        <div>Second: {this.state.second}</div>
        <button onClick={this.add}>+ 1</button>
      </div>
    );
  }
}

export default SetStateTest;
