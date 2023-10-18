import React from 'react'
import "./Products.css";
import { useState, useEffect, createRef } from 'react';
import Card from 'react-bootstrap/Card';

import ProductsData from "../Products/Products.json";
import Stars from "../../images/fivestart.webp";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Products = () => {
    const data = ProductsData.productsList;
    return (
        <>


            <div className='products'>
                <h3 className='prdheadstl'>
                    Products
                </h3>
                <div className='d-flex cardcstmstl' >


                    {Object.keys(data).map((productName, index) => (
                        // <Card key={index} className='cardCustom col-lg-3 col-md-6 col-sm-12 ' >


                        < Card key={index} className='m-1 cardCustom fade-in-image'>

                            <Card.Img variant="top" src={data[productName].image} className='crdimgstl' />

                            <Card.Body>
                                <Card.Title>{productName}</Card.Title>
                                <Card.Subtitle>{data[productName].price}</Card.Subtitle>
                                <Card.Text className='descstl'>
                                    <b className="sybstl">Description:</b> {data[productName].Description}
                                </Card.Text>
                                <div>
                                    <b >Rating:</b>
                                    <img src={Stars} alt='' style={{ height: "1.2rem" }} />
                                </div>
                            </Card.Body>

                        </Card>

                    ))}
                </div>
            </div >
        </>
    )
}

export default Products