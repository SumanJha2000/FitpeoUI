import React from 'react'
import '../../App.css';
const Header = () => {
    return (
        <div className='d-flex flex-row justify-content-between ws-90 align-items-center h-20 py-4'>
            <div className=''><b>Hello Shahrukh<span className='wave'></span>,</b></div>
            <div className='rounded bg-white'>
                <span className='fs-08 fa fa-search px-1 bg-white'></span>
                <span><input className='shadow py-1 fs-07 border-0' placeholder='Search'></input></span>
            </div>
        </div>
    )
}

export default Header;