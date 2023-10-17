import React from 'react'
import '../../App.css'
import nature1 from '../../images/nature1.jpg'
import nature2 from '../../images/nature2.jpg'
const Product = () => {
    return (
        <div style={{ width: "90%", height: "5rem", backgroundColor: "white !important" }} className='shadow mt-3 ws-100 bg-white rounded pt-2'>
            <div className="d-flex justify-content-between align-items-center mx-4 ">
                <span className='fs-09'><b>Product Sell</b></span>
                <div className='d-flex flex-row justify-content-between align-items-center ws-30'>
                    <div className='rounded bg-transparent'>
                        <span className='fs-06'><a className='fs-07 p-1 fa fa-search'></a></span>
                        <input className='border-0 rounded bg-transparent fs-07' placeholder="Search"></input>
                    </div>
                    <div className=' px-1 rounded'>
                        <span className='fs-07 text-secondary bg-transparent'>Last 30 days</span>
                        <span className='fs-07 pl-1 fa fa-angle-down'></span>
                    </div>
                </div>
            </div>
            <div className='mt-2 d-flex flex-row justify-content-between align-items-center'>
                <div className='text-secondary'>
                    <small className='ml-4 fs-07 text-secondary'><b>Product name</b></small>
                </div>
                <div className='text-secondary d-flex justify-content-between align-items-center ws-30'>
                    <span>
                        <small className='mr-4 fs-07 text-secondary'><b>Stock</b></small>
                    </span>
                    <span>
                        <small className='mr-4 fs-07 text-secondary'><b>Price</b></small>
                    </span>
                    <span>
                        <small className='mr-5 fs-07 text-secondary'><b>Total Sales</b></small>
                    </span>
                </div>
            </div>
            {/* <hr style={{ width: "96%" }} className='mt-1'></hr> */}
            <div className='bg-white'>
                <hr style={{ width: "100%" }} className='mt-1'></hr>
                <ul className='list-unstyled bg-white'>
                    <li className='d-flex flex-row justify-content-between align-items-center'>
                        <div className='ml-4 d-flex flex-row'>
                            <span style={{ height: "2.5rem", width: "3.5rem" }} className='rounded fs-08'>
                                <img className="w-100 h-100 rounded" src={nature1}></img>
                            </span>
                            <div className='ml-2 d-flex flex-column my-0'>
                                <span><b className='fs-08'>Abstract 3D</b></span>
                                <span className='text-secondary fs-06'>lorem ipsum dolor smit kalkprvsi vbiah</span>
                            </div>
                        </div>
                        <div className='ws-30 d-flex flex-row justify-content-between align-items-center'>
                            <span className='fs-07'>32 in stock</span>
                            <span className='fs-07 mr-5'><b>$ 46.99</b></span>
                            <span className='fs-07 mr-5 pr-3'>20</span>
                        </div>
                    </li>
                    <li className='d-flex flex-row justify-content-between align-items-center bg-white'>
                        <div className='ml-4 d-flex flex-row mt-1'>
                            <span style={{ height: "2.5rem", width: "3.5rem" }} className='rounded fs-08'>
                                <img className="w-100 h-100 rounded" src={nature2}></img>
                            </span>
                            <div className='ml-2 d-flex flex-column my-0'>
                                <span><b className='fs-08'>Sarphens illustration</b></span>
                                <span className='text-secondary fs-06'>lorem ipsum dolor smit kalkprvsi vbiah</span>
                            </div>
                        </div>
                        <div className='ws-30 d-flex flex-row justify-content-between align-items-center'>
                            <span className='fs-07'>32 in stock</span>
                            <span className='fs-07 mr-5'><b>$ 45.99</b></span>
                            <span className='fs-07 mr-5 pr-3'>20</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product