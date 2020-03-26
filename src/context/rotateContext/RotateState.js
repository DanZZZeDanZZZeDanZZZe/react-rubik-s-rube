import React, { useState, useEffect } from 'react'
import rotateContext from './rotateContext'

const RotateState = ( {children} ) => {
    const [rotateState, setRotateState] = useState({
        rotateX: 20,
        rotateY: 20,
        mouseСlick: false,
        startX: null,
        startY: null,
    })

    const handleMouseUp = (e) => {
        console.log('up')
        setRotateState({
            ...rotateState, 
            mouseСlick: false, 
            startX: null,
            startY: null,
        })
    }

    const handleMouseDown = (e) => {
        setRotateState({
            ...rotateState, 
            startX: e.nativeEvent.x, 
            startY: e.nativeEvent.y,
            mouseСlick: true
        })
        console.log('down', rotateState)
    }

    const handleMouseMove = (e) => {
        if (rotateState.mouseСlick) {
            const { startX, startY, rotateX, rotateY} = rotateState
            setRotateState({
                ...rotateState, 
                rotateX: rotateX + (startY - e.nativeEvent.y) / 100,
                rotateY: rotateY - (startX - e.nativeEvent.x) / 100
            })
            //console.log(`x${e.nativeEvent.x},y${e.nativeEvent.y}`)
            //console.log('move', rotateState)
        }
    }
    
    return (
        <rotateContext.Provider value={{
            rotateState,
            handleMouseUp,
            handleMouseDown,
            handleMouseMove
        }}>
            {children}
        </rotateContext.Provider>
    )
} 

export default RotateState