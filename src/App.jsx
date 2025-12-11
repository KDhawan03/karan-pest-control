import './App.css'
import  Navbar  from "./components/Navbar/Navbar.jsx";
import { Toaster } from 'react-hot-toast'
import GetAQuote from './components/GetAQuote'
import Reviews from './components/Reviews.jsx';
import Hero from "./components/Hero.jsx";
import Faq from './components/Faq.jsx';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar/>
      <Hero/>
      <GetAQuote />
      <Reviews />
      <Faq />
      {/* <Hero /> */}

    </>
  )
}

export default App
