import './App.css'
import { Toaster } from 'react-hot-toast'

import GetAQuote from './components/GetAQuote'


function App() {
  return (
    <>
      <Toaster position="top-center" />
      
      <GetAQuote />
      
    </>
  )
}

export default App
