import React from 'react'
import "../Services/Services.css"
import ServicesData from "../Services/Services.json";
import Card from 'react-bootstrap/Card';

const Services = () => {
    const data = ServicesData.Serviceslist;
    return (
        <>
            <div>
                <div>
                    <h3 className='servcsstl'>
                        Services
                    </h3>
                </div>
                <div >
                    <div className='d-flex servicessec'>
                        {
                            Object.keys(data).map((servicesName, index) => (
                                <div key={index} className=' servediv anime'>

                                    <img src={data[servicesName].img} className='pngiconsstl' />
                                    <h5 className='servtlestl'>{servicesName}</h5>
                                    <p className='servparastl'>{data[servicesName].desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services