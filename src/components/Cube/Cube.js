
import React, { useState, useEffect, useContext } from 'react'
import './cube.css'
import Side from '../Side'
import rotateContext from '../../context/rotateContext/rotateContext';

function Cube() {
   /* const [cubeState, setCubState] = useState({
        rotateX: 0,
        rotateY: 0,
        mouseСlick: false
    })*/


    const {rotateState, handleMouseDown} = useContext(rotateContext);

    const {rotateX: X, rotateY: Y} = rotateState
    let cubeRotate = `rotateX(${X}deg) rotateY(${Y}deg)`
    const cubeRotateSyle = {transform: cubeRotate}

 /*   const handleMouseСlick = () => {
        setCubState({...cubeState, mouseСlick: !cubeState.mouseСlick})
    }*/

   /* const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") setCubState({...cubeState, rotateX: cubeState.rotateX - 10})
		if (e.key === "ArrowRight") setCubState({...cubeState, rotateY: cubeState.rotateY + 10})
		if (e.key === "ArrowUp") setCubState({...cubeState, rotateX: cubeState.rotateX + 10})
		if (e.key === "ArrowLeft") setCubState({...cubeState, rotateY: cubeState.rotateY - 10})
    }*/
 
    /*useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
      
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, [cubeState]);*/

    /*onMouseMove={(e)=>{if (cubeState.mouseСlick) console.log(`x${e.nativeEvent.offsetX},y${e.nativeEvent.offsetY}`)}}*/

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