import React, { useContext } from 'react'
import './area.css'
import rotateContext from '../../context/rotateContext/rotateContext'

const Area = ({children}) => {

    const { handleMouseUp, handleMouseMove } = useContext(rotateContext)
    return (
        <div 
            className="area"
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    )
}

export default Area