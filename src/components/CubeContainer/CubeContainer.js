import React, { useContext } from 'react'
import './cubeContainer.css'
import Cube from '../Cube'
import rotateContext from '../../context/rotateContext/rotateContext';

function CubeContainer() {
    const {rotateState} = useContext(rotateContext);

    return (
        <div className="cubde-container">
            <Cube rotateState={rotateState} />
        </div>
    )
}

export default CubeContainer
