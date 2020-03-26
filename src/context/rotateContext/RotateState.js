import React, { useState, useEffect } from 'react'
import rotateContext from './rotateContext'

const RotateState = ( {children} ) => {
    const [rotateState, setRotateState] = useState({
        rotateX: 20,
        rotateY: 20,
        mouseСlick: false,
        startX: null,
        startY: null,
        currentX: null,
        currentY: null
    })

    const handleMouseUp = (e) => {
        console.log('up')
        setRotateState({
            ...rotateState, 
            mouseСlick: false, 
            startX: null,
            startY: null,
            currentX: null,
            currentY: null,
        })
    }

    const handleMouseDown = (e) => {
        setRotateState({
            ...rotateState, 
            mouseСlick: true, 
            startX: e.nativeEvent.offsetX, 
            startY:  e.nativeEvent.offsetY
        })
        console.log(e.nativeEvent)
        console.log('down', 'X Y', e.nativeEvent.x, e.nativeEvent.y)
    }

    const handleMouseMove = (e) => {
        if (rotateState.mouseСlick) {
            const { startX, startY, rotateX, rotateY} = rotateState
            setRotateState({
                ...rotateState, 
                rotateX: Math.floor( (rotateX + startY - e.nativeEvent.y) / 10),
                rotateY: Math.floor(-1 * (rotateY + startX - e.nativeEvent.x) / 10)
                
            })
            console.log(`x${e.nativeEvent.x},y${e.nativeEvent.y}`)
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