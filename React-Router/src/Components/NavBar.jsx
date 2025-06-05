import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar() {
  const { cartItems } = useContext(CartContext)
  return (
    <nav className='flex justify-between items-center p-4 shadow-md'>
      <Link to='/' className='font-bold text-blue-600 dark:text-sky-400'>Shopping</Link>

      <div className='flex items-center gap-4'>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart' className='relative'>
          <FiShoppingCart size={20} />
          {cartItems.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
              {cartItems.length}
            </span>
          )}
        </Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar