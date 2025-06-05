import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './Pages/Cart'
import ProductDetail from './Pages/ProuctDetails'
import Checkout from './Pages/Checkout'
import Shop from './Pages/Shop'
import NotFound from './pages/NotFound'
import { CartProvider } from './context/CartContext'
import Login from './Pages/Login'
import Signin from './Pages/SignIn'
function App() {
 

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
           <Route path="/Singin" element={<Signin/>}/>
        <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App