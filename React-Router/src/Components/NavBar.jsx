import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CardContext } from '../Context/CardContext';

function NavBar() {
  const {carditems} = useContext(CardContext)
  return (
    <nav className='flex justify-between items-center p-4 bg-green-400'>
       <Link to="/Shop">API Store</Link>
       <div className='flex gap-5 items-center'>
        <Link to="/Shop">Shop</Link>
        <Link to="/Card" className='relative'><FaShoppingCart size={25} />
        {carditems.length > 0 && (<span className='absolute -top-2 px-1 -right-2 text-xs bg-red-500 text-white rounded-full '>
        {carditems.length}</span>)}
        </Link>
        <Link>Signin</Link>
        <Link>Login</Link>
       </div>

    </nav>
  )
}

export default NavBar