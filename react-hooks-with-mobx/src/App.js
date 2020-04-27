import React, { Fragment } from 'react';
import SetStateTest from './components/state-test/SetStateTest';
import MobxStateTest from './components/state-test/MobxStateTest';

function App() {
  return (
    <Fragment>
      <SetStateTest />
      <MobxStateTest />
    </Fragment>
  );
}

export default App;
