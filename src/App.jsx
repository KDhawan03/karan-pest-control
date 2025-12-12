import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from "./components/Navbar/Navbar.jsx";
import GetAQuote from './components/GetAQuote'

function App() {
  return (
    <MouseProvider>
      <Cursor />
      <>
        <Toaster position="top-center" />
        <Navbar/>
        
        <Hero/>
        <Services />
        <ChooseUs />
        <Reviews />

        <Faq />

        <GetAQuote />
      </>
    </MouseProvider>
  )
}

export default App
