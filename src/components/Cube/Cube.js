
import React, { useState, useEffect, useContext } from 'react'
import './cube.css'
import Side from '../Side'
import rotateContext from '../../context/rotateContext/rotateContext';

function Cube() {

    const {rotateState, handleMouseDown} = useContext(rotateContext);

    const {rotateX: X, rotateY: Y} = rotateState
    let cubeRotate = `rotateX(${X}deg) rotateY(${Y}deg)`
    const cubeRotateSyle = {transform: cubeRotate}

    return (
        <div 
            className="cube"
            onMouseDown={handleMouseDown}
            style={cubeRotateSyle}
        > 
            <Side location='front'>front</Side>
            <Side location='back'>back</Side>
            <Side location='right'>right</Side>
            <Side location='left'>left</Side>
            <Side location='top'>top</Side>
            <Side location='bottom'>bottom</Side>
        </div>
    )
}

export default Cube