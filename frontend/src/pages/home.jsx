// import '../index.css'
import Section1 from '../components/home/section1.jsx'
import Section2 from '../components/home/section2.jsx'
import Section3 from '../components/home/section3.jsx'
import Section4 from '../components/home/section4.jsx'
import Footer from '../components/footer.jsx'
import { useEffect, useState } from 'react'
  
function Home() {
  // const [count, setCount] = useState(0)
  const [_userdata, usersetdata] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Haven't Login");
      return;
    }

    fetch("/api/data-tokens", {
      headers : {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.json())
    .then((_userdata) => {usersetdata(_userdata);

        if (import.meta.env.MODE === 'development') {
          console.log("Backend Data:", _userdata);
      }}
    )
    .catch((err) => console.log("Failed to fetch:", err));
  }, []);
  
  return (
    <>
      {/* {import.meta.env.MODE === 'development' && data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )} */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
}

export default Home;
