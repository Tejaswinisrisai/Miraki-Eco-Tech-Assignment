import React from 'react'
import "./About.css";
import Aboutus from "./abtus.png"
const About = () => {
    return (
        <>
            <div>
                <div className='abtstl'>
                    About Us
                </div>
                <div className='Abtcontentsec'  >
                    <div >
                        <img src={Aboutus} className='abtimgstl' />
                    </div>
                    <div className='Abttxtstl'>
                        <p> At Miraki Eco Tech, we're passionate about powering a sustainable future with cutting-edge solar solutions. As a leading provider of solar panels and renewable energy services, we're dedicated to delivering eco-friendly, cost-effective energy solutions to homes and businesses. Our team of experts specializes in solar panel installations, maintenance, and energy-efficient upgrades.
                        </p>
                        <p>
                            With a commitment to innovation and environmental stewardship, we strive to empower our customers to harness the sun's potential while reducing their carbon footprint. Miraki Echo Tech is your trusted partner for a greener, cleaner, and more energy-efficient tomorrow. Join us in making the world a better place, one solar panel at a time.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About