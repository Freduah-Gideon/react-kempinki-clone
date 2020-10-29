import React, { Component } from 'react'
import './location.css'
import Links from '../snippets/links.jsx'
export class Location extends Component {
    componentDidMount = () => {
        document.title = 'Kempinksi Clone | Location'
    }
    render() {
        return (
            <>
                <div class="container-fluid" id='location-container'>
                    <div id="location-info">
                        <h2>LOCATION INFORMATION</h2>
                        <p>Head northeast toward Airport Rd(73 m), Exit the roundabout onto Airport Rd(240 m), At the roundabout, take the 2nd exit and stay on Airport Rd(250 m), Turn left onto Liberation Road(1.9 km), Continue onto Liberation Rd(1.4 km), Continue onto Liberation Road(550 m), Continue straight to stay on Liberation Road (550 m), Continue onto Independence Ave (1.3 km), At the roundabout, take the 3rd exit onto Castle Rd(240 m), Turn right onto Gamel Abdul Nasser Ave. Destination will be on the left.</p>
                        <div id='address-info'>
                            <p>Address Information</p>
                            <ul>
                                <li>Phone:<i> <a href="tel:+233500709994">+233500709994</a></i></li>
                                <li>Phone2:<i> <a href="tel:+233554315153">+233554315153</a></i></li>
                                <li>Email: <a href="mailto:jumbo@gmail.com"><i>jumbo@jumbo.com</i></a></li>
                            </ul>
                            <div>
                                <p>Location By Coordinates</p>
                                <ul>
                                    <p>N 5.564071/ 5° 33’ 50.65</p>

                                    <p>W -0.191203/ 0° 11’ 28.33 </p>
                                    {/* <li>Longitude : <span><i>156.150</i></span></li>
                                    <li>Latitude : <span><i>0.456</i></span></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Location
