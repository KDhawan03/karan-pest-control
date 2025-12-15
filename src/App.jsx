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

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar/>
      {/* <Hero/> */}
      
      <Hero/>
      <Services />
      <ChooseUs />
      <GetAQuote />
      <Reviews />

      <Faq />

      <Footer />
      <ContactUs/>
      



    </>
  )
}

export default App
