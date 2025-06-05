import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ProductDetail from './Pages/ProuctDetails'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Signin from './Pages/SignIn'
import { CartProvider } from './context/CartContext'


function App() {
 

  return (
    <CartProvider>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Singin" element={<Signin/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App