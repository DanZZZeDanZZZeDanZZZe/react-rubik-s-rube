import React from 'react'
import './side.css'

function Side({children, location}) {
    const classes = `side ${location}`
    return (
        <div className={classes}>{children}</div>
    )
}

export default Side