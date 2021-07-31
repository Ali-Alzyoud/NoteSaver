import React, { Fragment } from 'react'
import Container from './Container'
import Note from './Note'
import './style.css'

function Notes({notes}) {
    return (
        <Container>
            <ul>
            {notes.map((note, index) => {
                return  <li>
                            <Note title={note.title} description={note.description}/>
                        </li>
            })}
            </ul>
        </Container>
    )
}

export default Notes
