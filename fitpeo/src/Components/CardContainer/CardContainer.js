import React from 'react'
import Card from '../Card/Card';
import data from '../../data/data.js'
const CardContainer = () => {
    console.log("data " + data);
    return (
        <div className='d-flex flex-row justify-content-between ws-90'>
            <div style={{ border: "1px solid black", width: "14rem", height: "6rem" }} className='shadow d-flex flex-row justify-content-center align-items-center rounded hs-100 mt-2 rounded bg-white border-0'>
                <div className='green icon symbol-color pt-4 p-3 ml-1 d-flex flex-row justify-content-center border-0'>
                    <a style={{ fontSize: "26px" }} className='text-success fa fa-dollar'></a>
                </div>
                <div className='d-flex flex-column ws-20 mr-4 ml-3'>
                    <span className='fs-06 text-secondary'>Earning</span>
                    <span className='fs-08'><b>$198k</b></span>
                    <span className='d-flex flex-row'>
                        <span><a className='d-flex flex-row fs-07 fa fa-angle-up text-success'>12.38% </a><span className='fs-03'></span></span>
                        <span style={{ width: "2rem" }} className='pl-1 text-nowrap fs-06'><b>this month</b></span>
                    </span>
                </div>
            </div>


            <div style={{ border: "1px solid black", width: "14rem", height: "6rem" }} className='shadow d-flex flex-row justify-content-center align-items-center rounded hs-100 mt-2 rounded bg-white border-0'>
                <div className='purple icon symbol-color pt-4 p-3 ml-1 d-flex flex-row justify-content-center border-0'>
                    <a style={{ fontSize: "26px" }} className='text-purple fa fa-file'></a>
                </div>
                <div className='d-flex flex-column ws-20 mr-4 ml-3'>
                    <span className='fs-06 text-secondary'>Orders</span>
                    <span className='fs-08'><b>$2.4k</b></span>
                    <span className='d-flex flex-row'>
                        <span><a className='d-flex flex-row fs-07 fa fa-angle-down text-danger'>2%</a></span>
                        <span style={{ width: "2rem" }} className='pl-1 text-nowrap fs-06'><b>this month</b></span>
                    </span>
                </div>
            </div>


            <div style={{ border: "1px solid black", width: "14rem", height: "6rem" }} className='shadow d-flex flex-row justify-content-center align-items-center rounded hs-100 mt-2 rounded bg-white border-0'>
                <div className='blue icon symbol-color pt-4 p-3 ml-1 d-flex flex-row justify-content-center border-0'>
                    <a style={{ fontSize: "26px" }} className='text-primary fa fa-wallet'></a>
                </div>
                <div className='d-flex flex-column ws-20 mr-4 ml-3'>
                    <span className='fs-06 text-secondary'>Balance</span>
                    <span className='fs-08'><b>$2.4k</b></span>
                    <span className='d-flex flex-row justify-content-center pt-1'>
                        <span><a className='d-flex flex-row fs-07 fa fa-angle-down text-danger'>2%</a></span>
                        <span style={{ width: "2rem" }} className='pl-1 text-nowrap fs-06'><b>this month</b></span>
                    </span>
                </div>
            </div>


            <div style={{ border: "1px solid black", width: "14rem", height: "6rem" }} className='shadow d-flex flex-row justify-content-center align-items-center rounded hs-100 mt-2 rounded bg-white border-0'>
                <div className='pink icon symbol-color pt-4 p-3 ml-1 d-flex flex-row justify-content-center border-0'>
                    <a style={{ fontSize: "26px" }} className='text-danger fa fa-shopping-bag'></a>
                </div>
                <div className='d-flex flex-column ws-20 mr-4 ml-3'>
                    <span className='fs-06 text-nowrap text-secondary'>Total Sales</span>
                    <span className='fs-08'><b>$89k</b></span>
                    <span className='d-flex flex-row justify-content-center pt-1'>
                        <span className='d-flex flex-row fs-06 w-100'><a className='w-100 fs-07 fa fa-angle-up text-success'>11%</a></span>
                        <span style={{ width: "2rem", maringBottom: "-4px" }} className='pl-1 text-nowrap fs-06'><b>this week</b></span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default CardContainer