import React, { Component } from 'react'
import './links.css'
import {Link} from 'react-router-dom'
export default class Links extends Component {
    render() {
        return (
            <>
                <div class="overview">
                    <p class="overview_p">QUICK LINKS</p>
                    <a href="">Why Suhum</a>
                    <Link to='/location'>   Location & Transport   </Link>
                    <Link to='/allrooms'> Rooms & Suites </Link>
                    <a href="">Restaurants & Bars</a>
                    <a href="">Meetings & Events</a>
                    <a href="">Weddings</a>
                    <a href="">Luxury Spa</a>
                    <a href="">Services & Facilities</a>
                    <a href="">Special Offers</a>
                    <a href="">Health & Safety</a>
                    <a href="">Gallery</a>
                </div>
            </>
        )
    }
}
