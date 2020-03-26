
import React, { useState, useEffect } from 'react'
import './cube.css'
import Side from '../Side'

function Cube() {
    const [cubeState, setCubState] = useState({
        rotateX: 0,
        rotateY: 0,
    })

    const {rotateX: X, rotateY: Y} = cubeState
    let cubeRotate = `rotateY(${Y}deg) rotateX(${X}deg)`
    const cubeRotateSyle = {transform: cubeRotate}

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") setCubState({...cubeState, rotateX: cubeState.rotateX - 10})
		if (e.key === "ArrowRight") setCubState({...cubeState, rotateY: cubeState.rotateY + 10})
		if (e.key === "ArrowUp") setCubState({...cubeState, rotateX: cubeState.rotateX + 10})
		if (e.key === "ArrowLeft") setCubState({...cubeState, rotateY: cubeState.rotateY - 10})
    }
 
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
      
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, [cubeState]);

    return (
        <div 
            className="cube"
            onClick={(e)=>{console.log(e.type)}} 
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