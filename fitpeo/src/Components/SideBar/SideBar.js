import React from 'react'
import '../../App.css';
import './SideBar.css';
import images from '../../images/side-bar-person.jpg'
const SideBar = () => {
    return (
        <div className='ws-20 mt-0 vh-100 d-flex flex-column align-items-center side_bar'>
            <div className='ws-80 py-3'>
                <span className='text-white'><i class="fa fa-2x fa-gear mr-1 pt-2 fs-12"></i></span>
                <span className='fs-10 text-white'>Dashboard</span>
            </div>
            <div className='ws-80 h-75'>
                <ul className='list-unstyled'>
                    <li className='d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 side_bar_menu'><span className='fs-08 text-white pl-1 pt-1'><a className='fs-10 fa fa-lightbulb pr-2'></a>Dashboard</span><span className='w-10 pr-1'></span></li>
                    <li className='text-secondary d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 text-white'><span className='fs-08'><a className='fs-10 fa fa-cube rounded pr-2'></a>Products</span><span className='pl-2 pr-1'>></span></li>
                    <li className='text-secondary d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 text-white'><span className='fs-08'><a className='fs-10 fa fa-user pr-2'></a>Customers</span><span className='pr-1'>></span></li>
                    <li className='text-secondary d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 text-white'><span className='fs-08'><a className='fs-10 fa-wallet fa pr-2'></a>Income</span><span className='pr-1'>></span></li>
                    <li className='text-secondary d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 text-white'><span className='fs-08'><a className='fs-10 fa fa-divide fa pr-2'></a>Promote</span><span className='pr-1'>></span></li>
                    <li className='text-secondary d-flex flex-row justify-content-between rounded p-1 pl-2 mt-1 text-white'><span className='fs-08'><a className='fs-10 fa fa-info-circle pr-2'></a>Help</span><span className='pr-1'>></span></li>
                </ul>
            </div>
            <div style={{ borderRadius: '1px solid white' }} className='side_bar_menu ws-90 hs-07 d-flex flex-row rounded'>
                <span className='h-100 w-25 d-flex jusity-content-center align-items-center p-1'><img className='rounded-circle w-100 h-75' src={images} alt=""></img></span>
                <span className='d-flex flex-row justify-content-around align-items-center'>
                    <span className='d-flex flex-column'>
                        <span className='fs-08 text-white ml-1'>Suman Jha</span>
                        <span className='fs-06 text-white ml-1 text-secondary'>software developer</span>
                    </span>
                    <span className='text-secondary ml-5 fa fa-angle-down'>

                    </span>
                </span>
            </div>
        </div>
    )
}

export default SideBar