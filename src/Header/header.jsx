import React from 'react'
import './header.css'
import logo from './images/logo.svg'
import { Link, useHistory } from 'react-router-dom'
function Header() {
    let history = useHistory()
    const toggleOverview = ()=>{
        try{
            const overview = document.querySelector('.overview')
            overview.classList.toggle('hide')
        }
        catch{
            console.info('Cannot Toggle The Navbar ')
        }
    }
    return (
        <header>
            <div className="logo_div">
                <div className="text" onClick={()=>toggleOverview()} style={{ cursor: 'pointer' }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link to='/'>
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>
            <div className="header_middle">
                <p>KEMPINSKI HOTEL GOLD COAST CITY ACCRA</p>
                <p className='header_line'>Accra, Ghana</p>
            </div>
            <div className="header_buttons">

                <div className='header_buttons_top'>
                    <p>
                    KEMPINSKI HOTELS 
                    </p>
                </div>
                <Link onClick={() => history.push('/auth/register')} to='/auth/register' className='primary-link'>
                    Register
                    </Link>
                <Link onClick={() => history.push('/auth/login')} to='/auth/login' className='primary-link'>
                    Login
                </Link>

            </div>
        </header>


    )
}

export default Header
