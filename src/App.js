import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './home';
import About from './about';
import Projects from './projects';
import News from './news';
import Shop from './shop';
import Contact from './contact';
import Signup from './signup';
import Login from './login';
import Navbar from  './navbar';

function App() {
  return (

    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App