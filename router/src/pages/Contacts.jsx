import React from 'react'
import Navbar from '../components/Navbar'

function Contacts() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto md:h-[649px] bg-gray-950 flex flex-col md:flex-row'>
        
        <div className='w-full md:w-[50%] h-auto md:h-full flex justify-center flex-col px-6 md:pl-[130px] py-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-white text-center md:text-left'>
            Drive when you<br />
            want, make what <br />
            you need
          </h1>
          <br />
          <p className='text-white text-center md:text-left'>
            Earn on your own schedule.
          </p>
          <br />
          <div className='flex flex-col items-center md:items-start'>
            <button className='w-[150px] h-[45px] bg-white text-gray-950 rounded-lg'>Get started</button>
            <p className='mt-3 underline text-white'>Already have an account? Sign in</p>
          </div>
        </div>

        <div className='w-full md:w-[50%] h-auto md:h-full flex items-center justify-center px-6 md:pl-[60px]'>
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png"
            alt=""
            className='w-full max-w-[300px] md:max-w-full'
          />
        </div>
      </div>

    </div>
  )
}

export default Contacts
