import React from 'react'
import './style.css'

function Container({children, isBlock, isCenter, isCover}) {
    return (
        <div className={`container ${isBlock ? 'block' : ''} ${isCenter ? 'center' : ''}  ${isCover ? 'cover' : ''}`}>
            {children}
        </div>
    )
}

export default Container
