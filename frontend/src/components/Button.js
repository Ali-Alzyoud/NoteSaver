import React from 'react'
import { Container } from '.'
import './style.css'

function Button({title, onClick}) {
    return (
        <Container>
            <button className='button' onClick={onClick}>{title}</button>
        </Container>
    )
}

export default Button
