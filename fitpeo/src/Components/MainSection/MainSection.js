import React from 'react'
import Graph from '../Graph/Graph'
import '../../App.css'
import Customer from '../Customer/Customer'
const MainSection = () => {
    return (
        <div style={{ height: "18.5rem" }} className='ws-90 hs-80 mt-1 d-flex flex-row align-items-center justify-content-between'>
            <Graph />
            <Customer />
        </div>
    )
}

export default MainSection