import React from 'react'
import "./Footer.css"
import MirakiLogo from "../../images/logos/miraki-echo-tech-logo.png";
import Twitterico from "../../images/footicons/icons8-twitter-100.png";
import Instaico from "../../images/footicons/icons8-instagram-100.png";
import Facebookico from "../../images/footicons/icons8-facebook-100.png";
import linkedinico from "../../images/footicons/icons8-linkedin-100.png";
const Footer = () => {
    return (
        <>

            <div className='footcompsec'>
                <div className='footsec1'>
                    <div>
                        <img src={MirakiLogo} alt='' className='footlogostl' />
                    </div>
                    <div>
                        <a href='' className='anchortgstl'>Products</a>
                        <a href='' className='anchortgstl'>Services</a>
                        <a href='' className='anchortgstl'>About</a>
                        <a href='' className='anchortgstl'>Contact</a>
                    </div>
                </div>
                <hr />
                <div className='footsec2'>
                    <p className='copyfontstl'>
                        &#169; All Copyrights are reserve since 1998
                    </p>
                    <div>
                        <a href=''><img src={Twitterico} alt='' className='footicostl' /></a>
                        <a href=''><img src={linkedinico} alt='' className='footicostl' /></a>
                        <a href=''><img src={Instaico} alt='' className='footicostl' /></a>
                        <a href=''><img src={Facebookico} alt='' className='footicostl' /></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;