import React, { useEffect } from 'react'
import './allrooms.css'
import { Link, useHistory } from 'react-router-dom'
function Allrooms() {
    const history = useHistory()

    return (
        <>
            <div id='category'>
                <p>Choose Any Category Of Room To View</p>
            </div>
            <form className="room-types" method="GET">
                <select name="" value='p' id="" onchange="sort(event)">
                    <option>Sort Rooms Accordingly</option>
                    <option value="p">Presidential Suite</option>
                    <option value="e">Executive Rooms</option>
                    <option value="d">Deluxe Rooms</option>
                    <option value="">Random</option>
                </select>

            </form>

            <div className="room-container container-fluid" style={{ marginTop: '110px' }}>
                <div className="reservation">
                    <p><i>Presidential Room</i></p>
                    <div className="reservation-image-div">
                        <img src="https://cf.bstatic.com/images/hotel/max1024x768/508/50842559.jpg" alt="" />
                        <div className="carousel-button button-left">
                        </div>
                        <div className="carousel-button button-right">

                        </div>
                    </div>
                </div>
                <div className="reservation-other">
                    <ul>
                        <h3>Room Features</h3>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                    </ul>
                    <div>
                        <p><span className="price-actual">Total Price GHC: <code data-price="{{room.price}}">500</code>
                        </span> <br /><i><kbd>Including All Features Per Night</kbd></i> </p>
                        <div className="book-button">
                            <Link to='/bookroom' onClick={() => history.push('/bookrom')} className='book-room-button'>
                                Book Room
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="room-container container-fluid" style={{ marginTop: '110px' }}>
                <div className="reservation">
                    <p><i>Presidential Room</i></p>
                    <div className="reservation-image-div">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/70/2e/95/superior-room.jpg" alt="" />
                        <div className="carousel-button button-left">

                        </div>
                        <div className="carousel-button button-right">

                        </div>
                    </div>
                </div>
                <div className="reservation-other">

                    <ul>
                        <h3>Room Features</h3>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                    </ul>
                    <div>
                        <p><span className="price-actual">Total Price GHC: <code data-price="{{room.price}}">500</code>
                        </span> <br /><i><kbd>Including All Features Per Night</kbd></i> </p>
                        <div className="book-button">
                            <Link to='/bookroom' onClick={() => history.push('/bookrom')} className='book-room-button'>
                                Book Room
                        </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="room-container container-fluid" style={{ marginTop: '110px' }}>
                <div className="reservation">
                    <p><i>Presidential Room</i></p>
                    <div className="reservation-image-div">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/70/2e/95/superior-room.jpg" alt="" />
                        <div className="carousel-button button-left">

                        </div>
                        <div className="carousel-button button-right">

                        </div>
                    </div>
                </div>
                <div className="reservation-other">
                    <ul>
                        <h3>Room Features</h3>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>
                        <li className="features-li">Feature 1</li>

                    </ul>
                    <div>

                        <p><span className="price-actual">Total Price GHC: <code data-price="{{room.price}}">500</code>
                        </span> <br /><i><kbd>Including All Features Per Night</kbd></i> </p>
                        <div className="book-button">
                            <Link to='/bookroom' onClick={() => history.push('/bookrom')} className='book-room-button'>
                                Book Room
                        </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Allrooms
