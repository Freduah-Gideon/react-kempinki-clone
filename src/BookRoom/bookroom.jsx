import React from 'react'
import './bookroom.css'
import { Link, useHistory } from 'react-router-dom'
function BookRoom() {
    const history = useHistory()
    return (
        <>
            <div className="container-fluid">
                <div id='book-top-container'>
                    <form action="" id="booking_form">
                        <div className="form-row">
                            <label for="check_in">
                                <p>Check In</p>
                                <input type="date" required name="check_in" id='check_in' className="check" />
                            </label>
                            <label for="check_out">
                                <p>Check Out</p>
                                <input type="date" required name="check_out" id='check_out' className="check_out" />
                            </label>
                            <label for="nor">
                                <p>Number Of Rooms
                        </p> <select name="nor" required id="nor">
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                    <option value="4">4 Rooms</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-row">
                            <label for="noar">
                                <p>Number Of Adult Rooms</p>
                                <select name="noar" required id="noar">
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                    <option value="4">4 Rooms</option>
                                </select>
                            </label>
                            <label for="nocr">
                                <p>Number Of Children Room(s)</p>
                                <select name="nocr" required id="nocr">
                                    <option value="0" selected>None</option>
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                    <option value="4">4 Rooms</option>
                                </select>
                            </label>
                            <br />
                            <label for="promo">
                                <p>Promo Code</p>
                                <input type="text" placeholder="Enter Promo Code" name="promo" id="promo" />
                            </label>
                        </div>
                    </form>
                </div>
                <div className="roomshow">
                    <div className="dumbtext">
                        <p>Vacant Rooms</p>
                        <i>Book To Enjoy The Experience Of A Life Time</i>
                    </div><br /><br />
                    {/* {% if room %} */}
                    <div className='room-container'>
                        <div><i style={{ fontSize: '25px' }}>Presidential Suite</i></div>
                        {/* {% if room.tag == 'p' %}
                <div><i style={{fontSize:'25px'}}>Presidential Suite</i></div>
                {% elif room.tag == 'e' %}
                <div><i style={{fontSize:'25px'}}>Executive Room</i></div>
                {% elif room.tag == 'd' %}
                <div><i style={{fontSize:'25px'}}>Deluxe Room</i></div>
                {% endif %} */}
                        <div className="room-flex-1">
                            <div className="room-image">
                                <img src='https://media-cdn.tripadvisor.com/media/photo-m/1280/13/70/2e/95/superior-room.jpg' alt='' />
                                <img src="" alt="" />
                                <div
                                    style={{ position: 'absolute', bottom: 0, right: 0, left: 0, backgroundColor: 'tomato', textAlign: 'center' }}>
                                    <p>2 Rooms Left</p>
                                    {/* {% if room.rooms_left == 1 %} */}
                                    {/* <p>{{room.rooms_left}} Room Left</p> */}
                                    {/* {% else %} */}
                                    {/* <p>{{room.rooms_left}} Rooms Left</p> */}
                                    {/* {% endif %} */}
                                </div>
                            </div>
                            <div className="room-features">
                                <p>Room Features & Amenities</p>
                                <ul className="room-features-ul">
                                    {/* {% for features in room.features.all %} */}
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    <li>Feature 1</li>
                                    {/* {% endfor %} */}
                                </ul>
                            </div>
                        </div>
                        <section className="booking-category">
                            <div className="custom-booking">
                                {/* {% if user.is_authenticated %} */}
                                <p><i>Use Coupon Code <i>jumbo_papabi</i> For 30% Discount</i></p>
                                <div>
                                    <p>Price GHC 50 <code>valid for 1 night per room</code></p>
                                </div>
                                <Link onClick={() => history.push('/checkout')} to='/checkout' className='book-room-button' data-room-slug='{{room.slug}}'>
                                    Proceed To Checkout
                                    </Link>

                                {/* {% else %}
                        <p><i>Login To Get A Free Coupon Code To Save 30%</i></p>
                        <div>
                            <p>Price GHC {{room.price}} <code>valid for 1 night per room</code></p>
                        </div>
                            <button>Login</button>
                        {% endif %} */}
                            </div>
                        </section>
                    </div>
                    {/* {% endif %} */}

                </div>
            </div>
        </>
    )
}

export default BookRoom
