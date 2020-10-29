import React,{useEffect} from 'react'
import './index.css'
import { Link, useHistory } from 'react-router-dom'
function Login() {
    // useEffect(() => {
    //     document.title='Kempinksi Clone |Login'

    // }, [])
    const history = useHistory()
    return (
            <form action="" className="auth-form" id='login-form' onSubmit="auth(event)">
                <p className="form-error hide" id="login-form-error"> <span className="error-in" id='login-error-in'></span> <span
                    style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
                    onclick="this.parentElement.classList.add('hide')">&times;</span></p>
                <input type="email" name="email" required id='first_name' placeholder="Email Address " />
                <input type="password" name="password" required id='password' placeholder="Password" />
                <div className="submit-button-div">
                    <Link to='/' onClick={()=>history.push('/')}>
                    <button className="submit-button">Login</button><br />
                    </Link>
                       
                        <a href="#" className="auth-notify">Forgot Password?</a>
                </div>
                <br /><br />
            </form>
    )
}

export default Login
