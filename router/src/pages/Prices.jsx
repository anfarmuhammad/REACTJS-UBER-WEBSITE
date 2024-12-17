import React from 'react'
import Navbar from '../components/Navbar'


function Prices() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto md:h-[369px] bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg)] bg-cover flex items-center justify-center md:justify-start'>
        <h1 className='text-3xl md:text-5xl mt-[120px] md:mt-[180px] ml-0 md:ml-[150px] font-bold text-white text-center md:text-left'>About us</h1>
      </div>
      <div className='bg-gray-950 h-auto  py-10 px-6 md:py-[40px] md:px-[150px] md:mt-[px]'>
        <h1 className='text-2xl md:text-4xl font-bold text-white text-center md:text-left'>
          We reimagine the way the world moves for <br className='hidden md:block' /> the better
        </h1>
        <br />
        <p className='text-gray-300 font-bold text-sm md:text-base text-center md:text-left'>
          Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed <br className='hidden md:block' />
          each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places <br className='hidden md:block' />
          you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire <br className='hidden md:block' />
          world. In real time. At the incredible speed of now.
        </p>
      </div>
    </div>
  )
}

export default Prices
