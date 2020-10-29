import React from 'react'
import './hero.css'
import Form from '../form/form.js'
import Links from '../../../snippets/links.jsx'
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <div class="hero_div">
            <Form />
            <Links />
            <div class="welcome">
                <h1>WELCOME TO JUMBO HOTEL</h1>
                <h3>LOOKING FOR A ROOM?<br />
                    <Link to='/allrooms'>
                        <button>CLICK HERE</button>
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default Hero
