import React from 'react';
import './App.css';
import CubeContainer from './components/CubeContainer';
import Cube from './components/Cube';
import RotateState from './context/rotateContext/RotateState';
import Area from './components/Area';

function App() {
  return (
    <div className="App">
      <RotateState>
        <Area>
          <CubeContainer>
            <Cube/>
          </CubeContainer>
        </Area>
      </RotateState>
    </div>
  );
}

export default App;
