import './css/signup.css'
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      // it successfully created a new user with email and password
      if (auth) {
        navigate('/login')
      }
    })
      .catch(error => alert(error.message))
  };
  return (
    <>
      <body>
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="titlee">SIGN UP</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  {/* <input type="text" placeholder="E-mail" /> */}
                  <input
                    className='ipemail'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  {/* <input type="password" placeholder="Password" /> */}
                  <input
                    className='ipassword '
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <input type="submit" value="Login" class="btn solid" /> */}
                <button className='btn solid' type='submit' onClick={handleSignup}>SIGNUP</button>
              </form>
            </div>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
                {/* <button class="btn transparent" id="sign-up-btn">
              SIGNUP
            </button> */}
              </div>
              <img src="img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>New Here ?</h3>
                <p>
                  Welcome! To Our Web-Site. Please Create Your Account Here.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="img/register.svg" class="image" alt="" />
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Signup