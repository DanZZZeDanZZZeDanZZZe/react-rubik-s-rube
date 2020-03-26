import React from 'react'
import './cubeContainer.css'

function CubeContainer({children}) {
    return (
        <div className="cubde-container">
            {children}
        </div>
    )
}

export default CubeContainer
