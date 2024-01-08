import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { All_product_context } from '../../App';
import axios from 'axios';
import './Allproducts.css';
import { useNavigate } from 'react-router-dom';

const Allproducts = ({ sethideandShow }) => {
  const { detailedproducts, setdetailedproducts, detailedId, setdetailedId } = useContext(All_product_context);
  const [allproducts, setallproducts] = useState([]);
  const navigate = useNavigate();
  const getProduct_id = (id) => {
    setdetailedId(id);
    navigate('/detailed');
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => setallproducts(response.data));
    setdetailedproducts(allproducts);
    sethideandShow(false);

    return () => {
      sethideandShow(true);
    };
  }, [sethideandShow,allproducts]);

  return (
    <div>
      <Container>
        <Row className='allproduct-cart' style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10em' }}>
          {allproducts.map((i) => (
            <div key={i.id} className='col-md-4 col-12 mb-4'>
              {/* Adjusted height to a fixed value */}
              <Card
                style={{
                  width: '18rem',
                  height: '100%', // Adjust this value as needed
                }}
                onClick={() => getProduct_id(i.id)}
              >
                <Card.Img
                  variant='top'
                  src={i.image}
                  style={{
                    width: '100%',
                    height: '230px',
                    borderRadius: '15px',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <Card.Body>
                  <Card.Title>{i.title}</Card.Title>
                  <small className='category'>{i.category}</small>
                  <br />
                  <Button className='addcartbutton'>Add to Cart</Button>
                  <Button className='price-button'>₹{i.price}</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Allproducts;
