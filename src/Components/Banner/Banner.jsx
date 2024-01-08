import React from 'react'
import "./Banner.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined, SyncOutlined, WalletOutlined } from '@ant-design/icons';

const Banner = () => {

  const navigate=useNavigate();

  const checkNow=()=>{
    navigate('/cart')
  }
    
  return (
    <>
    
        <div className='container-fluid'>
      <div className='row' style={{background:"rgb(152, 136, 161,0.5)", width:"100vw", height:"80vh"}}>
        <div className='col-lg-6 col-md-12 inner-banner1'>
          <h1 className='banner-header'>NEW COLLECTION ARRIVALS</h1>
          <p className='banner-paragraph'>
            CHECK OUT ALL TRENDS
          </p>
          <Button className='button-checknow me-5' onClick={checkNow}>Check Now</Button>
        </div>
        <div className='col-lg-6 col-md-12 inner-banner2'>
        </div >
           <div className="col-12 d-flex flex-wrap">
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="inner-div3 delivery">
        <h5>Delivery</h5>
        <small className='small-banner'>Cash on delivery available with in 3-7 days</small>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="inner-div3 secure">
        <h5>Secure Payment</h5>
        <WalletOutlined className='icons-banner'/>
        <small className='small-banner'>Secure Payment Easily</small>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="inner-div3 exchange">
        <h5>Exchange</h5>
        <SyncOutlined className='icons-banner'/>
        <small className='small-banner2'>Exchange Product if any damage</small>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="inner-div3 quality">
        <h5>Good Quality</h5>
        <CheckCircleOutlined className='icons-banner'/>
        <small className='small-banner'>Good Quality Products</small>
      </div>
    </div>
  </div>

        </div>
      </div>
    </>
  )
}

export default Banner