import React from 'react'
import { useState } from 'react'

function Signin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, confirmPassword);
    };
  return (
    <>
     <div className="container mx-auto mt-10 flex flex-col gap-4 w-1/2 mx-auto border-2 border-gray-300 py-10 px-4 rounded-md shadow-lg">
    <h2 className='text-center text-2xl font-semibold'>Singin</h2>
    <p className='text-center'>Create a new account</p>
    <p className='text-center'>or <a href="/Login" className='text-blue-500'>login to your account</a></p>
    <p className='text-center'>Singin with your email and password</p>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-1/2 mx-auto'>
        <input type="email" placeholder='Email'
         value={email} onChange={(e) => setEmail(e.target.value)} 
         className='border-2 border-gray-300 py-2 px-2 rounded-md' />

        <input type="password" placeholder='Password'
         value={password} onChange={(e) => setPassword(e.target.value)}
         className='border-2 border-gray-300 py-2 px-2 rounded-md' />

        <input type="password" placeholder='Confirm Password' 
        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
         className='border-2 border-gray-300 py-2 px-2 rounded-md' />
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md'>Singin</button>

    </form>
    </div>
    </>
    

  )
}

export default Signin