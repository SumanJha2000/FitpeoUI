import React from 'react'
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header/Header';
import CardContainer from './Components/CardContainer/CardContainer';
import MainSection from './Components/MainSection/MainSection';
import Product from './Components/Product/Product';

const App = () => {
  return (
    <div className='d-flex flex-row justify-content-between align-items-center'>
      <SideBar />
      <div className='d-flex flex-column justify-content-start align-items-center w-100 min-vh-100 bg-color'>
        <Header />
        <CardContainer />
        <MainSection />
        <Product />
      </div>
    </div>
  )
}

export default App;