import React, { useState, useEffect, useRef } from 'react'
import rotateContext from './rotateContext'

const RotateState = ( {children} ) => {
    const [rotateState, setRotateState] = useState({
        rotateX: 0,
        rotateY: 0,
    })

    const mouseRef = useRef({
        mouseСlick: false,
        startX: null,
        startY: null,
    })

    const handleMouseUp = (e) => {
        mouseRef.current = {
            ...mouseRef.current, 
            mouseСlick: false,
            startX: null,
            startY: null,
        }
    }

    const handleMouseDown = (e) => {
        mouseRef.current = {
            ...mouseRef.current, 
            startX: e.nativeEvent.x, 
            startY: e.nativeEvent.y,
            mouseСlick: true
        }
        console.log('down', rotateState)
    }

    const handleMouseMove = (e) => {
        if (mouseRef.current.mouseСlick) {
            const { rotateX, rotateY} = rotateState
            const { startX, startY } = mouseRef.current
            const {nativeEvent: {y, x}} = e
            
            setRotateState({
                ...rotateState, 
                rotateX: rotateX + (startY - y) / 10,
                rotateY: rotateY - (startX - x) / 10
            })

            mouseRef.current = {
                ...mouseRef.current,
                startX: x,
                startY: y
            }
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