import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from "./components/Navbar/Navbar.jsx";
import GetAQuote from './components/GetAQuote'

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <GetAQuote />
      {/* <Hero /> */}
    </>
  )
}

export default App
