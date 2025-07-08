import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Auth from "./pages/auth";
import Profile from "./pages/profile";

function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/auth", "/profile"];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>              
  );
}

export default App;
