import React from 'react';
import Greeting from './components/Greeting';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <p>Hello world!</p>
      <Greeting name="Michael" />
    </div>
  );
}

export default App;
