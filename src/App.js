import React from 'react';
import './App.css';

import Counter from './components/counter/Counter'
import TwoWayDataBinding from './components/twoWayDataBinding/TwoWayDataBinding'

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <TwoWayDataBinding />
    </div>
  );
}
 
export default App;
