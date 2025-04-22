import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Card from './Pages/Card'
import Checkout from './Pages/Checkout'
import ProuctDetails from './Pages/ProuctDetails'
import NotFound from './Pages/NotFound'
import { CardProvider } from './Context/CardContext'


function App() {
 

  return (
    <>
      <CardProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Product/:id" element={<ProuctDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </CardProvider>
      
    </>
  )
}

export default App
