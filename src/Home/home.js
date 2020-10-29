import React, {useEffect} from 'react'
import './home.css'
import Hero from './components/hero/hero.js'
import Info from './components/info/info.js'
import Gallery from './components/gallery/gallery.js'

function Home() {
    // useEffect(() => {
    //     return document.title='Kempinski Clone | Homepage'
    // },[])
    return (
        <div>
            <Hero />
            <Info />
            <Gallery />
        </div>
    )
}

export default Home
