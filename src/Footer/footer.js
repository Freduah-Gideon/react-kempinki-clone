import React from 'react'
import './footer.css'
import FacebookLogo from '@material-ui/icons/Facebook'
import TwitterLogo from '@material-ui/icons/Twitter'
import InstagramLogo from '@material-ui/icons/Instagram'
import WhatsappLogo from '@material-ui/icons/WhatsApp'
import { Link } from 'react-router-dom'
function footer() {
    return (
        <footer>
            <div className="contact">
                <h3 className='foot-heads'>Contact Us Via Email</h3>
                <div id='mail-link-div'> <a id="mail-link" className="foot-tails" href="mailto:jaguarxcape@gmail.com">jumbo@jumbo.com</a></div>
                <div className="img-div">
<Link>                    <FacebookLogo /></Link>
<Link>                    <TwitterLogo /></Link>
<Link>                    <InstagramLogo /></Link>
<Link>                    <WhatsappLogo /></Link>

                </div>
            </div>

            <div id="booking-options">
                <p className="booking-p foot-heads">Booking</p>
                <div className="booking-link-div">
                    <a className='booking-link foot-tails' href="">Modify</a>
                    <a className='booking-link foot-tails' href="">Cancel</a>
                </div>
            </div>
            <div className="helpful">
                <p className="helpful-p foot-heads">Helpful Info</p>
                <div className="helpful_divs">
                    <div>
                        <a href="" className="foot-tails">About Us</a>
                        <a href="" className="foot-tails">Contact Us</a>
                        <a href="" className="foot-tails">Our Partners</a>
                        <a href="" className="foot-tails">Career Site</a>
                        <a href="" className="foot-tails"></a>
                    </div>
                    <div className="helpful_div_last">
                        <a href="" className="foot-tails">Best Rate Guarantee</a>
                        <a href="" className="foot-tails">Legal</a>
                        <a href="" className="foot-tails">Privacy Policy</a>
                        <a href="" className="foot-tails">SiteMap</a>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default footer

