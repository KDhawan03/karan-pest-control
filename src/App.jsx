import './App.css'
import  Navbar  from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
import ChooseUs from "./components/ChooseUs/chooseUs.jsx"
import { Toaster } from 'react-hot-toast'
import GetAQuote from './components/GetAQuote'
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar/>
      {/* <Hero/> */}
      
      <Hero/>
      
      <ChooseUs />
      <GetAQuote />

    </>
  )
}

export default App
