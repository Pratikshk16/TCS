import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {
  useEffect(()=> {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      dealay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
      <Testimonial />
      <Footer /></div>
  )
}

export default App
