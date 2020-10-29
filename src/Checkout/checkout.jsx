import React from 'react'
import './checkout.css'
function Checkout() {
    return (
        <div className='container-fluid'>
            <div className="room-container confirm-container" style={{ marginTop: '110px' }}>
                <div className="reservation">
                    <p><i>Your Reservation</i></p>
                    <div className="reservation-image-div">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/70/2e/95/superior-room.jpg" alt="" />
                    </div>
                </div>
                <div className="reservation-other">
                    <ul>
                    <h3>Superior Room</h3>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                        <li>Feature 1</li>
                    </ul>
                    <div>

                    <p>Total Price GHC 50
            <h6>Tax Inclusive</h6>
                    </p>
                    <p>Duration : 2 nights</p>
                    </div>
                    {/* {% for features in booking.room.features.all %}
                <li>{{features}}</li>
                {% endfor %}
                <p>Total Price GHC {{booking.get_price}}
                <h6>Tax Inclusive</h6>
                </p>
                {% if booking.get_duration == 1 %}
                <p>Duration: {{booking.get_duration}} night</p>
                {% else %}
                <p>Duration: {{booking.get_duration}} nights</p>
                {% endif %} */}
                </div>
            </div>

            {/* <div className="room-container" style={{ boxShadow: 'none' }}> */}
                <div className="checkout-payment">
                    <form action="" onsubmit="first_checkout(event)" method="POST">
                        <div className="checkout-form">
                            <label for="title">
                                <p>First Name:<span className="required-field-span">*</span></p>
                                <input type='text' name='' />
                                {/* {{form.first_name}} */}
                            </label>
                            <label for="title">
                                <p>Last Name:<span className="required-field-span">*</span></p>
                                <input type='text' name='' />
                                {/* {{form.last_name}} */}
                            </label>
                            <label for="title">
                                <p>Address 1:<span className="required-field-span">*</span></p>
                                <input type='text' name='' />
                                {/* {{form.address1}} */}
                            </label>
                            <label for="title">
                                <p>Address 2:<span className="required-field-span">*</span></p>
                                <input type='text' name='' />
                                {/* {{form.address2}} */}
                            </label>
                            <label for="title">
                                <p>Mobile<span className="required-field-span">*</span></p>
                                <input type='text' name='' />
                                {/* {{form.phone}} */}
                            </label>
                            <label for="title">
                                <p>Email<span className="required-field-span">*</span></p>
                                <input type="email" value="{{user.email}}" required name="email" />
                            </label><br /><br />

                        </div>
                        <div className="payment-form">
                            <p>Total Payment GHC 50</p>
                            <label for="card_type">
                                <p>Payment Option:<span>*</span></p>
                                <input type='text' name='' />
                                {/* {{form.payment_option}} */}
                            </label>
                            <br /><br /><br />
                            <div style={{ textAlign: 'center' }}>
                                <button type="submit">Proceed To Payment</button>
                            </div>
                        </div>

                    </form>
                </div>
                <br/><br/>            <br/><br/>
            </div>

        // </div>

    )
}

export default Checkout
