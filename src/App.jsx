// import { useState } from 'react'
import ShowingNavbar from '../src/showingnavbar.jsx'
import Navbar from './components/navbar.jsx'
import Home from '../src/pages/home.jsx'
import Login from '../src/pages/login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Router>
      <ShowingNavbar>
        <Navbar/>
      </ShowingNavbar>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
