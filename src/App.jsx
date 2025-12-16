import './App.css'
import  Navbar  from "./components/Navbar/Navbar.jsx";
import ChooseUs from "./components/ChooseUs/chooseUs.jsx"
import Services from './components/Services/Services.jsx';
import { Toaster } from 'react-hot-toast'
import GetAQuote from './components/GetAQuote'
import Reviews from './components/Reviews.jsx';
import Hero from "./components/Hero.jsx";
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';

import AboutUs from './components/AboutUs/AboutUs.jsx';
import { MouseProvider } from './components/CursorAnimation/MouseContext.jsx';
import Cursor from './components/CursorAnimation/Cursor.jsx';


function App() {
  return (
    <MouseProvider>
      <Cursor />
      <>
        <Toaster position="top-center" />
        <Navbar/>
        
        <Hero/>
        <AboutUs/>
        <Services />
        <GetAQuote />
        <ChooseUs />
        <Reviews />
        <GetAQuote />
        <Faq />


      <Footer />
      <ContactUs/>
      



    </>

      
    </MouseProvider>

  )
}

export default App
