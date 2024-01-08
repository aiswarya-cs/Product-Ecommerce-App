import React, { useContext, useEffect } from 'react';
import { All_product_context } from '../../App';
import "./Detailed.css";
import { Button } from 'react-bootstrap';
import { HeartOutlined } from '@ant-design/icons';

const Detailed = ({ sethideandShow }) => {
    const { detailedproducts, detailedId } = useContext(All_product_context);

    useEffect(() => {
        sethideandShow(false);
        return () => {
            sethideandShow(true);
        }
    }, [sethideandShow]);

    // Find the detailed product based on detailedId
    const detailedProduct = detailedproducts.find(product => product.id === detailedId);
    console.log(detailedProduct);
    return (
        <>
            <div className='detailed-page col-lg-6 col-md-12'>
                <div className='inner-div shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='col-lg-6 col-md-12 img-section-detailes'>
                        {detailedProduct && (
                            <img
                                src={detailedProduct.image}
                                alt={detailedProduct.title}
                                style={{ width: '250px', height: '250px', marginTop:"5em"}}
                            />
                        )}
                    </div>
                    <div className='col-lg-6 col-md-12 detailed-desc'>
                        {detailedProduct && (
                            <>
                                <h2 className='detailed-head'>{detailedProduct.title}</h2>
                                <p>{detailedProduct.description}</p>
                                {/* <p>Rating: {detailedProduct.rating.rate}</p> */}
                                <p>Price: ${detailedProduct.price}</p>
                                {/* Add other details you want to display */}
                                <Button className='detailed-buttons'>Buy Now</Button>
                                <Button className='detailed-buttons'>Go to Cart</Button>
                                <HeartOutlined className='fav-icon' title='add to favorite'/>


                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detailed;
