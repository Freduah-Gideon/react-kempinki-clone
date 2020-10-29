import React, { Component } from 'react'
import Header from './Header/header.jsx'
import Footer from './Footer/footer.js'
import Home from './Home/home.js'
import Register from './Auth/register.js'
import Login from './Auth/login.js'
import Location from './Location/location.jsx'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookRoom from './BookRoom/bookroom.jsx'
import Checkout from './Checkout/checkout.jsx'
import Allrooms from './Allrooms/allrooms.jsx'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/location' component={Location} />
                    <Route path='/auth/register' component={Register} />
                    <Route path='/auth/login' component={Login} />
                    <Route path='/allrooms' component={Allrooms} />
                    <Route path='/bookroom' component={BookRoom} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/' component={Home} />

                </Switch>
                <Footer />
            </Router>
        )
    }
}
