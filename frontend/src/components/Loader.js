import React from 'react'
import './style.css'
import {BiLoaderAlt} from 'react-icons/all'

function Loader() {
    return (
        <div className='container autorotate'>
            <BiLoaderAlt/>
        </div>
    )
}

export default Loader
