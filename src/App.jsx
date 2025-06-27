// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
// import Section1 from './components/home/section1.jsx'
// import Section2 from './components/home/section2.jsx'
// import Section3 from './components/home/section3.jsx'
// import Section4 from './components/home/section4.jsx'
// import Footer from './components/home/footer.jsx'
import Home from './pages/home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
