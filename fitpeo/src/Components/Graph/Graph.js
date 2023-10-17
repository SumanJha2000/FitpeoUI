import React from 'react'
import '../../App.css'
const Graph = () => {
    return (
        <div style={{ height: "17rem" }} className='shadow ws-70 bg-white rounded mt-3'>
            <div className='d-flex justify-content-between w-100'>
                <span className='ml-4 mt-2'>
                    <b>Overview</b>
                </span>
                <span className='mr-4 mt-3 fs-07'>
                    Quarterly &nbsp;&nbsp;&nbsp;&nbsp; <a className='fa fa-angle-down'></a>
                </span>
            </div>
            <div className='mt-0'>
                <span className='fs-07 ml-4 text-secondary'>Monthly Earning</span>
            </div>
            <div className='hs-60 d-flex justify-content-center'>
                <ul style={{ maxHeight: "11.5rem", minHeight: "10.5rem", width: "97%" }} className='hs-100 list-unstyled d-flex flex-row justify-content-around  my-4 mb-2'>
                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "80%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Jan</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "65%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Feb</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "110%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Mar</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "90%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Apr</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "100%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>May</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "40%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Jun</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "100%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Jul</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "120%", width: "100%" }} className='bg-primary candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Aug</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "110%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Sep</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "90%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Oct</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "80%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Nov</b>
                        </span>
                    </li>

                    <li style={{ height: "100%" }} className='d-flex flex-column '>
                        <span style={{ height: "12rem", width: "2.5rem" }} className='d-flex flex-row align-items-end'>
                            <div style={{ height: "95%", width: "100%" }} className='bg-menu-bar candle d-flex flex-row align-items-center'>
                            </div>
                        </span>
                        <span className='hs-10 fs-07 mt-1 d-flex flex-row align-items-end'>
                            <b className='pl-2'>Dec</b>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Graph