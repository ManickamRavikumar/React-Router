import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='text-center py-10'>
      <h1 className='text-4xl font-bold'>Welcome to Shopping!</h1>
      <p className='mt-4 text-gray-600'>Shop your favorite products here!</p>
       <Link to='/shop'>Click Here</Link>
    </div>
  )
}

export default Home