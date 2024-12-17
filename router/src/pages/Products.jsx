import React from 'react'
import Navbar from '../components/Navbar'

function Products() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto md:h-[649px] bg-gray-950 flex flex-col md:flex-row'>
      
        <div className='w-full md:w-[50%] h-auto md:h-full flex justify-center flex-col px-6 md:pl-[130px] py-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-white text-center md:text-left'>
            The best of Uber<br />
            for your business
          </h1>
          <br />
          <p className='text-white text-center md:text-left'>
            Uber for Business gives your organization more control, <br />
            deeper insights, and features built for enterprise users. <br />
            Manage and track business travel, meal programs, and more <br />
            on one dashboard.
          </p>
          <br />
          <div className='flex flex-col items-center md:items-start'>
            <button className='w-[150px] h-[45px] bg-white text-gray-950 rounded-lg'>How to get started</button>
            <p className='mt-3 underline text-white'>Check out our solutions</p>
          </div>
        </div>

        <div className='w-full md:w-[50%] h-auto md:h-full flex items-center justify-center px-6 md:pl-[60px]'>
          <img 
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg"
            alt=""
            className='w-full max-w-[300px] md:max-w-[90%]'
          />
        </div>
      </div>


    </div>
  )
}

export default Products
