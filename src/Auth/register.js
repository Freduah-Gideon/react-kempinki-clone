import React,{useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './index.css'
function Register() {
    const history = useHistory()
    // useEffect(() => {
    //     document.title='Kempinksi Clone | Register'

    // }, [])
    return (
            <form action="" className="auth-form" id='register-form' onSubmit="auth(event)">
                <p className="form-error hide" id="register-form-error"> <span className="error-in" id='register-error-in'></span> <span
                    style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
                    onclick="this.parentElement.classList.add('hide')">&times;</span></p>
                <input type="email" name='email' id='email' placeholder="Email Address" required />
                <input type="text" name="first_name" required id='first_name' placeholder="First Name" />
                <input type="password" name="password" required id='password' placeholder="Password" />
                <input type="password" name="password2" id='confirm-password' required placeholder="Confirm Password" />
                <div class="submit-button-div">
                    <button class="submit-button">Register</button><br />
                    <Link to='/auth/login' onClick={()=>history.push('/auth/login/')}>
                    <p style={{ color: 'green' }}>Already Have An Account ?<a href="#login" onclick="setTimeout(toggleAuthForms,'100')"
                        class="auth-notify"> Login</a></p>
                        </Link>
                </div>
                <br /><br />
            </form>
    )
}

export default Register
