import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from "./components/Navbar/Navbar.jsx";
import GetAQuote from './components/GetAQuote'
import Reviews from './components/Reviews.jsx';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <GetAQuote />
      <Reviews />
      {/* <Hero /> */}
    </>
  )
}

export default App
