import React from 'react'
import { useState } from 'react'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)};
  return (
    <>
    <div className='flex flex-col gap-4 mt-10 w-1/2 mx-auto border-2 border-gray-300 py-10 px-4 rounded-md shadow-lg'>
    <h2 className='text-center text-2xl font-semibold'>Login</h2>
    <p className='text-center'>Login to your account</p>
    <p className='text-center'>or <a href="/Singin" className='text-blue-500'>create a new account</a></p>
    <p className='text-center'>Login with your email and password</p>
    <p className='text-center'>If you don't have an account, please create one</p>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-1/2 mx-auto'>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-300 py-2 px-2 rounded-md' />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 border-gray-300 py-2 px-2 rounded-md' />
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md'>Login</button>
    </form>
    </div>
    
    </>
   
  )
}

export default Login