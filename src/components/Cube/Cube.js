
import React, { useState, useEffect, useContext } from 'react'
import './cube.css'
import Side from '../Side'
import rotateContext from '../../context/rotateContext/rotateContext';

function Cube({rotateState}) {

    const {handleMouseDown} = useContext(rotateContext);

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

/*function areEqual(prevProps, nextProps) {
    const {rotateState: {rotateX: prevRotateX, rotateY: prevRotateY}} = prevProps
    const {rotateState: {rotateX: nextRotateX, rotateY: nextRotateY}} = nextProps
    if (Math.abs(prevRotateX - nextRotateX) < 1 || Math.abs(prevRotateY - nextRotateY) < 1) return true
    console.log('prevProps, nextProps',prevProps, nextProps)
    return false
}*/

export default React.memo(Cube/*, areEqual*/)