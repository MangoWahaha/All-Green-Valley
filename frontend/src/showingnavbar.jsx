
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ShowingNavbar = ({children}) => {
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if(location.pathname === '/login') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])

    return (
        <>{showNavBar && children}</>
    )
}

export default ShowingNavbar;