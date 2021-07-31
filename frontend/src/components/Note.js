import React from 'react'
import Container from './Container'
import TextBox from './TextBox'
import './style.css'

function Note({title, description}) {
    return (
        <Container>
            <TextBox text={title}/>
            <TextBox text={description}/>
        </Container>
    )
}

export default Note
