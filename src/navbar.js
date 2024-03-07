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
     <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} style={{ height: 100, width: 200 }} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                SHOPS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
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
                  <Link to="/signup" className="nav-link">
                    SIGNUP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    LOGIN
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
