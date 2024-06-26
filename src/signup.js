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
        navigate('/otp')
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
                <button className='btn' type='submit' onClick={handleSignup}>SIGNUP</button>
              </form>
            </div>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Welcome! To Our Web-Site. Please Create Your Account Here.
                </p>
              </div>
            </div>

          </div>
        </div>
      </body>
    </>
  )
}

export default Signup