import React from 'react'
import Container from './Container';
import './style.css'

function TextBox({text, password, onChange,placeHolder}) {
    const textChange = (e)=> {
        onChange(e.target.value);
    }
    return (
        <Container>
            <input className={`${password? 'password ': ''}`} placeholder={placeHolder} value={text} onChange={textChange}></input>
        </Container>
    )
}

export default TextBox;