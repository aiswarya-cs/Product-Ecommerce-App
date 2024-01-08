import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from "react-bootstrap";
import './Product.css'
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { All_product_context } from '../../App';

const Productcart = () => {
    
    const [productlist, setproductlist] = useState([ ]);
    const nav=useNavigate();

    const viewMore=()=>{
        nav("/cart");
    }
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>setproductlist(response.data.slice(0, 7)))
    }, []);
    console.log(productlist);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    
  return (
    <>
    <hr style={{marginTop:"8em", width:"80vw",marginLeft:"10em"}}/>
    <h1 className='card-head'>OUR PRODUCTS</h1>
    <div className='row cart-section'>
    <Slider {...settings}>
      {productlist.map((product) => (
      <Card key={product.id} className='card' style={{ width:'15rem',margin: '0 1rem' }}>
        <Card.Img  className="imagecard" variant="top" src={product.image} alt={product.title} 
         style={{width:"100%",
                 height:"300px" ,
                 borderRadius:"15px", 
                 backgroundSize:"100% 100%",
                 backgroundRepeat:"no-repeat",
                 
                 }} />
        <Card.Body>
          {/* <Card.Title className='title-card'>{product.title}</Card.Title> */}
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Button  className='me-auto ms-auto button' onClick={viewMore}>View More</Button>
        </Card.Body>
      </Card>
    ))}
     </Slider>
  </div>
  </> 
  )
}

export default Productcart;