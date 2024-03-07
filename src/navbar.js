import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Update this line

import logo from './images/logo.png';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase listener to check if user is logged in
    const auth = getAuth(); // Update this line
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe the listener when the component is unmounted
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth(); // Update this line
      await signOut(auth); // Update this line
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <>
      <nav>
        <ul className="navbar">
          <img src={logo} style={{ height: 100, width: 200 }} alt="logo" />
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/news">NEWS</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop">SHOPS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">CONTACT</Link>
          </li>
          {user ? (
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signup">SIGNUP</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">LOGIN</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
