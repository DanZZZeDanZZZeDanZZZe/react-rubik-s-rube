import React from 'react';
import './App.css';
import CubeContainer from './components/CubeContainer';
import Cube from './components/Cube';
import Side from './components/Side';

function App() {
  return (
    <div className="App">
      <CubeContainer>
        <Cube></Cube>
      </CubeContainer>
    </div>
  );
}

export default App;
