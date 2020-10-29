import React from 'react'
import './form.css'
import { Link } from 'react-router-dom'
function Form() {
    return (
        <>
            <div className="hero_form_div compulsory_form">
                <form action="" className="hero_form" method="POST" >
                    <label for="check_in" className="check_label">
                        <label for="check_in">
                            <p>Check In Date</p>
                            <input type="date" className="check input" name="check_in" id="check_in" />
                        </label>
                    </label>
                    <label for="check_out">
                        <p>Check Out Date</p>
                        <input type="date" className="check input" id='check_out' name="check_out" />
                    </label>
                    <label for="nor">
                        <p>Number Of Rooms</p>
                        <input type="number" min="1" value="1" required placeholder="Number Of Rooms" className="check input" id='nor'
                            name="nor" />
                    </label>
                    <label for="noar">
                        <p>Number Of Adult Rooms</p>
                        <select name="noar" id="" className="check input">
                            <option selected value="">Number Of Adult Rooms</option>
                            <option value="1">1 Adult Room</option>
                            <option value="2">2 Adult Rooms</option>
                            <option value="3">3 Adult Rooms</option>
                            <option value="4">4 Adult Rooms</option>
                            <option value="5">5 Adult Rooms</option>
                            <option value="6">6 Adult Rooms</option>
                            <option value="7">7 Adult Rooms</option>
                            <option value="8">8 Adult Rooms</option>
                            <option value="9">9 Adult Rooms</option>
                            <option value="10">10 Adult Rooms</option>
                            <option value="11">11 Adult Rooms</option>
                            <option value="12">12 Adult Rooms</option>
                        </select>
                    </label>
                    <label for="noar">
                        <p>Number Of Children Rooms</p>
                        <select name="nocr" id="" className="check input">
                            <option value="">Number Of Children Rooms</option>
                            <option value="1">1 Children Room</option>
                            <option value="2">2 Children Rooms</option>
                            <option value="3">3 Children Rooms</option>
                            <option value="4">4 Children Rooms</option>
                            <option value="5">5 Children Rooms</option>
                            <option value="6">6 Children Rooms</option>
                            <option value="7">7 Children Rooms</option>
                            <option value="8">8 Children Rooms</option>
                            <option value="9">9 Children Rooms</option>
                            <option value="10">10 Children Rooms</option>
                            <option value="11">11 Children Rooms</option>
                            <option value="12">12 Children Rooms</option>
                        </select>
                    </label>
                    <Link to='/allrooms'>
                    <button className="btn submit-lg">Search</button>
                    </Link>

                </form>
            </div>

        </>
    )
}

export default Form
