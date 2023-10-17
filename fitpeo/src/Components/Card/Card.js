import React from 'react'
import dollar from '../../images/dollar.jpg';
import '../../App.css';
import './Card.css';
const Card = () => {
    return (
        <div style={{ border: "1px solid black", width: "14rem", height: "6rem" }} className='d-flex flex-row justify-content-center align-items-center rounded hs-100 mt-2 rounded bg-white border-0'>
            <div className='icon symbol-color pt-4 p-3 ml-1 d-flex flex-row justify-content-center border-0'>
                <a style={{ fontSize: "26px" }} className='text-success fa fa-dollar'></a>
            </div>
            <div className='d-flex flex-column ws-20 mr-4 ml-3'>
                <span className='fs-08'>Earning</span>
                <span className='fs-08'><b>$198k</b></span>
                <span className='d-flex flex-row'>
                    <span><a className='fs-08 fa fa-angle-down'>12.38%</a></span>
                    <span className='fs-08'></span>
                </span>
            </div>
        </div>
    )
}

export default Card