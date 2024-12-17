import React from 'react'
import Navbar from '../components/Navbar'

function Login() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto md:h-[649px] bg-gray-950 flex items-center justify-center flex-col gap-4 px-4 py-10'>
        <h1 className='text-xl md:text-2xl text-white text-center'>What's your phone number or <br className='hidden md:block' /> email?</h1>
        <input className='w-full max-w-[330px] h-[50px] rounded-lg px-4' type='text' placeholder='Enter phone number or email' />
        <button className='w-full max-w-[330px] h-[50px] bg-gray-600 rounded-lg text-white'>Continue</button>
        <p className='text-xl md:text-2xl text-white'>---------------or----------------</p>
        <button className='w-full max-w-[330px] h-[50px] bg-gray-600 rounded-lg text-white'>Continue with Google</button>
        <button className='w-full max-w-[330px] h-[50px] bg-gray-600 rounded-lg text-white'>Continue with Apple</button>
        <p className='text-sm md:text-base text-center text-white mt-4'>
          By proceeding, you consent to get calls, WhatsApp or <br className='hidden md:block' />
          SMS/RCS messages, including by automated means, <br className='hidden md:block' />
          from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}

export default Login
