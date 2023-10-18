import React from 'react'
import Products from '../Products/Products'
import Services from '../Services/Services'
import About from '../../About/About'
import Contact from '../Contact/Contact'
import Lottie from "lottie-react";
import headLottie from "../../images/lotties/headlottie.json";
import MainNav from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <MainNav />
            <div className='headsecstl'>
                <Lottie animationData={headLottie} className="headlottie" />
                <div className='headtxtstle'>
                    <h1 className='headtle'>
                        Unlocking Sustainable Energy
                    </h1>
                    <p className='headsubtle'>
                        Miraki Eco Tech: Illuminating a greener future through renewable energy and cutting-edge technology. Harness solar power, reduce your carbon footprint, and shape a sustainable world with us!
                    </p>
                </div>
            </div>
            <Products />
            <Services />
            <hr className='hrstl' />
            <About />
            <hr className='hrstl' />
            <Contact />
            <Footer />

        </>
    )
}

export default Home