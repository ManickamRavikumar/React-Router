import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProuctDetails'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Signin from './pages/SignIn'
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