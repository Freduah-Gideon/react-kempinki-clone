import React from 'react'
import './body.css' 
function Body() {
    return ( 
        <>
            <div class="hotel_info">
                <div class="hotel_info_1">
                    <p>Book With Confidence</p> 
                </div>
                <div class="hotel_info_2">
                    <p>Serving Since 1998</p>
                    <span>The Best Hotel In Ghana</span>
                    <div class="hotel_info_2_sub">
                        <p>Since 1998 Jumbo Has Become Ghana's Most Trustful And Recognized Hotel Ever To Exist
                        We Have Over 1000 Rooms Without Respect To Category And Also At The Most Affordable Price Ever.
                        From Five Star Rooms To Our Standard Rooms, Security, Comfortability And Affordability Is Our Main
                        Concern.
                        Book Your Stay To Have The Experience Of A Lifetime
            </p>
                    </div>
                </div>
            </div>
            <div class="gallery-small">
                <div class="gallery_small_after">
                    <p># Jumbo Gallery</p>
                    <i>Our Guests Always Enjoy The Experience Of A LifeTime In Our Hotel</i>
                </div>
                <div class="gallery_small_images_div">

                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" /><img
                        src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" /><img
                        src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" /><img
                        src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" /><img
                        src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                    <img src="{% static 'styles/room/media/room1.jpg' %}" alt="" />
                </div><br /><br />
                <div class="gallery_buttons">
                    <button class="btn-secondary"> <a href="{% url 'rooms:all-rooms' %}" style="text-decoration:none; color:black">View Gallery</a> </button>

                </div>

            </div>
        </>
    )
}

export default Body
