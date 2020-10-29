import React from 'react'
import './gallery.css'
import photo from './photo.jpg'
function Gallery() {
    return (
        <>
            <div class="gallery-small">
                <div class="gallery_small_after">
                    <p># Jumbo Gallery</p>
                    <i>Our Guests Always Enjoy The Experience Of A LifeTime In Our Hotel</i>
                </div>
                <div class="gallery_small_images_div">

                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                </div><br /><br />
                <div class="gallery_buttons">
                    <button class="btn-secondary"> <a href="{% url 'rooms:all-rooms' %}" style={{ textDecoration: 'none', color: 'black' }}>View Gallery</a> </button>

                </div>

            </div>
        </>
    )
}

export default Gallery
