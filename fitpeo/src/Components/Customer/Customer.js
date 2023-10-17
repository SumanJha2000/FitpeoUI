import React from 'react'
import { useEffect } from 'react'
import '../../App.css'
import ApexCharts from 'apexcharts'
import ChartComponent from '../CharComponent/ChartComponent'
const Customer = () => {
    return (
        <div style={{ height: "17rem", width: "28%" }} className='shadow mt-3 bg-white rounded'>
            <div className='ml-4 h-25 w-100 d-flex flex-column justify-content-center align-items-start'>
                <span><b>Customers</b></span>
                <span className='text-secondary fs-07'>Customers that buy products</span>
            </div>
            <div style={{ position: "relative" }} id="chart" className='chart h-75 d-flex flex-row justify-content-center align-items-center'>
                <ChartComponent style={{ width: "10rem" }} className="w-100" />
            </div>
        </div>
    )
}

export default Customer