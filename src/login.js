// import { Link } from 'react-router-dom'
import './css/login.css'
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // The user is now signed in
            if (userCredential) {
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }
    };


        const routeChange = () => {
            let path = `/signup`;
            navigate(path);
        }
    return (
        <>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form">
                            <h2 class="titlee">LOGIN</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input
                                    className='ipemail'
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                            <input
                                className='ipassword '
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/* <input type="submit" value="Login" class="btn solid" /> */}
                            <button  className='btn solid' type='button'  onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>

                            <button class="btn transparent" id="sign-in-btn" onClick={routeChange} > SIGNUP</button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login