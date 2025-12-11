import './App.css'
import  Navbar  from "./components/Navbar/Navbar.jsx";
import { Toaster } from 'react-hot-toast'
import GetAQuote from './components/GetAQuote'
import Reviews from './components/Reviews.jsx';

import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar/>
      <Hero/>
      <Reviews />
      <GetAQuote />
      {/* <Hero /> */}

    </>
  )
}

export default App
