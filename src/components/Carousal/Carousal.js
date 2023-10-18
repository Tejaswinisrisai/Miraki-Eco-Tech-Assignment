import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Solarone from "../../images/head-images/solar1.jpg";
import Solartwo from "../../images/head-images/solar2.jpg";
import Solarthree from "../../images/head-images/solar3.jpg";
import "./Carousal.css";
const HeroCarousel = () => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item >
                    <div className='carousalitemstleone'>

                        <div className='w-60 headtxtstl'>
                            <h5 className='headtle'>Innovate with Mirachi Eco Tech</h5>
                            <p className='headp'>Explore the future of renewable energy. </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousalitemstletwo'>
                        <div className='w-60  headtxtstl'>
                            <h5 className='headtle'>Solar Solutions for All</h5>
                            <p className='headp'>Tailored solar systems for homes, businesses, and beyond. Your journey to energy independence starts here.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='carousalitemstlethree'>
                        <div className='w-60  headtxtstl'>
                            <h5 className='headtle'>Expertise You Can Trust</h5>
                            <p className='headp'>
                                Decades of experience in the solar industry. Rely on our seasoned team to guide you through your clean energy transition.
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroCarousel;